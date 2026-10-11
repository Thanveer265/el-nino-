import React from 'react';

interface BrandLogoProps {
  className?: string;
  size?: number;
  variant?: 'icon' | 'full';
  color?: string; // defaults to var(--brand)
}

/**
 * BrandLogo — Precision SVG representation of the El-Nexus / Clima-Shield weather emblem:
 * Features:
 * - Radiating Sun with circular rays
 * - Dual-lobed Storm Cloud
 * - High-voltage Lightning Bolt striking downward
 * - Angled Rain Streaks
 * - Checkered flag accents
 * 
 * Styled using the existing palette color (var(--brand)) as requested.
 */
export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  size = 20,
  variant = 'icon',
  color = 'var(--brand)',
}) => {
  if (variant === 'full') {
    return (
      <div className={`inline-flex flex-col items-center select-none ${className}`}>
        <svg
          width={size * 1.8}
          height={size * 1.3}
          viewBox="0 0 160 110"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform duration-200"
          style={{ color }}
        >
          {/* Sun behind cloud */}
          <circle cx="98" cy="30" r="14" stroke="currentColor" strokeWidth="4.5" fill="none" />
          {/* Sun rays */}
          <line x1="98" y1="9" x2="98" y2="3" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
          <line x1="113" y1="15" x2="118" y2="10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
          <line x1="120" y1="30" x2="126" y2="30" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
          <line x1="83" y1="15" x2="78" y2="10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />

          {/* Storm Cloud Path */}
          <path
            d="M48 66C41 66 35 60.5 35 53.5C35 47.5 39.5 42.5 45.5 41.5C47.5 31.5 56 24 66.5 24C75.5 24 83 29.5 86 37.5C89.5 35 94 33.5 99 33.5C108.5 33.5 116 41 116 50.5C116 51.5 115.8 52.5 115.5 53.5C121 54.5 125 59.5 125 65.5C125 72.5 119.5 78 112.5 78L48 78C41 78 35 72.5 35 66"
            fill="currentColor"
          />

          {/* Lightning Bolt */}
          <polygon
            points="76,44 65,68 77,68 70,94 92,62 80,62 87,44"
            fill="#091A16"
          />

          {/* Rain Streaks */}
          <line x1="50" y1="84" x2="43" y2="96" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
          <line x1="62" y1="88" x2="55" y2="100" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
          <line x1="98" y1="88" x2="91" y2="100" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
          <line x1="110" y1="84" x2="103" y2="96" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        </svg>

        {/* Wordmark */}
        <span
          className="font-black text-sm tracking-wider uppercase font-mono-numbers mt-1"
          style={{ color }}
        >
          EL-NEXUS
        </span>

        {/* Bottom checkered accents */}
        <div className="flex items-center justify-between w-full px-2 mt-1 opacity-90">
          <div className="grid grid-cols-5 gap-0.5">
            <span className="w-1.5 h-1.5" style={{ backgroundColor: color }} />
            <span className="w-1.5 h-1.5 bg-transparent" />
            <span className="w-1.5 h-1.5" style={{ backgroundColor: color }} />
            <span className="w-1.5 h-1.5 bg-transparent" />
            <span className="w-1.5 h-1.5" style={{ backgroundColor: color }} />
            <span className="w-1.5 h-1.5 bg-transparent" />
            <span className="w-1.5 h-1.5" style={{ backgroundColor: color }} />
            <span className="w-1.5 h-1.5 bg-transparent" />
            <span className="w-1.5 h-1.5" style={{ backgroundColor: color }} />
            <span className="w-1.5 h-1.5 bg-transparent" />
          </div>
          <div className="grid grid-cols-5 gap-0.5">
            <span className="w-1.5 h-1.5" style={{ backgroundColor: color }} />
            <span className="w-1.5 h-1.5 bg-transparent" />
            <span className="w-1.5 h-1.5" style={{ backgroundColor: color }} />
            <span className="w-1.5 h-1.5 bg-transparent" />
            <span className="w-1.5 h-1.5" style={{ backgroundColor: color }} />
            <span className="w-1.5 h-1.5 bg-transparent" />
            <span className="w-1.5 h-1.5" style={{ backgroundColor: color }} />
            <span className="w-1.5 h-1.5 bg-transparent" />
            <span className="w-1.5 h-1.5" style={{ backgroundColor: color }} />
            <span className="w-1.5 h-1.5 bg-transparent" />
          </div>
        </div>
      </div>
    );
  }

  // Compact Header / Nav Icon (perfect 1:1 replacement for the square block)
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 86"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 transition-transform duration-200 group-hover:scale-110 ${className}`}
      style={{ color }}
      aria-label="Clima-Shield El-Nexus Logo"
    >
      {/* Sun behind right shoulder */}
      <circle cx="68" cy="22" r="11" stroke="currentColor" strokeWidth="3.5" fill="none" />
      <line x1="68" y1="6" x2="68" y2="2" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <line x1="80" y1="10" x2="83" y2="7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <line x1="85" y1="22" x2="89" y2="22" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <line x1="56" y1="10" x2="53" y2="7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />

      {/* Cloud Main Body */}
      <path
        d="M26 54C20 54 15 49 15 43C15 37.5 19 33 24 32C25.5 23.5 33 17 42 17C49.5 17 56 21.5 58.5 28C61.5 26 65 25 69 25C77 25 83.5 31 83.5 39C83.5 40 83.3 40.8 83 41.5C87.5 42.5 91 46.5 91 51.5C91 57.5 86.5 62 80.5 62L26 62C20 62 15 57.5 15 52"
        fill="currentColor"
      />

      {/* Negative-space Lightning Bolt */}
      <polygon
        points="52,28 42,48 51,48 45,68 64,43 54,43 60,28"
        fill="var(--bg, #091A16)"
      />

      {/* Rain Streaks */}
      <line x1="28" y1="68" x2="22" y2="78" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="38" y1="70" x2="32" y2="80" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="68" y1="70" x2="62" y2="80" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="78" y1="68" x2="72" y2="78" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
    </svg>
  );
};
