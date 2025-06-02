
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

interface PricingCardProps {
  name: string;
  price: number;
  description: string;
  features: string[];
  popular: boolean;
}

export const PricingCard = ({ name, price, description, features, popular }: PricingCardProps) => {
  return (
    <Card className={`p-6 bg-white/70 backdrop-blur-sm border-gray-200 hover:shadow-lg transition-all duration-300 relative ${
      popular ? 'ring-2 ring-blue-500 scale-105' : ''
    }`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-1 rounded-full text-sm font-medium">
            Most Popular
          </span>
        </div>
      )}
      
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{name}</h3>
        <div className="text-3xl font-bold text-gray-900 mb-2">
          ${price.toLocaleString()}
          <span className="text-lg font-normal text-gray-600">/month</span>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
      
      <div className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start">
            <Check className="w-4 h-4 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
            <span className="text-sm text-gray-700">{feature}</span>
          </div>
        ))}
      </div>
      
      <Button 
        className={`w-full ${
          popular 
            ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700' 
            : 'bg-gray-900 hover:bg-gray-800'
        }`}
      >
        Get Started
      </Button>
    </Card>
  );
};
