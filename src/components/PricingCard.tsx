
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Star, Zap } from 'lucide-react';

interface PricingCardProps {
  name: string;
  price: number;
  description: string;
  features: string[];
  popular: boolean;
}

export const PricingCard = ({ name, price, description, features, popular }: PricingCardProps) => {
  const discount = popular ? Math.round(price * 0.5) : 0;
  const finalPrice = popular ? price - discount : price;

  return (
    <Card className={`p-6 bg-white/90 backdrop-blur-sm border-gray-200 hover:shadow-2xl transition-all duration-300 relative transform hover:scale-105 ${
      popular ? 'ring-2 ring-red-500 scale-105 shadow-xl' : ''
    }`}>
      {popular && (
        <>
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
            <span className="bg-gradient-to-r from-red-600 to-red-500 text-white px-4 py-1 rounded-full text-sm font-bold flex items-center">
              <Star className="w-4 h-4 mr-1" />
              Most Popular - 50% OFF
            </span>
          </div>
          <div className="absolute -top-1 -right-1 bg-green-500 text-white rounded-full p-2">
            <Zap className="w-4 h-4" />
          </div>
        </>
      )}
      
      <div className="text-center mb-6 pt-4">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{name}</h3>
        <div className="mb-2">
          {popular && (
            <div className="text-lg text-red-600 line-through opacity-75">
              ${price.toLocaleString()}/month
            </div>
          )}
          <div className="text-3xl font-bold text-gray-900">
            ${finalPrice.toLocaleString()}
            <span className="text-lg font-normal text-gray-600">/month</span>
          </div>
          {popular && (
            <div className="text-green-600 font-semibold text-sm">
              Save ${discount.toLocaleString()}/month!
            </div>
          )}
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
        {popular && (
          <div className="flex items-start bg-red-50 p-2 rounded">
            <Star className="w-4 h-4 text-red-500 mr-3 flex-shrink-0 mt-0.5" />
            <span className="text-sm text-red-700 font-semibold">FREE Setup Worth $2,000</span>
          </div>
        )}
      </div>
      
      <Button 
        className={`w-full font-bold text-lg py-3 transition-all duration-300 ${
          popular 
            ? 'bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 shadow-lg transform hover:scale-105' 
            : 'bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800'
        }`}
      >
        {popular ? 'Claim 50% Discount' : 'Get Started'}
      </Button>
      
      {popular && (
        <p className="text-center text-xs text-gray-500 mt-2">
          Limited time offer - ends soon!
        </p>
      )}
    </Card>
  );
};
