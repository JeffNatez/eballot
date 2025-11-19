import svgPaths from "../imports/svg-ht24sxxudw";
import imgLogo from "figma:asset/964787b9b16c8a8fe59b8a267d12744d9dd5b705.png";
import imgImage2 from "figma:asset/f452a981b6469be9efc7c05311762d1b421675e1.png";

function Time() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Time">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10.4px] items-center justify-center pl-0 pr-[25px] py-0 relative w-full">
          <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[22.88px] relative shrink-0 text-[17.68px] text-center text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
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
          <rect height="12.48" id="Border" opacity="0.35" rx="3.952" stroke="var(--stroke-0, white)" strokeWidth="1.04" width="24.96" x="0.52" y="0.52" />
          <path d={svgPaths.p38096600} fill="var(--fill-0, white)" id="Cap" opacity="0.4" />
          <rect fill="var(--fill-0, white)" height="9.36" id="Capacity" rx="2.6" width="21.84" x="2.08002" y="2.08" />
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
          <path clipRule="evenodd" d={svgPaths.pf20f3f0} fill="var(--fill-0, white)" fillRule="evenodd" id="Cellular Connection" />
        </svg>
      </div>
      <div className="h-[12.821px] relative shrink-0 w-[17.827px]" data-name="Wifi">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 13">
          <path clipRule="evenodd" d={svgPaths.pb80c200} fill="var(--fill-0, white)" fillRule="evenodd" id="Wifi" />
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

function StatusBarIPhone() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[52px] items-start left-[calc(50%+0.04px)] pb-0 pt-[21.84px] px-0 top-0 translate-x-[-50%] w-[418.08px]" data-name="Status Bar - iPhone">
      <Frame />
    </div>
  );
}

function LogoLabel() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-center justify-center left-[calc(50%+0.5px)] px-[52px] py-[24px] top-[36px] translate-x-[-50%] w-[411px]" data-name="Logo + Label">
      <div className="aspect-[308/256] relative shrink-0 w-full" data-name="logo">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[130.08%] left-[-0.07%] max-w-none top-0 w-[103.39%]" src={imgLogo} />
        </div>
      </div>
      <p className="font-['Work_Sans:SemiBold',sans-serif] font-semibold leading-[80px] relative shrink-0 text-[#fdb913] text-[96.427px] text-center w-full">{`UWI `}</p>
      <p className="font-['Work_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[32px] text-center text-white w-full">Five Islands</p>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute h-[904.225px] left-[-355px] top-0 w-[1150px]" data-name="Header">
      <div className="absolute aspect-[1150/600] left-0 right-0 top-0" data-name="image 2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage2} />
      </div>
      <div className="absolute bg-[rgba(0,0,0,0.53)] bottom-[376.22px] h-[528px] left-[30.87%] right-[30.35%]" />
      <div className="absolute flex h-[752.225px] items-center justify-center left-[16.52%] right-[2.78%] top-[152px]">
        <div className="flex-none h-[502.144px] rotate-[339.425deg] w-[802.732px]">
          <div className="relative size-full">
            <div className="absolute bottom-0 left-[-1.66%] right-[-0.23%] top-[-0.02%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 818 503">
                <path d={svgPaths.p2ea69e80} fill="var(--stroke-0, white)" id="Vector 201" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <LogoLabel />
      <StatusBarIPhone />
    </div>
  );
}

function VoterLoginButton() {
  return (
    <button className="bg-[#8c1d40] h-[56px] w-full rounded-[50px] hover:bg-[#a52347] transition-colors" data-name="voter login button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[48px] py-[16px]">
          <p className="font-['Work_Sans:Regular',sans-serif] font-normal leading-[normal] text-[18px] text-white text-nowrap whitespace-pre">LOGIN AS VOTER</p>
        </div>
      </div>
    </button>
  );
}

function AdminLoginButton() {
  return (
    <button className="bg-white h-[56px] w-full rounded-[50px] border-[3px] border-[#8c1d40] border-solid hover:bg-gray-50 transition-colors" data-name="admin login button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[47px] py-[16px]">
          <p className="font-['Work_Sans:Regular',sans-serif] font-normal leading-[normal] text-[18px] text-[#8c1d40] text-nowrap whitespace-pre">LOGIN AS ADMIN</p>
        </div>
      </div>
    </button>
  );
}

function Login() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 w-full px-8">
      <div className="flex flex-col items-center gap-2">
        <p className="font-['DM_Sans:Bold',sans-serif] font-bold text-[44.952px] text-[#8c1d40] text-center whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          CampusBallot
        </p>
        <p className="font-['Work_Sans:Regular',sans-serif] font-normal text-[19.824px] text-[rgba(0,0,0,0.53)] text-center whitespace-nowrap">
          Secure Voting. Anytime. Anywhere
        </p>
      </div>
      <div className="flex flex-col gap-4 w-full max-w-[324px]">
        <VoterLoginButton />
        <AdminLoginButton />
      </div>
    </div>
  );
}

export default function WelcomePageWithLoginOptions() {
  return (
    <div className="bg-white relative size-full" data-name="Welcome page with login options">
      <Header />
      <div className="absolute left-1/2 top-[580px] translate-x-[-50%] w-full max-w-[440px]">
        <Login />
      </div>
    </div>
  );
}
