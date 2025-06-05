
import { Card } from '@/components/ui/card';

export const StatsSection = () => {
  const stats = [
    { label: "Active Campaigns", value: "2,847", change: "+12%" },
    { label: "Total Revenue", value: "$847K", change: "+23%" },
    { label: "Conversion Rate", value: "4.8%", change: "+8%" },
    { label: "Clients Served", value: "500+", change: "+15%" }
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className="p-6 bg-white/70 backdrop-blur-sm border-gray-200 hover:shadow-2xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 group animate-fade-in hover:rotate-1" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-green-600 group-hover:to-red-600 group-hover:bg-clip-text transition-all duration-300 animate-pulse">{stat.value}</div>
                <div className="text-sm text-gray-600 mb-1 group-hover:text-gray-800 transition-colors duration-300">{stat.label}</div>
                <div className="text-sm font-medium text-green-600 animate-bounce group-hover:scale-110 transition-transform duration-300">{stat.change}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
