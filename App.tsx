import React, { useState, useEffect } from 'react';
import FanUnit from './components/FanUnit';
import ControlPanel from './components/ControlPanel';
import { FanSpeed } from './types';

const App: React.FC = () => {
  const [speed, setSpeed] = useState<FanSpeed>(FanSpeed.OFF);
  const [particles, setParticles] = useState<number[]>([]);

  // Effect to manage background wind particles when fan is on
  useEffect(() => {
    let interval: number;
    if (speed > 0) {
      const creationRate = Math.max(100, 1000 - (speed * 200)); // Create particles faster at higher speeds
      
      interval = window.setInterval(() => {
        setParticles(prev => {
          const newState = [...prev, Date.now()];
          // Keep only last 20 particles to prevent DOM overload
          if (newState.length > 20) return newState.slice(newState.length - 20);
          return newState;
        });
      }, creationRate);
    } else {
      setParticles([]);
    }

    return () => clearInterval(interval);
  }, [speed]);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 to-slate-200 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
         {/* Decorative Circle */}
         <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
         <div className="absolute top-1/2 -left-24 w-72 h-72 bg-purple-200/20 rounded-full blur-3xl"></div>

         {/* Wind Particles */}
         {particles.map((id) => {
           const randomY = Math.random() * 100;
           const duration = Math.max(0.5, 3 - (speed * 0.5)); // Faster particles at higher fan speeds
           return (
             <div
               key={id}
               className="absolute left-0 w-24 h-0.5 bg-white/40 rounded-full"
               style={{
                 top: `${randomY}%`,
                 animation: `float-particle ${duration}s linear forwards`
               }}
             />
           );
         })}
      </div>

      <header className="mb-8 z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-black text-slate-800 tracking-tighter drop-shadow-sm">
          <span className="text-blue-600">G</span>-Fan
        </h1>
        <p className="text-slate-500 mt-2 font-medium">Premium Cooling Technology</p>
      </header>

      <main className="z-10 flex flex-col items-center w-full max-w-md">
        <FanUnit speed={speed} />
        <ControlPanel speed={speed} setSpeed={setSpeed} />
      </main>
      
      <footer className="mt-12 text-slate-400 text-xs z-10">
        © 2024 G-Fan Appliances Inc.
      </footer>
    </div>
  );
};

export default App;