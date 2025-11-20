import { motion } from 'motion/react';
import { ArrowLeft, Plus, Search, Edit, Trash2, Lock, Unlock, Calendar, Users } from 'lucide-react';
import { useState } from 'react';

interface ElectionManagementPageProps {
  onBack: () => void;
  onCreateElection: () => void;
  onEditElection: (id: string) => void;
}

interface Election {
  id: string;
  title: string;
  dateRange: string;
  status: 'active' | 'upcoming' | 'closed';
  candidates: number;
  votes: number;
}

export function ElectionManagementPage({ onBack, onCreateElection, onEditElection }: ElectionManagementPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState<'all' | 'active' | 'upcoming' | 'closed'>('all');

  const elections: Election[] = [
    {
      id: 'grad-2025',
      title: 'Graduate Elections 2025',
      dateRange: 'Dec 10-12, 2025',
      status: 'active',
      candidates: 12,
      votes: 456,
    },
    {
      id: 'student-council',
      title: 'Student Council Elections',
      dateRange: 'Oct 15-17, 2025',
      status: 'active',
      candidates: 8,
      votes: 1234,
    },
    {
      id: 'faculty-2026',
      title: 'Faculty Elections 2026',
      dateRange: 'Jan 5-10, 2026',
      status: 'upcoming',
      candidates: 0,
      votes: 0,
    },
    {
      id: 'guild-2024',
      title: 'Guild Executive 2024',
      dateRange: 'Nov 12, 2024',
      status: 'closed',
      candidates: 15,
      votes: 2450,
    },
  ];

  const filteredElections = elections.filter(election => {
    const matchesSearch = election.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterStatus === 'all' || election.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'upcoming':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'closed':
        return 'bg-gray-100 text-gray-700 border-gray-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active':
        return <Unlock className="w-4 h-4" />;
      case 'closed':
        return <Lock className="w-4 h-4" />;
      default:
        return <Calendar className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-6">
      {/* Mobile-Optimized Header */}
      <div className="bg-gradient-to-r from-[#8c1d40] to-[#a52347] text-white sticky top-0 z-10">
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
                <h1 className="text-xl font-bold">Election Management</h1>
                <p className="text-white/80 text-xs">Create and manage elections</p>
              </div>
            </div>
          </div>

          {/* Create Button - Full width on mobile */}
          <motion.button
            whileTap={{ scale: 0.98 }}
            onClick={onCreateElection}
            className="w-full flex items-center justify-center gap-2 bg-white text-[#8c1d40] px-4 py-3 rounded-xl font-semibold shadow-lg"
          >
            <Plus className="w-5 h-5" />
            <span>Create Election</span>
          </motion.button>

          {/* Search */}
          <div className="mt-4 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/60" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search elections..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
            />
          </div>

          {/* Filter Chips - Scrollable on mobile */}
          <div className="mt-3 flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {['all', 'active', 'upcoming', 'closed'].map((status) => (
              <button
                key={status}
                onClick={() => setFilterStatus(status as any)}
                className={`px-4 py-2 rounded-xl font-medium capitalize transition-all whitespace-nowrap flex-shrink-0 ${
                  filterStatus === status
                    ? 'bg-white text-[#8c1d40]'
                    : 'bg-white/10 text-white'
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Elections List - Mobile Optimized Cards */}
      <div className="px-4 py-4">
        <div className="space-y-4">
          {filteredElections.map((election, index) => (
            <motion.div
              key={election.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1 pr-2">
                  <h3 className="font-bold text-gray-900 mb-2">{election.title}</h3>
                  <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(election.status)}`}>
                    {getStatusIcon(election.status)}
                    <span className="capitalize">{election.status}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-2">
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => onEditElection(election.id)}
                    className="p-2.5 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors"
                  >
                    <Edit className="w-5 h-5 text-blue-600" />
                  </motion.button>
                  {election.status !== 'active' && (
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      className="p-2.5 rounded-xl bg-red-50 hover:bg-red-100 transition-colors"
                    >
                      <Trash2 className="w-5 h-5 text-red-600" />
                    </motion.button>
                  )}
                </div>
              </div>

              {/* Info Grid */}
              <div className="grid grid-cols-3 gap-3 pt-3 border-t border-gray-100">
                <div>
                  <div className="flex items-center gap-1 text-gray-500 mb-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <p className="text-xs">Dates</p>
                  </div>
                  <p className="text-sm font-semibold text-gray-900">{election.dateRange}</p>
                </div>
                <div>
                  <div className="flex items-center gap-1 text-gray-500 mb-1">
                    <Users className="w-3.5 h-3.5" />
                    <p className="text-xs">Candidates</p>
                  </div>
                  <p className="text-sm font-semibold text-gray-900">{election.candidates}</p>
                </div>
                {election.status === 'active' && (
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Votes</p>
                    <p className="text-sm font-semibold text-[#8c1d40]">{election.votes}</p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {filteredElections.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No elections found</h3>
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