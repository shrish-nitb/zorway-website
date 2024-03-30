import React, { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

export default function ScrollContainer({ children }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: containerRef.current,
      smooth: 0.01, 
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  return <div ref={containerRef}>{children}</div>;
}
