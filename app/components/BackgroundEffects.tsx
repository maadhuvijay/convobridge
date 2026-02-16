'use client';

export default function BackgroundEffects() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* City Skyline Silhouette */}
      <div className="absolute bottom-0 left-0 right-0 h-32 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1200 200" preserveAspectRatio="none">
          <path
            d="M0,200 L0,150 L50,140 L100,160 L150,120 L200,130 L250,100 L300,110 L350,90 L400,100 L450,80 L500,90 L550,70 L600,80 L650,60 L700,70 L750,50 L800,60 L850,40 L900,50 L950,30 L1000,40 L1050,20 L1100,30 L1150,10 L1200,20 L1200,200 Z"
            fill="url(#skylineGradient)"
          />
          <defs>
            <linearGradient id="skylineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="var(--orange-500)" stopOpacity="0.3" />
              <stop offset="100%" stopColor="var(--orange-500)" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Golden/Orange Particle/Dust Effects */}
      {Array.from({ length: 40 }).map((_, i) => {
        const size = Math.random() * 3 + 1;
        const opacity = Math.random() * 0.4 + 0.1;
        const delay = Math.random() * 5;
        const duration = Math.random() * 4 + 3;
        return (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${size}px`,
              height: `${size}px`,
              background: `radial-gradient(circle, rgba(255, 107, 53, ${opacity}) 0%, rgba(230, 126, 34, ${opacity * 0.5}) 100%)`,
              boxShadow: `0 0 ${size * 2}px rgba(255, 107, 53, ${opacity})`,
              animation: `particle-float ${duration}s ease-in-out infinite`,
              animationDelay: `${delay}s`,
            }}
          />
        );
      })}

      {/* Glowing Particles - Larger */}
      {Array.from({ length: 15 }).map((_, i) => (
        <div
          key={`glow-${i}`}
          className="absolute rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 4 + 2}px`,
            height: `${Math.random() * 4 + 2}px`,
            background: `rgba(255, 107, 53, ${Math.random() * 0.3 + 0.2})`,
            boxShadow: `0 0 ${Math.random() * 10 + 5}px rgba(255, 107, 53, 0.5)`,
            animation: `glow-pulse ${Math.random() * 3 + 2}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}

      {/* Data Grid Effect - Orange */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 107, 53, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 107, 53, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />
    </div>
  );
}
