import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Search, X } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface BallotPageProps {
  onBack?: () => void;
  onElectionClick?: (electionId: string) => void;
  showBackButton?: boolean;
}

type FilterType = 'All' | 'Open' | 'Upcoming' | 'Voted' | 'Closed';

interface Election {
  id: string;
  title: string;
  dateRange: string;
  status: FilterType;
  imageLabel: string;
  statusColor: string;
}

const mockElections: Election[] = [
  {
    id: 'graduate-2025',
    title: 'Graduate Elections 2025',
    dateRange: 'Dec 10–12, 2025',
    status: 'Open',
    imageLabel: 'Graduate Elections Banner',
    statusColor: '#22c55e'
  },
  {
    id: 'campus-activities-2025',
    title: 'Campus Activities Elections 2025',
    dateRange: 'Feb 1–3, 2026',
    status: 'Upcoming',
    imageLabel: 'Campus Activities Committee Icon',
    statusColor: '#3b82f6'
  },
  {
    id: 'quality-circle-2023',
    title: 'Quality Circle Elections 2023',
    dateRange: 'Aug 21–23, 2023',
    status: 'Closed',
    imageLabel: 'Quality Circle Elections Graphic',
    statusColor: '#6b7280'
  },
  {
    id: 'guild-exec-2025',
    title: 'Guild Executive Elections 2025',
    dateRange: 'Nov 15–17, 2025',
    status: 'Open',
    imageLabel: 'Guild Executive Elections Banner',
    statusColor: '#22c55e'
  },
  {
    id: 'student-council-2025',
    title: 'Student Council Elections 2025',
    dateRange: 'Jan 5–10, 2026',
    status: 'Upcoming',
    imageLabel: 'Student Council Elections Icon',
    statusColor: '#3b82f6'
  },
  {
    id: 'environment-2024',
    title: 'Environment Committee Elections 2024',
    dateRange: 'Sept 1–3, 2024',
    status: 'Voted',
    imageLabel: 'Environment Committee Elections Graphic',
    statusColor: '#8c1d40'
  }
];

const filterOptions: FilterType[] = ['All', 'Open', 'Upcoming', 'Voted', 'Closed'];

export function BallotPage({ onBack, onElectionClick, showBackButton = true }: BallotPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<FilterType>('All');
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Filter elections based on search and filter
  const filteredElections = mockElections.filter((election) => {
    const matchesSearch = election.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = selectedFilter === 'All' || election.status === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe || isRightSwipe) {
      // Handle swipe gestures if needed (e.g., navigate between filters)
      const currentIndex = filterOptions.indexOf(selectedFilter);
      if (isLeftSwipe && currentIndex < filterOptions.length - 1) {
        setSelectedFilter(filterOptions[currentIndex + 1]);
      } else if (isRightSwipe && currentIndex > 0) {
        setSelectedFilter(filterOptions[currentIndex - 1]);
      }
    }
  };

  const handleElectionClick = (electionId: string) => {
    if (onElectionClick) {
      onElectionClick(electionId);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-50 flex flex-col overflow-hidden">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 pt-14 pb-4 flex-shrink-0">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 flex-1">
            {showBackButton && onBack && (
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={onBack}
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center"
              >
                <ArrowLeft className="w-5 h-5 text-gray-700" />
              </motion.button>
            )}
            <h1 className="text-gray-900 font-bold" style={{ fontSize: '22px' }}>
              Available Elections
            </h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div 
        className="flex-1 overflow-y-auto" 
        style={{ scrollbarWidth: 'none', paddingBottom: '120px' }}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <style>{`::-webkit-scrollbar { display: none; }`}</style>
        
        <div className="p-6 space-y-6">
          {/* Search Elections */}
          <div className="space-y-2">
            <label className="block text-gray-900 font-semibold text-sm">
              Search Elections
            </label>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-12 py-3.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8c1d40] focus:border-transparent transition-all text-gray-900 placeholder:text-gray-400"
                placeholder="Search by election name..."
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
            <p className="text-xs text-gray-500">
              Type to search for an election
            </p>
          </div>

          {/* Filter Elections */}
          <div className="space-y-2">
            <label className="block text-gray-900 font-semibold text-sm">
              Filter Elections
            </label>
            <div className="flex gap-2 overflow-x-auto pb-2" style={{ scrollbarWidth: 'none' }}>
              {filterOptions.map((filter) => (
                <motion.button
                  key={filter}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedFilter(filter)}
                  className={`px-5 py-2 rounded-xl font-medium text-sm whitespace-nowrap transition-all ${
                    selectedFilter === filter
                      ? 'bg-gradient-to-r from-[#8c1d40] to-[#b8234a] text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {filter}
                </motion.button>
              ))}
            </div>
            <p className="text-xs text-gray-500">
              Select a filter
            </p>
          </div>

          {/* Election Cards */}
          <div className="space-y-4">
            <h2 className="text-gray-900 font-bold text-lg">
              Election Cards
            </h2>
            
            <AnimatePresence mode="popLayout">
              {filteredElections.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="bg-white rounded-2xl border border-gray-200 p-8 text-center"
                >
                  <p className="text-gray-500 font-medium">
                    No elections found
                  </p>
                  <p className="text-gray-400 text-sm mt-1">
                    Try adjusting your search or filter
                  </p>
                </motion.div>
              ) : (
                <div className="grid grid-cols-2 gap-4">
                  {filteredElections.map((election, index) => {
                    // Different images for each election
                    const electionImages = [
                      'https://images.unsplash.com/photo-1632834380561-d1e05839a33a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwc3R1ZGVudHN8ZW58MXx8fHwxNzYzNDAwNjU1fDA&ixlib=rb-4.1.0&q=80&w=1080',
                      'https://images.unsplash.com/photo-1758270705799-12efda48d4f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1wdXMlMjBhY3Rpdml0aWVzJTIwc3R1ZGVudHN8ZW58MXx8fHwxNzYzNTAxODE5fDA&ixlib=rb-4.1.0&q=80&w=1080',
                      'https://images.unsplash.com/photo-1603032813605-2c91e257e2ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwZWxlY3Rpb24lMjB2b3Rpbmd8ZW58MXx8fHwxNzYzNTAxODE4fDA&ixlib=rb-4.1.0&q=80&w=1080',
                      'https://images.unsplash.com/photo-1603719916327-8c86ba5bebba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwZ292ZXJubWVudCUyMG1lZXRpbmd8ZW58MXx8fHwxNzYzNTAxODE5fDA&ixlib=rb-4.1.0&q=80&w=1080',
                      'https://images.unsplash.com/photo-1632834380561-d1e05839a33a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwc3R1ZGVudHN8ZW58MXx8fHwxNzYzNDAwNjU1fDA&ixlib=rb-4.1.0&q=80&w=1080',
                      'https://images.unsplash.com/photo-1758270705799-12efda48d4f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1wdXMlMjBhY3Rpdml0aWVzJTIwc3R1ZGVudHN8ZW58MXx8fHwxNzYzNTAxODE5fDA&ixlib=rb-4.1.0&q=80&w=1080',
                    ];
                    const imageIndex = index % electionImages.length;
                    
                    return (
                      <motion.div
                        key={election.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ delay: index * 0.05 }}
                        className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200"
                      >
                        {/* Election Image/Banner */}
                        <div className="relative h-36 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                          <ImageWithFallback 
                            src={electionImages[imageIndex]}
                            alt={election.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                          {/* Date Tag */}
                          <div className="absolute top-0 left-0 bg-[rgba(0,0,0,0.7)] backdrop-blur-sm px-3 py-1.5 rounded-br-xl rounded-tl-2xl z-10">
                            <p className="text-white text-xs font-medium">
                              {election.dateRange}
                            </p>
                          </div>
                        </div>

                        {/* Election Info */}
                        <div className="p-3">
                          <p className="text-gray-600 text-xs mb-2 line-clamp-2 min-h-[32px]">
                            {election.title}
                          </p>
                          <div className="flex items-center gap-2 mb-3">
                            <div 
                              className="w-2 h-2 rounded-full" 
                              style={{ backgroundColor: election.statusColor }}
                            />
                            <p className="font-semibold text-sm" style={{ color: election.statusColor }}>
                              {election.status}
                            </p>
                          </div>

                          {/* View Ballot Button */}
                          <motion.button
                            whileTap={{ scale: 0.95 }}
                            onClick={() => handleElectionClick(election.id)}
                            className="w-full py-2 rounded-lg bg-gradient-to-r from-[#8c1d40] to-[#b8234a] text-white font-semibold text-sm shadow-md hover:shadow-lg transition-shadow"
                          >
                            View Ballot
                          </motion.button>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              )}
            </AnimatePresence>
          </div>

          {/* Action Buttons - REMOVED */}
          {/* These buttons are no longer needed since View Ballot is on each card */}
        </div>
      </div>
    </div>
  );
}