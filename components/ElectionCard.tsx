import { motion } from 'motion/react';
import { useState } from 'react';

interface ElectionCardProps {
  image: string;
  tag: string;
  title: string;
  subtitle: string;
  onClick: () => void;
  onSwipe?: () => void;
}

export function ElectionCard({ image, tag, title, subtitle, onClick, onSwipe }: ElectionCardProps) {
  const [isDragging, setIsDragging] = useState(false);

  return (
    <motion.div
      className="basis-0 grow min-h-px min-w-px relative rounded-[6px] shrink-0 cursor-pointer"
      data-name="card"
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      drag={onSwipe ? "x" : false}
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.7}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={(e, info) => {
        setIsDragging(false);
        // Swipe threshold
        if (Math.abs(info.offset.x) > 100 && onSwipe) {
          onSwipe();
        }
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="content-stretch flex flex-col items-center overflow-clip relative rounded-[inherit] w-full">
        {/* Image Container */}
        <div className="content-stretch flex h-[164px] items-start overflow-clip relative shrink-0 w-full" data-name="image container">
          <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="image">
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
              <div className="absolute bg-[rgba(0,0,0,0.05)] inset-0" />
              <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={image} />
            </div>
            {/* Tag */}
            <div className="absolute bg-[rgba(0,0,0,0.05)] box-border content-stretch flex flex-col items-center justify-center left-0 p-[4px] rounded-br-[6px] rounded-tl-[6px] top-0" data-name="tag">
              <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[12px] text-black text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
                {tag}
              </p>
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="relative shrink-0 w-full" data-name="text content">
          <div className="size-full">
            <div className="box-border content-stretch flex flex-col gap-[4px] items-start leading-[normal] p-[8px] relative text-black w-full">
              <p className="font-['Work_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[12px] w-full">{title}</p>
              <p className="font-['Work_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[16px] w-full">{subtitle}</p>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </motion.div>
  );
}
