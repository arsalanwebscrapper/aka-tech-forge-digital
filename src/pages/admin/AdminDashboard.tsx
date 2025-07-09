
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
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

const AdminDashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const stats = [
    { title: 'Total Blogs', value: '24', icon: FileText, color: 'bg-blue-500' },
    { title: 'Portfolio Items', value: '18', icon: Briefcase, color: 'bg-green-500' },
    { title: 'Active Projects', value: '12', icon: BarChart3, color: 'bg-orange-500' },
    { title: 'Team Members', value: '50', icon: Users, color: 'bg-purple-500' },
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
    { 
      title: 'Add Portfolio Item', 
      description: 'Showcase your latest project',
      icon: Plus,
      action: () => navigate('/admin/portfolio/new'),
      color: 'bg-orange-600 hover:bg-orange-700'
    },
    { 
      title: 'Manage Portfolio', 
      description: 'Update your portfolio showcase',
      icon: Briefcase,
      action: () => navigate('/admin/portfolio'),
      color: 'bg-purple-600 hover:bg-purple-700'
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-sm text-gray-600">Welcome back, {user?.name}</p>
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Recent Blog Posts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { title: 'AI Trends in 2024', date: '2 days ago', status: 'Published' },
                  { title: 'Blockchain Revolution', date: '5 days ago', status: 'Draft' },
                  { title: 'Cloud Computing Guide', date: '1 week ago', status: 'Published' },
                ].map((post, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-medium">{post.title}</h4>
                      <p className="text-sm text-gray-600">{post.date}</p>
                    </div>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      post.status === 'Published' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {post.status}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Portfolio Updates</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { title: 'AI-Powered CRM', date: '3 days ago', type: 'Web App' },
                  { title: 'Blockchain Voting', date: '1 week ago', type: 'Blockchain' },
                  { title: 'E-commerce Platform', date: '2 weeks ago', type: 'E-commerce' },
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-medium">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.date}</p>
                    </div>
                    <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">
                      {item.type}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
