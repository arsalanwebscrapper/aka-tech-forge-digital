
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import { 
  Plus, 
  Search, 
  Edit, 
  Trash2, 
  Eye, 
  Calendar,
  User,
  Tag,
  ArrowLeft,
  FileText
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  author: string;
  publishDate: string;
  status: 'published' | 'draft' | 'archived';
  tags: string[];
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  readTime: number;
}

const BlogManagement = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const navigate = useNavigate();
  const { toast } = useToast();

  // Mock data - replace with actual API calls
  useEffect(() => {
    const mockBlogs: BlogPost[] = [
      {
        id: '1',
        title: 'The Future of AI in Software Development',
        slug: 'future-ai-software-development',
        excerpt: 'Exploring how artificial intelligence is revolutionizing the way we build software applications.',
        content: 'Full content here...',
        featuredImage: '/api/placeholder/400/250',
        author: 'John Doe',
        publishDate: '2024-01-15',
        status: 'published',
        tags: ['AI', 'Software Development', 'Technology'],
        seoTitle: 'AI in Software Development: Future Trends & Impact',
        seoDescription: 'Discover how AI is transforming software development with cutting-edge tools and methodologies.',
        keywords: ['AI software development', 'artificial intelligence', 'programming'],
        readTime: 8
      },
      {
        id: '2',
        title: 'Blockchain Technology: Beyond Cryptocurrency',
        slug: 'blockchain-beyond-cryptocurrency',
        excerpt: 'Understanding the diverse applications of blockchain technology in various industries.',
        content: 'Full content here...',
        featuredImage: '/api/placeholder/400/250',
        author: 'Jane Smith',
        publishDate: '2024-01-12',
        status: 'draft',
        tags: ['Blockchain', 'Technology', 'Innovation'],
        seoTitle: 'Blockchain Applications Beyond Crypto | AKACorpTech',
        seoDescription: 'Explore blockchain use cases in supply chain, healthcare, and more.',
        keywords: ['blockchain applications', 'distributed ledger', 'smart contracts'],
        readTime: 6
      },
      {
        id: '3',
        title: 'Cloud Computing Best Practices for Startups',
        slug: 'cloud-computing-startups',
        excerpt: 'Essential cloud strategies every startup should implement for scalable growth.',
        content: 'Full content here...',
        featuredImage: '/api/placeholder/400/250',
        author: 'Mike Johnson',
        publishDate: '2024-01-10',
        status: 'published',
        tags: ['Cloud Computing', 'Startups', 'DevOps'],
        seoTitle: 'Cloud Computing Guide for Startups | Best Practices',
        seoDescription: 'Learn essential cloud computing strategies for startup success.',
        keywords: ['cloud computing startups', 'AWS', 'scalable architecture'],
        readTime: 10
      }
    ];
    setBlogs(mockBlogs);
  }, []);

  const filteredBlogs = blogs.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         blog.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesStatus = filterStatus === 'all' || blog.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const handleDelete = (id: string) => {
    setBlogs(blogs.filter(blog => blog.id !== id));
    toast({
      title: "Blog Deleted",
      description: "The blog post has been deleted successfully.",
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published': return 'bg-green-100 text-green-800';
      case 'draft': return 'bg-yellow-100 text-yellow-800';
      case 'archived': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => navigate('/admin')}
                className="mr-4"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Dashboard
              </Button>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Blog Management</h1>
                <p className="text-sm text-gray-600">Manage your blog posts and content</p>
              </div>
            </div>
            <Button 
              onClick={() => navigate('/admin/blogs/new')}
              className="bg-orange-500 hover:bg-orange-600"
            >
              <Plus className="w-4 h-4 mr-2" />
              New Blog Post
            </Button>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search blogs by title or tags..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="flex gap-4">
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <option value="all">All Status</option>
                  <option value="published">Published</option>
                  <option value="draft">Draft</option>
                  <option value="archived">Archived</option>
                </select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-green-600">{blogs.filter(b => b.status === 'published').length}</p>
                <p className="text-sm text-gray-600">Published</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-yellow-600">{blogs.filter(b => b.status === 'draft').length}</p>
                <p className="text-sm text-gray-600">Drafts</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-600">{blogs.filter(b => b.status === 'archived').length}</p>
                <p className="text-sm text-gray-600">Archived</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-600">{blogs.length}</p>
                <p className="text-sm text-gray-600">Total Posts</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Blog List */}
        <div className="space-y-6">
          {filteredBlogs.map((blog) => (
            <Card key={blog.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Featured Image */}
                  <div className="lg:w-48 flex-shrink-0">
                    <img
                      src={blog.featuredImage}
                      alt={blog.title}
                      className="w-full h-32 lg:h-24 object-cover rounded-lg"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-semibold text-gray-900 hover:text-blue-600 cursor-pointer">
                        {blog.title}
                      </h3>
                      <Badge className={getStatusColor(blog.status)}>
                        {blog.status.charAt(0).toUpperCase() + blog.status.slice(1)}
                      </Badge>
                    </div>

                    <p className="text-gray-600 mb-3 line-clamp-2">{blog.excerpt}</p>

                    {/* Meta Info */}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {blog.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(blog.publishDate).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <Eye className="w-4 h-4 mr-1" />
                        {blog.readTime} min read
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {blog.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          <Tag className="w-3 h-3 mr-1" />
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => navigate(`/admin/blogs/edit/${blog.id}`)}
                      >
                        <Edit className="w-4 h-4 mr-2" />
                        Edit
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(`/blog/${blog.slug}`, '_blank')}
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        Preview
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDelete(blog.id)}
                        className="text-red-600 hover:text-red-700 hover:bg-red-50"
                      >
                        <Trash2 className="w-4 h-4 mr-2" />
                        Delete
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredBlogs.length === 0 && (
          <Card>
            <CardContent className="p-12 text-center">
              <div className="text-gray-400 mb-4">
                <FileText className="w-12 h-12 mx-auto" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No blog posts found</h3>
              <p className="text-gray-600 mb-4">
                {searchTerm || filterStatus !== 'all' 
                  ? 'Try adjusting your search or filter criteria.' 
                  : 'Get started by creating your first blog post.'
                }
              </p>
              {!searchTerm && filterStatus === 'all' && (
                <Button onClick={() => navigate('/admin/blogs/new')}>
                  <Plus className="w-4 h-4 mr-2" />
                  Create Your First Blog Post
                </Button>
              )}
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  );
};

export default BlogManagement;
