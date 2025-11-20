import { motion } from 'motion/react';
import { ArrowLeft, Calendar, Plus, X } from 'lucide-react';
import { useState } from 'react';
import { showSuccessToast, showErrorToast } from '../../utils/errorHandling';

interface CreateElectionPageProps {
  onBack: () => void;
  onSave: (election: any) => void;
  editData?: {
    id: string;
    title: string;
    description: string;
    startDate: string;
    endDate: string;
    positions: Array<{ id: string; title: string; description: string }>;
  };
}

export function CreateElectionPage({ onBack, onSave, editData }: CreateElectionPageProps) {
  const [title, setTitle] = useState(editData?.title || '');
  const [description, setDescription] = useState(editData?.description || '');
  const [startDate, setStartDate] = useState(editData?.startDate || '');
  const [endDate, setEndDate] = useState(editData?.endDate || '');
  const [positions, setPositions] = useState<Array<{ id: string; title: string; description: string }>>(editData?.positions || []);
  const [newPosition, setNewPosition] = useState({ title: '', description: '' });

  const handleAddPosition = () => {
    if (!newPosition.title.trim()) {
      showErrorToast('Please enter a position title');
      return;
    }

    setPositions([
      ...positions,
      {
        id: Date.now().toString(),
        title: newPosition.title,
        description: newPosition.description,
      },
    ]);
    setNewPosition({ title: '', description: '' });
  };

  const handleRemovePosition = (id: string) => {
    setPositions(positions.filter(p => p.id !== id));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim()) {
      showErrorToast('Please enter an election title');
      return;
    }

    if (!startDate || !endDate) {
      showErrorToast('Please select start and end dates');
      return;
    }

    if (positions.length === 0) {
      showErrorToast('Please add at least one position');
      return;
    }

    const election = {
      id: editData?.id || Date.now().toString(),
      title,
      description,
      startDate,
      endDate,
      positions,
      status: 'upcoming',
      createdAt: new Date().toISOString(),
    };

    onSave(election);
    showSuccessToast(editData ? 'Election updated successfully!' : 'Election created successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile-Optimized Header */}
      <div className="bg-gradient-to-r from-[#8c1d40] to-[#a52347] text-white sticky top-0 z-10">
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
              <h1 className="text-xl font-bold">{editData ? 'Edit Election' : 'Create New Election'}</h1>
              <p className="text-white/80 text-xs">Set up {editData ? 'the' : 'a new'} election for your campus</p>
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
                  Election Title *
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g., Student Council Elections 2025"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8c1d40]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Provide details about this election..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8c1d40]"
                />
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Start Date *
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8c1d40] appearance-none"
                    />
                    <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    End Date *
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8c1d40] appearance-none"
                    />
                    <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Positions */}
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <h2 className="font-bold text-gray-900 mb-4">Positions</h2>

            {/* Add Position Form */}
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Position Title
                </label>
                <input
                  type="text"
                  value={newPosition.title}
                  onChange={(e) => setNewPosition({ ...newPosition, title: e.target.value })}
                  placeholder="e.g., President, Vice President"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8c1d40]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Position Description
                </label>
                <input
                  type="text"
                  value={newPosition.description}
                  onChange={(e) => setNewPosition({ ...newPosition, description: e.target.value })}
                  placeholder="Brief description of this position"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8c1d40]"
                />
              </div>

              <motion.button
                type="button"
                whileTap={{ scale: 0.98 }}
                onClick={handleAddPosition}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors font-semibold"
              >
                <Plus className="w-5 h-5" />
                <span>Add Position</span>
              </motion.button>
            </div>

            {/* Positions List */}
            {positions.length > 0 && (
              <div className="space-y-3">
                <p className="text-sm font-medium text-gray-700">Added Positions ({positions.length})</p>
                {positions.map((position) => (
                  <div
                    key={position.id}
                    className="flex items-start justify-between p-4 bg-gray-50 rounded-xl border border-gray-200"
                  >
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">{position.title}</h4>
                      {position.description && (
                        <p className="text-sm text-gray-600 mt-1">{position.description}</p>
                      )}
                    </div>
                    <button
                      type="button"
                      onClick={() => handleRemovePosition(position.id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors ml-2"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Submit Buttons - Fixed at bottom on mobile */}
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
              className="flex-1 px-6 py-4 bg-gradient-to-r from-[#8c1d40] to-[#a52347] text-white rounded-xl font-semibold shadow-lg"
            >
              {editData ? 'Update' : 'Create'}
            </motion.button>
          </div>
        </form>
      </div>
    </div>
  );
}