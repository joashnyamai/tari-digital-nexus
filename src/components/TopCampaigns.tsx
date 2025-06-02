
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const TopCampaigns = () => {
  const campaigns = [
    {
      name: "Summer Sale - Google Ads",
      status: "Active",
      budget: "$5,000",
      spent: "$3,420",
      leads: 247,
      conversions: 18,
      roi: "340%"
    },
    {
      name: "Facebook Brand Awareness",
      status: "Active", 
      budget: "$3,500",
      spent: "$2,890",
      leads: 156,
      conversions: 12,
      roi: "280%"
    },
    {
      name: "LinkedIn B2B Campaign",
      status: "Paused",
      budget: "$4,200",
      spent: "$4,100",
      leads: 89,
      conversions: 24,
      roi: "520%"
    },
    {
      name: "Email Newsletter Campaign",
      status: "Active",
      budget: "$800",
      spent: "$650",
      leads: 312,
      conversions: 45,
      roi: "890%"
    }
  ];

  const getStatusColor = (status: string) => {
    return status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800';
  };

  return (
    <Card className="p-6 bg-white/70 backdrop-blur-sm border-gray-200">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">Top Performing Campaigns</h3>
        <p className="text-sm text-gray-600">Your best campaigns by ROI and performance</p>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4 font-medium text-gray-700">Campaign</th>
              <th className="text-left py-3 px-4 font-medium text-gray-700">Status</th>
              <th className="text-left py-3 px-4 font-medium text-gray-700">Budget</th>
              <th className="text-left py-3 px-4 font-medium text-gray-700">Leads</th>
              <th className="text-left py-3 px-4 font-medium text-gray-700">Conversions</th>
              <th className="text-left py-3 px-4 font-medium text-gray-700">ROI</th>
            </tr>
          </thead>
          <tbody>
            {campaigns.map((campaign, index) => (
              <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-3 px-4">
                  <div className="font-medium text-gray-900">{campaign.name}</div>
                  <div className="text-sm text-gray-500">{campaign.spent} of {campaign.budget} spent</div>
                </td>
                <td className="py-3 px-4">
                  <Badge className={getStatusColor(campaign.status)}>
                    {campaign.status}
                  </Badge>
                </td>
                <td className="py-3 px-4 text-gray-900">{campaign.budget}</td>
                <td className="py-3 px-4 text-gray-900">{campaign.leads}</td>
                <td className="py-3 px-4 text-gray-900">{campaign.conversions}</td>
                <td className="py-3 px-4">
                  <span className="font-medium text-green-600">{campaign.roi}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};
