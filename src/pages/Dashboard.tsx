
import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { DashboardSidebar } from '@/components/DashboardSidebar';
import { MetricsCards } from '@/components/MetricsCards';
import { CampaignChart } from '@/components/CampaignChart';
import { RecentActivity } from '@/components/RecentActivity';
import { TopCampaigns } from '@/components/TopCampaigns';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Navbar />
      <div className="flex">
        <DashboardSidebar />
        <main className="flex-1 p-6 ml-64">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
              <p className="text-gray-600">Monitor your campaigns and track performance</p>
            </div>
            
            <MetricsCards />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <CampaignChart />
              <RecentActivity />
            </div>
            
            <TopCampaigns />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
