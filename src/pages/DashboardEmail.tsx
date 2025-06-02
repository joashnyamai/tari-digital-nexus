
import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { DashboardSidebar } from '@/components/DashboardSidebar';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Plus, Send, Mail, Users, Eye, BarChart3 } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const DashboardEmail = () => {
  const campaigns = [
    {
      id: 1,
      name: "Weekly Newsletter #47",
      subject: "Your Marketing Insights for This Week",
      status: "Sent",
      sent: 5420,
      delivered: 5398,
      opened: 2156,
      clicked: 324,
      bounced: 22,
      unsubscribed: 8,
      sentDate: "2024-06-01",
      openRate: 39.9,
      clickRate: 6.0
    },
    {
      id: 2,
      name: "Product Launch Announcement",
      subject: "🚀 Introducing Our New Analytics Dashboard",
      status: "Scheduled",
      sent: 0,
      delivered: 0,
      opened: 0,
      clicked: 0,
      bounced: 0,
      unsubscribed: 0,
      sentDate: "2024-06-05",
      openRate: 0,
      clickRate: 0
    },
    {
      id: 3,
      name: "Customer Survey",
      subject: "Help Us Improve - Quick 2-Minute Survey",
      status: "Draft",
      sent: 0,
      delivered: 0,
      opened: 0,
      clicked: 0,
      bounced: 0,
      unsubscribed: 0,
      sentDate: null,
      openRate: 0,
      clickRate: 0
    }
  ];

  const performanceData = [
    { week: 'Week 1', opens: 2100, clicks: 420, unsubscribes: 12 },
    { week: 'Week 2', opens: 2350, clicks: 480, unsubscribes: 8 },
    { week: 'Week 3', opens: 2200, clicks: 390, unsubscribes: 15 },
    { week: 'Week 4', opens: 2450, clicks: 520, unsubscribes: 6 },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Sent': return 'bg-green-100 text-green-800';
      case 'Scheduled': return 'bg-blue-100 text-blue-800';
      case 'Draft': return 'bg-gray-100 text-gray-800';
      case 'Failed': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const totalSent = campaigns.reduce((acc, c) => acc + c.sent, 0);
  const totalOpened = campaigns.reduce((acc, c) => acc + c.opened, 0);
  const totalClicked = campaigns.reduce((acc, c) => acc + c.clicked, 0);
  const avgOpenRate = totalSent > 0 ? ((totalOpened / totalSent) * 100).toFixed(1) : 0;
  const avgClickRate = totalSent > 0 ? ((totalClicked / totalSent) * 100).toFixed(1) : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Navbar />
      <div className="flex">
        <DashboardSidebar />
        <main className="flex-1 p-6 ml-64">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Email Marketing</h1>
                <p className="text-gray-600">Create and manage your email campaigns</p>
              </div>
              <Button className="bg-gradient-to-r from-blue-600 to-indigo-600">
                <Plus className="w-4 h-4 mr-2" />
                Create Campaign
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card className="p-6 bg-white/70 backdrop-blur-sm border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">Total Sent</p>
                    <p className="text-2xl font-bold text-gray-900">{totalSent.toLocaleString()}</p>
                  </div>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Send className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
              </Card>
              <Card className="p-6 bg-white/70 backdrop-blur-sm border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">Open Rate</p>
                    <p className="text-2xl font-bold text-gray-900">{avgOpenRate}%</p>
                  </div>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Eye className="w-6 h-6 text-green-600" />
                  </div>
                </div>
              </Card>
              <Card className="p-6 bg-white/70 backdrop-blur-sm border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">Click Rate</p>
                    <p className="text-2xl font-bold text-gray-900">{avgClickRate}%</p>
                  </div>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-purple-600" />
                  </div>
                </div>
              </Card>
              <Card className="p-6 bg-white/70 backdrop-blur-sm border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">Subscribers</p>
                    <p className="text-2xl font-bold text-gray-900">12,847</p>
                  </div>
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-indigo-600" />
                  </div>
                </div>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <Card className="p-6 bg-white/70 backdrop-blur-sm border-gray-200">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Email Performance</h3>
                  <p className="text-sm text-gray-600">Weekly email engagement metrics</p>
                </div>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={performanceData}>
                      <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                      <XAxis dataKey="week" />
                      <YAxis />
                      <Tooltip />
                      <Line 
                        type="monotone" 
                        dataKey="opens" 
                        stroke="#3b82f6" 
                        strokeWidth={3}
                        name="Opens"
                      />
                      <Line 
                        type="monotone" 
                        dataKey="clicks" 
                        stroke="#6366f1" 
                        strokeWidth={3}
                        name="Clicks"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </Card>

              <Card className="p-6 bg-white/70 backdrop-blur-sm border-gray-200">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Quick Actions</h3>
                  <p className="text-sm text-gray-600">Common email marketing tasks</p>
                </div>
                <div className="space-y-4">
                  <Button className="w-full justify-start" variant="outline">
                    <Mail className="w-4 h-4 mr-2" />
                    Create Newsletter
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Users className="w-4 h-4 mr-2" />
                    Manage Subscribers
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <BarChart3 className="w-4 h-4 mr-2" />
                    View Reports
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Send className="w-4 h-4 mr-2" />
                    Send Test Email
                  </Button>
                </div>
              </Card>
            </div>

            <Card className="p-6 bg-white/70 backdrop-blur-sm border-gray-200">
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Email Campaigns</h3>
                <p className="text-sm text-gray-600">Manage your email marketing campaigns</p>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Campaign</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Status</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Recipients</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Performance</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Date</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {campaigns.map((campaign) => (
                      <tr key={campaign.id} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-4">
                          <div className="font-medium text-gray-900">{campaign.name}</div>
                          <div className="text-sm text-gray-500">{campaign.subject}</div>
                        </td>
                        <td className="py-3 px-4">
                          <Badge className={getStatusColor(campaign.status)}>
                            {campaign.status}
                          </Badge>
                        </td>
                        <td className="py-3 px-4">
                          <div className="text-gray-900">{campaign.sent > 0 ? campaign.sent.toLocaleString() : '-'}</div>
                          <div className="text-sm text-gray-500">
                            {campaign.delivered > 0 ? `${campaign.delivered} delivered` : 'Not sent'}
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          {campaign.status === 'Sent' ? (
                            <div className="text-sm">
                              <div className="text-green-600">{campaign.openRate}% opens</div>
                              <div className="text-blue-600">{campaign.clickRate}% clicks</div>
                            </div>
                          ) : (
                            <span className="text-gray-400">-</span>
                          )}
                        </td>
                        <td className="py-3 px-4">
                          <div className="text-gray-900">{campaign.sentDate || 'Not scheduled'}</div>
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline">
                              View
                            </Button>
                            {campaign.status === 'Draft' && (
                              <Button size="sm" variant="outline">
                                Edit
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

export default DashboardEmail;
