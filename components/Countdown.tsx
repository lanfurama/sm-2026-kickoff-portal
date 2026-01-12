import React, { useState, useEffect } from 'react';
import { EVENT_START_DATE } from '../constants';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const Countdown: React.FC = () => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date(EVENT_START_DATE) - +new Date();
    let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const TimeUnit: React.FC<{ value: number; label: string }> = ({ value, label }) => (
    <div className="flex flex-col items-center mx-2 md:mx-4">
      <div className="bg-[#05143a]/80 backdrop-blur-sm border border-[#0891b2]/40 rounded px-3 py-2 min-w-[60px] md:min-w-[70px] flex justify-center shadow-lg">
        <span className="text-xl md:text-2xl font-bold text-white tabular-nums">
          {value < 10 ? `0${value}` : value}
        </span>
      </div>
      <span className="mt-1 text-[9px] md:text-[10px] text-[#22d3ee] font-bold uppercase tracking-widest opacity-80">{label}</span>
    </div>
  );

  return (
    <div className="flex items-center">
      <div className="text-[#22d3ee] font-bold uppercase tracking-widest text-xs mr-4 hidden md:block opacity-90">Event Starts In</div>
      <div className="flex">
        <TimeUnit value={timeLeft.days} label="Days" />
        <TimeUnit value={timeLeft.hours} label="Hours" />
        <TimeUnit value={timeLeft.minutes} label="Mins" />
        <TimeUnit value={timeLeft.seconds} label="Secs" />
      </div>
    </div>
  );
};