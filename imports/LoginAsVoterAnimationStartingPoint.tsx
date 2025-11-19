import svgPaths from "./svg-k1d8jug1kk";
import imgBack from "figma:asset/5db0687702c36b358fbe28945225f47e373f5a09.png";
import imgLogo from "figma:asset/964787b9b16c8a8fe59b8a267d12744d9dd5b705.png";

function BackBtn({ className }: { className?: string }) {
  return (
    <div className={className} data-name="BACK BTN">
      <p className="absolute font-['Work_Sans:Regular',sans-serif] font-normal leading-[normal] left-[calc(50%+14.5px)] text-[20px] text-[rgba(0,0,0,0.53)] text-center text-nowrap top-[6px] translate-x-[-50%] whitespace-pre">Back</p>
      <div className="absolute h-[35px] left-0 top-0 w-[29px]" data-name="Back">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgBack} />
      </div>
    </div>
  );
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
          <path d={svgPaths.p1db5e440} fill="var(--fill-0, black)" id="Cap" opacity="0.4" />
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

function StatusBarIPhone() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[52px] items-start left-[calc(50%+0.04px)] pb-0 pt-[21.84px] px-0 top-0 translate-x-[-50%] w-[418.08px]" data-name="Status Bar - iPhone">
      <Frame />
    </div>
  );
}

function DataInput() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[37px] top-[1200px] w-[328px]" data-name="data input">
      <p className="font-['Work_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[20px] text-[rgba(0,0,0,0)] w-full">Student ID</p>
      <div className="bg-[rgba(217,217,217,0)] h-[44px] relative rounded-[15px] shrink-0 w-full">
        <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[15px]" />
      </div>
      <p className="font-['Work_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[20px] text-[rgba(0,0,0,0)] w-full">Password</p>
      <div className="bg-[rgba(217,217,217,0)] h-[44px] relative rounded-[15px] shrink-0 w-full">
        <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[15px]" />
      </div>
    </div>
  );
}

function LoginBtn() {
  return (
    <div className="absolute bg-[rgba(140,29,64,0)] box-border content-stretch flex gap-[10px] h-[44px] items-center justify-center left-[37px] px-[123px] py-[10px] rounded-[17px] top-[1000px] w-[328px]" data-name="LOGIN BTN">
      <p className="font-['Work_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[20px] text-[rgba(255,255,255,0)] text-center text-nowrap whitespace-pre">LOG IN</p>
    </div>
  );
}

function BrandingText() {
  return (
    <div className="absolute h-[85px] leading-[normal] left-[37px] text-center text-nowrap top-[600px] w-[328px] whitespace-pre" data-name="Branding text">
      <p className="absolute font-['DM_Sans:Bold',sans-serif] font-bold left-[calc(50%-1px)] text-[32px] text-[rgba(140,29,64,0)] top-0 translate-x-[-50%]" style={{ fontVariationSettings: "'opsz' 14" }}>
        CampusBallot
      </p>
      <p className="absolute font-['Work_Sans:Regular',sans-serif] font-normal left-[calc(50%-0.5px)] text-[20px] text-[rgba(0,0,0,0)] top-[39px] translate-x-[-50%]">Secure Voting. Anytime.Anywhere</p>
      <p className="absolute font-['Work_Sans:Regular',sans-serif] font-normal left-[calc(50%-1px)] text-[20px] text-[rgba(0,0,0,0)] top-[62px] translate-x-[-50%]">UWI Five Islands</p>
    </div>
  );
}

function Card() {
  return (
    <div className="absolute bg-white h-[606px] left-1/2 rounded-[20px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.25)] top-[890px] translate-x-[-50%] w-[402px]" data-name="Card">
      <p className="absolute font-['DM_Sans:Bold',sans-serif] font-bold leading-[normal] left-[91px] text-[32px] text-[rgba(0,0,0,0)] text-nowrap top-[-40px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        Login as Voter
      </p>
      <DataInput />
      <LoginBtn />
      <p className="absolute font-['Work_Sans:Regular',sans-serif] font-normal leading-[normal] left-[114.5px] text-[20px] text-[rgba(140,29,64,0)] text-nowrap top-[800px] whitespace-pre">Forgot Password?</p>
      <BrandingText />
    </div>
  );
}

export default function LoginAsVoterAnimationStartingPoint() {
  return (
    <div className="bg-[rgba(255,255,255,0.87)] relative size-full" data-name="LOGIN AS VOTER animation starting point">
      <StatusBarIPhone />
      <div className="absolute h-[209px] left-[calc(50%+0.5px)] top-[52px] translate-x-[-50%] w-[251px]" data-name="logo">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[130.08%] left-[-0.07%] max-w-none top-0 w-[103.39%]" src={imgLogo} />
        </div>
      </div>
      <BackBtn className="absolute h-[35px] left-[27px] top-[64px] w-[76px]" />
      <Card />
    </div>
  );
}