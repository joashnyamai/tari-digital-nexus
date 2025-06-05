
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Star, Zap, Target, TrendingUp } from 'lucide-react';

export const CTASection = () => {
  return (
    <section className="py-16 particle-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-red-600 via-red-500 to-green-600 rounded-2xl p-12 text-center text-white shadow-2xl relative overflow-hidden professional-card animate-power-glow">
          {/* Enhanced background pattern */}
          <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22white%22%20fill-opacity%3D%220.2%22%3E%3Cpath%20d%3D%22M20%2020c0-11.046-8.954-20-20-20v20h20z%22/%3E%3C/g%3E%3C/svg%3E')] animate-gradient"></div>
          
          {/* Floating power elements */}
          <div className="absolute top-4 left-4 w-3 h-3 bg-white/30 rounded-full animate-data-flow"></div>
          <div className="absolute top-8 right-8 w-4 h-4 bg-white/20 rounded-full animate-marketing-bounce" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-8 left-8 w-2 h-2 bg-white/25 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-12 right-12 w-3 h-3 bg-white/20 rounded-full animate-digital-pulse" style={{ animationDelay: '1.5s' }}></div>
          
          <div className="relative z-10 stagger-animation">
            {/* Enhanced urgency indicator */}
            <div className="inline-flex items-center px-6 py-3 bg-white/20 rounded-full mb-6 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 professional-card animate-power-glow">
              <Zap className="w-5 h-5 mr-2 animate-digital-pulse" />
              <span className="font-semibold">Limited Time Offer - Act Now!</span>
              <TrendingUp className="w-4 h-4 ml-2 animate-marketing-bounce" />
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-4 animate-text-reveal" style={{ animationDelay: '0.2s' }}>
              Ready to Transform Your Marketing?
            </h2>
            <p className="text-xl mb-2 opacity-90 animate-text-reveal" style={{ animationDelay: '0.4s' }}>
              Join thousands of businesses that trust Tari Socials for their digital marketing success
            </p>
            <p className="text-lg mb-8 font-semibold animate-marketing-bounce" style={{ animationDelay: '0.6s' }}>
              🚀 Get 50% Off Your First Month + Free $2,000 Setup Package
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8" style={{ animationDelay: '0.8s' }}>
              <Button size="lg" className="power-button bg-white text-red-600 hover:bg-gray-100 px-8 py-4 text-lg font-bold shadow-xl group">
                <Target className="mr-2 w-5 h-5 animate-digital-pulse" />
                Claim Your Discount Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:animate-marketing-bounce" />
              </Button>
              <Button size="lg" variant="outline" className="power-button px-8 py-4 text-lg bg-transparent border-2 border-white text-white hover:bg-white hover:text-red-600 font-semibold shadow-lg group">
                <Phone className="mr-2 w-5 h-5 animate-digital-pulse" />
                Call Now: (555) 123-4567
              </Button>
            </div>
            
            {/* Enhanced trust indicators */}
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm opacity-90 stagger-animation" style={{ animationDelay: '1s' }}>
              <div className="flex items-center professional-card">
                <Star className="w-4 h-4 mr-1 animate-digital-pulse" />
                30-Day Money Back Guarantee
              </div>
              <div className="flex items-center professional-card">
                <Star className="w-4 h-4 mr-1 animate-digital-pulse" style={{ animationDelay: '0.3s' }} />
                No Setup Fees
              </div>
              <div className="flex items-center professional-card">
                <Star className="w-4 h-4 mr-1 animate-digital-pulse" style={{ animationDelay: '0.6s' }} />
                Cancel Anytime
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
