
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import DashboardCampaigns from "./pages/DashboardCampaigns";
import DashboardAnalytics from "./pages/DashboardAnalytics";
import DashboardLeads from "./pages/DashboardLeads";
import DashboardEmail from "./pages/DashboardEmail";
import DashboardSEO from "./pages/DashboardSEO";
import DashboardContent from "./pages/DashboardContent";
import DashboardSettings from "./pages/DashboardSettings";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/campaigns" element={<DashboardCampaigns />} />
          <Route path="/dashboard/analytics" element={<DashboardAnalytics />} />
          <Route path="/dashboard/leads" element={<DashboardLeads />} />
          <Route path="/dashboard/email" element={<DashboardEmail />} />
          <Route path="/dashboard/seo" element={<DashboardSEO />} />
          <Route path="/dashboard/content" element={<DashboardContent />} />
          <Route path="/dashboard/settings" element={<DashboardSettings />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
