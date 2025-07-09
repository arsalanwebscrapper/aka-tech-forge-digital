
import React, { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { 
  Mail, 
  User, 
  Calendar, 
  Service, 
  MessageSquare,
  ArrowLeft,
  Eye,
  RefreshCw
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  service: string;
  message: string;
  created_at: string;
  status: 'read' | 'unread';
}

const ContactMessages = () => {
  const { user, profile } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedMessage, setSelectedMessage] = useState<ContactMessage | null>(null);

  useEffect(() => {
    if (!user || profile?.role !== 'admin') {
      navigate('/login');
      return;
    }
    fetchMessages();
  }, [user, profile, navigate]);

  const fetchMessages = async () => {
    try {
      const { data, error } = await supabase
        .from('contact_messages')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setMessages(data || []);
    } catch (error) {
      console.error('Error fetching messages:', error);
      toast({
        title: "Error",
        description: "Failed to fetch contact messages.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const markAsRead = async (messageId: string) => {
    try {
      const { error } = await supabase
        .from('contact_messages')
        .update({ status: 'read' })
        .eq('id', messageId);

      if (error) throw error;

      setMessages(prev => prev.map(msg => 
        msg.id === messageId ? { ...msg, status: 'read' as const } : msg
      ));

      toast({
        title: "Success",
        description: "Message marked as read.",
      });
    } catch (error) {
      console.error('Error updating message:', error);
      toast({
        title: "Error",
        description: "Failed to update message status.",
        variant: "destructive"
      });
    }
  };

  const getServiceName = (service: string) => {
    const serviceMap: { [key: string]: string } = {
      'custom-software': 'Custom Software',
      'web-development': 'Web Development',
      'mobile-apps': 'Mobile Apps',
      'cloud-devops': 'Cloud & DevOps',
      'ai-ml': 'AI & Machine Learning',
      'blockchain': 'Blockchain',
      'digital-marketing': 'Digital Marketing',
      'consultation': 'Free Consultation'
    };
    return serviceMap[service] || service;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  const unreadCount = messages.filter(msg => msg.status === 'unread').length;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Button
                variant="ghost"
                onClick={() => navigate('/admin')}
                className="mr-4"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Dashboard
              </Button>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Contact Messages</h1>
                <p className="text-sm text-gray-600">
                  {messages.length} total messages, {unreadCount} unread
                </p>
              </div>
            </div>
            <Button onClick={fetchMessages} variant="outline" size="sm">
              <RefreshCw className="w-4 h-4 mr-2" />
              Refresh
            </Button>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Messages List */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mail className="w-5 h-5 mr-2" />
                  All Messages
                </CardTitle>
              </CardHeader>
              <CardContent>
                {messages.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">
                    <Mail className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p>No contact messages yet.</p>
                  </div>
                ) : (
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Status</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Service</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {messages.map((message) => (
                        <TableRow 
                          key={message.id}
                          className={message.status === 'unread' ? 'bg-blue-50' : ''}
                        >
                          <TableCell>
                            <Badge 
                              variant={message.status === 'unread' ? 'default' : 'secondary'}
                              className={message.status === 'unread' ? 'bg-blue-500' : ''}
                            >
                              {message.status}
                            </Badge>
                          </TableCell>
                          <TableCell className="font-medium">{message.name}</TableCell>
                          <TableCell>{getServiceName(message.service)}</TableCell>
                          <TableCell>{formatDate(message.created_at)}</TableCell>
                          <TableCell>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => setSelectedMessage(message)}
                            >
                              <Eye className="w-4 h-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Message Details */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Message Details
                </CardTitle>
              </CardHeader>
              <CardContent>
                {selectedMessage ? (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Badge 
                        variant={selectedMessage.status === 'unread' ? 'default' : 'secondary'}
                        className={selectedMessage.status === 'unread' ? 'bg-blue-500' : ''}
                      >
                        {selectedMessage.status}
                      </Badge>
                      {selectedMessage.status === 'unread' && (
                        <Button
                          size="sm"
                          onClick={() => markAsRead(selectedMessage.id)}
                        >
                          Mark as Read
                        </Button>
                      )}
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-2 text-gray-500" />
                        <span className="font-medium">{selectedMessage.name}</span>
                      </div>
                      
                      <div className="flex items-center">
                        <Mail className="w-4 h-4 mr-2 text-gray-500" />
                        <a 
                          href={`mailto:${selectedMessage.email}`}
                          className="text-blue-600 hover:underline"
                        >
                          {selectedMessage.email}
                        </a>
                      </div>
                      
                      <div className="flex items-center">
                        <Service className="w-4 h-4 mr-2 text-gray-500" />
                        <span>{getServiceName(selectedMessage.service)}</span>
                      </div>
                      
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2 text-gray-500" />
                        <span>{formatDate(selectedMessage.created_at)}</span>
                      </div>
                    </div>

                    <div className="mt-4">
                      <h4 className="font-medium mb-2">Message:</h4>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-gray-700 whitespace-pre-wrap">
                          {selectedMessage.message}
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t">
                      <Button
                        className="w-full"
                        onClick={() => window.open(`mailto:${selectedMessage.email}`, '_blank')}
                      >
                        Reply via Email
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    <MessageSquare className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p>Select a message to view details</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactMessages;
