import svgPaths from "./svg-dev805nvf3";
import imgLogo from "figma:asset/964787b9b16c8a8fe59b8a267d12744d9dd5b705.png";

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
    <div className="absolute box-border content-stretch flex flex-col items-center justify-center left-[calc(50%-0.5px)] px-[52px] py-[24px] top-[280px] translate-x-[-50%] w-[411px]" data-name="Logo + Label">
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
      <div className="absolute bg-[#8c1d40] bottom-[-62.78px] h-[967px] left-[28.26%] right-[30.35%]" />
      <StatusBarIPhone />
      <div className="absolute flex h-[752.225px] items-center justify-center left-[13.91%] right-[5.39%] top-[600px]">
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
    </div>
  );
}

export default function AppIntroStartingPoint() {
  return (
    <div className="bg-white relative size-full" data-name="App intro starting point">
      <Header />
    </div>
  );
}