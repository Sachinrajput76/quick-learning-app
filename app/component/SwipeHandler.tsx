import React, { useRef } from "react";

interface SwipeHandlerProps {
  onSwipeLeft?: () => void; // Callback for swipe left
  onSwipeRight?: () => void; // Callback for swipe right
  children: React.ReactNode; // Children to render inside the swipe handler
}

const SwipeHandler: React.FC<SwipeHandlerProps> = ({
  onSwipeLeft,
  onSwipeRight,
  children,
}) => {
  const startX = useRef<number | null>(null);

  const handleTouchStart = (event: React.TouchEvent) => {
    startX.current = event.touches[0].clientX;
  };

  const handleTouchMove = (event: React.TouchEvent) => {
    if (startX.current === null) return;

    const currentX = event.touches[0].clientX;
    const deltaX = startX.current - currentX;

    // Trigger callbacks based on swipe direction
    if (deltaX > 50) {
      onSwipeLeft?.();
      startX.current = null; // Reset to avoid multiple triggers
    } else if (deltaX < -50) {
      onSwipeRight?.();
      startX.current = null; // Reset to avoid multiple triggers
    }
  };

  const handleTouchEnd = () => {
    startX.current = null; // Reset on touch end
  };

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {children}
    </div>
  );
};

export default SwipeHandler;
