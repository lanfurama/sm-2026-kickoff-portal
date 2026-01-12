import React from 'react';
import { Group } from '../types';
import { ExternalLink, Lock } from 'lucide-react';

interface GroupCardProps {
  group: Group;
  disabled?: boolean;
}

export const GroupCard: React.FC<GroupCardProps> = ({ group, disabled = false }) => {
  // Get color without # for QR API
  const qrColor = group.color ? group.color.replace('#', '') : '000000';

  // QR Code URL with custom color
  const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(group.slideUrl)}&color=${qrColor}&bgcolor=ffffff`;

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-lg shadow-2xl border border-white/5">

      {/* 1. Header Bar with custom color */}
      <div
        className="py-4 px-4 text-center border-b border-white/10"
        style={{ background: `linear-gradient(to right, ${group.color || '#0891b2'}, ${group.color || '#0891b2'}dd)` }}
      >
        <h3 className="text-xl font-bold text-white uppercase tracking-wider drop-shadow-sm">
          {group.name}
        </h3>
      </div>

      {/* 2. Body (White Background) */}
      <div className="bg-white p-6 flex flex-col items-center justify-center relative flex-grow">

        {/* QR Code with blur overlay when disabled */}
        <div className="w-48 h-48 md:w-56 md:h-56 relative">
          <img
            src={qrApiUrl}
            alt={`QR Code for ${group.name}`}
            className={`w-full h-full object-contain transition-all duration-300 ${disabled ? 'blur-md' : ''}`}
          />
          {disabled && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/60">
              <Lock className="text-gray-400 mb-2" size={32} />
              <span className="text-gray-500 text-sm font-medium">Available Soon</span>
            </div>
          )}
        </div>

        {/* Action Button - disabled or active */}
        {disabled ? (
          <div className="mt-6 flex items-center text-sm font-bold text-gray-400 uppercase tracking-wide cursor-not-allowed">
            <Lock size={14} className="mr-1" /> Locked
          </div>
        ) : (
          <a
            href={group.slideUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 flex items-center text-sm font-bold uppercase tracking-wide border-b border-transparent hover:opacity-80 transition-opacity"
            style={{ color: group.color || '#1e3a8a' }}
          >
            Open Presentation <ExternalLink size={14} className="ml-1" />
          </a>
        )}

        {/* Decorative corner accents inside the white card */}
        <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-gray-200"></div>
        <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-gray-200"></div>
        <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-gray-200"></div>
        <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-gray-200"></div>
      </div>

      {/* Bottom accent line with custom color */}
      <div
        className="h-1.5 w-full"
        style={{ background: `linear-gradient(to right, ${group.color || '#1e3a8a'}, ${group.color || '#0891b2'}88, ${group.color || '#1e3a8a'})` }}
      ></div>
    </div>
  );
};