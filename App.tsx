import React, { useState } from 'react';
import { EVENT_TITLE, EVENT_SUBTITLE, GROUPS } from './constants';
import { ViewState } from './types';
import { Countdown } from './components/Countdown';
import { GroupCard } from './components/GroupCard';
import { Dashboard } from './components/Dashboard';
import { LayoutDashboard, Home } from 'lucide-react';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>(ViewState.HOME);

  // Background matching the reference: Aerial view of resort + Tech Overlay
  const BackgroundDecor = () => (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {/* 1. Base Image: Resort/City aerial view */}
      <img
        src="/KO LED-01.jpg"
        alt="Danang Resort Background"
        className="w-full h-full object-cover"
      />

      {/* 2. Darker Blue Gradient Overlay (increased opacity and darker hex) */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#05143a]/80 to-[#020617]/40 opacity-95"></div>

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
        <div className="max-w-7xl mx-auto flex flex-col items-center mt-16">

          {/* Titles */}
          <div className="text-center mb-8 md:mb-12 w-full">

            {/* Countdown integrated below title */}
            {view === ViewState.HOME && (
              <div className="mt-6 flex justify-center">
                <Countdown />
              </div>
            )}
          </div>

          {/* Dynamic Content */}
          <div className="w-full">
            {view === ViewState.HOME ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 max-w-6xl mx-auto">
                {GROUPS.map(group => (
                  <GroupCard key={group.id} group={group} />
                ))}
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