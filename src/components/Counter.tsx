import modeStore from '@/store/modeStore';
import React, { useEffect, useState } from 'react';

interface CounterProps {
  end: number;
}

const Counter: React.FC<CounterProps> = ({ end }) => {
  const [count, setCount] = useState(0);

  const { mode } = modeStore((state) => ({ mode: state.mode }));

  useEffect(() => {
    let start = 0;
    const duration = 2000; // 2 seconds
    const increment = end / (duration / 10); // Smaller increments

    const updateCounter = () => {
      start += increment;
      if (start >= end) {
        setCount(end);
      } else {
        setCount(Math.floor(start));
        requestAnimationFrame(updateCounter);
      }
    };

    requestAnimationFrame(updateCounter);

    return () => setCount(0); // Reset the counter on component unmount
  }, [end]);

  return (
    <div className={`text-3xl font-bold ${mode === 'dark' ? 'text-[#E5E7EB]' : 'text-[#4D4D4D]'}`}>
      {count.toLocaleString()}
    </div>
  );
};

export default Counter;
