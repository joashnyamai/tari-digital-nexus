
import { Card } from '@/components/ui/card';
import { Search, TrendingUp, Mail, PenTool, Zap, Target } from 'lucide-react';

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
    <section className="py-16 particle-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 stagger-animation">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 animate-text-reveal">
            Complete Marketing Solutions
            <Zap className="inline-block w-8 h-8 ml-2 text-red-600 animate-digital-pulse" />
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-text-reveal" style={{ animationDelay: '0.3s' }}>
            Everything you need to grow your business in one comprehensive platform
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-animation">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="professional-card p-6 bg-white/70 backdrop-blur-sm border-gray-200 shadow-lg group animate-power-glow" 
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-center">
                <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-red-500 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-lg animate-marketing-bounce group-hover:animate-digital-pulse">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300 animate-text-reveal">{service.title}</h3>
                <p className="text-gray-600 text-sm group-hover:text-gray-800 transition-colors duration-300">{service.description}</p>
                <div className="mt-4 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Target className="w-4 h-4 text-red-600 animate-digital-pulse" />
                  <span className="ml-1 text-xs text-red-600 font-semibold">Learn More</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
