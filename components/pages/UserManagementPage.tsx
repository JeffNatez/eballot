import { motion } from 'motion/react';
import { ArrowLeft, Search, Plus, Shield, User, Eye, UserCog } from 'lucide-react';
import { useState } from 'react';

interface UserManagementPageProps {
  onBack: () => void;
  onAddUser: () => void;
  onEditUser: (id: string) => void;
}

interface UserData {
  id: string;
  name: string;
  email: string;
  studentId?: string;
  role: 'admin' | 'voter' | 'auditor';
  status: 'active' | 'suspended';
  lastLogin: string;
}

export function UserManagementPage({ onBack, onAddUser, onEditUser }: UserManagementPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterRole, setFilterRole] = useState<'all' | 'admin' | 'voter' | 'auditor'>('all');

  const users: UserData[] = [
    {
      id: '1',
      name: 'Admin User',
      email: 'admin@uwi.edu',
      role: 'admin',
      status: 'active',
      lastLogin: '2 hours ago',
    },
    {
      id: '2',
      name: 'Daniela Santos',
      email: 'daniela@uwi.edu',
      studentId: '500000734',
      role: 'voter',
      status: 'active',
      lastLogin: '1 day ago',
    },
    {
      id: '3',
      name: 'John Auditor',
      email: 'john.auditor@uwi.edu',
      role: 'auditor',
      status: 'active',
      lastLogin: '3 days ago',
    },
    {
      id: '4',
      name: 'Sarah Johnson',
      email: 'sarah@uwi.edu',
      studentId: '500000456',
      role: 'voter',
      status: 'active',
      lastLogin: '5 hours ago',
    },
  ];

  const filteredUsers = users.filter(user => {
    const matchesSearch = 
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.studentId?.includes(searchQuery);
    const matchesFilter = filterRole === 'all' || user.role === filterRole;
    return matchesSearch && matchesFilter;
  });

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'admin':
        return 'bg-purple-100 text-purple-700 border-purple-200';
      case 'voter':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'auditor':
        return 'bg-orange-100 text-orange-700 border-orange-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getRoleIcon = (role: string) => {
    switch (role) {
      case 'admin':
        return <Shield className="w-4 h-4" />;
      case 'auditor':
        return <Eye className="w-4 h-4" />;
      default:
        return <User className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-6">
      {/* Mobile-Optimized Header */}
      <div className="bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] text-white sticky top-0 z-10">
        <div className="px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={onBack}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
              </motion.button>
              <div>
                <h1 className="text-xl font-bold">User Management</h1>
                <p className="text-white/80 text-xs">Manage users and permissions</p>
              </div>
            </div>
          </div>

          {/* Add User Button - Full width on mobile */}
          <motion.button
            whileTap={{ scale: 0.98 }}
            onClick={onAddUser}
            className="w-full flex items-center justify-center gap-2 bg-white text-[#1e3a8a] px-4 py-3 rounded-xl font-semibold shadow-lg"
          >
            <Plus className="w-5 h-5" />
            <span>Add User</span>
          </motion.button>

          {/* Search */}
          <div className="mt-4 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/60" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name, email, or student ID..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
            />
          </div>

          {/* Filter Chips - Scrollable on mobile */}
          <div className="mt-3 flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {['all', 'admin', 'voter', 'auditor'].map((role) => (
              <button
                key={role}
                onClick={() => setFilterRole(role as any)}
                className={`px-4 py-2 rounded-xl font-medium capitalize transition-all whitespace-nowrap flex-shrink-0 ${
                  filterRole === role
                    ? 'bg-white text-[#1e3a8a]'
                    : 'bg-white/10 text-white'
                }`}
              >
                {role}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Users List - Mobile Optimized Cards */}
      <div className="px-4 py-4">
        <div className="space-y-4">
          {filteredUsers.map((user, index) => (
            <motion.div
              key={user.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
            >
              {/* User Header */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3 flex-1">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6] flex items-center justify-center text-white font-bold">
                    {user.name.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 truncate">{user.name}</h3>
                    <p className="text-sm text-gray-600 truncate">{user.email}</p>
                  </div>
                </div>

                {/* Edit Button */}
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => onEditUser(user.id)}
                  className="p-2.5 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors flex-shrink-0"
                >
                  <UserCog className="w-5 h-5 text-blue-600" />
                </motion.button>
              </div>

              {/* User Info Grid */}
              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-gray-100">
                <div>
                  <p className="text-xs text-gray-500 mb-1">Role</p>
                  <div className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-lg text-xs font-medium border ${getRoleColor(user.role)}`}>
                    {getRoleIcon(user.role)}
                    <span className="capitalize">{user.role}</span>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Status</p>
                  <div className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-lg text-xs font-medium ${
                    user.status === 'active' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-red-100 text-red-700'
                  }`}>
                    <div className={`w-2 h-2 rounded-full ${user.status === 'active' ? 'bg-green-500' : 'bg-red-500'}`} />
                    <span className="capitalize">{user.status}</span>
                  </div>
                </div>
                {user.studentId && (
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Student ID</p>
                    <p className="text-sm font-semibold text-gray-900">{user.studentId}</p>
                  </div>
                )}
                <div>
                  <p className="text-xs text-gray-500 mb-1">Last Login</p>
                  <p className="text-sm font-semibold text-gray-900">{user.lastLogin}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredUsers.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No users found</h3>
            <p className="text-gray-600">Try adjusting your search or filters</p>
          </div>
        )}
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}