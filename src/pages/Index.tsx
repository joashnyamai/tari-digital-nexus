
import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { ServicesPreview } from '@/components/ServicesPreview';
import { StatsSection } from '@/components/StatsSection';
import { CTASection } from '@/components/CTASection';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Navbar />
      <Hero />
      <StatsSection />
      <ServicesPreview />
      <CTASection />
    </div>
  );
};

export default Index;
