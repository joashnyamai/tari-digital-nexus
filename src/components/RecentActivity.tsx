
import { Card } from '@/components/ui/card';
import { Clock } from 'lucide-react';

export const RecentActivity = () => {
  const activities = [
    {
      action: "New lead generated",
      campaign: "Facebook Ads - Q2 Campaign",
      time: "2 minutes ago",
      type: "lead"
    },
    {
      action: "Campaign launched",
      campaign: "Google Ads - Summer Sale",
      time: "1 hour ago",
      type: "campaign"
    },
    {
      action: "Email sent",
      campaign: "Newsletter - Weekly Update",
      time: "3 hours ago",
      type: "email"
    },
    {
      action: "Lead converted",
      campaign: "LinkedIn Ads - B2B",
      time: "5 hours ago",
      type: "conversion"
    },
    {
      action: "Report generated",
      campaign: "Monthly Performance Report",
      time: "1 day ago",
      type: "report"
    }
  ];

  const getActivityColor = (type: string) => {
    switch (type) {
      case 'lead': return 'bg-green-100 text-green-800';
      case 'campaign': return 'bg-blue-100 text-blue-800';
      case 'email': return 'bg-purple-100 text-purple-800';
      case 'conversion': return 'bg-yellow-100 text-yellow-800';
      case 'report': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className="p-6 bg-white/70 backdrop-blur-sm border-gray-200">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">Recent Activity</h3>
        <p className="text-sm text-gray-600">Latest updates from your campaigns</p>
      </div>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-start space-x-3">
            <div className="flex-shrink-0">
              <div className={`w-2 h-2 rounded-full mt-2 ${getActivityColor(activity.type).replace('text-', 'bg-').replace('100', '600')}`} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900">{activity.action}</p>
              <p className="text-sm text-gray-500">{activity.campaign}</p>
              <div className="flex items-center mt-1">
                <Clock className="w-3 h-3 text-gray-400 mr-1" />
                <span className="text-xs text-gray-400">{activity.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
