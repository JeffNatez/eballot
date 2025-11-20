import { motion } from 'motion/react';
import { ArrowLeft, Upload, FileText, CheckCircle, Clock, XCircle, Users } from 'lucide-react';
import { useState } from 'react';
import { showSuccessToast, showErrorToast } from '../../utils/errorHandling';

interface CandidateRegistrationPageProps {
  onBack: () => void;
}

interface Election {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  status: 'upcoming' | 'active';
}

interface CandidateApplication {
  id: string;
  electionId: string;
  electionTitle: string;
  position: string;
  status: 'pending' | 'approved' | 'rejected';
  submittedDate: string;
  statement: string;
}

export function CandidateRegistrationPage({ onBack }: CandidateRegistrationPageProps) {
  const [selectedElection, setSelectedElection] = useState<string>('');
  const [position, setPosition] = useState('');
  const [statement, setStatement] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');

  // Mock data - would come from backend
  const availableElections: Election[] = [
    {
      id: 'grad-2025',
      title: 'Graduate Elections 2025',
      description: 'Annual elections for graduate student representatives',
      startDate: '2025-12-10',
      endDate: '2025-12-12',
      status: 'upcoming',
    },
    {
      id: 'student-council',
      title: 'Student Council Elections',
      description: 'Elections for student council positions',
      startDate: '2025-10-15',
      endDate: '2025-10-17',
      status: 'active',
    },
  ];

  const myApplications: CandidateApplication[] = [
    {
      id: '1',
      electionId: 'undergrad-2024',
      electionTitle: 'Undergraduate Elections 2024',
      position: 'President',
      status: 'approved',
      submittedDate: '2024-09-15',
      statement: 'I am committed to representing the student body...',
    },
    {
      id: '2',
      electionId: 'sports-club',
      electionTitle: 'Sports Club Elections',
      position: 'Secretary',
      status: 'pending',
      submittedDate: '2024-11-01',
      statement: 'As an active member of the sports community...',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedElection) {
      showErrorToast('Please select an election');
      return;
    }

    if (!position.trim()) {
      showErrorToast('Please enter the position you are applying for');
      return;
    }

    if (!statement.trim()) {
      showErrorToast('Please write a candidate statement');
      return;
    }

    if (statement.length < 50) {
      showErrorToast('Candidate statement must be at least 50 characters');
      return;
    }

    // Submit application
    showSuccessToast('Candidate application submitted successfully!');
    setSelectedElection('');
    setPosition('');
    setStatement('');
    setPhotoUrl('');
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved':
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'pending':
        return <Clock className="w-5 h-5 text-orange-600" />;
      case 'rejected':
        return <XCircle className="w-5 h-5 text-red-600" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved':
        return 'bg-green-100 text-green-700';
      case 'pending':
        return 'bg-orange-100 text-orange-700';
      case 'rejected':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-50 flex flex-col overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#8c1d40] to-[#a52347] text-white px-6 pt-14 pb-4">
        <div className="flex items-center gap-3">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={onBack}
            className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center"
          >
            <ArrowLeft className="w-5 h-5" />
          </motion.button>
          <div>
            <h1 className="font-bold" style={{ fontSize: '22px' }}>
              Candidate Registration
            </h1>
            <p className="text-white/80 text-xs">Apply to run in elections</p>
          </div>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto pb-24" style={{ scrollbarWidth: 'none' }}>
        <style>{`::-webkit-scrollbar { display: none; }`}</style>

        {/* My Applications */}
        {myApplications.length > 0 && (
          <div className="mt-6 px-6">
            <h3 className="text-gray-900 font-bold mb-3 px-1" style={{ fontSize: '16px' }}>
              My Applications
            </h3>
            <div className="space-y-3">
              {myApplications.map((app) => (
                <div
                  key={app.id}
                  className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-[#8c1d40]/10 flex items-center justify-center flex-shrink-0">
                      <Users className="w-5 h-5 text-[#8c1d40]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-gray-900 font-semibold mb-0.5">
                        {app.electionTitle}
                      </h4>
                      <p className="text-sm text-gray-600">Position: {app.position}</p>
                      <p className="text-xs text-gray-500 mt-1">
                        Submitted on {app.submittedDate}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {getStatusIcon(app.status)}
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(app.status)}`}>
                      {app.status.charAt(0).toUpperCase() + app.status.slice(1)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* New Application Form */}
        <div className="mt-6 px-6 mb-6">
          <h3 className="text-gray-900 font-bold mb-3 px-1" style={{ fontSize: '16px' }}>
            Submit New Application
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Select Election */}
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                Select Election *
              </label>
              <select
                value={selectedElection}
                onChange={(e) => setSelectedElection(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8c1d40] bg-white text-gray-900"
              >
                <option value="">Choose an election...</option>
                {availableElections.map((election) => (
                  <option key={election.id} value={election.id}>
                    {election.title} ({election.status === 'active' ? 'Active' : 'Upcoming'})
                  </option>
                ))}
              </select>
              {selectedElection && (
                <p className="text-xs text-gray-600 mt-2">
                  {availableElections.find((e) => e.id === selectedElection)?.description}
                </p>
              )}
            </div>

            {/* Position */}
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                Position Applying For *
              </label>
              <input
                type="text"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                placeholder="e.g., President, Vice President, Secretary"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8c1d40]"
              />
            </div>

            {/* Candidate Photo */}
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                Candidate Photo
              </label>
              <div className="flex items-center gap-3">
                <div className="flex-1">
                  <input
                    type="text"
                    value={photoUrl}
                    onChange={(e) => setPhotoUrl(e.target.value)}
                    placeholder="Photo URL (optional)"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8c1d40]"
                  />
                </div>
                <button
                  type="button"
                  className="w-12 h-12 rounded-xl bg-[#8c1d40]/10 flex items-center justify-center flex-shrink-0"
                >
                  <Upload className="w-5 h-5 text-[#8c1d40]" />
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Upload a professional photo (optional)
              </p>
            </div>

            {/* Candidate Statement */}
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                Candidate Statement *
              </label>
              <textarea
                value={statement}
                onChange={(e) => setStatement(e.target.value)}
                placeholder="Tell voters why they should choose you. What are your goals and qualifications? (Minimum 50 characters)"
                rows={6}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8c1d40] resize-none"
              />
              <div className="flex justify-between items-center mt-2">
                <p className="text-xs text-gray-500">
                  Minimum 50 characters
                </p>
                <p className={`text-xs font-semibold ${statement.length >= 50 ? 'text-green-600' : 'text-gray-400'}`}>
                  {statement.length}/50
                </p>
              </div>
            </div>

            {/* Submit Button */}
            <div className="sticky bottom-4">
              <motion.button
                type="submit"
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-4 bg-gradient-to-r from-[#8c1d40] to-[#a52347] text-white rounded-xl font-semibold shadow-lg flex items-center justify-center gap-2"
              >
                <FileText className="w-5 h-5" />
                <span>Submit Application</span>
              </motion.button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
