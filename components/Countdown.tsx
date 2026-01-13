import React, { useState, useEffect, useRef } from 'react';
import { EVENT_START_DATE } from '../constants';
import { Sparkles } from 'lucide-react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownProps {
  onReadyChange?: (isReady: boolean) => void;
}

export const Countdown: React.FC<CountdownProps> = ({ onReadyChange }) => {
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

  const isCountdownFinished = (): boolean => {
    return +new Date(EVENT_START_DATE) - +new Date() <= 0;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());
  const [isReady, setIsReady] = useState(isCountdownFinished());
  const [animatingUnit, setAnimatingUnit] = useState<string | null>(null);
  const prevTimeRef = useRef<TimeLeft>(timeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      const newTime = calculateTimeLeft();
      const prev = prevTimeRef.current;

      // Detect which unit changed for targeted animation
      if (newTime.seconds !== prev.seconds) setAnimatingUnit('seconds');
      if (newTime.minutes !== prev.minutes) setAnimatingUnit('minutes');
      if (newTime.hours !== prev.hours) setAnimatingUnit('hours');
      if (newTime.days !== prev.days) setAnimatingUnit('days');

      prevTimeRef.current = newTime;
      setTimeLeft(newTime);

      const finished = isCountdownFinished();
      setIsReady(finished);
      onReadyChange?.(finished);

      // Reset animation
      setTimeout(() => setAnimatingUnit(null), 600);
    }, 1000);

    onReadyChange?.(isCountdownFinished());
    return () => clearInterval(timer);
  }, [onReadyChange]);

  const TimeUnit: React.FC<{ value: number; label: string; unitKey: string }> = ({ value, label, unitKey }) => {
    const isAnimating = animatingUnit === unitKey;

    return (
      <div className="flex flex-col items-center mx-3 md:mx-5">
        <div
          className="relative overflow-hidden"
          style={{ perspective: '500px' }}
        >
          {/* Main number card */}
          <div
            className={`
              bg-gradient-to-b from-[#0a1f44] to-[#05143a] 
              backdrop-blur-sm border border-[#0891b2]/60 
              rounded-xl px-4 py-3 min-w-[80px] md:min-w-[100px] 
              flex justify-center shadow-lg
              transition-all duration-300 ease-out
              ${isAnimating ? 'shadow-[0_0_30px_rgba(34,211,238,0.5)]' : 'shadow-lg'}
            `}
            style={{
              transform: isAnimating ? 'rotateX(-10deg) scale(1.05)' : 'rotateX(0deg) scale(1)',
              transformStyle: 'preserve-3d',
            }}
          >
            {/* Flip animation overlay */}
            <div
              className={`
                absolute inset-0 bg-gradient-to-b from-cyan-400/30 to-transparent 
                rounded-xl transition-opacity duration-300
                ${isAnimating ? 'opacity-100' : 'opacity-0'}
              `}
            />

            {/* Number with slide animation */}
            <span
              className={`
                text-3xl md:text-5xl font-bold text-white tabular-nums relative z-10
                transition-all duration-300
                ${isAnimating ? 'text-cyan-300 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]' : ''}
              `}
              style={{
                transform: isAnimating ? 'translateY(-2px)' : 'translateY(0)',
              }}
            >
              {value < 10 ? `0${value}` : value}
            </span>
          </div>

          {/* Reflection effect */}
          <div
            className={`
              absolute -bottom-1 left-1/2 -translate-x-1/2 w-3/4 h-1 
              bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent 
              rounded-full blur-sm transition-opacity duration-300
              ${isAnimating ? 'opacity-100' : 'opacity-0'}
            `}
          />
        </div>

        {/* Label with glow effect */}
        <span
          className={`
            mt-2 text-[10px] md:text-xs font-bold uppercase tracking-widest
            transition-all duration-300
            ${isAnimating ? 'text-cyan-300 drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]' : 'text-[#22d3ee]'}
          `}
        >
          {label}
        </span>
      </div>
    );
  };

  // Ready state display
  if (isReady) {
    return (
      <div className="flex items-center bg-gradient-to-r from-[#059669]/80 to-[#0891b2]/80 backdrop-blur-md border border-[#10b981]/50 rounded-2xl px-10 py-6 shadow-2xl shadow-emerald-500/30 animate-pulse">
        <Sparkles className="text-yellow-300 mr-4 animate-spin" size={32} />
        <div className="text-white font-bold uppercase tracking-widest text-2xl md:text-4xl">
          💡 Let's Brainstorm! 🚀
        </div>
        <Sparkles className="text-yellow-300 ml-4 animate-spin" size={32} />
      </div>
    );
  }

  return (
    <div className="flex items-center bg-[#05143a]/60 backdrop-blur-md border border-[#0891b2]/50 rounded-2xl px-8 py-6 shadow-2xl shadow-cyan-500/20">
      <div className="text-[#22d3ee] font-bold uppercase tracking-widest text-sm mr-6 hidden md:block">Event Starts In</div>
      <div className="flex">
        <TimeUnit value={timeLeft.days} label="Days" unitKey="days" />
        <TimeUnit value={timeLeft.hours} label="Hours" unitKey="hours" />
        <TimeUnit value={timeLeft.minutes} label="Mins" unitKey="minutes" />
        <TimeUnit value={timeLeft.seconds} label="Secs" unitKey="seconds" />
      </div>
    </div>
  );
};