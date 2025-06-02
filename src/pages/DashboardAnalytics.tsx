
import { Navbar } from '@/components/Navbar';
import { DashboardSidebar } from '@/components/DashboardSidebar';
import { Card } from '@/components/ui/card';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const DashboardAnalytics = () => {
  const performanceData = [
    { month: 'Jan', revenue: 4000, leads: 240, conversions: 45 },
    { month: 'Feb', revenue: 3000, leads: 138, conversions: 32 },
    { month: 'Mar', revenue: 5000, leads: 390, conversions: 67 },
    { month: 'Apr', revenue: 4500, leads: 480, conversions: 58 },
    { month: 'May', revenue: 6000, leads: 380, conversions: 72 },
    { month: 'Jun', revenue: 7000, leads: 430, conversions: 89 },
  ];

  const channelData = [
    { name: 'Google Ads', value: 35, color: '#3b82f6' },
    { name: 'Facebook', value: 25, color: '#6366f1' },
    { name: 'Email', value: 20, color: '#8b5cf6' },
    { name: 'SEO', value: 15, color: '#06b6d4' },
    { name: 'Others', value: 5, color: '#10b981' },
  ];

  const conversionData = [
    { stage: 'Visitors', count: 10000, color: '#e5e7eb' },
    { stage: 'Leads', count: 2000, color: '#d1d5db' },
    { stage: 'Qualified', count: 800, color: '#9ca3af' },
    { stage: 'Customers', count: 200, color: '#6b7280' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Navbar />
      <div className="flex">
        <DashboardSidebar />
        <main className="flex-1 p-6 ml-64">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Analytics</h1>
              <p className="text-gray-600">Deep dive into your marketing performance</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card className="p-6 bg-white/70 backdrop-blur-sm border-gray-200">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">$47K</div>
                  <div className="text-sm text-gray-600 mb-1">Monthly Revenue</div>
                  <div className="text-sm font-medium text-green-600">+23.5%</div>
                </div>
              </Card>
              <Card className="p-6 bg-white/70 backdrop-blur-sm border-gray-200">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">2,847</div>
                  <div className="text-sm text-gray-600 mb-1">Total Leads</div>
                  <div className="text-sm font-medium text-green-600">+12.1%</div>
                </div>
              </Card>
              <Card className="p-6 bg-white/70 backdrop-blur-sm border-gray-200">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">4.8%</div>
                  <div className="text-sm text-gray-600 mb-1">Conversion Rate</div>
                  <div className="text-sm font-medium text-red-600">-2.3%</div>
                </div>
              </Card>
              <Card className="p-6 bg-white/70 backdrop-blur-sm border-gray-200">
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-600 mb-2">$16.50</div>
                  <div className="text-sm text-gray-600 mb-1">Cost per Lead</div>
                  <div className="text-sm font-medium text-green-600">-8.7%</div>
                </div>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <Card className="p-6 bg-white/70 backdrop-blur-sm border-gray-200">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Revenue Trend</h3>
                  <p className="text-sm text-gray-600">Monthly revenue performance</p>
                </div>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={performanceData}>
                      <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Area 
                        type="monotone" 
                        dataKey="revenue" 
                        stroke="#3b82f6" 
                        fill="#3b82f6" 
                        fillOpacity={0.1}
                        strokeWidth={3}
                        name="Revenue ($)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </Card>

              <Card className="p-6 bg-white/70 backdrop-blur-sm border-gray-200">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Traffic Sources</h3>
                  <p className="text-sm text-gray-600">Revenue by channel</p>
                </div>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={channelData}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        dataKey="value"
                      >
                        {channelData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-4 space-y-2">
                  {channelData.map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: item.color }} />
                        <span className="text-sm text-gray-600">{item.name}</span>
                      </div>
                      <span className="text-sm font-medium text-gray-900">{item.value}%</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="p-6 bg-white/70 backdrop-blur-sm border-gray-200">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Leads & Conversions</h3>
                  <p className="text-sm text-gray-600">Monthly lead generation and conversion trends</p>
                </div>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={performanceData}>
                      <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Line 
                        type="monotone" 
                        dataKey="leads" 
                        stroke="#6366f1" 
                        strokeWidth={3}
                        name="Leads"
                      />
                      <Line 
                        type="monotone" 
                        dataKey="conversions" 
                        stroke="#8b5cf6" 
                        strokeWidth={3}
                        name="Conversions"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </Card>

              <Card className="p-6 bg-white/70 backdrop-blur-sm border-gray-200">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Conversion Funnel</h3>
                  <p className="text-sm text-gray-600">Customer journey breakdown</p>
                </div>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={conversionData} layout="horizontal">
                      <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                      <XAxis type="number" />
                      <YAxis dataKey="stage" type="category" />
                      <Tooltip />
                      <Bar dataKey="count" fill="#3b82f6" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardAnalytics;
