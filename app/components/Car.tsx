'use client';

export default function Car() {
  return (
    <div className="absolute bottom-20 right-32 w-48 h-24 opacity-60 pointer-events-none z-10">
      <svg viewBox="0 0 200 100" className="w-full h-full" style={{ filter: 'drop-shadow(0 0 10px rgba(255, 107, 53, 0.5))' }}>
        {/* Car Body - Wireframe/Holographic Style */}
        <path
          d="M20 60 Q20 50 30 50 L50 50 L60 40 L140 40 L150 50 L170 50 Q180 50 180 60 L180 80 Q180 90 170 90 L160 90 L160 85 L40 85 L40 90 L30 90 Q20 90 20 80 Z"
          fill="rgba(0, 0, 0, 0.6)"
          stroke="var(--orange-500)"
          strokeWidth="1.5"
          opacity="0.8"
        />
        
        {/* Digital Circuit Pattern on Car */}
        <g opacity="0.3">
          <line x1="50" y1="55" x2="70" y2="55" stroke="var(--orange-500)" strokeWidth="0.5" />
          <line x1="130" y1="55" x2="150" y2="55" stroke="var(--orange-500)" strokeWidth="0.5" />
          <line x1="80" y1="60" x2="80" y2="75" stroke="var(--orange-500)" strokeWidth="0.5" />
          <line x1="120" y1="60" x2="120" y2="75" stroke="var(--orange-500)" strokeWidth="0.5" />
        </g>
        
        {/* Windows - Cyan/Turquoise */}
        <rect x="60" y="45" width="30" height="15" fill="rgba(0, 229, 255, 0.2)" stroke="var(--cyan-500)" strokeWidth="0.5" />
        <rect x="110" y="45" width="30" height="15" fill="rgba(0, 229, 255, 0.2)" stroke="var(--cyan-500)" strokeWidth="0.5" />
        
        {/* Wheels - Orange Glow */}
        <circle cx="50" cy="85" r="8" fill="rgba(0, 0, 0, 0.8)" stroke="var(--orange-500)" strokeWidth="1.5" />
        <circle cx="150" cy="85" r="8" fill="rgba(0, 0, 0, 0.8)" stroke="var(--orange-500)" strokeWidth="1.5" />
        
        {/* Wheel Glow */}
        <circle cx="50" cy="85" r="8" fill="none" stroke="var(--orange-500)" strokeWidth="0.5" opacity="0.5" style={{ filter: 'blur(2px)' }} />
        <circle cx="150" cy="85" r="8" fill="none" stroke="var(--orange-500)" strokeWidth="0.5" opacity="0.5" style={{ filter: 'blur(2px)' }} />
        
        {/* Glow Effect - Orange */}
        <ellipse cx="100" cy="85" rx="80" ry="5" fill="var(--orange-glow)" opacity="0.4" />
      </svg>
    </div>
  );
}
