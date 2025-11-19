import { motion } from 'motion/react';
import { ArrowLeft, Search, CheckCircle, XCircle, Clock, User } from 'lucide-react';
import { useState } from 'react';
import { showSuccessToast } from '../../utils/errorHandling';

interface CandidateApprovalPageProps {
  onBack: () => void;
}

interface Candidate {
  id: string;
  name: string;
  studentId: string;
  email: string;
  position: string;
  election: string;
  party: string;
  statement: string;
  submittedDate: string;
  status: 'pending' | 'approved' | 'rejected';
}

export function CandidateApprovalPage({ onBack }: CandidateApprovalPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState<'all' | 'pending' | 'approved' | 'rejected'>('all');

  const [candidates, setCandidates] = useState<Candidate[]>([
    {
      id: '1',
      name: 'Sarah Johnson',
      studentId: '500000456',
      email: 'sarah@uwi.edu',
      position: 'President',
      election: 'Student Council Elections 2025',
      party: 'Unity Party',
      statement: 'I am committed to representing all students and bringing positive change to our campus community.',
      submittedDate: '2 days ago',
      status: 'pending',
    },
    {
      id: '2',
      name: 'Michael Chen',
      studentId: '500000789',
      email: 'michael@uwi.edu',
      position: 'Vice President',
      election: 'Student Council Elections 2025',
      party: 'Progress Alliance',
      statement: 'Together we can build a better future for all students on campus.',
      submittedDate: '1 day ago',
      status: 'pending',
    },
    {
      id: '3',
      name: 'Emma Davis',
      studentId: '500000321',
      email: 'emma@uwi.edu',
      position: 'Secretary',
      election: 'Student Council Elections 2025',
      party: 'Student First',
      statement: 'Experience, dedication, and a passion for student advocacy.',
      submittedDate: '3 days ago',
      status: 'approved',
    },
  ]);

  const filteredCandidates = candidates.filter(candidate => {
    const matchesSearch = 
      candidate.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      candidate.studentId.includes(searchQuery) ||
      candidate.position.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterStatus === 'all' || candidate.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const pendingCount = candidates.filter(c => c.status === 'pending').length;

  const handleApprove = (id: string) => {
    setCandidates(candidates.map(c => 
      c.id === id ? { ...c, status: 'approved' as const } : c
    ));
    showSuccessToast('Candidate approved successfully!');
  };

  const handleReject = (id: string) => {
    setCandidates(candidates.map(c => 
      c.id === id ? { ...c, status: 'rejected' as const } : c
    ));
    showSuccessToast('Candidate registration rejected');
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'rejected':
        return 'bg-red-100 text-red-700 border-red-200';
      case 'pending':
        return 'bg-orange-100 text-orange-700 border-orange-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved':
        return <CheckCircle className="w-4 h-4" />;
      case 'rejected':
        return <XCircle className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-6">
      {/* Mobile-Optimized Header */}
      <div className="bg-gradient-to-r from-[#fdb913] to-[#f59e0b] text-white sticky top-0 z-10">
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
                <h1 className="text-xl font-bold">Candidate Approvals</h1>
                <p className="text-white/80 text-xs">Review and approve candidate registrations</p>
              </div>
            </div>
            {pendingCount > 0 && (
              <div className="bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-xl">
                <p className="text-sm font-semibold">{pendingCount} Pending</p>
              </div>
            )}
          </div>

          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/60" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search candidates..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
            />
          </div>

          {/* Filter Chips - Scrollable on mobile */}
          <div className="mt-3 flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {['all', 'pending', 'approved', 'rejected'].map((status) => (
              <button
                key={status}
                onClick={() => setFilterStatus(status as any)}
                className={`px-4 py-2 rounded-xl font-medium capitalize transition-all whitespace-nowrap flex-shrink-0 ${
                  filterStatus === status
                    ? 'bg-white text-[#fdb913]'
                    : 'bg-white/10 text-white'
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Candidates List - Mobile Optimized */}
      <div className="px-4 py-4">
        <div className="space-y-4">
          {filteredCandidates.map((candidate, index) => (
            <motion.div
              key={candidate.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
            >
              {/* Candidate Header */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3 flex-1">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#fdb913] to-[#f59e0b] flex items-center justify-center text-white font-bold">
                    {candidate.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 truncate">{candidate.name}</h3>
                    <p className="text-sm text-gray-600 truncate">{candidate.email}</p>
                  </div>
                </div>
                <div className={`flex items-center gap-1.5 px-2 py-1 rounded-lg text-xs font-medium border ${getStatusColor(candidate.status)} flex-shrink-0`}>
                  {getStatusIcon(candidate.status)}
                  <span className="capitalize">{candidate.status}</span>
                </div>
              </div>

              {/* Candidate Info Grid */}
              <div className="grid grid-cols-2 gap-3 mb-3 pt-3 border-t border-gray-100">
                <div>
                  <p className="text-xs text-gray-500 mb-1">Position</p>
                  <p className="text-sm font-semibold text-gray-900">{candidate.position}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Student ID</p>
                  <p className="text-sm font-semibold text-gray-900">{candidate.studentId}</p>
                </div>
                <div className="col-span-2">
                  <p className="text-xs text-gray-500 mb-1">Election</p>
                  <p className="text-sm font-semibold text-gray-900">{candidate.election}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Party</p>
                  <p className="text-sm font-semibold text-gray-900">{candidate.party}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Submitted</p>
                  <p className="text-sm font-semibold text-gray-900">{candidate.submittedDate}</p>
                </div>
              </div>

              {/* Candidate Statement */}
              <div className="bg-gray-50 rounded-xl p-3 mb-3">
                <p className="text-xs font-medium text-gray-500 mb-1">Candidate Statement</p>
                <p className="text-sm text-gray-700">{candidate.statement}</p>
              </div>

              {/* Action Buttons */}
              {candidate.status === 'pending' && (
                <div className="flex gap-2">
                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleApprove(candidate.id)}
                    className="flex-1 px-4 py-3 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-colors flex items-center justify-center gap-2 font-semibold"
                  >
                    <CheckCircle className="w-5 h-5" />
                    <span>Approve</span>
                  </motion.button>
                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleReject(candidate.id)}
                    className="flex-1 px-4 py-3 bg-red-500 text-white rounded-xl hover:bg-red-600 transition-colors flex items-center justify-center gap-2 font-semibold"
                  >
                    <XCircle className="w-5 h-5" />
                    <span>Reject</span>
                  </motion.button>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {filteredCandidates.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <User className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No candidates found</h3>
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