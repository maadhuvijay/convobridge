'use client';

export default function Robot() {
  return (
    <div className="relative flex items-start gap-4">
      {/* Robot Avatar - Cute Friendly Cyberpunk Robot */}
      <div className="relative w-20 h-20 flex-shrink-0">
        {/* Headphones with Orange Accents */}
        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-24 h-8 z-10">
          {/* Left Headphone */}
          <div className="absolute left-0 w-10 h-10 rounded-full bg-black border-2 border-[var(--orange-500)] shadow-[0_0_15px_var(--orange-glow)]">
            <div className="absolute inset-2 rounded-full bg-[var(--orange-500)] opacity-30"></div>
          </div>
          {/* Headband */}
          <div className="absolute left-10 top-4 w-4 h-1 bg-[var(--orange-500)] shadow-[0_0_10px_var(--orange-glow)]"></div>
          {/* Right Headphone */}
          <div className="absolute right-0 w-10 h-10 rounded-full bg-black border-2 border-[var(--orange-500)] shadow-[0_0_15px_var(--orange-glow)]">
            <div className="absolute inset-2 rounded-full bg-[var(--orange-500)] opacity-30"></div>
          </div>
        </div>

        {/* Robot Head - Rounded Helmet */}
        <div className="relative w-full h-full rounded-full bg-gradient-to-br from-gray-900 via-gray-800 to-black border-2 border-gray-700 flex items-center justify-center shadow-[0_0_20px_var(--orange-glow),inset_0_0_20px_rgba(0,0,0,0.5)]">
          {/* Rim Lighting - Orange Glow */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent via-[var(--orange-glow)]/20 to-transparent"></div>
          
          {/* Large Glowing Cyan Eyes */}
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 flex gap-3">
            <div className="relative">
              <div className="w-4 h-4 rounded-full bg-[var(--cyan-500)] shadow-[0_0_20px_var(--cyan-glow-strong),0_0_40px_var(--cyan-glow)] animate-pulse"></div>
              <div className="absolute inset-0 w-4 h-4 rounded-full bg-[var(--cyan-500)] blur-md opacity-50"></div>
            </div>
            <div className="relative">
              <div className="w-4 h-4 rounded-full bg-[var(--cyan-500)] shadow-[0_0_20px_var(--cyan-glow-strong),0_0_40px_var(--cyan-glow)] animate-pulse"></div>
              <div className="absolute inset-0 w-4 h-4 rounded-full bg-[var(--cyan-500)] blur-md opacity-50"></div>
            </div>
          </div>

          {/* Friendly Expression - Simple Line */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-[var(--orange-500)] opacity-60 rounded-full"></div>
        </div>

        {/* Body/Uniform - Simple Dark Jacket */}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-12 h-8 bg-black rounded-b-lg border-x-2 border-b-2 border-gray-800"></div>
      </div>

      {/* Speech Bubble Tail */}
      <div className="absolute left-20 top-10 w-0 h-0 border-t-8 border-t-transparent border-r-12 border-r-[var(--orange-500)] border-b-8 border-b-transparent drop-shadow-[0_0_10px_var(--orange-glow)]"></div>
    </div>
  );
}
