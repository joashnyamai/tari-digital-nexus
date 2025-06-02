
import { Card } from '@/components/ui/card';
import { TrendingUp, Users, Target, DollarSign } from 'lucide-react';

export const MetricsCards = () => {
  const metrics = [
    {
      title: "Total Revenue",
      value: "$847,392",
      change: "+23.4%",
      icon: DollarSign,
      positive: true
    },
    {
      title: "Active Campaigns",
      value: "2,847",
      change: "+12.1%",
      icon: Target,
      positive: true
    },
    {
      title: "Total Leads",
      value: "18,247",
      change: "+8.7%",
      icon: Users,
      positive: true
    },
    {
      title: "Conversion Rate",
      value: "4.8%",
      change: "-2.3%",
      icon: TrendingUp,
      positive: false
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {metrics.map((metric, index) => (
        <Card key={index} className="p-6 bg-white/70 backdrop-blur-sm border-gray-200 hover:shadow-lg transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 mb-1">{metric.title}</p>
              <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
              <p className={`text-sm font-medium ${metric.positive ? 'text-green-600' : 'text-red-600'}`}>
                {metric.change} from last month
              </p>
            </div>
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
              metric.positive ? 'bg-green-100' : 'bg-red-100'
            }`}>
              <metric.icon className={`w-6 h-6 ${metric.positive ? 'text-green-600' : 'text-red-600'}`} />
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};
