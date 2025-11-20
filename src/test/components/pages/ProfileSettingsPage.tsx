import { motion } from 'motion/react';
import { ArrowLeft, KeyRound, Phone, LogOut, Moon, Bell, ChevronRight, UserPlus } from 'lucide-react';
import imgImage5 from "../../imports/Image-5.png";

interface VotingHistoryItem {
  id: string;
  title: string;
  date: string;
}

interface ProfileSettingsPageProps {
  onBack: () => void;
  onChangePassword: () => void;
  onUpdateContact: () => void;
  onCandidateRegistration: () => void;
  onLogout: () => void;
  userName: string;
  studentId: string;
  votingHistory: VotingHistoryItem[];
}

export function ProfileSettingsPage({
  onBack,
  onChangePassword,
  onUpdateContact,
  onCandidateRegistration,
  onLogout,
  userName,
  studentId,
  votingHistory
}: ProfileSettingsPageProps) {
  return (
    <div className="fixed inset-0 bg-gray-50 flex flex-col overflow-hidden">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 pt-14 pb-4">
        <div className="flex items-center gap-3">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={onBack}
            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center"
          >
            <ArrowLeft className="w-5 h-5 text-gray-700" />
          </motion.button>
          <h1 className="text-gray-900 font-bold" style={{ fontSize: '22px' }}>
            Profile Settings
          </h1>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto pb-24" style={{ scrollbarWidth: 'none' }}>
        <style>{`::-webkit-scrollbar { display: none; }`}</style>

        {/* Profile Section */}
        <div className="bg-white mx-6 mt-6 rounded-2xl p-5 shadow-sm border border-gray-100">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#8c1d40]">
              <img src={imgImage5} alt="Profile" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
              <h2 className="text-gray-900 font-bold mb-1" style={{ fontSize: '18px' }}>
                {userName}
              </h2>
              <p className="text-gray-500 text-sm">
                Student ID: {studentId}
              </p>
            </div>
          </div>
        </div>

        {/* Account Settings */}
        <div className="mt-6 px-6">
          <h3 className="text-gray-900 font-bold mb-3 px-1" style={{ fontSize: '16px' }}>
            Account Settings
          </h3>
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
            <motion.button
              whileTap={{ scale: 0.98 }}
              onClick={onChangePassword}
              className="w-full flex items-center gap-3 p-4 hover:bg-gray-50 transition-colors border-b border-gray-100"
            >
              <div className="w-10 h-10 rounded-xl bg-[#8c1d40]/10 flex items-center justify-center">
                <KeyRound className="w-5 h-5 text-[#8c1d40]" />
              </div>
              <span className="flex-1 text-left text-gray-900 font-medium">
                Change Password
              </span>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.98 }}
              onClick={onUpdateContact}
              className="w-full flex items-center gap-3 p-4 hover:bg-gray-50 transition-colors border-b border-gray-100"
            >
              <div className="w-10 h-10 rounded-xl bg-[#fdb913]/10 flex items-center justify-center">
                <Phone className="w-5 h-5 text-[#fdb913]" />
              </div>
              <span className="flex-1 text-left text-gray-900 font-medium">
                Update Contact Info
              </span>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.98 }}
              onClick={onCandidateRegistration}
              className="w-full flex items-center gap-3 p-4 hover:bg-gray-50 transition-colors border-b border-gray-100"
            >
              <div className="w-10 h-10 rounded-xl bg-[#1e3a8a]/10 flex items-center justify-center">
                <UserPlus className="w-5 h-5 text-[#1e3a8a]" />
              </div>
              <span className="flex-1 text-left text-gray-900 font-medium">
                Register as Candidate
              </span>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.98 }}
              onClick={onLogout}
              className="w-full flex items-center gap-3 p-4 hover:bg-gray-50 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center">
                <LogOut className="w-5 h-5 text-red-500" />
              </div>
              <span className="flex-1 text-left text-red-500 font-medium">
                Logout
              </span>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </motion.button>
          </div>
        </div>

        {/* Voting History */}
        <div className="mt-6 px-6">
          <h3 className="text-gray-900 font-bold mb-3 px-1" style={{ fontSize: '16px' }}>
            Voting History
          </h3>
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
            {votingHistory.map((item, index) => (
              <div
                key={item.id}
                className={`flex items-center gap-3 p-4 ${
                  index !== votingHistory.length - 1 ? 'border-b border-gray-100' : ''
                }`}
              >
                <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center">
                  <span className="text-lg">🗳️</span>
                </div>
                <div className="flex-1">
                  <p className="text-gray-900 font-medium mb-0.5">{item.title}</p>
                  <p className="text-gray-500 text-xs">Voted on {item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* App Settings */}
        <div className="mt-6 px-6 mb-6">
          <h3 className="text-gray-900 font-bold mb-3 px-1" style={{ fontSize: '16px' }}>
            App Settings
          </h3>
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 p-4 border-b border-gray-100">
              <div className="w-10 h-10 rounded-xl bg-[#1e3a8a]/10 flex items-center justify-center">
                <Moon className="w-5 h-5 text-[#1e3a8a]" />
              </div>
              <span className="flex-1 text-gray-900 font-medium">
                Dark Mode
              </span>
              <span className="text-gray-400 text-sm">Coming Soon</span>
            </div>

            <div className="flex items-center gap-3 p-4">
              <div className="w-10 h-10 rounded-xl bg-[#fdb913]/10 flex items-center justify-center">
                <Bell className="w-5 h-5 text-[#fdb913]" />
              </div>
              <span className="flex-1 text-gray-900 font-medium">
                Election Reminders
              </span>
              <span className="text-green-600 text-sm font-semibold">ON</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}