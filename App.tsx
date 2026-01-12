import React, { useState, useCallback } from 'react';
import { EVENT_TITLE, EVENT_SUBTITLE, GROUPS } from './constants';
import { ViewState } from './types';
import { Countdown } from './components/Countdown';
import { GroupCard } from './components/GroupCard';
import { Dashboard } from './components/Dashboard';
import { LayoutDashboard, Home } from 'lucide-react';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>(ViewState.HOME);
  const [isEventReady, setIsEventReady] = useState(false);

  const handleReadyChange = useCallback((ready: boolean) => {
    setIsEventReady(ready);
  }, []);

  // Background matching the reference: Aerial view of resort + Tech Overlay
  const BackgroundDecor = () => (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {/* 1. Base Image: Resort/City aerial view */}
      <img
        src="/KO LED-01.jpg"
        alt="Danang Resort Background"
        className="w-full h-full object-cover"
      />

      {/* 2. Blue Gradient Overlay (increased opacity for darker background) */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/90 via-[#05143a]/80 to-[#020617]/60 opacity-90"></div>

      {/* 3. Tech/Digital Curves Overlay (Subtle) */}
      <div className="absolute inset-0 opacity-20 mix-blend-screen"
        style={{
          background: `
               radial-gradient(circle at 50% 30%, rgba(0, 100, 255, 0.1) 0%, transparent 60%),
               repeating-linear-gradient(90deg, transparent 0, transparent 40px, rgba(0, 100, 255, 0.03) 40px, rgba(0, 100, 255, 0.03) 41px)
             `
        }}>
      </div>

      {/* 4. Bottom Deep Blue Glow */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#003366]/40 to-transparent mix-blend-overlay"></div>
    </div>
  );

  return (
    <div className="min-h-screen relative flex flex-col font-sans text-white">
      <BackgroundDecor />

      {/* Main Content */}
      <main className="flex-grow relative z-10 px-4 py-12 md:py-20">
        <div className="max-w-7xl mx-auto flex flex-col items-center mt-4">

          {/* Titles */}
          <div className="text-center mb-8 md:mb-12 w-full">

            {/* Event Title & Subtitle */}
            {(EVENT_TITLE || EVENT_SUBTITLE) && (
              <div className="bg-[#05143a]/70 backdrop-blur-md border border-[#0891b2]/40 rounded-2xl px-8 py-6 mb-6 shadow-xl">
                {EVENT_TITLE && (
                  <h1 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-wider drop-shadow-lg mb-2">
                    {EVENT_TITLE}
                  </h1>
                )}
                {EVENT_SUBTITLE && (
                  <h2 className="text-lg md:text-xl text-[#22d3ee] uppercase tracking-widest">
                    {EVENT_SUBTITLE}
                  </h2>
                )}
              </div>
            )}

            {/* Countdown integrated below title */}
            {view === ViewState.HOME && (
              <div className="mt-6 flex justify-center">
                <Countdown onReadyChange={handleReadyChange} />
              </div>
            )}
          </div>

          {/* Dynamic Content */}
          <div className="w-full">
            {view === ViewState.HOME ? (
              <div className="flex flex-col gap-6 md:gap-10 max-w-7xl mx-auto">
                {/* Top row: 3 QR codes */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-10 justify-items-center">
                  {GROUPS.slice(0, 3).map(group => (
                    <GroupCard key={group.id} group={group} disabled={!isEventReady} />
                  ))}
                </div>
                {/* Bottom row: 4 QR codes */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 justify-items-center">
                  {GROUPS.slice(3, 7).map(group => (
                    <GroupCard key={group.id} group={group} disabled={!isEventReady} />
                  ))}
                </div>
              </div>
            ) : (
              <Dashboard />
            )}
          </div>
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="relative z-10 py-4 text-center text-[10px] text-gray-500 uppercase tracking-widest">
        Furama - Ariyana Danang International Tourism Complex
      </footer>
    </div>
  );
};

export default App;