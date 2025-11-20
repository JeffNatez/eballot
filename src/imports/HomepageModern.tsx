import svgPaths from "./svg-bf056sss8u";
import imgImage5 from "figma:asset/ecae27715aa32e47667f66523860b56548e5b466.png";
import imgLogo from "figma:asset/964787b9b16c8a8fe59b8a267d12744d9dd5b705.png";
import imgImage6 from "figma:asset/fc496f440142530896720ebcfb49f68a5bcad976.png";
import imgImage7 from "figma:asset/824e9ab8819c5cf58b6495360b683684a409b9d9.png";
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Home, FileText, BarChart3, HelpCircle, ChevronRight, Clock, Users, Calendar, CheckCircle2, Timer } from 'lucide-react';
import { BottomSheet } from '../components/BottomSheet';
import { PullToRefresh } from '../components/PullToRefresh';
import { BallotPage } from '../components/pages/BallotPage';
import { ResultsPage } from '../components/pages/ResultsPage';
import { HelpPage } from '../components/pages/HelpPage';
import { PositionsListPage } from '../components/pages/PositionsListPage';
import { VotePage } from '../components/pages/VotePage';
import { VotingProcessPage } from '../components/pages/VotingProcessPage';
import { VoteReceiptPage } from '../components/pages/VoteReceiptPage';
import { ProfileSettingsPage } from '../components/pages/ProfileSettingsPage';
import { ChangePasswordPage } from '../components/pages/ChangePasswordPage';
import { UpdateContactPage } from '../components/pages/UpdateContactPage';
import { CandidateRegistrationPage } from '../components/pages/CandidateRegistrationPage';
import { ElectionDetailsPage } from '../components/pages/ElectionDetailsPage';
import { ResultsDetailsPage } from '../components/pages/ResultsDetailsPage';
import { toast } from 'sonner@2.0.3';

type Page = 'home' | 'ballot' | 'results' | 'help' | 'positions-list' | 'vote' | 'voting-process' | 'vote-receipt' | 'profile-settings' | 'change-password' | 'update-contact' | 'candidate-registration' | 'election-details' | 'results-details';

interface ElectionDetails {
  title: string;
  subtitle: string;
  description: string;
  deadline: string;
  candidates: { name: string; info: string; votes?: string }[];
  totalVotes?: string;
}

function StatusBar({ isDark = false }: { isDark?: boolean }) {
  const currentTime = new Date().toLocaleTimeString('en-US', { 
    hour: 'numeric', 
    minute: '2-digit',
    hour12: false 
  });

  const textColor = isDark ? 'text-white' : 'text-gray-900';
  const iconColor = isDark ? 'white' : '#111827';

  return (
    <div className="fixed top-0 left-0 right-0 h-14 flex items-center justify-between px-6 z-50">
      {/* Time */}
      <p className={`font-semibold drop-shadow-md transition-colors duration-300 ${textColor}`}>{currentTime}</p>
      
      {/* Right Icons */}
      <div className="flex items-center gap-1.5">
        {/* Signal */}
        <div className="flex items-end gap-0.5">
          {[...Array(4)].map((_, i) => (
            <div 
              key={i} 
              className="w-1 drop-shadow-md rounded-sm transition-colors duration-300"
              style={{ 
                height: `${(i + 1) * 3}px`,
                backgroundColor: iconColor
              }}
            />
          ))}
        </div>
        
        {/* WiFi */}
        <svg width="16" height="12" viewBox="0 0 16 12" fill="none" className="drop-shadow-md transition-colors duration-300">
          <path d="M8 12C8.82843 12 9.5 11.3284 9.5 10.5C9.5 9.67157 8.82843 9 8 9C7.17157 9 6.5 9.67157 6.5 10.5C6.5 11.3284 7.17157 12 8 12Z" fill={iconColor}/>
          <path d="M8 7C9.38071 7 10.6629 7.55964 11.6213 8.46447L13.0355 7.05025C11.6972 5.7118 9.93913 5 8 5C6.06087 5 4.30278 5.7118 2.96447 7.05025L4.37868 8.46447C5.33714 7.55964 6.61929 7 8 7Z" fill={iconColor}/>
          <path d="M8 3C10.2091 3 12.2091 3.89543 13.6569 5.34315L15.0711 3.92893C13.2433 2.10104 10.7614 1 8 1C5.23858 1 2.75669 2.10104 0.928932 3.92893L2.34315 5.34315C3.79086 3.89543 5.79086 3 8 3Z" fill={iconColor}/>
        </svg>
        
        {/* Battery */}
        <div className="flex items-center gap-0.5">
          <div 
            className="w-6 h-3 rounded-sm relative drop-shadow-md transition-colors duration-300"
            style={{ 
              border: `2px solid ${iconColor}`
            }}
          >
            <div 
              className="absolute inset-0.5 rounded-sm transition-colors duration-300" 
              style={{ 
                width: '80%',
                backgroundColor: iconColor
              }} 
            />
          </div>
          <div 
            className="w-0.5 h-1.5 rounded-r-sm drop-shadow-md transition-colors duration-300" 
            style={{ backgroundColor: iconColor }}
          />
        </div>
      </div>
    </div>
  );
}

function NavBar({ currentPage, onNavigate }: { currentPage: Page; onNavigate: (page: Page) => void }) {
  const navItems = [
    { id: 'home' as Page, label: 'Home', icon: Home },
    { id: 'ballot' as Page, label: 'Ballot', icon: FileText },
    { id: 'results' as Page, label: 'Results', icon: BarChart3 },
    { id: 'help' as Page, label: 'Help', icon: HelpCircle },
  ];

  // Map certain pages to their parent navigation items
  const getActiveNavPage = (page: Page): Page => {
    // Election details page is part of ballot flow
    if (page === 'election-details') return 'ballot';
    // Positions list, vote, voting process, and receipt are part of ballot flow
    if (page === 'positions-list' || page === 'vote' || page === 'voting-process' || page === 'vote-receipt') return 'ballot';
    // Results details page is part of results flow
    if (page === 'results-details') return 'results';
    // Profile pages map to home
    if (page === 'profile-settings' || page === 'change-password' || page === 'update-contact' || page === 'candidate-registration') return 'home';
    // Default: return the page itself
    return page;
  };

  const activeNavPage = getActiveNavPage(currentPage);

  return (
    <div className="fixed bottom-3 left-1/2 -translate-x-1/2 w-[calc(100%-24px)] max-w-md h-[70px] z-50 px-3" data-name="Nav Bar">
      {/* Nav Bar Background */}
      <div className="absolute left-0 top-0 w-full h-full">
        <div className="absolute bg-[rgba(217,217,217,0.99)] h-[65px] left-2 right-2 rounded-[25px] top-0 shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)]" />
        
        {/* Nav Items */}
        <div className="absolute bottom-0 left-0 right-0 h-full flex items-center justify-around px-4">
          {navItems.map((item) => {
            const isActive = activeNavPage === item.id;
            const IconComponent = item.icon;
            
            return (
              <motion.button
                key={item.id}
                className="flex flex-col items-center gap-1 min-w-[60px]"
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  onNavigate(item.id);
                  toast.success(`Navigated to ${item.label}`);
                }}
              >
                {/* Icon */}
                <IconComponent 
                  className="w-6 h-6" 
                  strokeWidth={2}
                  style={{
                    color: isActive ? '#8c1d40' : '#9ca3af',
                    transition: 'color 0.2s ease',
                  }}
                />
                
                {/* Label */}
                <p 
                  className="text-center text-xs leading-tight"
                  style={{
                    color: isActive ? '#8c1d40' : '#9ca3af',
                    fontWeight: isActive ? 600 : 400,
                    transition: 'color 0.2s ease, font-weight 0.2s ease',
                  }}
                >
                  {item.label}
                </p>
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function ModernHeader({ onProfileClick }: { onProfileClick: () => void }) {
  return (
    <div className="px-6 pt-6 pb-4">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 relative">
            <img src={imgLogo} alt="Campus Ballot Logo" className="w-full h-full object-contain" />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Welcome,</p>
            <h1 className="text-xl font-bold text-gray-900">Daniela</h1>
          </div>
        </div>
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={onProfileClick}
          className="relative"
        >
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#8c1d40]">
            <img src={imgImage5} alt="Profile" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white" />
        </motion.button>
      </div>

      {/* Voting Activity Stats */}
      <div className="bg-white rounded-3xl p-5 shadow-sm mb-6 border border-gray-100">
        <div className="flex items-center gap-2 mb-4">
          <BarChart3 className="w-5 h-5 text-[#8c1d40]" />
          <p className="text-gray-900 text-base font-semibold">Your Voting Activity</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
            <div className="flex items-center justify-center w-10 h-10 bg-green-100 rounded-full mb-3">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-1">2</p>
            <p className="text-gray-500 text-sm">Votes Cast</p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
            <div className="flex items-center justify-center w-10 h-10 bg-[#fdb913]/10 rounded-full mb-3">
              <Timer className="w-5 h-5 text-[#fdb913]" />
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-1">3</p>
            <p className="text-gray-500 text-sm">Remaining</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ModernElectionCard({ 
  image, 
  title, 
  subtitle, 
  daysLeft,
  onClick, 
  onSwipe,
  onVoteClick
}: { 
  image: string; 
  title: string; 
  subtitle: string; 
  daysLeft: number;
  onClick: () => void; 
  onSwipe?: () => void;
  onVoteClick?: () => void;
}) {
  return (
    <motion.div
      className="relative rounded-3xl overflow-hidden shadow-lg cursor-pointer"
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      drag={onSwipe ? "x" : false}
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.7}
      onDragEnd={(e, info) => {
        if (Math.abs(info.offset.x) > 100 && onSwipe) {
          onSwipe();
        }
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Image */}
      <div className="h-48 relative overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        
        {/* Badge */}
        <div className="absolute top-3 left-3 bg-green-500 text-white text-xs font-medium px-3 py-1.5 rounded-full flex items-center gap-1">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
          <span>Active</span>
        </div>

        {/* Days Left Badge */}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1">
          <Clock className="w-3 h-3" />
          <span>{daysLeft} days left</span>
        </div>
      </div>

      {/* Content */}
      <div className="bg-white p-4">
        <h3 className="font-bold text-gray-900 text-lg mb-1">{title}</h3>
        <p className="text-gray-500 text-sm mb-3">{subtitle}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-xs text-gray-400">
            <Users className="w-4 h-4" />
            <span>3 candidates</span>
          </div>
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="bg-[#8c1d40] text-white text-sm font-medium px-4 py-2 rounded-full flex items-center gap-1"
            onClick={(e) => {
              e.stopPropagation();
              if (onVoteClick) onVoteClick();
            }}
          >
            Vote
            <ChevronRight className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

function UpcomingElectionBanner() {
  return (
    <motion.div
      className="mx-6 mb-6 relative rounded-3xl p-6 overflow-hidden cursor-pointer shadow-lg"
      style={{
        background: 'linear-gradient(135deg, #fdb913 0%, #f59e0b 50%, #d97706 100%)'
      }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Decorative background elements */}
      <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
      <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
      
      <div className="relative z-10">
        {/* Coming Soon Badge */}
        <div className="inline-flex items-center gap-2 bg-white/25 backdrop-blur-md px-3 py-1.5 rounded-full mb-4">
          <Calendar className="w-3.5 h-3.5 text-white" />
          <span className="text-white text-xs font-semibold uppercase tracking-wider">Coming Soon</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex-1">
            <h3 className="text-white font-bold text-2xl mb-2 leading-tight">Faculty Elections</h3>
            <p className="text-white/90 text-sm font-medium">Starts Oct 22, 2024</p>
          </div>
          
          {/* Modern Icon Badge */}
          <div className="ml-4 flex-shrink-0">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/30 shadow-lg">
              <div className="text-center">
                <Calendar className="w-6 h-6 text-white mx-auto mb-1" />
                <span className="text-white text-xs font-bold">SOON</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="mt-4 h-1 bg-white/20 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-white/40 rounded-full"
            initial={{ width: '0%' }}
            animate={{ width: '60%' }}
            transition={{ duration: 1, delay: 0.3 }}
          />
        </div>
      </div>
    </motion.div>
  );
}

function ResultsPreview({ onClick }: { onClick: () => void }) {
  return (
    <motion.div
      className="mx-6 mb-6 bg-white rounded-3xl overflow-hidden shadow-lg cursor-pointer"
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
    >
      <div className="h-40 relative">
        <img src="https://images.unsplash.com/photo-1603032813605-2c91e257e2ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwZWxlY3Rpb24lMjB2b3Rpbmd8ZW58MXx8fHwxNzYzNTAxODE4fDA&ixlib=rb-4.1.0&q=80&w=1080" alt="Results" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="bg-green-500 text-white text-xs font-medium px-2.5 py-1 rounded-full">
              Completed
            </div>
          </div>
          <h3 className="text-white font-bold text-lg">Guild Executive Results 2024</h3>
        </div>
      </div>
      <div className="p-4">
        <p className="text-gray-600 text-sm mb-3">Results Announced</p>
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2 text-gray-500">
            <Users className="w-4 h-4" />
            <span>2,450 votes</span>
          </div>
          <motion.div
            whileHover={{ x: 4 }}
            className="flex items-center gap-1 text-[#8c1d40] font-medium"
          >
            View Details
            <ChevronRight className="w-4 h-4" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default function HomepageModern({ onLogout }: { onLogout?: () => void }) {
  const [showStatusBar, setShowStatusBar] = useState(true);
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const [selectedElection, setSelectedElection] = useState<ElectionDetails | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const lastScrollY = useRef(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  // Voting flow state
  const [currentElectionData, setCurrentElectionData] = useState<any>(null);
  const [currentPositionId, setCurrentPositionId] = useState<string | null>(null);
  const [selectedCandidateId, setSelectedCandidateId] = useState<string | null>(null);
  const [votedPositions, setVotedPositions] = useState<Set<string>>(new Set());
  const [selectedElectionId, setSelectedElectionId] = useState<string | null>(null);

  // Scroll to top whenever page changes
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [currentPage]);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const handleScroll = () => {
      const currentScrollY = scrollContainer.scrollTop;
      
      if (currentScrollY > lastScrollY.current && currentScrollY > 10) {
        setShowStatusBar(false);
      } else if (currentScrollY < lastScrollY.current) {
        setShowStatusBar(true);
      }
      
      if (currentScrollY < 10) {
        setShowStatusBar(true);
      }
      
      lastScrollY.current = currentScrollY;
    };

    scrollContainer.addEventListener('scroll', handleScroll, { passive: true });
    return () => scrollContainer.removeEventListener('scroll', handleScroll);
  }, []);

  const handleRefresh = async () => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
    toast.success('Content refreshed!');
  };

  const handleElectionClick = (election: ElectionDetails) => {
    setSelectedElection(election);
    setIsBottomSheetOpen(true);
    toast.info(`Viewing ${election.title}`);
  };

  const handleElectionSwipe = (title: string) => {
    toast.success(`${title} bookmarked!`);
  };

  // Mock elections data for display
  const elections = [
    {
      title: 'Student Council',
      subtitle: 'Vote until Oct 15',
      daysLeft: 12,
      description: 'Vote for your Student Council representatives. Choose leaders who will represent your voice and make a difference on campus.',
      deadline: 'Oct 15, 2024',
      candidates: [
        { name: 'Sarah Johnson', info: 'President' },
        { name: 'Mike Chen', info: 'Vice President' },
        { name: 'Emma Davis', info: 'Secretary' },
      ],
    },
    {
      title: 'Class Representatives',
      subtitle: 'Vote until Oct 20',
      daysLeft: 17,
      description: 'Elect your class representatives who will advocate for your needs and concerns throughout the academic year.',
      deadline: 'Oct 20, 2024',
      candidates: [
        { name: 'Alex Kumar', info: 'Junior Rep' },
        { name: 'Lisa Wang', info: 'Sophomore Rep' },
      ],
    },
  ];

  // Mock data for elections with positions
  const electionsData = {
    'student-council': {
      id: 'student-council',
      title: 'Student Council',
      subtitle: 'Vote until Oct 15',
      positions: [
        {
          id: 'president',
          title: 'President',
          description: 'Lead the student council and represent all students',
          candidatesCount: 3,
          voted: false,
          deadline: 'Oct 15, 2024',
          candidates: [
            {
              id: 'sarah-johnson',
              name: 'Sarah Johnson',
              position: 'Junior, Political Science',
              party: 'Unity Party',
              image: 'https://images.unsplash.com/photo-1600178572204-6ac8886aae63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBzdHVkZW50JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYzMzk5Mzk5fDA&ixlib=rb-4.1.0&q=80&w=1080',
            },
            {
              id: 'mike-chen',
              name: 'Mike Chen',
              position: 'Sophomore, Business',
              party: 'Progress Alliance',
              image: 'https://images.unsplash.com/photo-1590735627513-59a186ed0984?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHBvcnRyYWl0JTIwbWFsZXxlbnwxfHx8fDE3NjM0ODU0NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
            },
            {
              id: 'emma-davis',
              name: 'Emma Davis',
              position: 'Senior, Engineering',
              party: 'Student First',
              image: 'https://images.unsplash.com/photo-1762753674498-73ec49feafc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHByb2Zlc3Npb25hbCUyMGhlYWRzaG90fGVufDF8fHx8MTc2MzQxMzE4OHww&ixlib=rb-4.1.0&q=80&w=1080',
            },
          ],
        },
        {
          id: 'vice-president',
          title: 'Vice President',
          description: 'Support the president and manage student affairs',
          candidatesCount: 2,
          voted: false,
          deadline: 'Oct 15, 2024',
          candidates: [
            {
              id: 'alex-kumar',
              name: 'Alex Kumar',
              position: 'Junior, Computer Science',
              party: 'Tech Forward',
              image: 'https://images.unsplash.com/photo-1681070909604-f555aa006564?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwbGVhZGVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYzNDg5ODQ5fDA&ixlib=rb-4.1.0&q=80&w=1080',
            },
            {
              id: 'lisa-wang',
              name: 'Lisa Wang',
              position: 'Sophomore, Biology',
              party: 'Green Initiative',
              image: 'https://images.unsplash.com/photo-1600178572204-6ac8886aae63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBzdHVkZW50JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYzMzk5Mzk5fDA&ixlib=rb-4.1.0&q=80&w=1080',
            },
          ],
        },
        {
          id: 'secretary',
          title: 'Secretary',
          description: 'Maintain records and communications for the council',
          candidatesCount: 3,
          voted: false,
          deadline: 'Oct 15, 2024',
          candidates: [
            {
              id: 'jordan-lee',
              name: 'Jordan Lee',
              position: 'Junior, Communications',
              party: 'Voice Matters',
              image: 'https://images.unsplash.com/photo-1762753674498-73ec49feafc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHByb2Zlc3Npb25hbCUyMGhlYWRzaG90fGVufDF8fHx8MTc2MzQxMzE4OHww&ixlib=rb-4.1.0&q=80&w=1080',
              },
            {
              id: 'taylor-brown',
              name: 'Taylor Brown',
              position: 'Sophomore, English',
              party: 'Independent',
              image: 'https://images.unsplash.com/photo-1590735627513-59a186ed0984?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHBvcnRyYWl0JTIwbWFsZXxlbnwxfHx8fDE3NjM0ODU0NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
            },
            {
              id: 'casey-martinez',
              name: 'Casey Martinez',
              position: 'Junior, Journalism',
              party: 'Transparency Now',
              image: 'https://images.unsplash.com/photo-1681070909604-f555aa006564?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwbGVhZGVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYzNDg5ODQ5fDA&ixlib=rb-4.1.0&q=80&w=1080',
            },
          ],
        },
      ],
    },
    'class-representatives': {
      id: 'class-representatives',
      title: 'Class Representatives',
      subtitle: 'Vote until Oct 20',
      positions: [
        {
          id: 'junior-rep',
          title: 'Junior Representative',
          description: 'Represent the junior class in student affairs',
          candidatesCount: 2,
          voted: false,
          deadline: 'Oct 20, 2024',
          candidates: [
            {
              id: 'alex-kumar',
              name: 'Alex Kumar',
              position: 'Junior, Computer Science',
              party: 'Tech Forward',
              image: 'https://images.unsplash.com/photo-1681070909604-f555aa006564?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwbGVhZGVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYzNDg5ODQ5fDA&ixlib=rb-4.1.0&q=80&w=1080',
            },
            {
              id: 'maya-patel',
              name: 'Maya Patel',
              position: 'Junior, Psychology',
              party: 'Student Voice',
              image: 'https://images.unsplash.com/photo-1600178572204-6ac8886aae63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBzdHVkZW50JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYzMzk5Mzk5fDA&ixlib=rb-4.1.0&q=80&w=1080',
            },
          ],
        },
      ],
    },
  };

  // Navigation handlers
  const handleElectionVoteClick = (electionTitle: string) => {
    setIsBottomSheetOpen(false);
    const electionKey = electionTitle.toLowerCase().replace(/\s+/g, '-');
    const electionData = electionsData[electionKey as keyof typeof electionsData];
    
    if (electionData) {
      setCurrentElectionData(electionData);
      setCurrentPage('positions-list');
      toast.info(`Opening ${electionTitle}...`);
    }
  };

  const handlePositionSelect = (positionId: string) => {
    setCurrentPositionId(positionId);
    setCurrentPage('vote');
  };

  const handleCandidateVote = (candidateId: string) => {
    setSelectedCandidateId(candidateId);
    setCurrentPage('voting-process');
  };

  const handleVotingComplete = () => {
    setCurrentPage('vote-receipt');
  };

  const handleReceiptContinue = () => {
    if (currentPositionId) {
      setVotedPositions(prev => new Set([...prev, currentPositionId]));
    }
    setSelectedCandidateId(null);
    setCurrentPositionId(null);
    setCurrentPage('positions-list');
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
    setCurrentElectionData(null);
    setCurrentPositionId(null);
    setSelectedCandidateId(null);
  };

  // Handler for viewing ballot from BallotPage
  const handleViewBallot = (electionId: string) => {
    setSelectedElectionId(electionId);
    setCurrentPage('election-details');
    toast.info(`Viewing ballot details...`);
  };

  // Handler for viewing results from ResultsPage
  const handleViewResults = (electionId: string) => {
    setSelectedElectionId(electionId);
    setCurrentPage('results-details');
    toast.info(`Viewing election results...`);
  };

  // Get election details data for the selected election
  const getSelectedElectionDetails = () => {
    if (!selectedElectionId) return null;

    // Map election ID to election data
    const electionDataMap: any = {
      'graduate-2025': {
        id: 'graduate-2025',
        title: 'Graduate Elections 2025',
        dateRange: 'Dec 10–12, 2025',
        description: 'Vote for your graduate program representatives. This election will determine the leadership for all graduate students across all departments.',
        status: 'Open' as const,
        positions: [
          {
            id: 'grad-president',
            title: 'Graduate President',
            candidates: [
              { name: 'Candidate A', party: 'Green Party', imageLabel: 'Photo of Candidate A' },
              { name: 'Candidate B', party: 'Blue Party', imageLabel: 'Photo of Candidate B' },
            ]
          },
          {
            id: 'grad-vp',
            title: 'Graduate Vice President',
            candidates: [
              { name: 'Candidate C', party: 'Red Party', imageLabel: 'Photo of Candidate C' },
              { name: 'Candidate D', party: 'Yellow Party', imageLabel: 'Photo of Candidate D' },
            ]
          }
        ]
      },
      'student-council-2025': {
        id: 'student-council-2025',
        title: 'Student Council Elections 2025',
        dateRange: 'Jan 5–10, 2026',
        description: 'Vote for your Student Council representatives. Choose leaders who will represent your voice and make a difference on campus.',
        status: 'Upcoming' as const,
        positions: electionsData['student-council'].positions.map((p: any) => ({
          id: p.id,
          title: p.title,
          candidates: p.candidates.map((c: any) => ({
            name: c.name,
            party: c.party,
            imageLabel: `Photo of ${c.name}`
          }))
        }))
      },
      'guild-exec-2025': {
        id: 'guild-exec-2025',
        title: 'Guild Executive Elections 2025',
        dateRange: 'Nov 15–17, 2025',
        description: 'Elect your Guild Executive members who will lead student initiatives and represent your interests at the university level.',
        status: 'Open' as const,
        positions: [
          {
            id: 'guild-president',
            title: 'Guild President',
            candidates: [
              { name: 'Candidate E', party: 'Unity Alliance', imageLabel: 'Photo of Candidate E' },
              { name: 'Candidate F', party: 'Progress Party', imageLabel: 'Photo of Candidate F' },
              { name: 'Candidate G', party: 'Independent', imageLabel: 'Photo of Candidate G' },
            ]
          }
        ]
      },
      'campus-activities-2025': {
        id: 'campus-activities-2025',
        title: 'Campus Activities Elections 2025',
        dateRange: 'Feb 1–3, 2026',
        description: 'Vote for Campus Activities Board members who will organize and manage campus events throughout the year.',
        status: 'Upcoming' as const,
        positions: [
          {
            id: 'activities-chair',
            title: 'Activities Chair',
            candidates: [
              { name: 'Candidate H', party: 'Events First', imageLabel: 'Photo of Candidate H' },
              { name: 'Candidate I', party: 'Student Life', imageLabel: 'Photo of Candidate I' },
            ]
          }
        ]
      },
      'quality-circle-2023': {
        id: 'quality-circle-2023',
        title: 'Quality Circle Elections 2023',
        dateRange: 'Aug 21–23, 2023',
        description: 'This election has concluded. View the results and elected representatives.',
        status: 'Closed' as const,
        positions: [
          {
            id: 'qc-rep',
            title: 'Quality Circle Representative',
            candidates: [
              { name: 'Candidate J', party: 'Quality First', imageLabel: 'Photo of Candidate J' },
            ]
          }
        ]
      },
      'environment-2024': {
        id: 'environment-2024',
        title: 'Environment Committee Elections 2024',
        dateRange: 'Sept 1–3, 2024',
        description: 'You have already voted in this election. Thank you for your participation!',
        status: 'Voted' as const,
        positions: [
          {
            id: 'env-chair',
            title: 'Environment Chair',
            candidates: [
              { name: 'Candidate K', party: 'Green Initiative', imageLabel: 'Photo of Candidate K' },
              { name: 'Candidate L', party: 'Eco Action', imageLabel: 'Photo of Candidate L' },
            ]
          }
        ]
      },
    };

    return electionDataMap[selectedElectionId];
  };

  // Handler for "Vote Now" from election details page
  const handleVoteNowFromDetails = () => {
    if (!selectedElectionId) return;
    
    // Map election IDs to their data in electionsData
    const electionKeyMap: Record<string, keyof typeof electionsData> = {
      'student-council-2025': 'student-council',
      'guild-exec-2025': 'student-council', // Using student-council as template
      'graduate-2025': 'class-representatives', // Using class-rep as template
      'campus-activities-2025': 'class-representatives',
    };

    const electionKey = electionKeyMap[selectedElectionId];
    
    if (electionKey && electionsData[electionKey]) {
      const electionData = electionsData[electionKey];
      setCurrentElectionData(electionData);
      setCurrentPage('positions-list');
      toast.info('Starting voting process...');
    }
  };

  // Get current position and candidate data
  const getCurrentPosition = () => {
    if (!currentElectionData || !currentPositionId) return null;
    return currentElectionData.positions.find((p: any) => p.id === currentPositionId);
  };

  const getCurrentCandidate = () => {
    const position = getCurrentPosition();
    if (!position || !selectedCandidateId) return null;
    return position.candidates.find((c: any) => c.id === selectedCandidateId);
  };

  const generateReceiptId = () => {
    return `CB-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
  };

  // Determine status bar color based on current page
  const getStatusBarDarkMode = () => {
    // Only use white/light text on pages with dark backgrounds
    const lightTextPages: Page[] = ['positions-list', 'vote', 'voting-process'];
    return lightTextPages.includes(currentPage);
  };

  // Get results details data for the selected election
  const getResultsDetails = () => {
    if (!selectedElectionId) return null;

    // Map election results to their data
    const resultsDataMap: any = {
      'student-council-results': {
        electionId: 'student-council-results',
        title: 'Student Council Elections 2025',
        date: 'October 15, 2025',
        totalVotes: 3056,
        voterTurnout: 68,
        candidates: [
          { name: 'Sarah Johnson', position: 'President', votes: 1234, percentage: 40.4 },
          { name: 'Mike Chen', position: 'Vice President', votes: 987, percentage: 32.3 },
          { name: 'Emma Davis', position: 'Secretary', votes: 835, percentage: 27.3 },
        ]
      },
      'guild-exec-results': {
        electionId: 'guild-exec-results',
        title: 'Guild Executive Elections 2024',
        date: 'November 12, 2024',
        totalVotes: 2450,
        voterTurnout: 72,
        candidates: [
          { name: 'Michael Chen', position: 'Guild President', votes: 1050, percentage: 42.9 },
          { name: 'Lisa Rodriguez', position: 'Vice President', votes: 850, percentage: 34.7 },
          { name: 'David Kim', position: 'Treasurer', votes: 550, percentage: 22.4 },
        ]
      },
      'class-rep-results': {
        electionId: 'class-rep-results',
        title: 'Class Representatives 2024',
        date: 'September 20, 2024',
        totalVotes: 1820,
        voterTurnout: 65,
        candidates: [
          { name: 'Emma Davis', position: 'Senior Representative', votes: 720, percentage: 39.6 },
          { name: 'James Wilson', position: 'Junior Representative', votes: 680, percentage: 37.4 },
          { name: 'Sophie Martinez', position: 'Sophomore Representative', votes: 420, percentage: 23.0 },
        ]
      }
    };

    return resultsDataMap[selectedElectionId];
  };
  
  return (
    <div className="bg-gray-50 h-screen w-full flex flex-col overflow-hidden" data-name="Homepage">
      <div 
        ref={scrollContainerRef}
        className="flex-1 overflow-y-auto pb-[100px]"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <style>{`::-webkit-scrollbar { display: none; }`}</style>
        
        <AnimatePresence mode="wait">
          {currentPage === 'home' ? (
            <motion.div
              key="home"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
            >
              <PullToRefresh onRefresh={handleRefresh} scrollContainerRef={scrollContainerRef}>
                {isLoading && (
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 z-50 bg-white px-4 py-2 rounded-full shadow-lg">
                    <p className="text-sm text-gray-600">Refreshing...</p>
                  </div>
                )}
                
                <ModernHeader onProfileClick={() => setCurrentPage('profile-settings')} />

                {/* Ongoing Elections */}
                <div className="px-6 mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-bold text-gray-900">Active Elections</h2>
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setCurrentPage('ballot')}
                      className="text-[#8c1d40] text-sm font-medium flex items-center gap-1"
                    >
                      See all
                      <ChevronRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                  <div className="space-y-4">
                    <ModernElectionCard
                      image="https://images.unsplash.com/photo-1632834380561-d1e05839a33a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwc3R1ZGVudHN8ZW58MXx8fHwxNzYzNDAwNjU1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                      title={elections[0].title}
                      subtitle={elections[0].subtitle}
                      daysLeft={elections[0].daysLeft}
                      onClick={() => handleElectionClick(elections[0])}
                      onSwipe={() => handleElectionSwipe(elections[0].title)}
                      onVoteClick={() => handleElectionVoteClick(elections[0].title)}
                    />
                    <ModernElectionCard
                      image="https://images.unsplash.com/photo-1758270705799-12efda48d4f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1wdXMlMjBhY3Rpdml0aWVzJTIwc3R1ZGVudHN8ZW58MXx8fHwxNzYzNTAxODE5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                      title={elections[1].title}
                      subtitle={elections[1].subtitle}
                      daysLeft={elections[1].daysLeft}
                      onClick={() => handleElectionClick(elections[1])}
                      onSwipe={() => handleElectionSwipe(elections[1].title)}
                      onVoteClick={() => handleElectionVoteClick(elections[1].title)}
                    />
                  </div>
                </div>

                {/* Upcoming Elections */}
                <UpcomingElectionBanner />

                {/* Results */}
                <div className="px-6 mb-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Results</h2>
                </div>
                <ResultsPreview
                  onClick={() => {
                    setSelectedElectionId('guild-exec-results');
                    setCurrentPage('results-details');
                    toast.info('Viewing election results...');
                  }}
                />
              </PullToRefresh>
            </motion.div>
          ) : currentPage === 'ballot' ? (
            <BallotPage key="ballot" onElectionClick={handleViewBallot} />
          ) : currentPage === 'results' ? (
            <ResultsPage key="results" onElectionClick={handleViewResults} />
          ) : currentPage === 'help' ? (
            <HelpPage key="help" />
          ) : currentPage === 'positions-list' && currentElectionData ? (
            <PositionsListPage 
              key="positions-list"
              election={currentElectionData.title}
              subtitle={currentElectionData.subtitle}
              positions={currentElectionData.positions.map((p: any) => ({
                ...p,
                voted: votedPositions.has(p.id),
              }))}
              onBack={handleBackToHome}
              onSelectPosition={handlePositionSelect}
            />
          ) : currentPage === 'vote' && getCurrentPosition() ? (
            <VotePage 
              key="vote"
              position={getCurrentPosition().title}
              election={currentElectionData.title}
              candidates={getCurrentPosition().candidates}
              onBack={() => setCurrentPage('positions-list')}
              onVote={handleCandidateVote}
            />
          ) : currentPage === 'voting-process' && getCurrentCandidate() ? (
            <VotingProcessPage 
              key="voting-process"
              candidateName={getCurrentCandidate().name}
              candidateImage={getCurrentCandidate().image}
              position={getCurrentPosition().title}
              onComplete={handleVotingComplete}
            />
          ) : currentPage === 'vote-receipt' && getCurrentCandidate() ? (
            <VoteReceiptPage 
              key="vote-receipt"
              candidateName={getCurrentCandidate().name}
              candidateImage={getCurrentCandidate().image}
              position={getCurrentPosition().title}
              election={currentElectionData.title}
              receiptId={generateReceiptId()}
              timestamp={new Date().toISOString()}
              onContinue={handleReceiptContinue}
            />
          ) : currentPage === 'profile-settings' ? (
            <ProfileSettingsPage
              key="profile-settings"
              onBack={() => setCurrentPage('home')}
              onChangePassword={() => setCurrentPage('change-password')}
              onUpdateContact={() => setCurrentPage('update-contact')}
              onCandidateRegistration={() => setCurrentPage('candidate-registration')}
              onLogout={() => {
                toast.success('Logged out successfully!');
                setTimeout(() => {
                  if (onLogout) {
                    onLogout();
                  } else {
                    window.location.reload();
                  }
                }, 1000);
              }}
              userName="Daniela"
              studentId="500000734"
              votingHistory={[
                { id: '1', title: 'SRC 2025', date: 'Nov 15' },
                { id: '2', title: 'SRC 2024', date: 'Oct 10' },
                { id: '3', title: 'SRC 2023', date: 'Sep 5' },
              ]}
            />
          ) : currentPage === 'change-password' ? (
            <ChangePasswordPage
              key="change-password"
              onBack={() => setCurrentPage('profile-settings')}
              onSave={(currentPassword, newPassword) => {
                toast.success('Password changed successfully!');
                setCurrentPage('profile-settings');
              }}
            />
          ) : currentPage === 'update-contact' ? (
            <UpdateContactPage
              key="update-contact"
              onBack={() => setCurrentPage('profile-settings')}
              onSave={(email, phone, address) => {
                toast.success('Contact information updated!');
                setCurrentPage('profile-settings');
              }}
              currentEmail="daniela@example.com"
              currentPhone="268-555-0123"
              currentAddress="Five Islands Campus, Antigua"
            />
          ) : currentPage === 'candidate-registration' ? (
            <CandidateRegistrationPage
              key="candidate-registration"
              onBack={() => setCurrentPage('profile-settings')}
            />
          ) : currentPage === 'election-details' && getSelectedElectionDetails() ? (
            <ElectionDetailsPage
              key="election-details"
              electionId={getSelectedElectionDetails().id}
              title={getSelectedElectionDetails().title}
              dateRange={getSelectedElectionDetails().dateRange}
              description={getSelectedElectionDetails().description}
              positions={getSelectedElectionDetails().positions}
              status={getSelectedElectionDetails().status}
              onBack={() => setCurrentPage('ballot')}
              onVoteNow={handleVoteNowFromDetails}
            />
          ) : currentPage === 'results-details' ? (
            <ResultsDetailsPage
              key="results-details"
              electionId={getResultsDetails()?.electionId || 'student-council-results'}
              title={getResultsDetails()?.title || 'Student Council Elections 2025'}
              date={getResultsDetails()?.date || 'October 15, 2025'}
              totalVotes={getResultsDetails()?.totalVotes || 3056}
              voterTurnout={getResultsDetails()?.voterTurnout || 68}
              candidates={getResultsDetails()?.candidates || []}
              onBack={() => setCurrentPage('results')}
            />
          ) : (
            <motion.div key="fallback" />
          )}
        </AnimatePresence>
      </div>

      {currentPage !== 'voting-process' && currentPage !== 'vote-receipt' && (
        <NavBar currentPage={currentPage} onNavigate={setCurrentPage} />
      )}

      <BottomSheet isOpen={isBottomSheetOpen} onClose={() => setIsBottomSheetOpen(false)}>
        {selectedElection && (
          <div className="pt-6">
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                {selectedElection.totalVotes ? (
                  <div className="bg-green-100 text-green-700 text-xs font-medium px-3 py-1 rounded-full">
                    Completed
                  </div>
                ) : (
                  <div className="bg-[#1e3a8a]/10 text-[#1e3a8a] text-xs font-medium px-3 py-1 rounded-full">
                    Active
                  </div>
                )}
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{selectedElection.title}</h2>
              <p className="text-gray-500 text-sm">{selectedElection.subtitle}</p>
            </div>
            
            <div className="mb-6">
              <p className="text-gray-700 leading-relaxed">{selectedElection.description}</p>
              <div className="mt-3 flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1.5 text-gray-500">
                  <Clock className="w-4 h-4" />
                  <span>{selectedElection.deadline}</span>
                </div>
                {selectedElection.totalVotes && (
                  <div className="flex items-center gap-1.5 text-gray-500">
                    <Users className="w-4 h-4" />
                    <span>{selectedElection.totalVotes} votes</span>
                  </div>
                )}
              </div>
            </div>

            {selectedElection.totalVotes && (
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Results</h3>
                <div className="space-y-3">
                  {selectedElection.candidates.map((candidate, idx) => (
                    <div key={idx} className="bg-gray-50 rounded-2xl p-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#8c1d40] to-[#e94560] flex items-center justify-center text-white font-bold">
                          {idx + 1}
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">{candidate.name}</p>
                          <p className="text-sm text-gray-500">{candidate.info}</p>
                        </div>
                      </div>
                      {candidate.votes && (
                        <div className="text-right">
                          <p className="text-lg font-bold text-gray-900">{candidate.votes}</p>
                          <p className="text-xs text-gray-400">votes</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {!selectedElection.totalVotes && (
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-[#8c1d40] to-[#b8234a] text-white py-4 rounded-2xl mt-6 font-semibold text-lg shadow-lg"
                onClick={() => handleElectionVoteClick(selectedElection.title)}
              >
                Cast Your Vote
              </motion.button>
            )}
          </div>
        )}
      </BottomSheet>
    </div>
  );
}