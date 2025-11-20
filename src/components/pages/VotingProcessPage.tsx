import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, Shield, Lock, Fingerprint } from 'lucide-react';
import { useState, useEffect } from 'react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface VotingProcessPageProps {
  candidateName: string;
  candidateImage: string;
  position: string;
  onComplete: () => void;
}

const steps = [
  { id: 1, title: 'Verifying Identity', icon: Fingerprint, duration: 1500 },
  { id: 2, title: 'Encrypting Vote', icon: Lock, duration: 1500 },
  { id: 3, title: 'Securing Ballot', icon: Shield, duration: 1500 },
  { id: 4, title: 'Confirming Vote', icon: CheckCircle2, duration: 1000 },
];

export function VotingProcessPage({ 
  candidateName, 
  candidateImage, 
  position, 
  onComplete 
}: VotingProcessPageProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentStep < steps.length) {
      const timer = setTimeout(() => {
        setCurrentStep(prev => prev + 1);
      }, steps[currentStep].duration);
      return () => clearTimeout(timer);
    } else {
      setIsComplete(true);
      setTimeout(() => {
        onComplete();
      }, 1500);
    }
  }, [currentStep, onComplete]);

  const progress = ((currentStep) / steps.length) * 100;

  return (
    <div 
      className="fixed inset-0 flex flex-col items-center justify-center px-6 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #8c1d40 0%, #b8234a 50%, #e94560 100%)'
      }}
    >
      {/* Decorative elements */}
      <div className="absolute -right-20 -top-20 w-64 h-64 bg-white/5 rounded-full" />
      <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-white/5 rounded-full" />
      <div className="absolute right-10 bottom-32 w-32 h-32 bg-white/5 rounded-full" />

      <div className="relative z-10 w-full max-w-md">
        {/* Candidate Info */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white/30 shadow-xl">
            <ImageWithFallback 
              src={candidateImage} 
              alt={candidateName}
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-white/90 text-sm mb-1">Voting for {position}</p>
          <h2 className="text-white text-2xl font-bold">{candidateName}</h2>
        </motion.div>

        {/* Progress Circle */}
        <div className="relative w-48 h-48 mx-auto mb-12">
          {/* Background Circle */}
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="96"
              cy="96"
              r="88"
              stroke="rgba(255, 255, 255, 0.2)"
              strokeWidth="8"
              fill="none"
            />
            {/* Progress Circle */}
            <motion.circle
              cx="96"
              cy="96"
              r="88"
              stroke="white"
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
              initial={{ strokeDasharray: "0 552.92" }}
              animate={{ 
                strokeDasharray: `${(progress / 100) * 552.92} 552.92`
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          </svg>

          {/* Center Icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <AnimatePresence mode="wait">
              {currentStep < steps.length ? (
                <motion.div
                  key={currentStep}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  exit={{ scale: 0, rotate: 180 }}
                  transition={{ duration: 0.4 }}
                  className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center"
                >
                  {(() => {
                    const IconComponent = steps[currentStep].icon;
                    return <IconComponent className="w-10 h-10 text-white" />;
                  })()}
                </motion.div>
              ) : (
                <motion.div
                  key="complete"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="w-20 h-20 bg-white rounded-full flex items-center justify-center"
                >
                  <CheckCircle2 className="w-12 h-12 text-green-600" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Progress Percentage */}
        <motion.div
          key={progress}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-8"
        >
          <p className="text-white text-5xl font-bold mb-2">
            {Math.round(progress)}%
          </p>
          <AnimatePresence mode="wait">
            {currentStep < steps.length ? (
              <motion.p
                key={currentStep}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-white/90 text-lg"
              >
                {steps[currentStep].title}
              </motion.p>
            ) : (
              <motion.p
                key="complete-text"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-white/90 text-lg"
              >
                Vote Successfully Cast!
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Steps Indicator */}
        <div className="flex justify-center gap-2">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ scale: 0.8, opacity: 0.5 }}
              animate={{ 
                scale: index <= currentStep ? 1 : 0.8,
                opacity: index <= currentStep ? 1 : 0.3
              }}
              className={`w-2.5 h-2.5 rounded-full ${
                index < currentStep 
                  ? 'bg-white' 
                  : index === currentStep 
                  ? 'bg-white animate-pulse' 
                  : 'bg-white/30'
              }`}
            />
          ))}
        </div>

        {/* Security Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isComplete ? 1 : 0.7 }}
          className="mt-12 text-center"
        >
          <p className="text-white/70 text-sm">
            🔒 Your vote is encrypted and anonymous
          </p>
        </motion.div>
      </div>
    </div>
  );
}