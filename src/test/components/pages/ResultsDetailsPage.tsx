import { motion } from 'motion/react';
import { ArrowLeft, Users, TrendingUp, Trophy, Calendar } from 'lucide-react';

interface Candidate {
  name: string;
  position: string;
  votes: number;
  percentage: number;
}

interface ResultsDetailsPageProps {
  electionId: string;
  title: string;
  date: string;
  totalVotes: number;
  voterTurnout: number;
  candidates: Candidate[];
  onBack: () => void;
}

export function ResultsDetailsPage({
  electionId,
  title,
  date,
  totalVotes,
  voterTurnout,
  candidates,
  onBack
}: ResultsDetailsPageProps) {
  // Sort candidates by votes (highest first)
  const sortedCandidates = [...candidates].sort((a, b) => b.votes - a.votes);

  return (
    <div className="fixed inset-0 bg-gray-50 flex flex-col overflow-hidden">
      {/* Header */}
      <div 
        className="relative pt-14 pb-6 px-6 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #8c1d40 0%, #b8234a 50%, #e94560 100%)'
        }}
      >
        {/* Back Button & Title Section */}
        <div className="flex items-start gap-3 mb-5">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={onBack}
            className="mt-1 flex-shrink-0 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </motion.button>

          <div className="flex-1 min-w-0">
            <p className="text-white/90 text-sm font-medium mb-1.5">Election Results</p>
            <h1 className="text-white font-bold leading-tight" style={{ fontSize: '28px' }}>{title}</h1>
          </div>
        </div>

        {/* Info Badge */}
        <div className="flex items-center gap-2 mb-4">
          <div className="bg-green-100 text-green-700 text-xs font-medium px-3 py-1.5 rounded-full flex items-center gap-1.5">
            <div className="w-2 h-2 bg-green-600 rounded-full" />
            <span>Completed</span>
          </div>
          <div className="bg-white/20 backdrop-blur-md text-white text-xs font-medium px-3 py-1.5 rounded-full flex items-center gap-1.5">
            <Calendar className="w-3 h-3" />
            <span>{date}</span>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full" />
        <div className="absolute -left-12 -bottom-12 w-40 h-40 bg-white/10 rounded-full" />
      </div>

      {/* Content */}
      <div className="flex-1 px-6 py-5 overflow-y-auto" style={{ scrollbarWidth: 'none', paddingBottom: '100px' }}>
        <style>{`::-webkit-scrollbar { display: none; }`}</style>

        {/* Election Details */}
        <h2 className="font-bold text-gray-900 mb-4" style={{ fontSize: '20px' }}>Election Results</h2>
        
        <div className="space-y-3">
          {sortedCandidates.map((candidate, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200"
            >
              <div className="p-4">
                <div className="flex items-center gap-4">
                  {/* Rank Badge */}
                  <div 
                    className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white ${
                      index === 0 ? 'bg-gradient-to-br from-[#fdb913] to-[#d4940a]' :
                      index === 1 ? 'bg-gradient-to-br from-gray-400 to-gray-500' :
                      index === 2 ? 'bg-gradient-to-br from-[#cd7f32] to-[#8b5a00]' :
                      'bg-gradient-to-br from-[#8c1d40] to-[#e94560]'
                    }`}
                  >
                    {index === 0 && <Trophy className="w-6 h-6" />}
                    {index !== 0 && <span className="text-lg">{index + 1}</span>}
                  </div>

                  {/* Candidate Info */}
                  <div className="flex-1 min-w-0">
                    <p className="text-gray-900 font-semibold text-base mb-0.5">{candidate.name}</p>
                    <p className="text-gray-500 text-sm">{candidate.position}</p>
                  </div>

                  {/* Votes */}
                  <div className="text-right">
                    <p className="text-gray-900 font-bold text-lg">{candidate.votes.toLocaleString()}</p>
                    <p className="text-gray-500 text-xs">({candidate.percentage}%)</p>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mt-3 h-2 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${candidate.percentage}%` }}
                    transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                    className={`h-full rounded-full ${
                      index === 0 ? 'bg-gradient-to-r from-[#fdb913] to-[#d4940a]' :
                      'bg-gradient-to-r from-[#8c1d40] to-[#e94560]'
                    }`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary Card */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-5 mt-6 border border-green-200">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center">
              <Trophy className="w-4 h-4 text-white" />
            </div>
            <h3 className="font-bold text-gray-900">Winner</h3>
          </div>
          <div>
            <p className="font-bold text-gray-900 text-lg mb-1">{sortedCandidates[0].name}</p>
            <p className="text-gray-600 text-sm">{sortedCandidates[0].position}</p>
            <p className="text-green-600 font-semibold text-sm mt-2">
              Won with {sortedCandidates[0].votes.toLocaleString()} votes ({sortedCandidates[0].percentage}%)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}