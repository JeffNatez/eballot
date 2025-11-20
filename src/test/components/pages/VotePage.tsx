import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2, Users, TrendingUp } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface Candidate {
  id: string;
  name: string;
  position: string;
  image: string;
  party?: string;
  votes?: number;
}

interface VotePageProps {
  position: string;
  election: string;
  candidates: Candidate[];
  onBack: () => void;
  onVote: (candidateId: string) => void;
}

export function VotePage({ 
  position, 
  election, 
  candidates, 
  onBack, 
  onVote
}: VotePageProps) {
  const [selectedCandidate, setSelectedCandidate] = useState<string | null>(null);

  const handleVote = () => {
    if (selectedCandidate) {
      onVote(selectedCandidate);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-50 flex flex-col overflow-hidden">
      {/* Gradient Header */}
      <div 
        className="relative pt-14 pb-6 px-6 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #d4940a 0%, #b8770a 100%)'
        }}
      >
        {/* Back Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={onBack}
          className="absolute top-14 left-6 w-10 h-10 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg"
        >
          <ArrowLeft className="w-5 h-5 text-white drop-shadow-md" />
        </motion.button>

        {/* Title */}
        <div className="text-center mb-5">
          <p className="text-white text-sm font-semibold mb-1 drop-shadow-md">{election}</p>
          <h1 className="text-white font-bold mb-2 drop-shadow-md" style={{ fontSize: '28px' }}>{position}</h1>
        </div>

        {/* Stats Cards */}
        <div className="flex justify-center">
          <div className="bg-white/25 backdrop-blur-md rounded-2xl p-4 w-40 shadow-lg border border-white/20">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="w-8 h-8 bg-white/40 rounded-full flex items-center justify-center">
                <Users className="w-4 h-4 text-white drop-shadow-md" />
              </div>
            </div>
            <p className="text-white font-bold mb-0.5 text-center drop-shadow-md" style={{ fontSize: '24px' }}>{candidates.length}</p>
            <p className="text-white text-xs text-center drop-shadow-sm">Candidates</p>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full" />
        <div className="absolute -left-12 -bottom-12 w-40 h-40 bg-white/10 rounded-full" />
      </div>

      {/* Candidates List */}
      <div className="flex-1 px-6 py-5 overflow-y-auto pb-32" style={{ scrollbarWidth: 'none' }}>
        <style>{`::-webkit-scrollbar { display: none; }`}</style>
        
        <div className="space-y-3">
          {candidates.map((candidate, index) => (
            <motion.div
              key={candidate.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.3 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedCandidate(candidate.id)}
              className={`relative bg-white rounded-2xl overflow-hidden cursor-pointer transition-all duration-200 ${
                selectedCandidate === candidate.id
                  ? 'ring-4 ring-[#8c1d40] shadow-xl'
                  : 'shadow-sm hover:shadow-md'
              }`}
            >
              {/* Selection Indicator */}
              {selectedCandidate === candidate.id && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="absolute top-3 right-3 z-10 w-8 h-8 bg-[#8c1d40] rounded-full flex items-center justify-center"
                >
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </motion.div>
              )}

              <div className="flex items-center gap-3 p-3.5">
                {/* Candidate Number Badge */}
                <div className="flex-shrink-0">
                  <div 
                    className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold"
                    style={{
                      background: 'linear-gradient(135deg, #fdb913 0%, #d4940a 100%)',
                      fontSize: '18px'
                    }}
                  >
                    {index + 1}
                  </div>
                </div>

                {/* Candidate Image */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl overflow-hidden border-2 border-gray-100">
                    <ImageWithFallback 
                      src={candidate.image} 
                      alt={candidate.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Candidate Info */}
                <div className="flex-1 min-w-0 pr-10">
                  <h3 className="text-gray-900 font-bold mb-0.5 truncate" style={{ fontSize: '17px' }}>
                    {candidate.name}
                  </h3>
                  <p className="text-gray-500 text-sm truncate">
                    {candidate.position}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Vote Button - Fixed at bottom */}
      <div className="fixed bottom-20 left-0 right-0 bg-white border-t border-gray-200 px-6 py-4 safe-area-bottom">
        <motion.button
          whileTap={{ scale: 0.98 }}
          onClick={handleVote}
          disabled={!selectedCandidate}
          className={`w-full py-4 rounded-2xl font-bold transition-all duration-200 ${
            selectedCandidate
              ? 'bg-gradient-to-r from-[#8c1d40] to-[#b8234a] text-white shadow-lg'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
          style={{ fontSize: '17px' }}
        >
          {selectedCandidate ? 'Continue to Vote' : 'Select a Candidate'}
        </motion.button>
      </div>
    </div>
  );
}