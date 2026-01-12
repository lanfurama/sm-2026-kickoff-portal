import React from 'react';
import { Group } from '../types';
import { ExternalLink } from 'lucide-react';

interface GroupCardProps {
  group: Group;
}

export const GroupCard: React.FC<GroupCardProps> = ({ group }) => {
  // QR Code URL
  const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(group.slideUrl)}&color=000000&bgcolor=ffffff`;

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-lg shadow-2xl border border-white/5">
      
      {/* 1. Header Bar matching reference (Darker Cyan Gradient) */}
      <div className="bg-gradient-to-r from-[#0891b2] to-[#1e3a8a] py-4 px-4 text-center border-b border-white/10">
        <h3 className="text-xl font-bold text-white uppercase tracking-wider drop-shadow-sm">
          {group.name}
        </h3>
      </div>

      {/* 2. Body (White Background) */}
      <div className="bg-white p-6 flex flex-col items-center justify-center relative flex-grow">
        
        {/* QR Code */}
        <div className="w-48 h-48 md:w-56 md:h-56">
           <img src={qrApiUrl} alt={`QR Code for ${group.name}`} className="w-full h-full object-contain" />
        </div>

        {/* Action Button (Static, minimal) */}
        <a 
          href={group.slideUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="mt-6 flex items-center text-sm font-bold text-[#1e3a8a] uppercase tracking-wide border-b border-transparent hover:border-[#1e3a8a] transition-colors"
        >
          Open Presentation <ExternalLink size={14} className="ml-1" />
        </a>
        
        {/* Decorative corner accents inside the white card */}
        <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-gray-200"></div>
        <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-gray-200"></div>
        <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-gray-200"></div>
        <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-gray-200"></div>
      </div>
      
      {/* Bottom accent line (Darker) */}
      <div className="h-1.5 w-full bg-gradient-to-r from-[#1e3a8a] via-[#0891b2] to-[#1e3a8a]"></div>
    </div>
  );
};