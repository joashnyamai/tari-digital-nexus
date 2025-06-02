
import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { DashboardSidebar } from '@/components/DashboardSidebar';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Plus, Play, Pause, Eye, Edit, Trash2 } from 'lucide-react';

const DashboardCampaigns = () => {
  const campaigns = [
    {
      id: 1,
      name: "Summer Sale - Google Ads",
      type: "Paid Ads",
      status: "Active",
      budget: "$5,000",
      spent: "$3,420",
      impressions: "124K",
      clicks: "2,847",
      conversions: 18,
      startDate: "2024-05-01",
      endDate: "2024-06-30"
    },
    {
      id: 2,
      name: "Facebook Brand Awareness",
      type: "Social Media",
      status: "Active",
      budget: "$3,500",
      spent: "$2,890",
      impressions: "89K",
      clicks: "1,256",
      conversions: 12,
      startDate: "2024-05-15",
      endDate: "2024-07-15"
    },
    {
      id: 3,
      name: "LinkedIn B2B Campaign",
      type: "Social Media",
      status: "Paused",
      budget: "$4,200",
      spent: "$4,100",
      impressions: "45K",
      clicks: "689",
      conversions: 24,
      startDate: "2024-04-01",
      endDate: "2024-05-31"
    },
    {
      id: 4,
      name: "Email Newsletter Campaign",
      type: "Email Marketing",
      status: "Active",
      budget: "$800",
      spent: "$650",
      impressions: "25K",
      clicks: "3,120",
      conversions: 45,
      startDate: "2024-05-01",
      endDate: "2024-12-31"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Paused': return 'bg-yellow-100 text-yellow-800';
      case 'Completed': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Navbar />
      <div className="flex">
        <DashboardSidebar />
        <main className="flex-1 p-6 ml-64">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Campaigns</h1>
                <p className="text-gray-600">Manage and monitor your marketing campaigns</p>
              </div>
              <Button className="bg-gradient-to-r from-blue-600 to-indigo-600">
                <Plus className="w-4 h-4 mr-2" />
                Create Campaign
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card className="p-6 bg-white/70 backdrop-blur-sm border-gray-200">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-2">{campaigns.length}</div>
                  <div className="text-sm text-gray-600">Total Campaigns</div>
                </div>
              </Card>
              <Card className="p-6 bg-white/70 backdrop-blur-sm border-gray-200">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    {campaigns.filter(c => c.status === 'Active').length}
                  </div>
                  <div className="text-sm text-gray-600">Active Campaigns</div>
                </div>
              </Card>
              <Card className="p-6 bg-white/70 backdrop-blur-sm border-gray-200">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    ${campaigns.reduce((acc, c) => acc + parseInt(c.spent.replace('$', '').replace(',', '')), 0).toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-600">Total Spend</div>
                </div>
              </Card>
              <Card className="p-6 bg-white/70 backdrop-blur-sm border-gray-200">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">
                    {campaigns.reduce((acc, c) => acc + c.conversions, 0)}
                  </div>
                  <div className="text-sm text-gray-600">Total Conversions</div>
                </div>
              </Card>
            </div>

            <Card className="p-6 bg-white/70 backdrop-blur-sm border-gray-200">
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">All Campaigns</h3>
                <p className="text-sm text-gray-600">Overview of all your marketing campaigns</p>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Campaign</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Type</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Status</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Budget</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Performance</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {campaigns.map((campaign) => (
                      <tr key={campaign.id} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-4">
                          <div className="font-medium text-gray-900">{campaign.name}</div>
                          <div className="text-sm text-gray-500">{campaign.startDate} - {campaign.endDate}</div>
                        </td>
                        <td className="py-3 px-4">
                          <Badge variant="outline">{campaign.type}</Badge>
                        </td>
                        <td className="py-3 px-4">
                          <Badge className={getStatusColor(campaign.status)}>
                            {campaign.status}
                          </Badge>
                        </td>
                        <td className="py-3 px-4">
                          <div className="text-gray-900">{campaign.budget}</div>
                          <div className="text-sm text-gray-500">{campaign.spent} spent</div>
                        </td>
                        <td className="py-3 px-4">
                          <div className="text-sm">
                            <div>{campaign.impressions} impressions</div>
                            <div>{campaign.clicks} clicks</div>
                            <div>{campaign.conversions} conversions</div>
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline">
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="outline">
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="outline">
                              {campaign.status === 'Active' ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                            </Button>
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

export default DashboardCampaigns;
