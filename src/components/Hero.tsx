
import React from 'react';
import { Button } from '@/components/ui/button';
import { TrendingUp, Users, Target, Star, ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="pt-20 pb-16 relative overflow-hidden">
      {/* Background gradient with subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-green-50 to-red-50"></div>
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23000000%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-green-100 to-red-100 text-gray-800 text-sm font-medium mb-6 shadow-lg animate-fade-in hover:scale-105 transition-all duration-300">
              <Star className="w-4 h-4 mr-2 text-red-600 animate-pulse" />
              <span className="font-semibold text-green-700">Trusted by 500+ brands worldwide</span>
              <div className="flex ml-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 text-red-500 fill-current animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
                ))}
              </div>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight animate-fade-in">
            <span className="inline-block hover:scale-105 transition-transform duration-300">Transform Your Digital</span>
            <span className="bg-gradient-to-r from-green-700 to-green-600 bg-clip-text text-transparent inline-block hover:scale-105 transition-transform duration-300 animate-fade-in" style={{ animationDelay: '0.2s' }}> Marketing</span>
            <div className="mt-2 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent inline-block hover:scale-105 transition-transform duration-300">Results Guaranteed</span>
            </div>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            Accelerate your business growth with data-driven marketing strategies. 
            Our AI-powered platform delivers <span className="font-semibold text-red-600 hover:scale-105 inline-block transition-transform duration-300">measurable results</span> across all digital channels.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <Button size="lg" className="bg-gradient-to-r from-green-700 to-green-600 hover:from-green-800 hover:to-green-700 text-white px-8 py-4 text-lg font-semibold shadow-xl transform hover:scale-110 hover:rotate-1 transition-all duration-300 hover:shadow-2xl animate-pulse">
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-semibold shadow-lg transform hover:scale-110 hover:-rotate-1 transition-all duration-300 hover:shadow-2xl">
              View Demo
            </Button>
          </div>
          
          {/* Special offer banner with enhanced animations */}
          <div className="mb-12 p-4 bg-gradient-to-r from-red-600 to-red-500 rounded-xl text-white shadow-2xl mx-auto max-w-2xl animate-fade-in hover:scale-105 transition-all duration-300 hover:shadow-3xl" style={{ animationDelay: '1s' }}>
            <div className="flex items-center justify-center space-x-2">
              <Target className="w-6 h-6 animate-spin" style={{ animationDuration: '3s' }} />
              <span className="text-lg font-bold animate-pulse">Limited Time: 50% Off First Month + Free Setup!</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-green-100 transform hover:scale-105 hover:-translate-y-2 animate-fade-in group" style={{ animationDelay: '1.2s' }}>
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-green-700 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:rotate-12 transition-transform duration-300">
                <TrendingUp className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">300% ROI</h3>
              <p className="text-gray-600">Average return on investment for our clients</p>
              <div className="mt-3 text-green-600 font-semibold animate-pulse">Guaranteed Results</div>
            </div>
            
            <div className="text-center bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-red-100 transform hover:scale-105 hover:-translate-y-2 animate-fade-in group" style={{ animationDelay: '1.4s' }}>
              <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:rotate-12 transition-transform duration-300">
                <Users className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-300">10M+ Leads</h3>
              <p className="text-gray-600">Generated for businesses worldwide</p>
              <div className="mt-3 text-red-600 font-semibold animate-pulse">Proven Track Record</div>
            </div>
            
            <div className="text-center bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-green-100 transform hover:scale-105 hover:-translate-y-2 animate-fade-in group" style={{ animationDelay: '1.6s' }}>
              <div className="w-16 h-16 bg-gradient-to-r from-green-700 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:rotate-12 transition-transform duration-300">
                <Target className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">98% Accuracy</h3>
              <p className="text-gray-600">AI-powered targeting and optimization</p>
              <div className="mt-3 text-green-600 font-semibold animate-pulse">Cutting-Edge Tech</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
