
import { Link, useLocation } from 'react-router-dom';
import { 
  TrendingUp, 
  Users, 
  Target, 
  Mail, 
  BarChart3, 
  Settings,
  Search,
  PenTool
} from 'lucide-react';

export const DashboardSidebar = () => {
  const location = useLocation();
  
  const navigation = [
    { name: 'Overview', href: '/dashboard', icon: BarChart3 },
    { name: 'Campaigns', href: '/dashboard/campaigns', icon: Target },
    { name: 'Analytics', href: '/dashboard/analytics', icon: TrendingUp },
    { name: 'Leads', href: '/dashboard/leads', icon: Users },
    { name: 'Email Marketing', href: '/dashboard/email', icon: Mail },
    { name: 'SEO Tools', href: '/dashboard/seo', icon: Search },
    { name: 'Content', href: '/dashboard/content', icon: PenTool },
    { name: 'Settings', href: '/dashboard/settings', icon: Settings },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="fixed left-0 top-16 h-full w-64 bg-white/80 backdrop-blur-lg border-r border-gray-200 z-40">
      <div className="p-6">
        <nav className="space-y-2">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                isActive(item.href)
                  ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              <item.icon className="w-5 h-5 mr-3" />
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};
