import React, { useMemo } from 'react';
import FanBlades from './FanBlades';
import Streamers from './Streamers';
import { FanSpeed } from '../types';

interface FanUnitProps {
  speed: FanSpeed;
}

const FanUnit: React.FC<FanUnitProps> = ({ speed }) => {
  
  const animationDuration = useMemo(() => {
    switch (speed) {
      case FanSpeed.OFF: return '0s';
      case FanSpeed.LOW: return '1.5s';
      case FanSpeed.MEDIUM: return '0.8s';
      case FanSpeed.HIGH: return '0.4s';
      case FanSpeed.TURBO: return '0.15s';
      default: return '0s';
    }
  }, [speed]);

  return (
    <div className="relative flex flex-col items-center">
      {/* Fan Head */}
      <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full bg-gray-100 border-8 border-gray-300 shadow-xl flex items-center justify-center z-10 overflow-hidden">
        
        {/* Wire Cage Mesh (Visual effect) */}
        <div className="absolute inset-0 rounded-full border-4 border-gray-200 z-30 pointer-events-none opacity-50"
             style={{ background: 'radial-gradient(circle, transparent 60%, rgba(0,0,0,0.1) 100%)' }}>
             {/* Radial wires */}
             {[...Array(12)].map((_, i) => (
                <div key={i} className="absolute top-0 left-1/2 w-0.5 h-full bg-gray-300 -translate-x-1/2" style={{ transform: `translateX(-50%) rotate(${i * 30}deg)` }}></div>
             ))}
             {/* Concentric wires */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 border-2 border-gray-300 rounded-full"></div>
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 border-2 border-gray-300 rounded-full"></div>
        </div>

        {/* The Spinning Blades */}
        <div 
          className={`w-full h-full p-4 transition-transform will-change-transform ${speed > 0 ? 'animate-spin' : ''}`} 
          style={{ animationDuration: animationDuration, animationTimingFunction: 'linear' }}
        >
          <FanBlades />
        </div>

        {/* Front Center Logo/Cap */}
        <div className="absolute z-40 w-16 h-16 bg-white rounded-full border-4 border-gray-200 shadow-md flex items-center justify-center">
           <span className="text-[10px] font-extrabold text-blue-600 tracking-wider" style={{ fontFamily: 'sans-serif' }}>G-Fan</span>
        </div>

        {/* Wind Streamers */}
        <Streamers speed={speed} />
      </div>

      {/* Neck */}
      <div className="w-6 h-16 bg-gray-300 -mt-1 z-0 shadow-inner border-x border-gray-400"></div>

      {/* Base / Control Panel Area */}
      <div className="w-48 h-12 bg-white rounded-t-3xl border-t border-x border-gray-200 shadow-lg z-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-gray-200"></div>
        {/* Simple LED Indicator on base */}
        <div className={`absolute top-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full transition-colors duration-300 ${speed > 0 ? 'bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.8)]' : 'bg-gray-300'}`}></div>
      </div>
      
      {/* Base Foot */}
      <div className="w-64 h-8 bg-gray-800 rounded-full shadow-2xl -mt-2 z-0"></div>
    </div>
  );
};

export default FanUnit;