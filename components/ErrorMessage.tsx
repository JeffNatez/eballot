import { motion, AnimatePresence } from 'motion/react';
import { AlertCircle, X } from 'lucide-react';

interface ErrorMessageProps {
  message: string;
  onDismiss?: () => void;
  variant?: 'inline' | 'banner' | 'toast';
  className?: string;
}

export function ErrorMessage({ message, onDismiss, variant = 'inline', className = '' }: ErrorMessageProps) {
  if (!message) return null;

  if (variant === 'inline') {
    return (
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: 'auto' }}
        exit={{ opacity: 0, height: 0 }}
        className={`flex items-start gap-2 ${className}`}
      >
        <AlertCircle className="w-4 h-4 text-[#8c1d40] mt-0.5 flex-shrink-0" />
        <p className="text-sm text-[#8c1d40] flex-1">{message}</p>
      </motion.div>
    );
  }

  if (variant === 'banner') {
    return (
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        className={`bg-red-50 border border-red-200 rounded-xl p-4 ${className}`}
      >
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
            <AlertCircle className="w-5 h-5 text-[#8c1d40]" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-gray-900 text-sm mb-1">Error</h3>
            <p className="text-sm text-gray-700">{message}</p>
          </div>
          {onDismiss && (
            <button
              onClick={onDismiss}
              className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
      </motion.div>
    );
  }

  return null;
}

// Field-level error component for forms
interface FieldErrorProps {
  error?: string;
  show?: boolean;
}

export function FieldError({ error, show = true }: FieldErrorProps) {
  if (!error || !show) return null;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -5 }}
        transition={{ duration: 0.2 }}
        className="flex items-center gap-1.5 mt-1"
      >
        <AlertCircle className="w-3.5 h-3.5 text-[#8c1d40] flex-shrink-0" />
        <p className="text-xs text-[#8c1d40]">{error}</p>
      </motion.div>
    </AnimatePresence>
  );
}

// Success message component
interface SuccessMessageProps {
  message: string;
  onDismiss?: () => void;
  variant?: 'inline' | 'banner';
  className?: string;
}

export function SuccessMessage({ message, onDismiss, variant = 'inline', className = '' }: SuccessMessageProps) {
  if (!message) return null;

  if (variant === 'banner') {
    return (
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        className={`bg-green-50 border border-green-200 rounded-xl p-4 ${className}`}
      >
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
            <motion.svg
              className="w-5 h-5 text-green-600"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", duration: 0.5 }}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </motion.svg>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-gray-900 text-sm mb-1">Success</h3>
            <p className="text-sm text-gray-700">{message}</p>
          </div>
          {onDismiss && (
            <button
              onClick={onDismiss}
              className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
      </motion.div>
    );
  }

  return null;
}
