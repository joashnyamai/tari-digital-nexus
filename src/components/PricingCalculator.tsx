
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';

export const PricingCalculator = () => {
  const [campaignCount, setCampaignCount] = useState([5]);
  const [leadGoal, setLeadGoal] = useState([1000]);
  const [platforms, setPlatforms] = useState([3]);

  const calculatePrice = () => {
    const basePrice = 1500;
    const campaignMultiplier = campaignCount[0] * 200;
    const leadMultiplier = Math.floor(leadGoal[0] / 500) * 300;
    const platformMultiplier = platforms[0] * 250;
    
    return basePrice + campaignMultiplier + leadMultiplier + platformMultiplier;
  };

  const estimatedPrice = calculatePrice();

  return (
    <Card className="p-8 bg-white/70 backdrop-blur-sm border-gray-200">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Pricing Calculator</h3>
        <p className="text-gray-600">Customize your plan based on your specific needs</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <Label className="text-base font-medium text-gray-900 mb-3 block">
              Number of Campaigns: {campaignCount[0]}
            </Label>
            <Slider
              value={campaignCount}
              onValueChange={setCampaignCount}
              max={20}
              min={1}
              step={1}
              className="w-full"
            />
          </div>
          
          <div>
            <Label className="text-base font-medium text-gray-900 mb-3 block">
              Monthly Lead Goal: {leadGoal[0].toLocaleString()}
            </Label>
            <Slider
              value={leadGoal}
              onValueChange={setLeadGoal}
              max={5000}
              min={100}
              step={100}
              className="w-full"
            />
          </div>
          
          <div>
            <Label className="text-base font-medium text-gray-900 mb-3 block">
              Marketing Platforms: {platforms[0]}
            </Label>
            <Slider
              value={platforms}
              onValueChange={setPlatforms}
              max={8}
              min={1}
              step={1}
              className="w-full"
            />
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Your Custom Plan</h4>
          
          <div className="space-y-3 mb-6">
            <div className="flex justify-between">
              <span className="text-gray-600">Base Plan</span>
              <span className="font-medium">$1,500</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Campaigns ({campaignCount[0]})</span>
              <span className="font-medium">+${(campaignCount[0] * 200).toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Lead Volume</span>
              <span className="font-medium">+${(Math.floor(leadGoal[0] / 500) * 300).toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Platforms ({platforms[0]})</span>
              <span className="font-medium">+${(platforms[0] * 250).toLocaleString()}</span>
            </div>
            <hr className="border-gray-300" />
            <div className="flex justify-between text-lg font-bold">
              <span>Total Monthly Cost</span>
              <span className="text-blue-600">${estimatedPrice.toLocaleString()}</span>
            </div>
          </div>
          
          <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
            Get Custom Quote
          </Button>
        </div>
      </div>
    </Card>
  );
};
