'use client';

export default function Header() {
  return (
    <header className="relative z-10 w-full rounded-t-[24px] border border-[var(--border-orange)] bg-[var(--panel-bg)] backdrop-blur-sm px-6 py-4 shadow-[0_0_20px_var(--orange-shadow)]">
      <div className="flex items-center justify-between">
        {/* Left: System Icons */}
        <div className="flex items-center gap-4">
          <div className="w-6 h-6 rounded bg-[var(--orange-glow)] opacity-60"></div>
          <div className="w-6 h-6 rounded bg-[var(--orange-glow)] opacity-60"></div>
          <div className="flex gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-[var(--text-muted)]"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-[var(--text-muted)]"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-[var(--text-muted)]"></div>
          </div>
        </div>

        {/* Center: Title */}
        <h1 className="text-2xl font-bold tracking-widest uppercase text-[var(--text-header)] drop-shadow-[0_0_10px_var(--orange-glow)]">
          CONVOBRIDGE
        </h1>

        {/* Right: Safe Mode & Icons */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--cyan-glow)]/30 border border-[var(--border-cyan)] shadow-[0_0_10px_var(--cyan-glow)]">
            <div className="w-2 h-2 rounded-full bg-[var(--cyan-500)] animate-pulse shadow-[0_0_5px_var(--cyan-glow-strong)]"></div>
            <span className="text-xs font-semibold text-[var(--cyan-400)] tracking-wide">SAFE MODE: ON</span>
          </div>
          <div className="w-6 h-6 rounded bg-[var(--orange-glow)] opacity-60"></div>
          <div className="w-6 h-6 rounded bg-[var(--orange-glow)] opacity-60"></div>
          <div className="w-8 h-8 rounded-full bg-[var(--orange-glow)] opacity-60"></div>
        </div>
      </div>
    </header>
  );
}
