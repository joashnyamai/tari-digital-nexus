
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
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Complete Marketing Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to grow your business in one comprehensive platform
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="p-6 bg-white/70 backdrop-blur-sm border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
