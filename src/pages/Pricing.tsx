
import { Navbar } from '@/components/Navbar';
import { PricingCard } from '@/components/PricingCard';
import { PricingCalculator } from '@/components/PricingCalculator';
import { Check } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: 2500,
      description: "Perfect for small businesses getting started with digital marketing",
      features: [
        "Basic SEO optimization",
        "Social media management (2 platforms)",
        "Monthly reporting",
        "Email support",
        "Up to 5 campaigns"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: 5000,
      description: "Ideal for growing businesses ready to scale their marketing efforts",
      features: [
        "Advanced SEO & content strategy",
        "Social media management (all platforms)",
        "Email marketing automation",
        "Weekly reporting & analytics",
        "Dedicated account manager",
        "Up to 15 campaigns",
        "A/B testing"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: 10000,
      description: "Comprehensive solution for large organizations and agencies",
      features: [
        "Full-service marketing suite",
        "Custom integrations",
        "Advanced analytics & BI",
        "24/7 priority support",
        "Multiple team members",
        "Unlimited campaigns",
        "White-label options",
        "Custom reporting"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Navbar />
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Transparent Pricing
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect plan for your business needs. All plans include our core features
              with no hidden fees or long-term contracts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => (
              <PricingCard key={index} {...plan} />
            ))}
          </div>

          <PricingCalculator />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
