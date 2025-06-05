
import { Card } from '@/components/ui/card';
import { TrendingUp, Users, Target, Zap } from 'lucide-react';

export const StatsSection = () => {
  const stats = [
    { 
      label: "Active Campaigns", 
      value: "2,847", 
      change: "+12%", 
      icon: Target,
      description: "Growing monthly"
    },
    { 
      label: "Total Revenue", 
      value: "$847K", 
      change: "+23%", 
      icon: TrendingUp,
      description: "Client revenue generated"
    },
    { 
      label: "Conversion Rate", 
      value: "4.8%", 
      change: "+8%", 
      icon: Zap,
      description: "Above industry average"
    },
    { 
      label: "Clients Served", 
      value: "500+", 
      change: "+15%", 
      icon: Users,
      description: "Satisfied businesses"
    }
  ];

  return (
    <section className="py-16 particle-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 stagger-animation">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 animate-text-reveal">
            Proven Results That Drive Growth
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-text-reveal" style={{ animationDelay: '0.3s' }}>
            Our data-driven approach delivers measurable success for our clients
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-animation">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className="professional-card p-6 bg-white/70 backdrop-blur-sm border-gray-200 shadow-lg group animate-power-glow" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg animate-marketing-bounce">
                  <stat.icon className="w-6 h-6 text-white animate-digital-pulse" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-green-600 group-hover:to-red-600 group-hover:bg-clip-text transition-all duration-300 animate-text-reveal">{stat.value}</div>
                <div className="text-sm text-gray-600 mb-1 group-hover:text-gray-800 transition-colors duration-300 font-semibold">{stat.label}</div>
                <div className="text-xs text-gray-500 mb-2">{stat.description}</div>
                <div className="text-sm font-medium text-green-600 animate-digital-pulse group-hover:scale-110 transition-transform duration-300">{stat.change}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
