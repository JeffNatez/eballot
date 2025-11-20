import { motion } from 'motion/react';
import { ArrowLeft, Shield, User, Eye } from 'lucide-react';
import { useState } from 'react';
import { showSuccessToast, showErrorToast, validateEmail } from '../../utils/errorHandling';

interface AddEditUserPageProps {
  onBack: () => void;
  onSave: (user: any) => void;
  editData?: {
    id: string;
    name: string;
    email: string;
    studentId?: string;
    role: 'admin' | 'voter' | 'auditor';
    status: 'active' | 'suspended';
  };
}

export function AddEditUserPage({ onBack, onSave, editData }: AddEditUserPageProps) {
  const [name, setName] = useState(editData?.name || '');
  const [email, setEmail] = useState(editData?.email || '');
  const [studentId, setStudentId] = useState(editData?.studentId || '');
  const [role, setRole] = useState<'admin' | 'voter' | 'auditor'>(editData?.role || 'voter');
  const [status, setStatus] = useState<'active' | 'suspended'>(editData?.status || 'active');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      showErrorToast('Please enter a name');
      return;
    }

    const emailError = validateEmail(email);
    if (emailError) {
      showErrorToast(emailError);
      return;
    }

    const user = {
      id: editData?.id || Date.now().toString(),
      name,
      email,
      studentId: studentId || undefined,
      role,
      status,
      lastLogin: editData?.id ? editData.id : 'Never',
    };

    onSave(user);
    showSuccessToast(editData ? 'User updated successfully!' : 'User added successfully!');
  };

  const roles = [
    { value: 'admin' as const, label: 'Admin', icon: Shield, description: 'Full system access' },
    { value: 'voter' as const, label: 'Voter', icon: User, description: 'Can participate in elections' },
    { value: 'auditor' as const, label: 'Auditor', icon: Eye, description: 'Can view and audit results' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile-Optimized Header */}
      <div className="bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] text-white sticky top-0 z-10">
        <div className="px-4 py-4">
          <div className="flex items-center gap-3">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={onBack}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </motion.button>
            <div>
              <h1 className="text-xl font-bold">{editData ? 'Edit User' : 'Add New User'}</h1>
              <p className="text-white/80 text-xs">Configure user details and permissions</p>
            </div>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="px-4 py-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Information */}
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <h2 className="font-bold text-gray-900 mb-4">Basic Information</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="user@uwi.edu"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Student ID (Optional)
                </label>
                <input
                  type="text"
                  value={studentId}
                  onChange={(e) => setStudentId(e.target.value)}
                  placeholder="500000123"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]"
                />
              </div>
            </div>
          </div>

          {/* Role Selection */}
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <h2 className="font-bold text-gray-900 mb-4">User Role</h2>
            <div className="space-y-3">
              {roles.map((roleOption) => {
                const Icon = roleOption.icon;
                const isSelected = role === roleOption.value;
                return (
                  <button
                    key={roleOption.value}
                    type="button"
                    onClick={() => setRole(roleOption.value)}
                    className={`w-full p-4 rounded-xl border-2 transition-all text-left ${
                      isSelected
                        ? 'border-[#1e3a8a] bg-blue-50'
                        : 'border-gray-200 bg-white hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${
                        isSelected ? 'bg-[#1e3a8a] text-white' : 'bg-gray-100 text-gray-600'
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <p className={`font-semibold ${isSelected ? 'text-[#1e3a8a]' : 'text-gray-900'}`}>
                          {roleOption.label}
                        </p>
                        <p className="text-sm text-gray-600">{roleOption.description}</p>
                      </div>
                      {isSelected && (
                        <div className="w-5 h-5 rounded-full bg-[#1e3a8a] flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-white" />
                        </div>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Status */}
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <h2 className="font-bold text-gray-900 mb-4">Account Status</h2>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setStatus('active')}
                className={`flex-1 p-4 rounded-xl border-2 transition-all ${
                  status === 'active'
                    ? 'border-green-500 bg-green-50'
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <div className="flex items-center gap-2 justify-center">
                  <div className={`w-3 h-3 rounded-full ${status === 'active' ? 'bg-green-500' : 'bg-gray-300'}`} />
                  <span className={`font-semibold ${status === 'active' ? 'text-green-700' : 'text-gray-600'}`}>
                    Active
                  </span>
                </div>
              </button>
              <button
                type="button"
                onClick={() => setStatus('suspended')}
                className={`flex-1 p-4 rounded-xl border-2 transition-all ${
                  status === 'suspended'
                    ? 'border-red-500 bg-red-50'
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <div className="flex items-center gap-2 justify-center">
                  <div className={`w-3 h-3 rounded-full ${status === 'suspended' ? 'bg-red-500' : 'bg-gray-300'}`} />
                  <span className={`font-semibold ${status === 'suspended' ? 'text-red-700' : 'text-gray-600'}`}>
                    Suspended
                  </span>
                </div>
              </button>
            </div>
          </div>

          {/* Submit Buttons */}
          <div className="sticky bottom-4 flex gap-3">
            <motion.button
              type="button"
              whileTap={{ scale: 0.98 }}
              onClick={onBack}
              className="flex-1 px-6 py-4 bg-white border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors shadow-sm"
            >
              Cancel
            </motion.button>
            <motion.button
              type="submit"
              whileTap={{ scale: 0.98 }}
              className="flex-1 px-6 py-4 bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] text-white rounded-xl font-semibold shadow-lg"
            >
              {editData ? 'Update User' : 'Add User'}
            </motion.button>
          </div>
        </form>
      </div>
    </div>
  );
}