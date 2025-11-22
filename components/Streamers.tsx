import React from 'react';
import { FanSpeed } from '../types';

interface StreamersProps {
  speed: FanSpeed;
}

const Streamers: React.FC<StreamersProps> = ({ speed }) => {
  if (speed === FanSpeed.OFF) return null;

  // Calculate flutter intensity based on speed
  const flutterDuration = Math.max(0.1, 0.5 - (speed * 0.1));
  
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
        {/* Streamer 1 */}
        <div 
            className="absolute w-24 h-2 bg-red-400 origin-left rounded-r-md opacity-80 shadow-sm"
            style={{ 
                top: '35%', 
                left: '55%',
                transform: 'rotate(-10deg)',
                animation: `flutter ${flutterDuration}s infinite linear alternate`
            }}
        />
        {/* Streamer 2 */}
        <div 
            className="absolute w-28 h-2 bg-blue-400 origin-left rounded-r-md opacity-80 shadow-sm"
            style={{ 
                top: '50%', 
                left: '60%',
                transform: 'rotate(0deg)',
                animation: `flutter ${flutterDuration * 1.2}s infinite linear alternate-reverse`
            }}
        />
        {/* Streamer 3 */}
        <div 
            className="absolute w-20 h-2 bg-yellow-400 origin-left rounded-r-md opacity-80 shadow-sm"
            style={{ 
                top: '65%', 
                left: '55%',
                transform: 'rotate(10deg)',
                animation: `flutter ${flutterDuration * 0.8}s infinite linear alternate`
            }}
        />
    </div>
  );
};

export default Streamers;