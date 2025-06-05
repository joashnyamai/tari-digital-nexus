
import { Card } from '@/components/ui/card';
import { Search, TrendingUp, Mail, PenTool } from 'lucide-react';

export const ServicesPreview = () => {
  const services = [
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Boost your search rankings with advanced SEO strategies"
    },
    {
      icon: TrendingUp,
      title: "Social Media Marketing",
      description: "Engage audiences across all platforms with data-driven campaigns"
    },
    {
      icon: Mail,
      title: "Email Campaigns",
      description: "Convert leads with personalized, automated email marketing"
    },
    {
      icon: PenTool,
      title: "Content Strategy",
      description: "Create compelling content that drives conversions"
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 hover:scale-105 transition-transform duration-300">
            Complete Marketing Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to grow your business in one comprehensive platform
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="p-6 bg-white/70 backdrop-blur-sm border-gray-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:rotate-1 group animate-fade-in transform hover:scale-105" 
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-red-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <service.icon className="w-6 h-6 text-white group-hover:animate-pulse" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">{service.title}</h3>
                <p className="text-gray-600 text-sm group-hover:text-gray-800 transition-colors duration-300">{service.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
