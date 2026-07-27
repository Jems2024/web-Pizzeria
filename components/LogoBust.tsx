'use client';

interface LogoBustProps {
  className?: string;
  variant?: 'white' | 'black' | 'gold';
  size?: number;
}

export default function LogoBust({ className = '', variant = 'white', size = 100 }: LogoBustProps) {
  let strokeColor = '#F5F1E8'; // default white/cream
  if (variant === 'black') strokeColor = '#0E0C0A';
  if (variant === 'gold') strokeColor = '#C9A15A';

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block ${className}`}
      aria-label="Il Massone Logo Bust"
    >
      <g stroke={strokeColor} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Forehead & Nose Profile */}
        <path d="M 100 36 C 82 42 70 56 62 82 C 60 88 64 91 69 90 Q 73 90 71 95" strokeWidth="4" />

        {/* Nostril Detail */}
        <path d="M 68 89 C 72 88 74 93 70 95" strokeWidth="3" />

        {/* Lips & Chin Profile */}
        <path d="M 67 98 C 66 101 69 103 67 106 C 65 110 71 118 84 122 C 95 125 106 122 110 114" strokeWidth="3.8" />

        {/* Eye Arch & Eyelid */}
        <path d="M 73 72 C 78 64 88 64 94 76" strokeWidth="3.5" />
        <path d="M 76 75 C 82 70 88 73 90 78" strokeWidth="2.8" />

        {/* Lower Face to Neck Sweeping Curve */}
        <path d="M 68 165 C 75 160 92 145 102 124 C 106 115 106 100 102 94" strokeWidth="4" />
        <path d="M 68 165 C 85 156 110 142 143 140" strokeWidth="3.5" />

        {/* Hair Sweeping Top Lines */}
        <path d="M 100 36 C 118 36 134 50 135 100" strokeWidth="4" />
        <path d="M 102 46 C 114 52 124 66 125 90" strokeWidth="3.2" />
        <path d="M 104 56 C 108 70 112 85 106 94" strokeWidth="3" />
        <path d="M 102 94 C 98 100 104 105 108 100" strokeWidth="3" />

        {/* Distinctive Ribbon Ponytail Coil (Figure-8 Loop at back right) */}
        <path d="M 125 100 Q 142 90 148 102 Q 154 114 140 124 Q 124 130 122 114 Q 120 102 132 98 Q 146 94 150 108 Q 152 122 138 128" strokeWidth="3.5" />
      </g>
    </svg>
  );
}
