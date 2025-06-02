
import { Card } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export const CampaignChart = () => {
  const data = [
    { month: 'Jan', revenue: 4000, leads: 240 },
    { month: 'Feb', revenue: 3000, leads: 138 },
    { month: 'Mar', revenue: 5000, leads: 390 },
    { month: 'Apr', revenue: 4500, leads: 480 },
    { month: 'May', revenue: 6000, leads: 380 },
    { month: 'Jun', revenue: 7000, leads: 430 },
  ];

  return (
    <Card className="p-6 bg-white/70 backdrop-blur-sm border-gray-200">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">Campaign Performance</h3>
        <p className="text-sm text-gray-600">Revenue and lead generation over time</p>
      </div>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line 
              type="monotone" 
              dataKey="revenue" 
              stroke="#3b82f6" 
              strokeWidth={3}
              name="Revenue ($)"
            />
            <Line 
              type="monotone" 
              dataKey="leads" 
              stroke="#6366f1" 
              strokeWidth={3}
              name="Leads"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};
