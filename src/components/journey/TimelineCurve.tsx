'use client';

import { useEffect, useState } from 'react';

export function TimelineCurve() {
  const [pathLength, setPathLength] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const path = document.querySelector('#timeline-path') as SVGPathElement;
    if (path) {
      const length = path.getTotalLength();
      setPathLength(length);
      path.style.strokeDasharray = `${length}`;
      path.style.strokeDashoffset = `${length}`;
    }
  }, []);

  const handleScroll = () => {
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    const progress = window.scrollY / totalHeight;
    setScrollPosition(progress);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const path = document.querySelector('#timeline-path') as SVGPathElement;
    if (path && pathLength > 0) {
      const drawLength = pathLength * scrollPosition * 2; // Adjust multiplier for speed
      path.style.strokeDashoffset = `${pathLength - drawLength}`;
    }
  }, [scrollPosition, pathLength]);

  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 200 800"
      preserveAspectRatio="none"
      className="absolute top-0 right-0 h-full w-full"
    >
      {/* Background Path */}
      <path
        d="M 100,0 C 200,100 0,200 100,300 C 200,400 0,500 100,600 C 200,700 0,800 100,800"
        fill="none"
        stroke="hsl(var(--border))"
        strokeWidth="2"
      />
      {/* Foreground (Drawing) Path */}
      <path
        id="timeline-path"
        d="M 100,0 C 200,100 0,200 100,300 C 200,400 0,500 100,600 C 200,700 0,800 100,800"
        fill="none"
        stroke="hsl(var(--accent))"
        strokeWidth="3"
      />
    </svg>
  );
}
