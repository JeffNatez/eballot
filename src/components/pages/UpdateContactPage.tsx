import { motion } from 'motion/react';
import { ArrowLeft, Mail, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';

interface UpdateContactPageProps {
  onBack: () => void;
  onSave: (email: string, phone: string, address: string) => void;
  currentEmail: string;
  currentPhone: string;
  currentAddress: string;
}

export function UpdateContactPage({
  onBack,
  onSave,
  currentEmail,
  currentPhone,
  currentAddress
}: UpdateContactPageProps) {
  const [email, setEmail] = useState(currentEmail);
  const [phone, setPhone] = useState(currentPhone);
  const [address, setAddress] = useState(currentAddress);
  const [error, setError] = useState('');

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhone = (phone: string) => {
    const re = /^\d{3}-?\d{3}-?\d{4}$/;
    return re.test(phone);
  };

  const handleSave = () => {
    setError('');

    if (!email || !phone || !address) {
      setError('All fields are required');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    if (!validatePhone(phone)) {
      setError('Please enter a valid phone number (XXX-XXX-XXXX)');
      return;
    }

    onSave(email, phone, address);
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
            Update Contact Info
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
              <Mail className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-blue-900 font-semibold mb-1 text-sm">
                  Keep Your Info Updated
                </h3>
                <p className="text-blue-700 text-xs">
                  We'll use this information to send important election updates and notifications.
                </p>
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

          {/* Email */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2 text-sm">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8c1d40] focus:border-transparent transition-all"
                placeholder="your.email@example.com"
              />
            </div>
          </div>

          {/* Phone */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2 text-sm">
              Phone Number
            </label>
            <div className="relative">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8c1d40] focus:border-transparent transition-all"
                placeholder="268-XXX-XXXX"
              />
            </div>
            <p className="text-gray-500 text-xs mt-2 ml-1">
              Format: XXX-XXX-XXXX
            </p>
          </div>

          {/* Address */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2 text-sm">
              Address
            </label>
            <div className="relative">
              <MapPin className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
              <textarea
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                rows={3}
                className="w-full pl-12 pr-4 py-3.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8c1d40] focus:border-transparent transition-all resize-none"
                placeholder="Enter your full address"
              />
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