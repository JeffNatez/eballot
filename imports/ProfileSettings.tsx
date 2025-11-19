import svgPaths from "./svg-7edzpgmxem";
import imgImage from "figma:asset/fe3f87ed2e6c21e00370d973619dc5a71dbc2924.png";
import imgImage1 from "figma:asset/3d189ede8029be85a84239e3074454410bfabc57.png";
import imgImage2 from "figma:asset/77ec7f487301da67420c1755e6e67e76eb7169f3.png";
import imgImage3 from "figma:asset/b89987766e9c39b33341fe235409a3e05ae1f03e.png";

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
          <path d={svgPaths.p38096600} fill="var(--fill-0, black)" id="Cap" opacity="0.4" />
          <rect fill="var(--fill-0, black)" height="9.36" id="Capacity" rx="2.6" width="21.84" x="2.08" y="2.08" />
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

function Seconday() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="seconday">
      <div aria-hidden="true" className="absolute border border-[#8c1d40] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center px-[12px] py-[10px] relative w-full">
          <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[16px] text-black text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            Cancel
          </p>
        </div>
      </div>
    </div>
  );
}

function Primary() {
  return (
    <div className="basis-0 bg-[#8c1d40] grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="primary">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center px-[12px] py-[10px] relative w-full">
          <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            Save Changes
          </p>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute box-border content-stretch flex gap-[8px] items-start left-[33px] overflow-clip px-[12px] py-0 top-[839px] w-[360px]" data-name="Button">
      <Seconday />
      <Primary />
    </div>
  );
}

function Groups() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] bottom-[19.12px] h-[69.952px] right-0 w-[99.931px]" data-name="Groups">
      <div className="absolute bottom-[16.51px] flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[17.379px] justify-center leading-[0] not-italic right-[63.87px] text-[#8d8f8e] text-[12.47px] translate-x-[100%] translate-y-[50%] w-[27.807px]">
        <p className="leading-[normal]">Help</p>
      </div>
      <div className="absolute bottom-[29.54px] right-[38.67px] size-[25.2px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage} />
      </div>
    </div>
  );
}

function Groups1() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] bottom-[3.91px] h-[85.159px] right-[100.8px] w-[103.407px]" data-name="Groups">
      <div className="absolute bottom-[32.8px] flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[13.469px] justify-center leading-[0] not-italic right-[72.99px] text-[#8b8e8d] text-[12.166px] translate-x-[100%] translate-y-[50%] w-[43.014px]">
        <p className="leading-[normal]">Results</p>
      </div>
      <div className="absolute bottom-[44.75px] h-[25.2px] right-[38.23px] w-[28.241px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage1} />
      </div>
    </div>
  );
}

function Groups2() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] bottom-0 h-[88.634px] right-[205.08px] w-[101.669px]" data-name="Groups">
      <div className="absolute bottom-[37.15px] flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[13.469px] justify-center leading-[0] not-italic right-[65.17px] text-[#8d908f] text-[12.6px] translate-x-[100%] translate-y-[50%] w-[34.759px]">
        <p className="leading-[normal]">Ballot</p>
      </div>
      <div className="absolute bottom-[49.53px] h-[22.593px] right-[36.06px] w-[25.2px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage2} />
      </div>
    </div>
  );
}

function Groups3() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] bottom-[21.29px] h-[67.345px] right-[307.18px] w-[92.979px]" data-name="Groups">
      <div className="absolute bottom-[15.21px] flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[13.034px] justify-center leading-[0] not-italic right-[65.17px] text-[#a97d85] text-[12.339px] translate-x-[100%] translate-y-[50%] w-[35.193px]">
        <p className="leading-[normal]">Home</p>
      </div>
      <div className="absolute bottom-[28.24px] h-[23.462px] right-[36.06px] w-[26.069px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage3} />
      </div>
    </div>
  );
}

function NavBarBackground() {
  return (
    <div className="absolute contents left-0 top-[-4px]" data-name="Nav Bar Background">
      <div className="absolute bg-[rgba(217,217,217,0.99)] h-[77px] left-[8px] rounded-[25px] top-[-4px] w-[383px]" data-name="Nav Bar Border" />
      <Groups />
      <Groups1 />
      <Groups2 />
      <Groups3 />
    </div>
  );
}

function NavBar() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] bottom-[9.5px] h-[89.503px] right-[19.84px] w-[400.158px]" data-name="Nav Bar">
      <NavBarBackground />
    </div>
  );
}

function IcLeft() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ic-left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ic-left">
          <path clipRule="evenodd" d={svgPaths.p361b8e00} fill="var(--fill-0, black)" fillOpacity="0.7" fillRule="evenodd" id="shape" />
        </g>
      </svg>
    </div>
  );
}

function Content() {
  return (
    <div className="absolute box-border content-stretch flex gap-[8px] items-center left-0 px-[8px] py-[12px] top-[24px] w-[360px]" data-name="content">
      <IcLeft />
      <p className="basis-0 font-['Roboto:Medium',sans-serif] font-medium grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[20px] text-black" style={{ fontVariationSettings: "'wdth' 100" }}>
        Voter Profile Settings
      </p>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute h-[71px] left-[4px] top-[75px] w-[424px]" data-name="Header">
      <Content />
    </div>
  );
}

function Avatar() {
  return <div className="bg-[rgba(0,0,0,0.1)] rounded-[40px] shrink-0 size-[40px]" data-name="avatar" />;
}

function Frame9() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0 text-nowrap">
      <p className="[white-space-collapse:collapse] font-['Roboto:Medium',sans-serif] font-medium leading-[24px] overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-black w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        John Doe
      </p>
      <p className="[white-space-collapse:collapse] font-['Roboto:Regular',sans-serif] font-normal leading-[16px] overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-[rgba(0,0,0,0.5)] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Student ID: 123456789
      </p>
    </div>
  );
}

function Avatar1() {
  return (
    <div className="absolute box-border content-stretch flex gap-[12px] h-[71px] items-center left-[11px] pb-0 pt-[16px] px-[12px] top-[146px] w-[429px]" data-name="Avatar">
      <Avatar />
      <Frame9 />
    </div>
  );
}

function Text() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="text">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[18px] text-black w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Account Settings
      </p>
    </div>
  );
}

function SectionTitle() {
  return (
    <div className="box-border content-stretch flex gap-[12px] items-center pb-0 pt-[16px] px-0 relative shrink-0 w-full" data-name="section title">
      <Text />
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[rgba(0,0,0,0.05)] relative rounded-[16px] shrink-0 size-[32px]" data-name="frame">
      <div className="absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 overflow-ellipsis overflow-hidden size-[32px] text-[20px] text-black text-center text-nowrap top-1/2 translate-x-[-50%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="[white-space-collapse:collapse] leading-[32px] overflow-ellipsis overflow-hidden">🔑</p>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-black w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Change Password
      </p>
    </div>
  );
}

function Item() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-0 py-[12px] relative shrink-0 w-full" data-name="item">
      <Frame1 />
      <Frame10 />
      <div className="absolute bottom-0 h-0 left-0 right-0">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 399 1">
            <path d="M0 0.5H399" id="Vector 200" stroke="var(--stroke-0, black)" strokeOpacity="0.1" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[rgba(0,0,0,0.05)] relative rounded-[16px] shrink-0 size-[32px]" data-name="frame">
      <div className="absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 overflow-ellipsis overflow-hidden size-[32px] text-[20px] text-black text-center text-nowrap top-1/2 translate-x-[-50%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="[white-space-collapse:collapse] leading-[32px] overflow-ellipsis overflow-hidden">📞</p>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-black w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Update Contact Info
      </p>
    </div>
  );
}

function Item1() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-0 py-[12px] relative shrink-0 w-full" data-name="item">
      <Frame2 />
      <Frame11 />
      <div className="absolute bottom-0 h-0 left-0 right-0">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 399 1">
            <path d="M0 0.5H399" id="Vector 200" stroke="var(--stroke-0, black)" strokeOpacity="0.1" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-[rgba(0,0,0,0.05)] relative rounded-[16px] shrink-0 size-[32px]" data-name="frame">
      <div className="absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 overflow-ellipsis overflow-hidden size-[32px] text-[20px] text-black text-center text-nowrap top-1/2 translate-x-[-50%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="[white-space-collapse:collapse] leading-[32px] overflow-ellipsis overflow-hidden">🚪</p>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-black w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Logout
      </p>
    </div>
  );
}

function Item2() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-0 py-[12px] relative shrink-0 w-full" data-name="item">
      <Frame3 />
      <Frame12 />
      <div className="absolute bottom-0 h-0 left-0 right-0">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 399 1">
            <path d="M0 0.5H399" id="Vector 200" stroke="var(--stroke-0, black)" strokeOpacity="0.1" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[229px] items-center justify-center left-[5px] px-[12px] py-0 top-[217px] w-[423px]" data-name="list">
      <SectionTitle />
      <Item />
      <Item1 />
      <Item2 />
    </div>
  );
}

function Text1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="text">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[18px] text-black w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Voting History
      </p>
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

function Frame4() {
  return (
    <div className="bg-[rgba(0,0,0,0.05)] relative rounded-[16px] shrink-0 size-[32px]" data-name="frame">
      <div className="absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 overflow-ellipsis overflow-hidden size-[32px] text-[20px] text-black text-center text-nowrap top-1/2 translate-x-[-50%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="[white-space-collapse:collapse] leading-[32px] overflow-ellipsis overflow-hidden">🗳️</p>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Roboto:Regular',sans-serif] font-normal grow items-start min-h-px min-w-px relative shrink-0">
      <p className="leading-[20px] relative shrink-0 text-[14px] text-black w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        SRC 2025
      </p>
      <p className="leading-[16px] relative shrink-0 text-[12px] text-[rgba(0,0,0,0.5)] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Voted on Nov 15
      </p>
    </div>
  );
}

function Item3() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-0 py-[12px] relative shrink-0 w-full" data-name="item">
      <Frame4 />
      <Frame13 />
      <div className="absolute bottom-0 h-0 left-0 right-0">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 385 1">
            <path d="M0 0.5H385" id="Vector 200" stroke="var(--stroke-0, black)" strokeOpacity="0.1" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-[rgba(0,0,0,0.05)] relative rounded-[16px] shrink-0 size-[32px]" data-name="frame">
      <div className="absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 overflow-ellipsis overflow-hidden size-[32px] text-[20px] text-black text-center text-nowrap top-1/2 translate-x-[-50%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="[white-space-collapse:collapse] leading-[32px] overflow-ellipsis overflow-hidden">🗳️</p>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Roboto:Regular',sans-serif] font-normal grow items-start min-h-px min-w-px relative shrink-0">
      <p className="leading-[20px] relative shrink-0 text-[14px] text-black w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        SRC 2024
      </p>
      <p className="leading-[16px] relative shrink-0 text-[12px] text-[rgba(0,0,0,0.5)] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Voted on Oct 10
      </p>
    </div>
  );
}

function Item4() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-0 py-[12px] relative shrink-0 w-full" data-name="item">
      <Frame5 />
      <Frame14 />
      <div className="absolute bottom-0 h-0 left-0 right-0">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 385 1">
            <path d="M0 0.5H385" id="Vector 200" stroke="var(--stroke-0, black)" strokeOpacity="0.1" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-[rgba(0,0,0,0.05)] relative rounded-[16px] shrink-0 size-[32px]" data-name="frame">
      <div className="absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 overflow-ellipsis overflow-hidden size-[32px] text-[20px] text-black text-center text-nowrap top-1/2 translate-x-[-50%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="[white-space-collapse:collapse] leading-[32px] overflow-ellipsis overflow-hidden">🗳️</p>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Roboto:Regular',sans-serif] font-normal grow items-start min-h-px min-w-px relative shrink-0">
      <p className="leading-[20px] relative shrink-0 text-[14px] text-black w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        SRC 2023
      </p>
      <p className="leading-[16px] relative shrink-0 text-[12px] text-[rgba(0,0,0,0.5)] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Voted on Sep 5
      </p>
    </div>
  );
}

function Item5() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-0 py-[12px] relative shrink-0 w-full" data-name="item">
      <Frame6 />
      <Frame15 />
      <div className="absolute bottom-0 h-0 left-0 right-0">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 385 1">
            <path d="M0 0.5H385" id="Vector 200" stroke="var(--stroke-0, black)" strokeOpacity="0.1" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function List1() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-center justify-center left-[11px] px-[12px] py-0 top-[436px] w-[409px]" data-name="list">
      <SectionTitle1 />
      <Item3 />
      <Item4 />
      <Item5 />
    </div>
  );
}

function Text2() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="text">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[18px] text-black w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        App Settings (Optional)
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

function Frame7() {
  return (
    <div className="bg-[rgba(0,0,0,0.05)] relative rounded-[16px] shrink-0 size-[32px]" data-name="frame">
      <div className="absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 overflow-ellipsis overflow-hidden size-[32px] text-[20px] text-black text-center text-nowrap top-1/2 translate-x-[-50%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="[white-space-collapse:collapse] leading-[32px] overflow-ellipsis overflow-hidden">🌙</p>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-black w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Toggle Dark Mode
      </p>
    </div>
  );
}

function Item6() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-0 py-[12px] relative shrink-0 w-full" data-name="item">
      <Frame7 />
      <Frame16 />
      <div className="absolute bottom-0 h-0 left-0 right-0">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 381 1">
            <path d="M0 0.5H381" id="Vector 200" stroke="var(--stroke-0, black)" strokeOpacity="0.1" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-[rgba(0,0,0,0.05)] relative rounded-[16px] shrink-0 size-[32px]" data-name="frame">
      <div className="absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 overflow-ellipsis overflow-hidden size-[32px] text-[20px] text-black text-center text-nowrap top-1/2 translate-x-[-50%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="[white-space-collapse:collapse] leading-[32px] overflow-ellipsis overflow-hidden">🔔</p>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-black w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Election Reminders
      </p>
    </div>
  );
}

function Item7() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-0 py-[12px] relative shrink-0 w-full" data-name="item">
      <Frame8 />
      <Frame17 />
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[14px] text-black text-nowrap text-right whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        ON
      </p>
      <div className="absolute bottom-0 h-0 left-0 right-0">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 381 1">
            <path d="M0 0.5H381" id="Vector 200" stroke="var(--stroke-0, black)" strokeOpacity="0.1" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function List2() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[152px] items-center justify-center left-[11px] px-[12px] py-0 top-[656px] w-[405px]" data-name="list">
      <SectionTitle2 />
      <Item6 />
      <Item7 />
    </div>
  );
}

export default function ProfileSettings() {
  return (
    <div className="bg-white relative size-full" data-name="Profile settings">
      <StatusBarIPhone />
      <Button />
      <NavBar />
      <Header />
      <Avatar1 />
      <List />
      <List1 />
      <List2 />
    </div>
  );
}