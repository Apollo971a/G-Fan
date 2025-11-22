import React from 'react';
import { FanSpeed } from '../types';

interface ControlPanelProps {
  speed: FanSpeed;
  setSpeed: (speed: FanSpeed) => void;
}

const ControlPanel: React.FC<ControlPanelProps> = ({ speed, setSpeed }) => {
  const levels = [
    { value: FanSpeed.OFF, label: 'OFF', color: 'bg-red-500 hover:bg-red-600' },
    { value: FanSpeed.LOW, label: '1', color: 'bg-teal-400 hover:bg-teal-500' },
    { value: FanSpeed.MEDIUM, label: '2', color: 'bg-teal-500 hover:bg-teal-600' },
    { value: FanSpeed.HIGH, label: '3', color: 'bg-teal-600 hover:bg-teal-700' },
    { value: FanSpeed.TURBO, label: '4', color: 'bg-teal-700 hover:bg-teal-800' },
  ];

  return (
    <div className="flex flex-col items-center gap-6 mt-8 p-6 bg-white/50 backdrop-blur-md rounded-2xl shadow-xl border border-white/20">
      <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Speed Control</div>
      <div className="flex gap-3">
        {levels.map((level) => (
          <button
            key={level.label}
            onClick={() => setSpeed(level.value)}
            className={`
              w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center
              text-white font-bold text-lg sm:text-xl shadow-md transition-all duration-200
              active:scale-95 focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-blue-200
              ${level.color}
              ${speed === level.value ? 'ring-4 ring-offset-2 ring-blue-400 scale-110 shadow-lg' : 'opacity-90 hover:opacity-100'}
            `}
            aria-label={`Set fan speed to ${level.label}`}
          >
            {level.label}
          </button>
        ))}
      </div>
      
      {/* Status Display */}
      <div className="h-6 flex items-center gap-2">
        <span className="text-gray-400 text-xs uppercase">Status:</span>
        <span className={`text-sm font-bold ${speed === 0 ? 'text-gray-400' : 'text-blue-600'}`}>
          {speed === 0 ? 'Stopped' : 
           speed === 1 ? 'Gentle Breeze' :
           speed === 2 ? 'Cooling' :
           speed === 3 ? 'Strong Wind' : 'TURBO MODE'}
        </span>
      </div>
    </div>
  );
};

export default ControlPanel;