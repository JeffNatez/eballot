import { motion } from 'motion/react';
import { ArrowLeft, Eye, EyeOff, Lock } from 'lucide-react';
import { useState } from 'react';

interface ChangePasswordPageProps {
  onBack: () => void;
  onSave: (currentPassword: string, newPassword: string) => void;
}

export function ChangePasswordPage({ onBack, onSave }: ChangePasswordPageProps) {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [error, setError] = useState('');

  const handleSave = () => {
    setError('');

    if (!currentPassword || !newPassword || !confirmPassword) {
      setError('All fields are required');
      return;
    }

    if (newPassword.length < 8) {
      setError('New password must be at least 8 characters');
      return;
    }

    if (newPassword !== confirmPassword) {
      setError('New passwords do not match');
      return;
    }

    onSave(currentPassword, newPassword);
  };

  return (
    <div className="fixed inset-0 bg-gray-50 flex flex-col overflow-hidden">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 pt-14 pb-4 flex-shrink-0">
        <div className="flex items-center gap-3">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={onBack}
            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center"
          >
            <ArrowLeft className="w-5 h-5 text-gray-700" />
          </motion.button>
          <h1 className="text-gray-900 font-bold" style={{ fontSize: '22px' }}>
            Change Password
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto" style={{ scrollbarWidth: 'none', paddingBottom: '180px' }}>
        <style>{`::-webkit-scrollbar { display: none; }`}</style>
        
        <div className="p-6">
          {/* Info Card */}
          <div className="bg-blue-50 rounded-2xl p-4 mb-6 border border-blue-100">
            <div className="flex gap-3">
              <Lock className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-blue-900 font-semibold mb-1 text-sm">
                  Password Requirements
                </h3>
                <ul className="text-blue-700 text-xs space-y-1">
                  <li>• At least 8 characters long</li>
                  <li>• Must match confirmation</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-red-50 text-red-600 rounded-2xl p-4 mb-6 border border-red-100"
            >
              <p className="text-sm font-medium">{error}</p>
            </motion.div>
          )}

          {/* Current Password */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2 text-sm">
              Current Password
            </label>
            <div className="relative">
              <input
                type={showCurrent ? 'text' : 'password'}
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8c1d40] focus:border-transparent transition-all"
                placeholder="Enter current password"
              />
              <button
                onClick={() => setShowCurrent(!showCurrent)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showCurrent ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* New Password */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2 text-sm">
              New Password
            </label>
            <div className="relative">
              <input
                type={showNew ? 'text' : 'password'}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8c1d40] focus:border-transparent transition-all"
                placeholder="Enter new password"
              />
              <button
                onClick={() => setShowNew(!showNew)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showNew ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2 text-sm">
              Confirm New Password
            </label>
            <div className="relative">
              <input
                type={showConfirm ? 'text' : 'password'}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8c1d40] focus:border-transparent transition-all"
                placeholder="Confirm new password"
              />
              <button
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showConfirm ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="fixed bottom-[94px] left-0 right-0 bg-white border-t border-gray-200 px-6 py-4 z-40">
        <div className="flex gap-3">
          <motion.button
            whileTap={{ scale: 0.98 }}
            onClick={onBack}
            className="flex-1 py-3.5 rounded-xl border-2 border-[#8c1d40] text-[#8c1d40] font-semibold"
          >
            Cancel
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.98 }}
            onClick={handleSave}
            className="flex-1 py-3.5 rounded-xl bg-gradient-to-r from-[#8c1d40] to-[#b8234a] text-white font-semibold shadow-lg"
          >
            Save Changes
          </motion.button>
        </div>
      </div>
    </div>
  );
}