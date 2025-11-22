import React from 'react';

const FanBlades: React.FC = () => {
  return (
    <svg
      viewBox="0 0 200 200"
      className="w-full h-full drop-shadow-2xl"
      style={{ filter: 'drop-shadow(0px 10px 10px rgba(0,0,0,0.3))' }}
    >
      <g transform="translate(100, 100)">
        {/* Blade 1 */}
        <path
          d="M0,0 C20,-50 80,-60 90,-10 C95,20 40,40 0,0"
          fill="#3b82f6"
          stroke="#2563eb"
          strokeWidth="2"
          transform="rotate(0)"
          className="opacity-90"
        />
        {/* Blade 2 */}
        <path
          d="M0,0 C20,-50 80,-60 90,-10 C95,20 40,40 0,0"
          fill="#3b82f6"
          stroke="#2563eb"
          strokeWidth="2"
          transform="rotate(120)"
          className="opacity-90"
        />
        {/* Blade 3 */}
        <path
          d="M0,0 C20,-50 80,-60 90,-10 C95,20 40,40 0,0"
          fill="#3b82f6"
          stroke="#2563eb"
          strokeWidth="2"
          transform="rotate(240)"
          className="opacity-90"
        />
        
        {/* Center Cap */}
        <circle cx="0" cy="0" r="15" fill="#1e40af" className="shadow-inner" />
        <circle cx="0" cy="0" r="5" fill="#60a5fa" />
      </g>
    </svg>
  );
};

export default FanBlades;