
import React from 'react';
import { Button } from '@/components/ui/button';
import { TrendingUp, Users, Target, Star, ArrowRight, Zap, Rocket } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="pt-20 pb-16 relative overflow-hidden particle-bg">
      {/* Enhanced background with digital grid */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-green-50 to-red-50 digital-grid"></div>
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23000000%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      
      {/* Floating elements for digital marketing feel */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-green-500/20 rounded-full animate-data-flow"></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-red-500/20 rounded-full animate-data-flow" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-20 left-20 w-2 h-2 bg-green-600/30 rounded-full animate-marketing-bounce" style={{ animationDelay: '2s' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center stagger-animation">
          <div className="mb-8">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-green-100 to-red-100 text-gray-800 text-sm font-medium mb-6 shadow-lg animate-power-glow hover:scale-105 transition-all duration-300 professional-card">
              <Star className="w-4 h-4 mr-2 text-red-600 animate-digital-pulse" />
              <span className="font-semibold text-green-700">Trusted by 500+ brands worldwide</span>
              <div className="flex ml-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 text-red-500 fill-current animate-marketing-bounce" style={{ animationDelay: `${i * 0.2}s` }} />
                ))}
              </div>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="inline-block animate-magnetic-hover animate-text-reveal">Transform Your Digital</span>
            <div className="mt-2">
              <span className="bg-gradient-to-r from-green-700 to-green-600 bg-clip-text text-transparent inline-block animate-magnetic-hover animate-gradient animate-text-reveal" style={{ animationDelay: '0.3s' }}> Marketing</span>
            </div>
            <div className="mt-2" style={{ animationDelay: '0.6s' }}>
              <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent inline-block animate-magnetic-hover animate-text-reveal">Results Guaranteed</span>
              <Rocket className="inline-block w-8 h-8 ml-2 text-red-600 animate-float" />
            </div>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 animate-text-reveal" style={{ animationDelay: '0.9s' }}>
            Accelerate your business growth with data-driven marketing strategies. 
            Our AI-powered platform delivers <span className="font-semibold text-red-600 animate-magnetic-hover inline-block">measurable results</span> across all digital channels.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12" style={{ animationDelay: '1.2s' }}>
            <Button size="lg" className="power-button bg-gradient-to-r from-green-700 to-green-600 hover:from-green-800 hover:to-green-700 text-white px-8 py-4 text-lg font-semibold shadow-xl animate-power-glow">
              <Zap className="mr-2 w-5 h-5 animate-digital-pulse" />
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="power-button px-8 py-4 text-lg border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-semibold shadow-lg">
              View Demo
            </Button>
          </div>
          
          {/* Enhanced special offer banner */}
          <div className="mb-12 p-6 bg-gradient-to-r from-red-600 to-red-500 rounded-xl text-white shadow-2xl mx-auto max-w-2xl professional-card animate-power-glow" style={{ animationDelay: '1.5s' }}>
            <div className="flex items-center justify-center space-x-3">
              <Target className="w-6 h-6 animate-marketing-bounce" />
              <span className="text-lg font-bold">Limited Time: 50% Off First Month + Free Setup!</span>
              <Zap className="w-6 h-6 animate-digital-pulse" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto stagger-animation">
            <div className="text-center professional-card bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-green-100 group">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-green-700 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg animate-power-glow">
                <TrendingUp className="w-8 h-8 text-white animate-magnetic-hover" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">300% ROI</h3>
              <p className="text-gray-600">Average return on investment for our clients</p>
              <div className="mt-3 text-green-600 font-semibold animate-digital-pulse">Guaranteed Results</div>
            </div>
            
            <div className="text-center professional-card bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-red-100 group">
              <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg animate-power-glow">
                <Users className="w-8 h-8 text-white animate-magnetic-hover" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-300">10M+ Leads</h3>
              <p className="text-gray-600">Generated for businesses worldwide</p>
              <div className="mt-3 text-red-600 font-semibold animate-digital-pulse">Proven Track Record</div>
            </div>
            
            <div className="text-center professional-card bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-green-100 group">
              <div className="w-16 h-16 bg-gradient-to-r from-green-700 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg animate-power-glow">
                <Target className="w-8 h-8 text-white animate-magnetic-hover" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">98% Accuracy</h3>
              <p className="text-gray-600">AI-powered targeting and optimization</p>
              <div className="mt-3 text-green-600 font-semibold animate-digital-pulse">Cutting-Edge Tech</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
