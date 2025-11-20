import { motion } from 'motion/react';
import { ArrowLeft, Download, Eye, Lock, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { showSuccessToast } from '../../utils/errorHandling';

interface ResultsTallyingPageProps {
  onBack: () => void;
}

interface ElectionResult {
  id: string;
  title: string;
  status: 'tallying' | 'completed' | 'published';
  closedDate: string;
  totalVotes: number;
  positions: Array<{
    title: string;
    candidates: Array<{
      name: string;
      votes: number;
      percentage: number;
    }>;
  }>;
}

export function ResultsTallyingPage({ onBack }: ResultsTallyingPageProps) {
  const [elections, setElections] = useState<ElectionResult[]>([
    {
      id: 'guild-2024',
      title: 'Guild Executive Elections 2024',
      status: 'completed',
      closedDate: 'Nov 12, 2024',
      totalVotes: 2450,
      positions: [
        {
          title: 'Guild President',
          candidates: [
            { name: 'Michael Chen', votes: 1050, percentage: 42.9 },
            { name: 'Lisa Rodriguez', votes: 850, percentage: 34.7 },
            { name: 'David Kim', votes: 550, percentage: 22.4 },
          ],
        },
      ],
    },
    {
      id: 'class-rep-2024',
      title: 'Class Representatives 2024',
      status: 'published',
      closedDate: 'Sep 20, 2024',
      totalVotes: 1820,
      positions: [
        {
          title: 'Senior Representative',
          candidates: [
            { name: 'Emma Davis', votes: 720, percentage: 39.6 },
            { name: 'James Wilson', votes: 680, percentage: 37.4 },
            { name: 'Sophie Martinez', votes: 420, percentage: 23.0 },
          ],
        },
      ],
    },
  ]);

  const handlePublishResults = (id: string) => {
    setElections(elections.map(e => 
      e.id === id ? { ...e, status: 'published' as const } : e
    ));
    showSuccessToast('Results published successfully!');
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'completed':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'tallying':
        return 'bg-orange-100 text-orange-700 border-orange-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'published':
        return <Eye className="w-4 h-4" />;
      case 'completed':
        return <CheckCircle className="w-4 h-4" />;
      default:
        return <Lock className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-6">
      {/* Mobile-Optimized Header */}
      <div className="bg-gradient-to-r from-[#059669] to-[#10b981] text-white sticky top-0 z-10">
        <div className="px-4 py-4">
          <div className="flex items-center gap-3">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={onBack}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </motion.button>
            <div>
              <h1 className="text-xl font-bold">Results & Tallying</h1>
              <p className="text-white/80 text-xs">View and publish election results</p>
            </div>
          </div>
        </div>
      </div>

      {/* Elections List - Mobile Optimized */}
      <div className="px-4 py-4">
        <div className="space-y-6">
          {elections.map((election, index) => (
            <motion.div
              key={election.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
            >
              {/* Election Header */}
              <div className="p-4 bg-gray-50 border-b border-gray-100">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h2 className="font-bold text-gray-900 mb-2">{election.title}</h2>
                    <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium border ${getStatusColor(election.status)}`}>
                      {getStatusIcon(election.status)}
                      <span className="capitalize">{election.status}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <div>
                    <p className="text-gray-500">Closed: {election.closedDate}</p>
                    <p className="font-semibold text-[#059669]">{election.totalVotes.toLocaleString()} total votes</p>
                  </div>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    className="px-3 py-2 bg-white border border-gray-200 rounded-lg text-gray-700 text-sm font-medium flex items-center gap-2 hover:bg-gray-50 transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    <span>Export</span>
                  </motion.button>
                </div>
              </div>

              {/* Results */}
              <div className="p-4">
                {election.positions.map((position, posIdx) => (
                  <div key={posIdx} className="mb-6 last:mb-0">
                    <h3 className="font-bold text-gray-900 mb-4">{position.title}</h3>
                    <div className="space-y-4">
                      {position.candidates.map((candidate, candIdx) => (
                        <motion.div
                          key={candIdx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 + candIdx * 0.1 }}
                          className="relative"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <div className={`
                                w-7 h-7 rounded-full flex items-center justify-center text-white font-bold text-sm
                                ${candIdx === 0 ? 'bg-gradient-to-br from-yellow-400 to-yellow-600' : ''}
                                ${candIdx === 1 ? 'bg-gradient-to-br from-gray-400 to-gray-600' : ''}
                                ${candIdx === 2 ? 'bg-gradient-to-br from-orange-400 to-orange-600' : ''}
                                ${candIdx > 2 ? 'bg-gradient-to-br from-gray-300 to-gray-500' : ''}
                              `}>
                                {candIdx + 1}
                              </div>
                              <p className="font-semibold text-gray-900">{candidate.name}</p>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="text-right">
                                <p className="font-bold text-gray-900">{candidate.votes.toLocaleString()}</p>
                                <p className="text-xs text-gray-500">votes</p>
                              </div>
                              <div className="w-12 text-right">
                                <p className="font-bold text-[#059669]">{candidate.percentage}%</p>
                              </div>
                            </div>
                          </div>
                          
                          {/* Progress Bar */}
                          <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${candidate.percentage}%` }}
                              transition={{ duration: 0.8, delay: 0.3 + candIdx * 0.1 }}
                              className={`h-full ${
                                candIdx === 0 ? 'bg-gradient-to-r from-yellow-400 to-yellow-600' : 
                                candIdx === 1 ? 'bg-gradient-to-r from-gray-400 to-gray-600' : 
                                'bg-gradient-to-r from-orange-400 to-orange-600'
                              }`}
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}

                {/* Verification Notice */}
                <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-xl">
                  <div className="flex items-start gap-2">
                    <Lock className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-blue-900 mb-1">
                        Verification Complete
                      </p>
                      <p className="text-xs text-blue-700">
                        All votes verified and tallied. Results are cryptographically secured.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Publish Button */}
                {election.status === 'completed' && (
                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handlePublishResults(election.id)}
                    className="w-full mt-4 px-4 py-3 bg-gradient-to-r from-[#059669] to-[#10b981] text-white rounded-xl font-semibold shadow-lg flex items-center justify-center gap-2"
                  >
                    <Eye className="w-5 h-5" />
                    <span>Publish Results</span>
                  </motion.button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}