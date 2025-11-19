import { motion } from 'motion/react';
import { Users, Vote, UserCheck, BarChart3, Settings, LogOut, Plus, CheckCircle, Clock, AlertTriangle } from 'lucide-react';

interface AdminDashboardProps {
  onNavigate: (page: 'elections' | 'users' | 'candidates' | 'results') => void;
  onLogout: () => void;
}

export function AdminDashboard({ onNavigate, onLogout }: AdminDashboardProps) {
  const stats = [
    {
      title: 'Active Elections',
      value: '3',
      change: '+1 from last month',
      icon: Vote,
      color: 'bg-blue-500',
    },
    {
      title: 'Total Users',
      value: '1,247',
      change: '+45 this week',
      icon: Users,
      color: 'bg-purple-500',
    },
    {
      title: 'Pending Candidates',
      value: '8',
      change: 'Requires review',
      icon: UserCheck,
      color: 'bg-orange-500',
    },
    {
      title: 'Completed Elections',
      value: '12',
      change: 'All time',
      icon: BarChart3,
      color: 'bg-green-500',
    },
  ];

  const quickActions = [
    {
      title: 'Manage Elections',
      description: 'Create, edit, and configure elections',
      icon: Vote,
      color: 'bg-gradient-to-br from-[#8c1d40] to-[#a52347]',
      action: () => onNavigate('elections'),
    },
    {
      title: 'User Management',
      description: 'Control roles and permissions',
      icon: Users,
      color: 'bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6]',
      action: () => onNavigate('users'),
    },
    {
      title: 'Candidate Approvals',
      description: 'Review registration requests',
      icon: UserCheck,
      color: 'bg-gradient-to-br from-[#fdb913] to-[#f59e0b]',
      action: () => onNavigate('candidates'),
    },
    {
      title: 'Results & Reports',
      description: 'View and publish election results',
      icon: BarChart3,
      color: 'bg-gradient-to-br from-[#059669] to-[#10b981]',
      action: () => onNavigate('results'),
    },
  ];

  const recentActivity = [
    {
      type: 'success',
      title: 'Election Created',
      description: 'Graduate Elections 2025 was created successfully',
      time: '2 hours ago',
      icon: CheckCircle,
    },
    {
      type: 'warning',
      title: 'Candidate Pending',
      description: '3 new candidate registrations need approval',
      time: '4 hours ago',
      icon: AlertTriangle,
    },
    {
      type: 'info',
      title: 'Election Closing',
      description: 'Student Council election closes in 2 days',
      time: '1 day ago',
      icon: Clock,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#8c1d40] to-[#a52347] text-white">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
              <p className="text-white/80">Campus Ballot Administration Portal</p>
            </div>
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={onLogout}
              className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl hover:bg-white/20 transition-colors"
            >
              <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </motion.button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats Grid - 2x2 on mobile, 4 columns on larger screens */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
            >
              <div className={`${stat.color} w-12 h-12 rounded-xl flex items-center justify-center mb-3`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
              <p className="text-sm font-medium text-gray-600 mb-1">{stat.title}</p>
              <p className="text-xs text-gray-400">{stat.change}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {quickActions.map((action, index) => (
                <motion.button
                  key={action.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={action.action}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-left group"
                >
                  <div className={`${action.color} w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <action.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">{action.title}</h3>
                  <p className="text-sm text-gray-600">{action.description}</p>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Activity</h2>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex gap-3 pb-4 border-b border-gray-100 last:border-0 last:pb-0"
                  >
                    <div className={`
                      w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0
                      ${activity.type === 'success' ? 'bg-green-100 text-green-600' : ''}
                      ${activity.type === 'warning' ? 'bg-orange-100 text-orange-600' : ''}
                      ${activity.type === 'info' ? 'bg-blue-100 text-blue-600' : ''}
                    `}>
                      <activity.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-gray-900 text-sm">{activity.title}</p>
                      <p className="text-xs text-gray-600 mt-0.5">{activity.description}</p>
                      <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}