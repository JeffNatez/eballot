import svgPaths from "./svg-fzfz02x0zt";
import imgImage from "figma:asset/fe3f87ed2e6c21e00370d973619dc5a71dbc2924.png";
import imgImage1 from "figma:asset/3d189ede8029be85a84239e3074454410bfabc57.png";
import imgImage2 from "figma:asset/77ec7f487301da67420c1755e6e67e76eb7169f3.png";
import imgImage3 from "figma:asset/b89987766e9c39b33341fe235409a3e05ae1f03e.png";
import imgImage4 from "figma:asset/ecae27715aa32e47667f66523860b56548e5b466.png";

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

function Text() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="text">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[18px] text-black w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Additional Resources
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

function Image() {
  return <div className="basis-0 bg-[rgba(0,0,0,0.05)] grow h-full min-h-px min-w-px shrink-0" data-name="image" />;
}

function ImageContainer() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0 size-[80px]" data-name="image container">
      <Image />
    </div>
  );
}

function Frame4() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start leading-[20px] min-h-px min-w-px relative shrink-0 text-black">
      <p className="font-['Roboto:Medium',sans-serif] font-medium relative shrink-0 text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Voting Guidelines
      </p>
      <p className="font-['Roboto:Regular',sans-serif] font-normal relative shrink-0 text-[12px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Find out the rules and procedures for voting in your elections.
      </p>
    </div>
  );
}

function Article() {
  return (
    <div className="box-border content-stretch flex gap-[12px] items-start justify-center px-0 py-[8px] relative shrink-0 w-full" data-name="article">
      <ImageContainer />
      <Frame4 />
      <div className="absolute bottom-0 h-0 left-0 right-0">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 394 1">
            <path d="M0 0.5H394" id="Vector 200" stroke="var(--stroke-0, black)" strokeOpacity="0.1" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Image1() {
  return <div className="basis-0 bg-[rgba(0,0,0,0.05)] grow h-full min-h-px min-w-px shrink-0" data-name="image" />;
}

function ImageContainer1() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0 size-[80px]" data-name="image container">
      <Image1 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start leading-[20px] min-h-px min-w-px relative shrink-0 text-black">
      <p className="font-['Roboto:Medium',sans-serif] font-medium relative shrink-0 text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Support Hours
      </p>
      <p className="font-['Roboto:Regular',sans-serif] font-normal relative shrink-0 text-[12px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Our support team is available from 9 AM to 5 PM, Monday to Friday.
      </p>
    </div>
  );
}

function Article1() {
  return (
    <div className="box-border content-stretch flex gap-[12px] items-start justify-center px-0 py-[8px] relative shrink-0 w-full" data-name="article">
      <ImageContainer1 />
      <Frame5 />
      <div className="absolute bottom-0 h-0 left-0 right-0">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 394 1">
            <path d="M0 0.5H394" id="Vector 200" stroke="var(--stroke-0, black)" strokeOpacity="0.1" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[8px] items-center justify-center left-[11px] px-[12px] py-0 top-[745px] w-[418px]" data-name="list">
      <SectionTitle />
      <Article />
      <Article1 />
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
    <div className="absolute box-border content-stretch flex gap-[8px] items-center left-0 px-[8px] py-[12px] top-[16px] w-[360px]" data-name="content">
      <IcLeft />
      <p className="basis-0 font-['Roboto:Medium',sans-serif] font-medium grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[20px] text-black" style={{ fontVariationSettings: "'wdth' 100" }}>{`Help & FAQs`}</p>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute h-[71px] left-[4px] top-[75px] w-[424px]" data-name="Header">
      <div className="absolute bottom-[12px] h-[39px] right-0 w-[40px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage4} />
      </div>
      <Content />
    </div>
  );
}

function Textfield() {
  return (
    <div className="relative rounded-[6px] shrink-0 w-full" data-name="textfield">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center px-[12px] py-[8px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['Roboto:Regular',sans-serif] font-normal grow h-[20px] leading-[20px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-[rgba(0,0,0,0.5)] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            Type your question here...
          </p>
        </div>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[4px] h-[97px] items-start justify-center left-[5px] overflow-clip px-[12px] py-0 top-[146px] w-[424px]" data-name="Input">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[14px] text-black w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Search a question…
      </p>
      <Textfield />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[12px] text-[rgba(0,0,0,0.5)] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Find answers quickly
      </p>
    </div>
  );
}

function Text1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="text">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[18px] text-black w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        FAQs
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

function Frame1() {
  return (
    <div className="bg-[rgba(0,0,0,0.05)] relative rounded-[16px] shrink-0 size-[32px]" data-name="frame">
      <div className="absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 overflow-ellipsis overflow-hidden size-[32px] text-[20px] text-black text-center text-nowrap top-1/2 translate-x-[-50%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="[white-space-collapse:collapse] leading-[32px] overflow-ellipsis overflow-hidden">❓</p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Roboto:Regular',sans-serif] font-normal grow items-start min-h-px min-w-px relative shrink-0">
      <p className="leading-[20px] relative shrink-0 text-[14px] text-black w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        How do I vote?
      </p>
      <p className="leading-[16px] relative shrink-0 text-[12px] text-[rgba(0,0,0,0.5)] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Read more
      </p>
    </div>
  );
}

function Item() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-0 py-[12px] relative shrink-0 w-full" data-name="item">
      <Frame1 />
      <Frame6 />
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[14px] text-black text-right w-[90px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Go to Ballot tab, select election, follow prompts.
      </p>
      <div className="absolute bottom-0 h-0 left-0 right-0">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 394 1">
            <path d="M0 0.5H394" id="Vector 200" stroke="var(--stroke-0, black)" strokeOpacity="0.1" />
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
        <p className="[white-space-collapse:collapse] leading-[32px] overflow-ellipsis overflow-hidden">🔑</p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Roboto:Regular',sans-serif] font-normal grow items-start min-h-px min-w-px relative shrink-0">
      <p className="leading-[20px] relative shrink-0 text-[14px] text-black w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Reset password?
      </p>
      <p className="leading-[16px] relative shrink-0 text-[12px] text-[rgba(0,0,0,0.5)] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Read more
      </p>
    </div>
  );
}

function Item1() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-0 py-[12px] relative shrink-0 w-full" data-name="item">
      <Frame2 />
      <Frame7 />
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[14px] text-black text-right w-[90px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`Go to Account settings, then 'Reset Password'.`}</p>
      <div className="absolute bottom-0 h-0 left-0 right-0">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 394 1">
            <path d="M0 0.5H394" id="Vector 200" stroke="var(--stroke-0, black)" strokeOpacity="0.1" />
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
        <p className="[white-space-collapse:collapse] leading-[32px] overflow-ellipsis overflow-hidden">🔄</p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Roboto:Regular',sans-serif] font-normal grow items-start min-h-px min-w-px relative shrink-0">
      <p className="leading-[20px] relative shrink-0 text-[14px] text-black w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Submit vote?
      </p>
      <p className="leading-[16px] relative shrink-0 text-[12px] text-[rgba(0,0,0,0.5)] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Read more
      </p>
    </div>
  );
}

function Item2() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-0 py-[12px] relative shrink-0 w-full" data-name="item">
      <Frame3 />
      <Frame8 />
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[14px] text-black text-right w-[90px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Your vote is counted, confirmation will follow.
      </p>
      <div className="absolute bottom-0 h-0 left-0 right-0">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 394 1">
            <path d="M0 0.5H394" id="Vector 200" stroke="var(--stroke-0, black)" strokeOpacity="0.1" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function List1() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[383px] items-center justify-center left-[11px] px-[12px] py-0 top-[235px] w-[418px]" data-name="list">
      <SectionTitle1 />
      <Item />
      <Item1 />
      <Item2 />
    </div>
  );
}

function Seconday() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="seconday">
      <div aria-hidden="true" className="absolute border border-[#8c1d40] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center px-[12px] py-[10px] relative w-full">
          <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[16px] text-black text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            Email Us
          </p>
        </div>
      </div>
    </div>
  );
}

function Primary() {
  return (
    <div className="bg-[#8c1d40] relative rounded-[8px] shrink-0 w-full" data-name="primary">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center px-[12px] py-[10px] relative w-full">
          <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            Contact Student Elections Support
          </p>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[8px] items-start left-[28px] overflow-clip px-[12px] py-0 top-[630px] w-[360px]" data-name="Button">
      <Seconday />
      <Primary />
    </div>
  );
}

export default function HelpFaqPage() {
  return (
    <div className="bg-white relative size-full" data-name="Help/FAQ page">
      <StatusBarIPhone />
      <List />
      <NavBar />
      <Header />
      <Input />
      <List1 />
      <Button />
    </div>
  );
}