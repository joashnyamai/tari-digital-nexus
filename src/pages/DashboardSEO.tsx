
import { Navbar } from '@/components/Navbar';
import { DashboardSidebar } from '@/components/DashboardSidebar';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search, TrendingUp, Globe, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const DashboardSEO = () => {
  const rankingData = [
    { month: 'Jan', avgPosition: 15.2, clicks: 1200, impressions: 45000 },
    { month: 'Feb', avgPosition: 12.8, clicks: 1450, impressions: 52000 },
    { month: 'Mar', avgPosition: 10.5, clicks: 1680, impressions: 58000 },
    { month: 'Apr', avgPosition: 9.2, clicks: 1920, impressions: 64000 },
    { month: 'May', avgPosition: 8.1, clicks: 2150, impressions: 72000 },
    { month: 'Jun', avgPosition: 7.3, clicks: 2400, impressions: 78000 },
  ];

  const topKeywords = [
    { keyword: "digital marketing", position: 3, clicks: 450, impressions: 12000, ctr: 3.75 },
    { keyword: "social media marketing", position: 5, clicks: 320, impressions: 8500, ctr: 3.76 },
    { keyword: "content marketing", position: 7, clicks: 280, impressions: 7200, ctr: 3.89 },
    { keyword: "email marketing", position: 4, clicks: 380, impressions: 9800, ctr: 3.88 },
    { keyword: "marketing agency", position: 8, clicks: 220, impressions: 6100, ctr: 3.61 },
  ];

  const technicalIssues = [
    { type: "Error", issue: "404 Pages", count: 5, severity: "high" },
    { type: "Warning", issue: "Missing Meta Descriptions", count: 12, severity: "medium" },
    { type: "Warning", issue: "Large Images", count: 8, severity: "medium" },
    { type: "Info", issue: "Missing Alt Tags", count: 15, severity: "low" },
    { type: "Error", issue: "Broken Links", count: 3, severity: "high" },
  ];

  const getPositionColor = (position: number) => {
    if (position <= 3) return 'text-green-600';
    if (position <= 10) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'text-red-600';
      case 'medium': return 'text-yellow-600';
      case 'low': return 'text-blue-600';
      default: return 'text-gray-600';
    }
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'high': return <XCircle className="w-4 h-4" />;
      case 'medium': return <AlertTriangle className="w-4 h-4" />;
      case 'low': return <CheckCircle className="w-4 h-4" />;
      default: return <CheckCircle className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Navbar />
      <div className="flex">
        <DashboardSidebar />
        <main className="flex-1 p-6 ml-64">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">SEO Tools</h1>
              <p className="text-gray-600">Monitor and optimize your search engine performance</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card className="p-6 bg-white/70 backdrop-blur-sm border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">Avg Position</p>
                    <p className="text-2xl font-bold text-gray-900">7.3</p>
                    <p className="text-sm font-medium text-green-600">+2.1 positions</p>
                  </div>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  </div>
                </div>
              </Card>
              <Card className="p-6 bg-white/70 backdrop-blur-sm border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">Total Clicks</p>
                    <p className="text-2xl font-bold text-gray-900">2,400</p>
                    <p className="text-sm font-medium text-green-600">+11.6%</p>
                  </div>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Search className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
              </Card>
              <Card className="p-6 bg-white/70 backdrop-blur-sm border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">Impressions</p>
                    <p className="text-2xl font-bold text-gray-900">78K</p>
                    <p className="text-sm font-medium text-green-600">+8.3%</p>
                  </div>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Globe className="w-6 h-6 text-purple-600" />
                  </div>
                </div>
              </Card>
              <Card className="p-6 bg-white/70 backdrop-blur-sm border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">CTR</p>
                    <p className="text-2xl font-bold text-gray-900">3.08%</p>
                    <p className="text-sm font-medium text-green-600">+0.2%</p>
                  </div>
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-indigo-600" />
                  </div>
                </div>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <Card className="p-6 bg-white/70 backdrop-blur-sm border-gray-200">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Ranking Progress</h3>
                  <p className="text-sm text-gray-600">Average position and click trends</p>
                </div>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={rankingData}>
                      <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Line 
                        type="monotone" 
                        dataKey="avgPosition" 
                        stroke="#ef4444" 
                        strokeWidth={3}
                        name="Avg Position"
                        yAxisId="position"
                      />
                      <Line 
                        type="monotone" 
                        dataKey="clicks" 
                        stroke="#3b82f6" 
                        strokeWidth={3}
                        name="Clicks"
                        yAxisId="clicks"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </Card>

              <Card className="p-6 bg-white/70 backdrop-blur-sm border-gray-200">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Technical Issues</h3>
                  <p className="text-sm text-gray-600">Site health and optimization opportunities</p>
                </div>
                <div className="space-y-4">
                  {technicalIssues.map((issue, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <div className={`mr-3 ${getSeverityColor(issue.severity)}`}>
                          {getSeverityIcon(issue.severity)}
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">{issue.issue}</div>
                          <div className="text-sm text-gray-500">{issue.type}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium text-gray-900">{issue.count}</div>
                        <div className="text-sm text-gray-500">issues</div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            <Card className="p-6 bg-white/70 backdrop-blur-sm border-gray-200">
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Top Keywords</h3>
                <p className="text-sm text-gray-600">Your best performing search terms</p>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Keyword</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Position</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Clicks</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Impressions</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">CTR</th>
                    </tr>
                  </thead>
                  <tbody>
                    {topKeywords.map((keyword, index) => (
                      <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-4">
                          <div className="font-medium text-gray-900">{keyword.keyword}</div>
                        </td>
                        <td className="py-3 px-4">
                          <span className={`font-medium ${getPositionColor(keyword.position)}`}>
                            #{keyword.position}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-gray-900">{keyword.clicks.toLocaleString()}</td>
                        <td className="py-3 px-4 text-gray-900">{keyword.impressions.toLocaleString()}</td>
                        <td className="py-3 px-4 text-gray-900">{keyword.ctr}%</td>
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

export default DashboardSEO;
