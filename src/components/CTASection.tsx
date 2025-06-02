
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Star } from 'lucide-react';

export const CTASection = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-red-600 via-red-500 to-green-600 rounded-2xl p-12 text-center text-white shadow-2xl relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="white" fill-opacity="0.2"%3E%3Cpath d="M20 20c0-11.046-8.954-20-20-20v20h20z"/%3E%3C/g%3E%3C/svg%3E')]"></div>
          
          <div className="relative z-10">
            {/* Urgency indicator */}
            <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full mb-6 backdrop-blur-sm">
              <Star className="w-4 h-4 mr-2" />
              <span className="font-semibold">Limited Time Offer - Act Now!</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Ready to Transform Your Marketing?
            </h2>
            <p className="text-xl mb-2 opacity-90">
              Join thousands of businesses that trust Tari Socials for their digital marketing success
            </p>
            <p className="text-lg mb-8 font-semibold">
              🚀 Get 50% Off Your First Month + Free $2,000 Setup Package
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 text-lg font-bold shadow-xl transform hover:scale-105 transition-all duration-300">
                Claim Your Discount Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-4 text-lg bg-transparent border-2 border-white text-white hover:bg-white hover:text-red-600 font-semibold shadow-lg transform hover:scale-105 transition-all duration-300">
                <Phone className="mr-2 w-5 h-5" />
                Call Now: (555) 123-4567
              </Button>
            </div>
            
            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm opacity-90">
              <div className="flex items-center">
                <Star className="w-4 h-4 mr-1" />
                30-Day Money Back Guarantee
              </div>
              <div className="flex items-center">
                <Star className="w-4 h-4 mr-1" />
                No Setup Fees
              </div>
              <div className="flex items-center">
                <Star className="w-4 h-4 mr-1" />
                Cancel Anytime
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
