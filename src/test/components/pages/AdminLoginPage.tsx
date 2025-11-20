import { motion } from 'motion/react';
import { useState } from 'react';
import { ArrowLeft, Shield, AlertCircle } from 'lucide-react';
import { validateEmail, validatePassword } from '../../utils/errorHandling';

interface AdminLoginPageProps {
  onBack: () => void;
  onLogin: (email: string, password: string) => void;
}

export function AdminLoginPage({ onBack, onLogin }: AdminLoginPageProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (emailError) setEmailError('');
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (passwordError) setPasswordError('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const emailValidation = validateEmail(email);
    const passwordValidation = validatePassword(password);
    
    if (emailValidation) {
      setEmailError(emailValidation);
    }
    
    if (passwordValidation) {
      setPasswordError(passwordValidation);
    }
    
    if (!emailValidation && !passwordValidation) {
      onLogin(email, password);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#8c1d40] via-[#a52347] to-[#1e3a8a] flex flex-col">
      {/* Header */}
      <div className="p-6">
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={onBack}
          className="flex items-center gap-2 text-white"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Back</span>
        </motion.button>
      </div>

      {/* Content */}
      <div className="flex-1 flex items-center justify-center px-6 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
              <Shield className="w-10 h-10 text-white" />
            </div>
          </div>

          {/* Title */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Admin Portal</h1>
            <p className="text-white/80">Secure access for authorized personnel</p>
          </div>

          {/* Login Card */}
          <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Admin Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="admin@uwi.edu"
                  className={`w-full px-4 py-3 rounded-xl border ${
                    emailError ? 'border-red-500 bg-red-50' : 'border-gray-300 bg-white'
                  } focus:outline-none focus:ring-2 focus:ring-[#8c1d40] transition-all`}
                />
                {emailError && (
                  <div className="flex items-center gap-1.5 mt-2 text-sm text-red-600">
                    <AlertCircle className="w-4 h-4" />
                    <span>{emailError}</span>
                  </div>
                )}
              </div>

              {/* Password Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder="Enter your password"
                  className={`w-full px-4 py-3 rounded-xl border ${
                    passwordError ? 'border-red-500 bg-red-50' : 'border-gray-300 bg-white'
                  } focus:outline-none focus:ring-2 focus:ring-[#8c1d40] transition-all`}
                />
                {passwordError && (
                  <div className="flex items-center gap-1.5 mt-2 text-sm text-red-600">
                    <AlertCircle className="w-4 h-4" />
                    <span>{passwordError}</span>
                  </div>
                )}
              </div>

              {/* Security Notice */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-3">
                <p className="text-xs text-blue-800">
                  <strong>Security Notice:</strong> Admin access is logged and monitored. Unauthorized access attempts will be reported.
                </p>
              </div>

              {/* Login Button */}
              <motion.button
                type="submit"
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-[#8c1d40] to-[#a52347] text-white py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-shadow"
              >
                Sign In as Admin
              </motion.button>
            </form>
          </div>

          {/* Footer Note */}
          <p className="text-center text-white/60 text-xs mt-6">
            Need help? Contact IT Support at support@uwi.edu
          </p>
        </motion.div>
      </div>
    </div>
  );
}
