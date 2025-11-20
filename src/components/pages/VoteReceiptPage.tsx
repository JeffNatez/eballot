import { motion } from 'motion/react';
import { CheckCircle2, Calendar, Clock, User, Briefcase, Hash } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface VoteReceiptPageProps {
  candidateName: string;
  candidateImage: string;
  position: string;
  election: string;
  receiptId: string;
  timestamp: string;
  onContinue: () => void;
}

export function VoteReceiptPage({ 
  candidateName, 
  candidateImage, 
  position, 
  election,
  receiptId,
  timestamp,
  onContinue 
}: VoteReceiptPageProps) {
  const currentDate = new Date().toLocaleDateString('en-US', { 
    month: 'long', 
    day: 'numeric', 
    year: 'numeric' 
  });

  const currentTime = new Date().toLocaleTimeString('en-US', { 
    hour: '2-digit', 
    minute: '2-digit' 
  });

  return (
    <div className="fixed inset-0 bg-gray-50 flex flex-col items-center justify-start px-4 overflow-y-auto" style={{ scrollbarWidth: 'none' }}>
      <style>{`::-webkit-scrollbar { display: none; }`}</style>
      <div className="w-full max-w-md py-6 min-h-screen flex flex-col justify-center">
        {/* Success Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-5 bg-green-100 rounded-full flex items-center justify-center"
        >
          <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12 text-green-600" />
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-5 sm:mb-6"
        >
          <h1 className="text-gray-900 font-bold mb-2 text-2xl sm:text-[28px]">Vote Confirmed!</h1>
          <p className="text-gray-500 text-sm sm:text-base">Your vote has been securely recorded</p>
        </motion.div>

        {/* Receipt Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-3xl p-4 sm:p-5 mb-4 sm:mb-5 relative overflow-hidden"
        >
          {/* Receipt Header */}
          <div className="text-center mb-4 sm:mb-5 pb-4 sm:pb-5 border-b border-dashed border-gray-200">
            <p className="text-gray-400 text-xs font-medium uppercase tracking-wide mb-1">
              Official Ballot Receipt
            </p>
            <p className="text-gray-900 font-bold text-base sm:text-[17px]">{election}</p>
          </div>

          {/* Candidate Info */}
          <div className="flex items-center gap-3 mb-4 sm:mb-5 pb-4 sm:pb-5 border-b border-gray-200">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl overflow-hidden border-2 border-gray-100 flex-shrink-0">
              <ImageWithFallback 
                src={candidateImage} 
                alt={candidateName}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-gray-500 text-xs mb-1">Your vote for {position}</p>
              <h3 className="text-gray-900 font-bold text-base sm:text-[18px] truncate">{candidateName}</h3>
            </div>
            <div className="w-8 h-8 sm:w-9 sm:h-9 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
            </div>
          </div>

          {/* Receipt Details */}
          <div className="space-y-3 sm:space-y-3.5 mb-4 sm:mb-5">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Briefcase className="w-4 h-4 text-gray-600" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-gray-400 text-xs mb-0.5">Position</p>
                <p className="text-gray-900 font-medium text-sm break-words">{position}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Calendar className="w-4 h-4 text-gray-600" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-gray-400 text-xs mb-0.5">Date</p>
                <p className="text-gray-900 font-medium text-sm">{currentDate}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="w-4 h-4 text-gray-600" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-gray-400 text-xs mb-0.5">Time</p>
                <p className="text-gray-900 font-medium text-sm">{currentTime}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Hash className="w-4 h-4 text-gray-600" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-gray-400 text-xs mb-0.5">Receipt ID</p>
                <p className="text-gray-900 font-mono text-[11px] sm:text-xs break-all">{receiptId}</p>
              </div>
            </div>
          </div>

          {/* Security Badge */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-3 sm:p-3.5 border border-green-100">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-3 h-3 text-white" />
              </div>
              <p className="text-green-900 font-semibold text-sm">Verified & Encrypted</p>
            </div>
            <p className="text-green-700 text-xs leading-relaxed">
              Your vote has been securely encrypted and cannot be traced back to you.
            </p>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {/* Continue Button */}
          <motion.button
            whileTap={{ scale: 0.98 }}
            onClick={onContinue}
            className="w-full bg-gradient-to-r from-[#8c1d40] to-[#b8234a] text-white py-3.5 sm:py-4 rounded-2xl font-bold shadow-lg text-base sm:text-[17px]"
          >
            Continue Voting
          </motion.button>
        </motion.div>

        {/* Footer Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center text-gray-400 text-xs mt-4 sm:mt-5 mb-6 sm:mb-16 px-2"
        >
          Your vote is confidential and cannot be downloaded or shared for security purposes.
        </motion.p>
      </div>
    </div>
  );
}