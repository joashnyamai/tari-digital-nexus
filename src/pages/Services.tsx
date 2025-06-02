
import { Navbar } from '@/components/Navbar';
import { ServiceCard } from '@/components/ServiceCard';
import { Search, TrendingUp, Mail, PenTool, Target, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Boost your search rankings with our advanced SEO strategies and technical optimization.",
      features: ["Keyword Research", "Technical SEO", "Content Optimization", "Link Building"],
      price: "Starting at $2,500/mo"
    },
    {
      icon: TrendingUp,
      title: "Social Media Marketing",
      description: "Engage your audience across all platforms with data-driven social media campaigns.",
      features: ["Content Creation", "Community Management", "Social Analytics", "Influencer Outreach"],
      price: "Starting at $1,800/mo"
    },
    {
      icon: Mail,
      title: "Email Campaigns",
      description: "Convert leads into customers with personalized, automated email marketing campaigns.",
      features: ["Email Automation", "A/B Testing", "Segmentation", "Performance Tracking"],
      price: "Starting at $800/mo"
    },
    {
      icon: PenTool,
      title: "Content Strategy",
      description: "Create compelling content that resonates with your audience and drives conversions.",
      features: ["Content Planning", "Editorial Calendar", "Brand Voice", "Content Analytics"],
      price: "Starting at $1,200/mo"
    },
    {
      icon: Target,
      title: "Paid Advertising",
      description: "Maximize ROI with targeted advertising campaigns across Google, Facebook, and LinkedIn.",
      features: ["Campaign Setup", "Ad Creation", "Bid Management", "ROI Optimization"],
      price: "Starting at $2,000/mo"
    },
    {
      icon: Users,
      title: "CRM & Lead Management",
      description: "Streamline your sales process with our comprehensive CRM and lead nurturing solutions.",
      features: ["Lead Scoring", "Pipeline Management", "Sales Automation", "Reporting"],
      price: "Starting at $1,500/mo"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Navbar />
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital marketing solutions designed to accelerate your business growth
              and maximize your return on investment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
