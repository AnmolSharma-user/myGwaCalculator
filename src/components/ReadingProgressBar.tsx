
import { useState, useEffect } from "react";

export const ReadingProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.pageYOffset;
      const progress = currentScroll / totalHeight * 100;
      setScrollProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-50 bg-slate-50 dark:bg-slate-900">
      <div 
        className="h-full bg-gradient-to-r from-academic-blue to-blue-600 transition-all duration-300 ease-out" 
        style={{ width: `${scrollProgress}%` }} 
      />
    </div>
  );
};
