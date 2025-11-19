import { motion } from 'motion/react';
import { ArrowLeft, Calendar, Users, CheckCircle2, Clock } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface Candidate {
  name: string;
  party: string;
  imageLabel: string;
}

interface Position {
  id: string;
  title: string;
  candidates: Candidate[];
}

interface ElectionDetailsPageProps {
  electionId: string;
  title: string;
  dateRange: string;
  description: string;
  positions: Position[];
  onBack: () => void;
  onVoteNow: () => void;
  status: 'Open' | 'Upcoming' | 'Closed' | 'Voted';
}

export function ElectionDetailsPage({
  electionId,
  title,
  dateRange,
  description,
  positions,
  onBack,
  onVoteNow,
  status
}: ElectionDetailsPageProps) {
  const totalCandidates = positions.reduce((sum, pos) => sum + pos.candidates.length, 0);
  const isVotingEnabled = status === 'Open';

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
            <p className="text-white/90 text-sm font-medium mb-1.5">Election Details</p>
            <h1 className="text-white font-bold leading-tight" style={{ fontSize: '28px' }}>{title}</h1>
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white/20 backdrop-blur-md rounded-xl p-3">
            <div className="flex items-center gap-2 mb-1">
              <Calendar className="w-4 h-4 text-white" />
              <p className="text-white text-xs font-medium">Voting Period</p>
            </div>
            <p className="text-white font-bold text-sm">{dateRange}</p>
          </div>

          <div className="bg-white/20 backdrop-blur-md rounded-xl p-3">
            <div className="flex items-center gap-2 mb-1">
              <Users className="w-4 h-4 text-white" />
              <p className="text-white text-xs font-medium">Total Positions</p>
            </div>
            <p className="text-white font-bold text-sm">{positions.length} Positions</p>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full" />
        <div className="absolute -left-12 -bottom-12 w-40 h-40 bg-white/10 rounded-full" />
      </div>

      {/* Content */}
      <div className="flex-1 px-6 py-5 overflow-y-auto" style={{ scrollbarWidth: 'none', paddingBottom: '100px' }}>
        <style>{`::-webkit-scrollbar { display: none; }`}</style>

        {/* Description */}
        <div className="bg-white rounded-2xl p-5 mb-5 shadow-sm">
          <h2 className="font-bold text-gray-900 mb-2" style={{ fontSize: '18px' }}>About This Election</h2>
          <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
        </div>

        {/* Status Badge */}
        <div className="mb-5">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${
            status === 'Open' ? 'bg-green-100 text-green-700' :
            status === 'Upcoming' ? 'bg-blue-100 text-blue-700' :
            status === 'Voted' ? 'bg-purple-100 text-purple-700' :
            'bg-gray-100 text-gray-700'
          }`}>
            {status === 'Open' && <CheckCircle2 className="w-4 h-4" />}
            {status === 'Upcoming' && <Clock className="w-4 h-4" />}
            {status === 'Voted' && <CheckCircle2 className="w-4 h-4" />}
            {status === 'Closed' && <Clock className="w-4 h-4" />}
            <span className="font-semibold text-sm">{status}</span>
          </div>
        </div>

        {/* Positions & Candidates */}
        <h2 className="font-bold text-gray-900 mb-4" style={{ fontSize: '20px' }}>Positions & Candidates</h2>
        
        <div className="space-y-4">
          {positions.map((position, index) => (
            <motion.div
              key={position.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200"
            >
              {/* Position Header */}
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-5 py-3 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-gray-900" style={{ fontSize: '17px' }}>{position.title}</h3>
                  <span className="text-xs text-gray-500 font-medium">{position.candidates.length} candidate{position.candidates.length !== 1 ? 's' : ''}</span>
                </div>
              </div>

              {/* Candidates Grid */}
              <div className="p-3">
                <div className="grid grid-cols-2 gap-3">
                  {position.candidates.map((candidate, idx) => {
                    // Cycle through portrait images for variety
                    const portraitImages = [
                      'https://images.unsplash.com/photo-1600178572204-6ac8886aae63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBzdHVkZW50JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYzMzk5Mzk5fDA&ixlib=rb-4.1.0&q=80&w=1080',
                      'https://images.unsplash.com/photo-1762522927402-f390672558d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMGhlYWRzaG90fGVufDF8fHx8MTc2MzQwNjY0N3ww&ixlib=rb-4.1.0&q=80&w=1080',
                      'https://images.unsplash.com/photo-1590735627513-59a186ed0984?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHBvcnRyYWl0JTIwbWFsZXxlbnwxfHx8fDE3NjM0ODU0NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
                      'https://images.unsplash.com/photo-1762753674498-73ec49feafc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHByb2Zlc3Npb25hbCUyMGhlYWRzaG90fGVufDF8fHx8MTc2MzQxMzE4OHww&ixlib=rb-4.1.0&q=80&w=1080',
                      'https://images.unsplash.com/photo-1681070909604-f555aa006564?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwbGVhZGVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYzNDg5ODQ5fDA&ixlib=rb-4.1.0&q=80&w=1080',
                    ];
                    const imageIndex = (index * 10 + idx) % portraitImages.length;
                    
                    return (
                      <div key={idx} className="bg-gray-50 rounded-xl overflow-hidden">
                        {/* Candidate Image */}
                        <div className="h-32 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                          <ImageWithFallback 
                            src={portraitImages[imageIndex]}
                            alt={candidate.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        {/* Candidate Info */}
                        <div className="p-2">
                          <p className="text-gray-900 font-medium text-xs mb-1">{candidate.name}</p>
                          <p className="text-gray-500 text-xs">{candidate.party}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary Card */}
        <div className="bg-gradient-to-br from-[#8c1d40]/10 to-[#e94560]/10 rounded-2xl p-5 mt-6 border border-[#8c1d40]/20">
          <h3 className="font-bold text-gray-900 mb-2">Election Summary</h3>
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Total Positions:</span>
              <span className="font-semibold text-gray-900">{positions.length}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Total Candidates:</span>
              <span className="font-semibold text-gray-900">{totalCandidates}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Status:</span>
              <span className={`font-semibold ${
                status === 'Open' ? 'text-green-600' :
                status === 'Upcoming' ? 'text-blue-600' :
                status === 'Voted' ? 'text-purple-600' :
                'text-gray-600'
              }`}>{status}</span>
            </div>
          </div>
        </div>

        {/* Vote Now Button - Now inside scrollable content at the end */}
        {isVotingEnabled && (
          <div className="mt-6 mb-4">
            <motion.button
              whileTap={{ scale: 0.98 }}
              onClick={onVoteNow}
              className="w-full py-4 rounded-2xl font-bold text-white shadow-xl"
              style={{
                background: 'linear-gradient(135deg, #8c1d40 0%, #b8234a 50%, #e94560 100%)',
                fontSize: '18px'
              }}
            >
              Vote Now
            </motion.button>
          </div>
        )}

        {!isVotingEnabled && (
          <div className="mt-6 mb-4">
            <div className="w-full py-4 rounded-2xl font-bold text-gray-500 bg-gray-200 text-center">
              {status === 'Upcoming' ? 'Voting Opens Soon' : status === 'Voted' ? 'You\'ve Already Voted' : 'Voting Closed'}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}