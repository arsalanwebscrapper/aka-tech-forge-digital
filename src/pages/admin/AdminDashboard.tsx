
import React, { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { 
  FileText, 
  Briefcase, 
  Users, 
  BarChart3, 
  Settings,
  LogOut,
  Plus,
  Edit
} from 'lucide-react';

interface BlogStats {
  total: number;
  published: number;
  drafts: number;
  archived: number;
}

interface RecentBlog {
  id: string;
  title: string;
  status: string;
  created_at: string;
}

const AdminDashboard = () => {
  const { user, profile, logout } = useAuth();
  const navigate = useNavigate();
  const [blogStats, setBlogStats] = useState<BlogStats>({ total: 0, published: 0, drafts: 0, archived: 0 });
  const [recentBlogs, setRecentBlogs] = useState<RecentBlog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      // Fetch blog statistics
      const { data: blogs, error: blogsError } = await supabase
        .from('blogs')
        .select('status');

      if (blogsError) throw blogsError;

      const stats = blogs.reduce((acc, blog) => {
        acc.total++;
        if (blog.status === 'published') acc.published++;
        else if (blog.status === 'draft') acc.drafts++;
        else if (blog.status === 'archived') acc.archived++;
        return acc;
      }, { total: 0, published: 0, drafts: 0, archived: 0 });

      setBlogStats(stats);

      // Fetch recent blogs
      const { data: recent, error: recentError } = await supabase
        .from('blogs')
        .select('id, title, status, created_at')
        .order('created_at', { ascending: false })
        .limit(5);

      if (recentError) throw recentError;
      setRecentBlogs(recent || []);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  const stats = [
    { title: 'Total Blogs', value: blogStats.total.toString(), icon: FileText, color: 'bg-blue-500' },
    { title: 'Published', value: blogStats.published.toString(), icon: BarChart3, color: 'bg-green-500' },
    { title: 'Drafts', value: blogStats.drafts.toString(), icon: Edit, color: 'bg-yellow-500' },
    { title: 'Archived', value: blogStats.archived.toString(), icon: Users, color: 'bg-gray-500' },
  ];

  const quickActions = [
    { 
      title: 'Write New Blog', 
      description: 'Create and publish a new blog post',
      icon: Plus,
      action: () => navigate('/admin/blogs/new'),
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    { 
      title: 'Manage Blogs', 
      description: 'Edit, update, or delete existing blogs',
      icon: Edit,
      action: () => navigate('/admin/blogs'),
      color: 'bg-green-600 hover:bg-green-700'
    },
  ];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-sm text-gray-600">Welcome back, {profile?.name || user?.email}</p>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
              <Button variant="outline" size="sm" onClick={handleLogout}>
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <div className={`p-2 rounded-lg ${stat.color}`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {quickActions.map((action, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className={`h-auto p-6 ${action.color} text-white border-0 hover:scale-105 transition-transform`}
                  onClick={action.action}
                >
                  <div className="flex items-start space-x-4 w-full">
                    <action.icon className="w-6 h-6 flex-shrink-0 mt-1" />
                    <div className="text-left">
                      <h3 className="font-semibold">{action.title}</h3>
                      <p className="text-sm opacity-90 mt-1">{action.description}</p>
                    </div>
                  </div>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Blog Posts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentBlogs.length > 0 ? (
                recentBlogs.map((blog) => (
                  <div key={blog.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-medium">{blog.title}</h4>
                      <p className="text-sm text-gray-600">
                        {new Date(blog.created_at).toLocaleDateString()}
                      </p>
                    </div>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      blog.status === 'published' 
                        ? 'bg-green-100 text-green-800' 
                        : blog.status === 'draft'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {blog.status.charAt(0).toUpperCase() + blog.status.slice(1)}
                    </span>
                  </div>
                ))
              ) : (
                <div className="text-center py-8 text-gray-500">
                  <FileText className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>No blog posts yet. Create your first blog post!</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default AdminDashboard;
