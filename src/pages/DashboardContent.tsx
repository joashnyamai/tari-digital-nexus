
import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { DashboardSidebar } from '@/components/DashboardSidebar';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Plus, Edit, Calendar, Eye, Share2, FileText, Image, Video, PenTool } from 'lucide-react';

const DashboardContent = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const content = [
    {
      id: 1,
      title: "10 Digital Marketing Trends for 2024",
      type: "Blog Post",
      status: "Published",
      author: "Sarah Johnson",
      publishDate: "2024-06-01",
      views: 2450,
      shares: 89,
      engagement: 12.5,
      tags: ["Marketing", "Trends", "2024"]
    },
    {
      id: 2,
      title: "How to Create Engaging Social Media Content",
      type: "Blog Post",
      status: "Draft",
      author: "Michael Chen",
      publishDate: null,
      views: 0,
      shares: 0,
      engagement: 0,
      tags: ["Social Media", "Content", "Strategy"]
    },
    {
      id: 3,
      title: "Email Marketing Best Practices Guide",
      type: "Ebook",
      status: "Review",
      author: "Emily Davis",
      publishDate: "2024-06-10",
      views: 1250,
      shares: 45,
      engagement: 8.7,
      tags: ["Email", "Marketing", "Guide"]
    },
    {
      id: 4,
      title: "Product Demo: Analytics Dashboard",
      type: "Video",
      status: "Published",
      author: "David Wilson",
      publishDate: "2024-05-28",
      views: 3200,
      shares: 156,
      engagement: 18.9,
      tags: ["Product", "Demo", "Analytics"]
    },
    {
      id: 5,
      title: "Marketing ROI Calculator",
      type: "Tool",
      status: "Published",
      author: "Sarah Johnson",
      publishDate: "2024-05-25",
      views: 980,
      shares: 67,
      engagement: 15.2,
      tags: ["ROI", "Calculator", "Tool"]
    }
  ];

  const contentTypes = ['All', 'Blog Post', 'Video', 'Ebook', 'Tool'];
  const statusTypes = ['All', 'Published', 'Draft', 'Review', 'Scheduled'];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Published': return 'bg-green-100 text-green-800';
      case 'Draft': return 'bg-gray-100 text-gray-800';
      case 'Review': return 'bg-yellow-100 text-yellow-800';
      case 'Scheduled': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Blog Post': return <FileText className="w-4 h-4" />;
      case 'Video': return <Video className="w-4 h-4" />;
      case 'Ebook': return <FileText className="w-4 h-4" />;
      case 'Tool': return <PenTool className="w-4 h-4" />;
      default: return <FileText className="w-4 h-4" />;
    }
  };

  const filteredContent = selectedFilter === 'All' 
    ? content 
    : content.filter(item => item.type === selectedFilter);

  const totalViews = content.reduce((acc, item) => acc + item.views, 0);
  const totalShares = content.reduce((acc, item) => acc + item.shares, 0);
  const avgEngagement = content.length > 0 
    ? (content.reduce((acc, item) => acc + item.engagement, 0) / content.length).toFixed(1)
    : 0;
  const publishedCount = content.filter(item => item.status === 'Published').length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Navbar />
      <div className="flex">
        <DashboardSidebar />
        <main className="flex-1 p-6 ml-64">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Content Management</h1>
                <p className="text-gray-600">Create, manage, and analyze your content performance</p>
              </div>
              <Button className="bg-gradient-to-r from-blue-600 to-indigo-600">
                <Plus className="w-4 h-4 mr-2" />
                Create Content
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card className="p-6 bg-white/70 backdrop-blur-sm border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">Total Views</p>
                    <p className="text-2xl font-bold text-gray-900">{totalViews.toLocaleString()}</p>
                    <p className="text-sm font-medium text-green-600">+15.3%</p>
                  </div>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Eye className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
              </Card>
              <Card className="p-6 bg-white/70 backdrop-blur-sm border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">Total Shares</p>
                    <p className="text-2xl font-bold text-gray-900">{totalShares.toLocaleString()}</p>
                    <p className="text-sm font-medium text-green-600">+22.1%</p>
                  </div>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Share2 className="w-6 h-6 text-green-600" />
                  </div>
                </div>
              </Card>
              <Card className="p-6 bg-white/70 backdrop-blur-sm border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">Avg Engagement</p>
                    <p className="text-2xl font-bold text-gray-900">{avgEngagement}%</p>
                    <p className="text-sm font-medium text-green-600">+5.7%</p>
                  </div>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <PenTool className="w-6 h-6 text-purple-600" />
                  </div>
                </div>
              </Card>
              <Card className="p-6 bg-white/70 backdrop-blur-sm border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">Published</p>
                    <p className="text-2xl font-bold text-gray-900">{publishedCount}</p>
                    <p className="text-sm font-medium text-gray-600">of {content.length} total</p>
                  </div>
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <FileText className="w-6 h-6 text-indigo-600" />
                  </div>
                </div>
              </Card>
            </div>

            <div className="mb-6">
              <div className="flex flex-wrap gap-2">
                {contentTypes.map((type) => (
                  <Button
                    key={type}
                    variant={selectedFilter === type ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedFilter(type)}
                    className={selectedFilter === type ? "bg-blue-600" : ""}
                  >
                    {type}
                  </Button>
                ))}
              </div>
            </div>

            <Card className="p-6 bg-white/70 backdrop-blur-sm border-gray-200">
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {selectedFilter === 'All' ? 'All Content' : selectedFilter}
                </h3>
                <p className="text-sm text-gray-600">Manage your content library and performance</p>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Content</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Type</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Status</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Author</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Performance</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Date</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredContent.map((item) => (
                      <tr key={item.id} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-4">
                          <div className="font-medium text-gray-900">{item.title}</div>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {item.tags.map((tag, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex items-center">
                            {getTypeIcon(item.type)}
                            <span className="ml-2 text-gray-900">{item.type}</span>
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <Badge className={getStatusColor(item.status)}>
                            {item.status}
                          </Badge>
                        </td>
                        <td className="py-3 px-4 text-gray-900">{item.author}</td>
                        <td className="py-3 px-4">
                          {item.status === 'Published' ? (
                            <div className="text-sm">
                              <div className="text-gray-900">{item.views.toLocaleString()} views</div>
                              <div className="text-gray-500">{item.shares} shares</div>
                              <div className="text-green-600">{item.engagement}% engagement</div>
                            </div>
                          ) : (
                            <span className="text-gray-400">-</span>
                          )}
                        </td>
                        <td className="py-3 px-4">
                          <div className="text-gray-900">{item.publishDate || 'Not scheduled'}</div>
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline">
                              <Edit className="w-4 h-4" />
                            </Button>
                            {item.status === 'Published' && (
                              <Button size="sm" variant="outline">
                                <Eye className="w-4 h-4" />
                              </Button>
                            )}
                            {item.status === 'Draft' && (
                              <Button size="sm" variant="outline">
                                <Calendar className="w-4 h-4" />
                              </Button>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardContent;
