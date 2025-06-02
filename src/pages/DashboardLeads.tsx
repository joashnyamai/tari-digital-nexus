
import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { DashboardSidebar } from '@/components/DashboardSidebar';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Plus, Mail, Phone, User, Filter, Search } from 'lucide-react';

const DashboardLeads = () => {
  const [selectedStatus, setSelectedStatus] = useState('All');

  const leads = [
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah.johnson@email.com",
      phone: "+1 (555) 123-4567",
      company: "Tech Corp",
      source: "Google Ads",
      status: "New",
      score: 85,
      value: "$12,500",
      lastContact: "2024-06-01",
      tags: ["Enterprise", "Hot Lead"]
    },
    {
      id: 2,
      name: "Michael Chen",
      email: "m.chen@startup.io",
      phone: "+1 (555) 987-6543",
      company: "StartupIO",
      source: "LinkedIn",
      status: "Qualified",
      score: 92,
      value: "$8,200",
      lastContact: "2024-05-30",
      tags: ["SaaS", "Qualified"]
    },
    {
      id: 3,
      name: "Emily Davis",
      email: "emily@agency.com",
      phone: "+1 (555) 456-7890",
      company: "Creative Agency",
      source: "Website",
      status: "Contacted",
      score: 76,
      value: "$5,800",
      lastContact: "2024-05-28",
      tags: ["Agency", "Follow-up"]
    },
    {
      id: 4,
      name: "David Wilson",
      email: "david.w@retail.com",
      phone: "+1 (555) 321-0987",
      company: "Retail Plus",
      source: "Facebook",
      status: "Opportunity",
      score: 88,
      value: "$15,000",
      lastContact: "2024-05-25",
      tags: ["Retail", "High Value"]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'New': return 'bg-blue-100 text-blue-800';
      case 'Qualified': return 'bg-green-100 text-green-800';
      case 'Contacted': return 'bg-yellow-100 text-yellow-800';
      case 'Opportunity': return 'bg-purple-100 text-purple-800';
      case 'Closed': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const statusCounts = {
    All: leads.length,
    New: leads.filter(l => l.status === 'New').length,
    Qualified: leads.filter(l => l.status === 'Qualified').length,
    Contacted: leads.filter(l => l.status === 'Contacted').length,
    Opportunity: leads.filter(l => l.status === 'Opportunity').length,
  };

  const filteredLeads = selectedStatus === 'All' 
    ? leads 
    : leads.filter(lead => lead.status === selectedStatus);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Navbar />
      <div className="flex">
        <DashboardSidebar />
        <main className="flex-1 p-6 ml-64">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Leads</h1>
                <p className="text-gray-600">Manage your sales pipeline and leads</p>
              </div>
              <Button className="bg-gradient-to-r from-blue-600 to-indigo-600">
                <Plus className="w-4 h-4 mr-2" />
                Add Lead
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
              {Object.entries(statusCounts).map(([status, count]) => (
                <Card 
                  key={status}
                  className={`p-6 bg-white/70 backdrop-blur-sm border-gray-200 cursor-pointer transition-all ${
                    selectedStatus === status ? 'ring-2 ring-blue-500' : ''
                  }`}
                  onClick={() => setSelectedStatus(status)}
                >
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-900 mb-2">{count}</div>
                    <div className="text-sm text-gray-600">{status} Leads</div>
                  </div>
                </Card>
              ))}
            </div>

            <Card className="p-6 bg-white/70 backdrop-blur-sm border-gray-200">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {selectedStatus === 'All' ? 'All Leads' : `${selectedStatus} Leads`}
                  </h3>
                  <p className="text-sm text-gray-600">Manage and track your sales prospects</p>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    <Search className="w-4 h-4 mr-2" />
                    Search
                  </Button>
                  <Button variant="outline" size="sm">
                    <Filter className="w-4 h-4 mr-2" />
                    Filter
                  </Button>
                </div>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Contact</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Company</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Source</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Status</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Score</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Value</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredLeads.map((lead) => (
                      <tr key={lead.id} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-4">
                          <div className="flex items-center">
                            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                              <User className="w-5 h-5 text-gray-600" />
                            </div>
                            <div>
                              <div className="font-medium text-gray-900">{lead.name}</div>
                              <div className="text-sm text-gray-500">{lead.email}</div>
                              <div className="text-sm text-gray-500">{lead.phone}</div>
                            </div>
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <div className="text-gray-900">{lead.company}</div>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {lead.tags.map((tag, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <Badge variant="outline">{lead.source}</Badge>
                        </td>
                        <td className="py-3 px-4">
                          <Badge className={getStatusColor(lead.status)}>
                            {lead.status}
                          </Badge>
                        </td>
                        <td className="py-3 px-4">
                          <span className={`font-medium ${getScoreColor(lead.score)}`}>
                            {lead.score}/100
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <div className="text-gray-900 font-medium">{lead.value}</div>
                          <div className="text-sm text-gray-500">Est. value</div>
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline">
                              <Mail className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="outline">
                              <Phone className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="outline">
                              <User className="w-4 h-4" />
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

export default DashboardLeads;
