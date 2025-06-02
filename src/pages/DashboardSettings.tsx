
import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { DashboardSidebar } from '@/components/DashboardSidebar';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { User, Bell, Shield, CreditCard, Globe, Mail, Phone, Building } from 'lucide-react';

const DashboardSettings = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'billing', label: 'Billing', icon: CreditCard },
    { id: 'integrations', label: 'Integrations', icon: Globe },
  ];

  const integrations = [
    { name: "Google Analytics", status: "Connected", description: "Track website analytics and performance" },
    { name: "Facebook Ads", status: "Connected", description: "Manage Facebook advertising campaigns" },
    { name: "Mailchimp", status: "Disconnected", description: "Email marketing automation platform" },
    { name: "Slack", status: "Connected", description: "Team communication and notifications" },
    { name: "HubSpot", status: "Disconnected", description: "CRM and marketing automation" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <div className="space-y-6">
            <Card className="p-6 bg-white/70 backdrop-blur-sm border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input 
                    type="text" 
                    defaultValue="John" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input 
                    type="text" 
                    defaultValue="Doe" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    defaultValue="john.doe@company.com" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input 
                    type="tel" 
                    defaultValue="+1 (555) 123-4567" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div className="mt-6">
                <Button className="bg-gradient-to-r from-blue-600 to-indigo-600">
                  Save Changes
                </Button>
              </div>
            </Card>

            <Card className="p-6 bg-white/70 backdrop-blur-sm border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Company Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                  <input 
                    type="text" 
                    defaultValue="Tari Socials" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Industry</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Digital Marketing</option>
                    <option>Technology</option>
                    <option>Healthcare</option>
                    <option>Finance</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company Address</label>
                  <textarea 
                    rows={3}
                    defaultValue="123 Marketing Street, Digital City, DC 12345"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </Card>
          </div>
        );

      case 'notifications':
        return (
          <Card className="p-6 bg-white/70 backdrop-blur-sm border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Notification Preferences</h3>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-gray-900">Email Notifications</h4>
                  <p className="text-sm text-gray-600">Receive notifications via email</p>
                </div>
                <input type="checkbox" defaultChecked className="h-4 w-4 text-blue-600" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-gray-900">Campaign Updates</h4>
                  <p className="text-sm text-gray-600">Get notified about campaign performance</p>
                </div>
                <input type="checkbox" defaultChecked className="h-4 w-4 text-blue-600" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-gray-900">Lead Notifications</h4>
                  <p className="text-sm text-gray-600">Alerts for new leads and conversions</p>
                </div>
                <input type="checkbox" defaultChecked className="h-4 w-4 text-blue-600" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-gray-900">Weekly Reports</h4>
                  <p className="text-sm text-gray-600">Weekly performance summary emails</p>
                </div>
                <input type="checkbox" className="h-4 w-4 text-blue-600" />
              </div>
            </div>
          </Card>
        );

      case 'security':
        return (
          <div className="space-y-6">
            <Card className="p-6 bg-white/70 backdrop-blur-sm border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Password & Security</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
                  <input 
                    type="password" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
                  <input 
                    type="password" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Confirm New Password</label>
                  <input 
                    type="password" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <Button className="bg-gradient-to-r from-blue-600 to-indigo-600">
                  Update Password
                </Button>
              </div>
            </Card>

            <Card className="p-6 bg-white/70 backdrop-blur-sm border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Two-Factor Authentication</h3>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-gray-900">Enable 2FA</h4>
                  <p className="text-sm text-gray-600">Add an extra layer of security to your account</p>
                </div>
                <Button variant="outline">
                  Enable 2FA
                </Button>
              </div>
            </Card>
          </div>
        );

      case 'billing':
        return (
          <div className="space-y-6">
            <Card className="p-6 bg-white/70 backdrop-blur-sm border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Current Plan</h3>
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-gray-900">Professional Plan</h4>
                    <p className="text-sm text-gray-600">$99/month • Billed monthly</p>
                  </div>
                  <Badge className="bg-green-100 text-green-800">Active</Badge>
                </div>
              </div>
              <Button variant="outline" className="mt-4">
                Change Plan
              </Button>
            </Card>

            <Card className="p-6 bg-white/70 backdrop-blur-sm border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Method</h3>
              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center">
                  <CreditCard className="w-6 h-6 text-gray-400 mr-3" />
                  <div>
                    <h4 className="font-medium text-gray-900">•••• •••• •••• 4242</h4>
                    <p className="text-sm text-gray-600">Expires 12/25</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Update
                </Button>
              </div>
            </Card>
          </div>
        );

      case 'integrations':
        return (
          <Card className="p-6 bg-white/70 backdrop-blur-sm border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Connected Services</h3>
            <div className="space-y-4">
              {integrations.map((integration, index) => (
                <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div>
                    <h4 className="font-medium text-gray-900">{integration.name}</h4>
                    <p className="text-sm text-gray-600">{integration.description}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Badge className={integration.status === 'Connected' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-gray-100 text-gray-800'
                    }>
                      {integration.status}
                    </Badge>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className={integration.status === 'Connected' ? 'text-red-600' : ''}
                    >
                      {integration.status === 'Connected' ? 'Disconnect' : 'Connect'}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Navbar />
      <div className="flex">
        <DashboardSidebar />
        <main className="flex-1 p-6 ml-64">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Settings</h1>
              <p className="text-gray-600">Manage your account and application preferences</p>
            </div>

            <div className="flex flex-col lg:flex-row gap-6">
              <div className="lg:w-1/4">
                <Card className="p-4 bg-white/70 backdrop-blur-sm border-gray-200">
                  <nav className="space-y-2">
                    {tabs.map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                          activeTab === tab.id
                            ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700'
                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                        }`}
                      >
                        <tab.icon className="w-5 h-5 mr-3" />
                        {tab.label}
                      </button>
                    ))}
                  </nav>
                </Card>
              </div>

              <div className="lg:w-3/4">
                {renderContent()}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardSettings;
