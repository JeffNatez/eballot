import { useState, useRef, ReactNode } from 'react';
import { motion } from 'motion/react';
import { RefreshCw } from 'lucide-react';

interface PullToRefreshProps {
  onRefresh: () => Promise<void>;
  children: ReactNode;
  scrollContainerRef: React.RefObject<HTMLDivElement>;
}

export function PullToRefresh({ onRefresh, children, scrollContainerRef }: PullToRefreshProps) {
  const [pullDistance, setPullDistance] = useState(0);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const startY = useRef(0);
  const isPulling = useRef(false);

  const threshold = 80; // Distance to trigger refresh

  const handleTouchStart = (e: React.TouchEvent) => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer && scrollContainer.scrollTop === 0) {
      startY.current = e.touches[0].clientY;
      isPulling.current = true;
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isPulling.current || isRefreshing) return;

    const currentY = e.touches[0].clientY;
    const distance = Math.max(0, currentY - startY.current);

    if (distance > 0) {
      setPullDistance(Math.min(distance * 0.5, threshold * 1.5));
    }
  };

  const handleTouchEnd = async () => {
    if (!isPulling.current) return;

    isPulling.current = false;

    if (pullDistance >= threshold && !isRefreshing) {
      setIsRefreshing(true);
      await onRefresh();
      setIsRefreshing(false);
    }

    setPullDistance(0);
  };

  const rotation = isRefreshing ? 360 : (pullDistance / threshold) * 180;
  const opacity = Math.min(pullDistance / threshold, 1);

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="relative w-full h-full"
    >
      {/* Pull to refresh indicator */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 z-10 flex items-center justify-center"
        style={{
          opacity,
          y: Math.min(pullDistance - 40, 40),
        }}
      >
        <motion.div
          animate={{ rotate: isRefreshing ? 360 : rotation }}
          transition={isRefreshing ? { duration: 1, repeat: Infinity, ease: 'linear' } : { duration: 0 }}
          className="bg-white rounded-full p-2 shadow-lg"
        >
          <RefreshCw className="w-5 h-5 text-[#8c1d40]" />
        </motion.div>
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ y: pullDistance > 0 && !isRefreshing ? pullDistance * 0.3 : 0 }}
        transition={{ type: 'spring', damping: 20 }}
      >
        {children}
      </motion.div>
    </div>
  );
}
