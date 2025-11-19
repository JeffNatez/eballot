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

function Text() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="text">
      <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#494b4b] text-[21.23px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Results
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

function Tag() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.05)] box-border content-stretch flex flex-col items-center justify-center left-0 p-[4px] rounded-br-[6px] rounded-tl-[6px] top-0" data-name="tag">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[12px] text-black text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Completed
      </p>
    </div>
  );
}

function Image() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="image">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[rgba(0,0,0,0.05)] inset-0" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgImage} />
      </div>
      <Tag />
    </div>
  );
}

function ImageContainer() {
  return (
    <div className="content-stretch flex h-[336px] items-start overflow-clip relative shrink-0 w-full" data-name="image container">
      <Image />
    </div>
  );
}

function TextContent() {
  return (
    <div className="relative shrink-0 w-full" data-name="text content">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-start p-[12px] relative text-black w-full">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[12px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            Student Council Results
          </p>
          <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            Results Announced
          </p>
        </div>
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[6px] shrink-0" data-name="card">
      <div className="content-stretch flex flex-col items-center overflow-clip relative rounded-[inherit] w-full">
        <ImageContainer />
        <TextContent />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="row">
      <Card />
    </div>
  );
}

function List() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[8px] items-center justify-center left-[8px] overflow-clip px-[12px] py-0 top-[664px] w-[419px]" data-name="list">
      <SectionTitle />
      <Row />
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

function Groups() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] bottom-[19.12px] h-[69.952px] right-0 w-[99.931px]" data-name="Groups">
      <div className="absolute bottom-[16.51px] flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[17.379px] justify-center leading-[0] not-italic right-[63.87px] text-[#8d8f8e] text-[12.47px] translate-x-[100%] translate-y-[50%] w-[27.807px]">
        <p className="leading-[normal]">Help</p>
      </div>
      <div className="absolute bottom-[29.54px] right-[38.67px] size-[25.2px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage1} />
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
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage2} />
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
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage3} />
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
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage4} />
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
    <div className="absolute bg-[rgba(0,0,0,0)] bottom-[9.5px] h-[89.503px] left-[calc(50%+0.08px)] translate-x-[-50%] w-[400.158px]" data-name="Nav Bar">
      <NavBarBackground />
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

function Tag1() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.05)] box-border content-stretch flex flex-col items-center justify-center left-0 p-[4px] rounded-br-[6px] rounded-tl-[6px] top-0" data-name="tag">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[12px] text-black text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Ongoing
      </p>
    </div>
  );
}

function Image1() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="image">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[rgba(0,0,0,0.05)] inset-0" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgImage6} />
      </div>
      <Tag1 />
    </div>
  );
}

function ImageContainer1() {
  return (
    <div className="content-stretch flex h-[164px] items-start overflow-clip relative shrink-0 w-full" data-name="image container">
      <Image1 />
    </div>
  );
}

function TextContent1() {
  return (
    <div className="relative shrink-0 w-full" data-name="text content">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-start leading-[normal] p-[8px] relative text-black w-full">
          <p className="font-['Work_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[12px] w-full">Student Council</p>
          <p className="font-['Work_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[16px] w-full">Vote until Oct 15</p>
        </div>
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[6px] shrink-0" data-name="card">
      <div className="content-stretch flex flex-col items-center overflow-clip relative rounded-[inherit] w-full">
        <ImageContainer1 />
        <TextContent1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Tag2() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.05)] box-border content-stretch flex flex-col items-center justify-center left-0 p-[4px] rounded-br-[6px] rounded-tl-[6px] top-0" data-name="tag">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[12px] text-black text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Ongoing
      </p>
    </div>
  );
}

function Image2() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="image">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[rgba(0,0,0,0.05)] inset-0" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgImage7} />
      </div>
      <Tag2 />
    </div>
  );
}

function ImageContainer2() {
  return (
    <div className="content-stretch flex h-[164px] items-start overflow-clip relative shrink-0 w-full" data-name="image container">
      <Image2 />
    </div>
  );
}

function TextContent2() {
  return (
    <div className="relative shrink-0 w-full" data-name="text content">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-start leading-[normal] p-[8px] relative text-black w-full">
          <p className="font-['Work_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[12px] w-full">Class Reps</p>
          <p className="font-['Work_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[16px] w-full">Vote until Oct 20</p>
        </div>
      </div>
    </div>
  );
}

function Card2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[6px] shrink-0" data-name="card">
      <div className="content-stretch flex flex-col items-center overflow-clip relative rounded-[inherit] w-full">
        <ImageContainer2 />
        <TextContent2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="row">
      <Card1 />
      <Card2 />
    </div>
  );
}

function List1() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[8px] items-center justify-center left-[4px] overflow-clip px-[12px] py-0 top-[284px] w-[429px]" data-name="list">
      <SectionTitle1 />
      <Row1 />
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

export default function Homepage() {
  const [showStatusBar, setShowStatusBar] = useState(true);
  const lastScrollY = useRef(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const handleScroll = () => {
      const currentScrollY = scrollContainer.scrollTop;
      
      // Hide status bar when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY.current && currentScrollY > 10) {
        setShowStatusBar(false);
      } else if (currentScrollY < lastScrollY.current) {
        setShowStatusBar(true);
      }
      
      // Always show at the top of the page
      if (currentScrollY < 10) {
        setShowStatusBar(true);
      }
      
      lastScrollY.current = currentScrollY;
    };

    scrollContainer.addEventListener('scroll', handleScroll, { passive: true });
    return () => scrollContainer.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-white h-screen w-full flex flex-col overflow-hidden" data-name="Homepage">
      {/* Fixed Status Bar with hide/show animation */}
      <StatusBarIPhone show={showStatusBar} />

      {/* Scrollable Content */}
      <div 
        ref={scrollContainerRef}
        className="flex-1 overflow-y-auto pt-[52px] pb-[120px]"
      >
        <div className="relative w-full h-[1200px]">
          <Header />
          <List2 />
          <List1 />
          <UpcomingElections />
          <List />
        </div>
      </div>

      {/* Fixed Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white">
        <NavBar />
      </div>
    </div>
  );
}