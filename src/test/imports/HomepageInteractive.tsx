import svgPaths from "./svg-bf056sss8u";
import imgImage from "figma:asset/97f2bd76f3795315e09b5b73a2f86c44de393bcb.png";
import imgImage1 from "figma:asset/fe3f87ed2e6c21e00370d973619dc5a71dbc2924.png";
import imgImage2 from "figma:asset/3d189ede8029be85a84239e3074454410bfabc57.png";
import imgImage3 from "figma:asset/77ec7f487301da67420c1755e6e67e76eb7169f3.png";
import imgImage4 from "figma:asset/b89987766e9c39b33341fe235409a3e05ae1f03e.png";
import imgImage5 from "figma:asset/ecae27715aa32e47667f66523860b56548e5b466.png";
import imgLogo from "figma:asset/964787b9b16c8a8fe59b8a267d12744d9dd5b705.png";
import imgImage6 from "figma:asset/fc496f440142530896720ebcfb49f68a5bcad976.png";
import imgImage7 from "figma:asset/824e9ab8819c5cf58b6495360b683684a409b9d9.png";
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Home, FileText, BarChart3, HelpCircle } from 'lucide-react';
import { ElectionCard } from '../components/ElectionCard';
import { ResultCard } from '../components/ResultCard';
import { BottomSheet } from '../components/BottomSheet';
import { PullToRefresh } from '../components/PullToRefresh';
import { BallotPage } from '../components/pages/BallotPage';
import { ResultsPage } from '../components/pages/ResultsPage';
import { HelpPage } from '../components/pages/HelpPage';
import { toast } from 'sonner@2.0.3';

type Page = 'home' | 'ballot' | 'results' | 'help';

interface ElectionDetails {
  title: string;
  subtitle: string;
  description: string;
  deadline: string;
  candidates: { name: string; info: string }[];
}

function Time() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Time">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10.4px] items-center justify-center pl-0 pr-[25px] py-0 relative w-full">
          <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[22.88px] relative shrink-0 text-[17.68px] text-black text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            9:41
          </p>
        </div>
      </div>
    </div>
  );
}

function DynamicIslandSpacer() {
  return <div className="basis-0 grow h-[10.4px] min-h-px min-w-px shrink-0" data-name="Dynamic Island spacer" />;
}

function Battery() {
  return (
    <div className="h-[13.52px] relative shrink-0 w-[28.421px]" data-name="Battery">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 14">
        <g id="Battery">
          <rect height="12.48" id="Border" opacity="0.35" rx="3.952" stroke="var(--stroke-0, black)" strokeWidth="1.04" width="24.96" x="0.52" y="0.52" />
          <path d={svgPaths.p2a51e0e0} fill="var(--fill-0, black)" id="Cap" opacity="0.4" />
          <rect fill="var(--fill-0, black)" height="9.36" id="Capacity" rx="2.6" width="21.84" x="2.08002" y="2.07998" />
        </g>
      </svg>
    </div>
  );
}

function Levels() {
  return (
    <div className="basis-0 content-stretch flex gap-[7.28px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Levels">
      <div className="h-[12.715px] relative shrink-0 w-[19.968px]" data-name="Cellular Connection">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 13">
          <path clipRule="evenodd" d={svgPaths.pf20f3f0} fill="var(--fill-0, black)" fillRule="evenodd" id="Cellular Connection" />
        </svg>
      </div>
      <div className="h-[12.821px] relative shrink-0 w-[17.827px]" data-name="Wifi">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 13">
          <path clipRule="evenodd" d={svgPaths.pb80c200} fill="var(--fill-0, black)" fillRule="evenodd" id="Wifi" />
        </svg>
      </div>
      <Battery />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[418.08px]" data-name="Frame">
      <Time />
      <DynamicIslandSpacer />
      <Levels />
    </div>
  );
}

function StatusBarIPhone({ show }: { show: boolean }) {
  return (
    <div 
      className="fixed box-border content-stretch flex flex-col h-[52px] items-start left-[calc(50%+0.04px)] pb-0 pt-[21.84px] px-0 top-0 w-[418.08px] transition-transform duration-300 ease-in-out z-50" 
      data-name="Status Bar - iPhone"
      style={{ transform: `translateX(-50%) ${show ? 'translateY(0)' : 'translateY(-100%)'}` }}
    >
      <Frame />
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

  return (
    <div className="absolute bg-[rgba(0,0,0,0)] bottom-[9.5px] left-[calc(50%+0.08px)] translate-x-[-50%] w-[400.158px] h-[70px]" data-name="Nav Bar">
      <div className="absolute contents left-0 top-0" data-name="Nav Bar Background">
        <div className="absolute bg-[rgba(217,217,217,0.99)] h-[65px] left-[8px] rounded-[25px] top-0 w-[383px]" data-name="Nav Bar Border" />
        
        {navItems.map((item, index) => {
          const isActive = currentPage === item.id;
          const positions = [
            { left: '30px' }, // Home
            { left: '120px' }, // Ballot
            { left: '210px' }, // Results
            { left: '300px' }, // Help
          ];
          
          const IconComponent = item.icon;
          
          return (
            <motion.div
              key={item.id}
              className="absolute cursor-pointer flex flex-col items-center gap-0.5 top-[12px]"
              style={{
                left: positions[index].left,
                width: '70px',
              }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                onNavigate(item.id);
                toast.success(`Navigated to ${item.label}`);
              }}
            >
              {/* Icon */}
              <motion.div
                animate={{ 
                  scale: isActive ? 1.05 : 1,
                }}
              >
                <IconComponent 
                  className="w-[26px] h-[26px]" 
                  strokeWidth={2}
                  style={{
                    color: isActive ? '#8c1d40' : '#9ca3af',
                    transition: 'color 0.2s ease',
                  }}
                />
              </motion.div>
              
              {/* Label */}
              <motion.p
                className="text-center text-[11px] leading-tight"
                style={{
                  fontFamily: isActive ? "'Inter:Medium',sans-serif" : "'Inter:Regular',sans-serif",
                  fontWeight: isActive ? 500 : 400,
                  color: isActive ? '#8c1d40' : '#9ca3af',
                  transition: 'color 0.2s ease',
                }}
              >
                {item.label}
              </motion.p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute h-[71px] left-[4px] top-[75px] w-[424px]" data-name="Header">
      <div className="absolute bottom-[23.54px] flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[22.922px] justify-center leading-[0] not-italic right-[351px] text-[#2a2b2a] text-[19.719px] translate-x-[100%] translate-y-[50%] w-[205px]">
        <p className="leading-[normal]">
          <span className="text-[#8c1d40]">Welcome,</span>
          <span>{` Daniela`}</span>
        </p>
      </div>
      <div className="absolute bottom-[12px] h-[39px] right-0 w-[40px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage5} />
      </div>
      <div className="absolute h-[71px] left-[calc(50%-169.5px)] top-0 translate-x-[-50%] w-[85px]" data-name="logo">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[130.08%] left-[-0.07%] max-w-none top-0 w-[103.39%]" src={imgLogo} />
        </div>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="text">
      <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#494b4b] text-[21.23px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Your Voting Progress
      </p>
    </div>
  );
}

function SectionTitle2() {
  return (
    <div className="box-border content-stretch flex gap-[12px] items-center pb-0 pt-[16px] px-0 relative shrink-0 w-full" data-name="section title">
      <Text2 />
    </div>
  );
}

function Metric() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[6px] shrink-0" data-name="metric">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-start p-[12px] relative text-nowrap w-full">
          <p className="[white-space-collapse:collapse] font-['Roboto:Regular',sans-serif] font-normal leading-[20px] min-w-full overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-[rgba(0,0,0,0.5)] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Votes Cast
          </p>
          <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[28px] overflow-ellipsis overflow-hidden relative shrink-0 text-[20px] text-black whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            2
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Metric1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[6px] shrink-0" data-name="metric">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-start p-[12px] relative text-nowrap w-full">
          <p className="[white-space-collapse:collapse] font-['Roboto:Regular',sans-serif] font-normal leading-[20px] min-w-full overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-[rgba(0,0,0,0.5)] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Votes Remaining
          </p>
          <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[28px] overflow-ellipsis overflow-hidden relative shrink-0 text-[20px] text-black whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            3
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Row2() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="row">
      <Metric />
      <Metric1 />
    </div>
  );
}

function List2() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[8px] items-center justify-center left-[9px] overflow-clip px-[12px] py-0 top-[153px] w-[414px]" data-name="list">
      <SectionTitle2 />
      <Row2 />
    </div>
  );
}

function Text1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="text">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold h-[26.13px] justify-center leading-[0] relative shrink-0 text-[#494b4b] text-[21.23px] w-[209.04px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Ongoing Elections</p>
      </div>
    </div>
  );
}

function SectionTitle1() {
  return (
    <div className="box-border content-stretch flex gap-[12px] items-center pb-0 pt-[16px] px-0 relative shrink-0 w-full" data-name="section title">
      <Text1 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute bg-[rgba(253,185,19,0.82)] left-[343px] rounded-[16px] size-[40px] top-[42px]" data-name="frame">
      <div className="absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 overflow-ellipsis overflow-hidden size-[32px] text-[20px] text-center text-nowrap text-white top-1/2 translate-x-[-50%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="[white-space-collapse:collapse] leading-[32px] overflow-ellipsis overflow-hidden">🔜</p>
      </div>
    </div>
  );
}

function UpcomingElections() {
  return (
    <div className="absolute h-[91px] left-[15px] top-[573px] w-[405px]" data-name="Upcoming Elections">
      <div className="absolute bg-[#8c1d40] bottom-0 h-[58px] right-0 rounded-[16.331px] w-[405px]" data-name="Background">
        <div aria-hidden="true" className="absolute border-[#f9faf8] border-[1.4px] border-solid inset-[-1.4px] pointer-events-none rounded-[17.7308px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)]" />
      </div>
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[16px] left-[10px] text-[12px] text-[rgba(255,255,255,0.54)] top-[66px] w-[79px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Starts Oct 22
      </p>
      <Frame1 />
      <div className="absolute bottom-[35.93px] flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal h-[26.13px] justify-center leading-[0] right-[395px] text-[20px] text-white translate-x-[100%] translate-y-[50%] w-[209.04px]">
        <p className="leading-[normal]">Faculty Elections</p>
      </div>
      <div className="absolute bottom-[77.93px] flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold h-[26.13px] justify-center leading-[0] right-[401px] text-[#494b4b] text-[21.23px] translate-x-[100%] translate-y-[50%] w-[209.04px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Upcoming Elections</p>
      </div>
    </div>
  );
}

export default function HomepageInteractive() {
  const [showStatusBar, setShowStatusBar] = useState(true);
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const [selectedElection, setSelectedElection] = useState<ElectionDetails | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const lastScrollY = useRef(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

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

  const elections = [
    {
      title: 'Student Council',
      subtitle: 'Vote until Oct 15',
      description: 'Vote for your next Student Council representatives. This election will determine the leadership for the 2024-2025 academic year.',
      deadline: 'October 15, 2024',
      candidates: [
        { name: 'Sarah Johnson', info: 'Junior, Political Science' },
        { name: 'Mike Chen', info: 'Sophomore, Business' },
        { name: 'Emma Davis', info: 'Senior, Engineering' },
      ],
    },
    {
      title: 'Class Reps',
      subtitle: 'Vote until Oct 20',
      description: 'Select representatives for your class. They will be your voice in academic and student affairs.',
      deadline: 'October 20, 2024',
      candidates: [
        { name: 'Alex Kumar', info: 'Junior, Computer Science' },
        { name: 'Lisa Wang', info: 'Sophomore, Biology' },
      ],
    },
  ];

  return (
    <div className="bg-white h-screen w-full flex flex-col overflow-hidden" data-name="Homepage">
      <StatusBarIPhone show={showStatusBar} />

      <div 
        ref={scrollContainerRef}
        className="flex-1 overflow-y-auto pt-[52px] pb-[120px]"
      >
        <AnimatePresence mode="wait">
          {currentPage === 'home' ? (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <PullToRefresh onRefresh={handleRefresh} scrollContainerRef={scrollContainerRef}>
                {isLoading && (
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 z-50 bg-white px-4 py-2 rounded-full shadow-lg">
                    <p className="text-sm text-gray-600">Loading...</p>
                  </div>
                )}
                <div className="relative w-full h-[1200px]">
                  <Header />
                  <List2 />
                  
                  {/* Ongoing Elections with interactive cards */}
                  <div className="absolute box-border content-stretch flex flex-col gap-[8px] items-center justify-center left-[4px] overflow-clip px-[12px] py-0 top-[284px] w-[429px]" data-name="list">
                    <SectionTitle1 />
                    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="row">
                      <ElectionCard
                        image={imgImage6}
                        tag="Ongoing"
                        title={elections[0].title}
                        subtitle={elections[0].subtitle}
                        onClick={() => handleElectionClick(elections[0])}
                        onSwipe={() => handleElectionSwipe(elections[0].title)}
                      />
                      <ElectionCard
                        image={imgImage7}
                        tag="Ongoing"
                        title={elections[1].title}
                        subtitle={elections[1].subtitle}
                        onClick={() => handleElectionClick(elections[1])}
                        onSwipe={() => handleElectionSwipe(elections[1].title)}
                      />
                    </div>
                  </div>

                  <UpcomingElections />
                  
                  {/* Results with interactive card */}
                  <div className="absolute box-border content-stretch flex flex-col gap-[8px] items-center justify-center left-[8px] overflow-clip px-[12px] py-0 top-[664px] w-[419px]" data-name="list">
                    <div className="box-border content-stretch flex gap-[12px] items-center pb-0 pt-[16px] px-0 relative shrink-0 w-full" data-name="section title">
                      <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="text">
                        <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#494b4b] text-[21.23px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
                          Results
                        </p>
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="row">
                      <ResultCard
                        image={imgImage}
                        title="Student Council Results"
                        subtitle="Results Announced"
                        onClick={() => {
                          setSelectedElection({
                            title: 'Student Council Results',
                            subtitle: 'Results Announced',
                            description: 'The results for the Student Council election are now available. Thank you to all who participated!',
                            deadline: 'Completed',
                            candidates: [
                              { name: 'Sarah Johnson - Winner', info: '1,234 votes' },
                              { name: 'Mike Chen', info: '987 votes' },
                              { name: 'Emma Davis', info: '765 votes' },
                            ],
                          });
                          setIsBottomSheetOpen(true);
                        }}
                      />
                    </div>
                  </div>
                </div>
              </PullToRefresh>
            </motion.div>
          ) : currentPage === 'ballot' ? (
            <BallotPage key="ballot" />
          ) : currentPage === 'results' ? (
            <ResultsPage key="results" />
          ) : (
            <HelpPage key="help" />
          )}
        </AnimatePresence>
      </div>

      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white">
        <NavBar currentPage={currentPage} onNavigate={setCurrentPage} />
      </div>

      <BottomSheet isOpen={isBottomSheetOpen} onClose={() => setIsBottomSheetOpen(false)}>
        {selectedElection && (
          <div className="pt-8">
            <h2 className="font-['Work_Sans:SemiBold',sans-serif] text-[24px] mb-2">{selectedElection.title}</h2>
            <p className="font-['Roboto:Regular',sans-serif] text-[14px] text-gray-600 mb-4">{selectedElection.subtitle}</p>
            
            <div className="mb-6">
              <p className="font-['Roboto:Regular',sans-serif] text-[14px] leading-relaxed">{selectedElection.description}</p>
              <p className="font-['Roboto:Medium',sans-serif] text-[12px] text-[#8c1d40] mt-2">Deadline: {selectedElection.deadline}</p>
            </div>

            <div>
              <h3 className="font-['Work_Sans:SemiBold',sans-serif] text-[18px] mb-3">Candidates</h3>
              <div className="flex flex-col gap-3">
                {selectedElection.candidates.map((candidate, idx) => (
                  <div key={idx} className="p-3 bg-gray-50 rounded-lg">
                    <p className="font-['Work_Sans:SemiBold',sans-serif] text-[14px]">{candidate.name}</p>
                    <p className="font-['Roboto:Regular',sans-serif] text-[12px] text-gray-600">{candidate.info}</p>
                  </div>
                ))}
              </div>
            </div>

            <motion.button
              whileTap={{ scale: 0.95 }}
              className="w-full bg-[#8c1d40] text-white py-3 rounded-lg mt-6 font-['Work_Sans:SemiBold',sans-serif]"
              onClick={() => {
                setIsBottomSheetOpen(false);
                toast.success('Vote submitted successfully!');
              }}
            >
              Vote Now
            </motion.button>
          </div>
        )}
      </BottomSheet>
    </div>
  );
}