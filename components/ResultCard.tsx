import { motion } from 'motion/react';

interface ResultCardProps {
  image: string;
  title: string;
  subtitle: string;
  onClick: () => void;
}

export function ResultCard({ image, title, subtitle, onClick }: ResultCardProps) {
  return (
    <motion.div
      className="basis-0 grow min-h-px min-w-px relative rounded-[6px] shrink-0 cursor-pointer"
      data-name="card"
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="content-stretch flex flex-col items-center overflow-clip relative rounded-[inherit] w-full">
        {/* Image Container */}
        <div className="content-stretch flex h-[336px] items-start overflow-clip relative shrink-0 w-full" data-name="image container">
          <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="image">
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
              <div className="absolute bg-[rgba(0,0,0,0.05)] inset-0" />
              <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={image} />
            </div>
            {/* Tag */}
            <div className="absolute bg-[rgba(0,0,0,0.05)] box-border content-stretch flex flex-col items-center justify-center left-0 p-[4px] rounded-br-[6px] rounded-tl-[6px] top-0" data-name="tag">
              <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[12px] text-black text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
                Completed
              </p>
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="relative shrink-0 w-full" data-name="text content">
          <div className="size-full">
            <div className="box-border content-stretch flex flex-col gap-[4px] items-start p-[12px] relative text-black w-full">
              <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[12px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                {title}
              </p>
              <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                {subtitle}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </motion.div>
  );
}
