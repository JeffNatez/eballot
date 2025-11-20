import { motion } from 'motion/react';
import { CheckCircle2, ChevronRight, Trophy, Calendar } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface ResultsPageProps {
  onElectionClick?: (electionId: string) => void;
}

interface CompletedElection {
  id: string;
  title: string;
  date: string;
  imageLabel: string;
  winner: string;
  winnerPosition: string;
  status: string;
}

const completedElections: CompletedElection[] = [
  {
    id: 'student-council-results',
    title: 'Student Council Elections 2025',
    date: 'October 15, 2025',
    imageLabel: 'Student Council Results Banner',
    winner: 'Sarah Johnson',
    winnerPosition: 'President',
    status: 'Completed'
  },
  {
    id: 'guild-exec-results',
    title: 'Guild Executive Elections 2024',
    date: 'November 12, 2024',
    imageLabel: 'Guild Executive Results Banner',
    winner: 'Michael Chen',
    winnerPosition: 'Guild President',
    status: 'Completed'
  },
  {
    id: 'class-rep-results',
    title: 'Class Representatives 2024',
    date: 'September 20, 2024',
    imageLabel: 'Class Rep Results Banner',
    winner: 'Emma Davis',
    winnerPosition: 'Senior Representative',
    status: 'Completed'
  }
];

export function ResultsPage({ onElectionClick }: ResultsPageProps) {
  const handleElectionClick = (electionId: string) => {
    if (onElectionClick) {
      onElectionClick(electionId);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-50 flex flex-col overflow-hidden">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 pt-14 pb-4 flex-shrink-0">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 flex-1">
            <h1 className="text-gray-900 font-bold" style={{ fontSize: '22px' }}>
              Election Results
            </h1>
          </div>
        </div>
        <p className="text-gray-500 text-sm mt-2">View results from completed elections</p>
      </div>

      {/* Content */}
      <div 
        className="flex-1 overflow-y-auto" 
        style={{ scrollbarWidth: 'none', paddingBottom: '120px' }}
      >
        <style>{`::-webkit-scrollbar { display: none; }`}</style>
        
        <div className="p-6 space-y-4">
          {completedElections.map((election, index) => {
            // Cycle through images
            const electionImages = [
              'https://images.unsplash.com/photo-1632834380561-d1e05839a33a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwc3R1ZGVudHN8ZW58MXx8fHwxNzYzNDAwNjU1fDA&ixlib=rb-4.1.0&q=80&w=1080',
              'https://images.unsplash.com/photo-1758270705799-12efda48d4f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1wdXMlMjBhY3Rpdml0aWVzJTIwc3R1ZGVudHN8ZW58MXx8fHwxNzYzNTAxODE5fDA&ixlib=rb-4.1.0&q=80&w=1080',
              'https://images.unsplash.com/photo-1603032813605-2c91e257e2ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwZWxlY3Rpb24lMjB2b3Rpbmd8ZW58MXx8fHwxNzYzNTAxODE4fDA&ixlib=rb-4.1.0&q=80&w=1080',
            ];
            const imageIndex = index % electionImages.length;

            return (
              <motion.div
                key={election.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200 cursor-pointer"
                whileTap={{ scale: 0.98 }}
              >
                {/* Image Banner */}
                <div 
                  className="relative h-40 overflow-hidden"
                  onClick={() => handleElectionClick(election.id)}
                >
                  <ImageWithFallback 
                    src={electionImages[imageIndex]}
                    alt={election.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Status Badge */}
                  <div className="absolute top-3 left-3 bg-green-100 text-green-700 text-xs font-medium px-3 py-1.5 rounded-full flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Completed</span>
                  </div>

                  {/* Date Badge */}
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-medium px-3 py-1.5 rounded-full flex items-center gap-1.5">
                    <Calendar className="w-3 h-3" />
                    <span>{election.date}</span>
                  </div>

                  {/* Title Overlay */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="text-white font-bold text-lg">{election.title}</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  {/* Winner Info */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#fdb913] to-[#d4940a] flex items-center justify-center">
                      <Trophy className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-500 text-xs mb-0.5">Winner</p>
                      <p className="text-gray-900 font-semibold text-sm">{election.winner}</p>
                      <p className="text-gray-500 text-xs">{election.winnerPosition}</p>
                    </div>
                  </div>

                  {/* View Details Button */}
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleElectionClick(election.id)}
                    className="w-full py-2.5 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors text-[#8c1d40] font-semibold text-sm flex items-center justify-center gap-2"
                  >
                    View Detailed Results
                    <ChevronRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}