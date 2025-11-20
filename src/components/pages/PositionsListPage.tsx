import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2, Clock, ChevronRight } from 'lucide-react';

interface Position {
  id: string;
  title: string;
  description: string;
  candidatesCount: number;
  voted: boolean;
  deadline: string;
}

interface PositionsListPageProps {
  election: string;
  subtitle: string;
  positions: Position[];
  onBack: () => void;
  onSelectPosition: (positionId: string) => void;
}

export function PositionsListPage({ 
  election, 
  subtitle, 
  positions, 
  onBack, 
  onSelectPosition 
}: PositionsListPageProps) {
  const votedCount = positions.filter(p => p.voted).length;
  const totalCount = positions.length;
  const progressPercentage = (votedCount / totalCount) * 100;

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
            <p className="text-white/90 text-sm font-medium mb-1.5">{subtitle}</p>
            <h1 className="text-white font-bold leading-tight" style={{ fontSize: '28px' }}>{election}</h1>
          </div>
        </div>

        {/* Progress Card */}
        <div className="bg-white/20 backdrop-blur-md rounded-2xl p-4">
          <div className="flex items-center justify-between mb-3">
            <p className="text-white font-semibold">Voting Progress</p>
            <p className="text-white font-bold">{votedCount}/{totalCount}</p>
          </div>
          
          {/* Progress Bar */}
          <div className="relative w-full h-2.5 bg-white/20 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progressPercentage}%` }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute left-0 top-0 h-full bg-white rounded-full"
            />
          </div>
          
          <p className="text-white/80 text-xs mt-2">
            {votedCount === totalCount 
              ? "All positions voted! ✓" 
              : `${totalCount - votedCount} position${totalCount - votedCount !== 1 ? 's' : ''} remaining`
            }
          </p>
        </div>

        {/* Decorative elements */}
        <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full" />
        <div className="absolute -left-12 -bottom-12 w-40 h-40 bg-white/10 rounded-full" />
      </div>

      {/* Positions List */}
      <div className="flex-1 px-6 py-5 overflow-y-auto pb-8" style={{ scrollbarWidth: 'none' }}>
        <style>{`::-webkit-scrollbar { display: none; }`}</style>
        
        <h2 className="font-bold text-gray-900 mb-4" style={{ fontSize: '20px' }}>Available Positions</h2>
        
        <div className="space-y-3">
          {positions.map((position, index) => (
            <motion.div
              key={position.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.08, duration: 0.3 }}
              whileTap={{ scale: position.voted ? 1 : 0.98 }}
              onClick={() => !position.voted && onSelectPosition(position.id)}
              className={`relative bg-white rounded-2xl p-4 transition-all duration-200 ${
                position.voted 
                  ? 'opacity-75 cursor-default' 
                  : 'hover:shadow-md shadow-sm cursor-pointer'
              }`}
            >
              {/* Voted Badge */}
              {position.voted && (
                <div className="absolute top-4 right-4 bg-green-100 text-green-700 px-3 py-1.5 rounded-full flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span className="text-xs font-medium">Voted</span>
                </div>
              )}

              <div className="flex items-start gap-3.5">
                {/* Position Number */}
                <div 
                  className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center text-white font-bold"
                  style={{
                    background: position.voted 
                      ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)'
                      : 'linear-gradient(135deg, #8c1d40 0%, #e94560 100%)',
                    fontSize: '18px'
                  }}
                >
                  {index + 1}
                </div>

                {/* Position Info */}
                <div className="flex-1 min-w-0 pr-24">
                  <h3 className="text-gray-900 font-bold mb-1" style={{ fontSize: '17px' }}>{position.title}</h3>
                  <p className="text-gray-500 text-sm mb-2 line-clamp-2">{position.description}</p>
                  
                  <div className="flex items-center gap-3 text-xs text-gray-400">
                    <div className="flex items-center gap-1">
                      <span className="font-medium">{position.candidatesCount}</span>
                      <span>candidate{position.candidatesCount !== 1 ? 's' : ''}</span>
                    </div>
                    <div className="w-1 h-1 bg-gray-300 rounded-full" />
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{position.deadline}</span>
                    </div>
                  </div>
                </div>

                {/* Arrow */}
                {!position.voted && (
                  <div className="flex-shrink-0 self-center absolute right-4 top-1/2 -translate-y-1/2">
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}