'use client';

import Link from 'next/link';
import BackgroundEffects from '../components/BackgroundEffects';

export default function WelcomePage() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <BackgroundEffects />
      
      {/* Header Bar */}
      <header className="relative z-10 w-full rounded-b-[24px] border-b border-x border-[var(--border-orange)] bg-[var(--panel-bg)] backdrop-blur-sm px-8 py-4 shadow-[0_0_20px_var(--orange-shadow)]">
        <div className="flex items-center justify-between">
          {/* Left: ConvoBridge Logo/Button */}
          <Link
            href="/welcome"
            className="px-6 py-2 rounded-xl border border-[var(--border-orange)] bg-[var(--panel-bg)] text-[var(--text-header)] font-semibold hover:bg-[var(--orange-glow)] hover:border-[var(--orange-500)] hover:shadow-[0_0_20px_var(--orange-glow-strong)] transition-all duration-300"
          >
            ConvoBridge
          </Link>

          {/* Right: Navigation Buttons */}
          <div className="flex items-center gap-3">
            <Link
              href="/signup"
              className="px-5 py-2 rounded-xl border border-[var(--border-orange)] bg-[var(--panel-bg)] text-[var(--text-primary)] hover:bg-[var(--orange-glow)] hover:border-[var(--orange-500)] hover:shadow-[0_0_15px_var(--orange-glow)] transition-all duration-300 text-sm font-medium"
            >
              Signup
            </Link>
            <Link
              href="/login"
              className="px-5 py-2 rounded-xl border border-[var(--border-orange)] bg-[var(--panel-bg)] text-[var(--text-primary)] hover:bg-[var(--orange-glow)] hover:border-[var(--orange-500)] hover:shadow-[0_0_15px_var(--orange-glow)] transition-all duration-300 text-sm font-medium"
            >
              Student
            </Link>
            <Link
              href="/login"
              className="px-5 py-2 rounded-xl border border-[var(--border-orange)] bg-[var(--panel-bg)] text-[var(--text-primary)] hover:bg-[var(--orange-glow)] hover:border-[var(--orange-500)] hover:shadow-[0_0_15px_var(--orange-glow)] transition-all duration-300 text-sm font-medium"
            >
              Parent
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="relative z-10 flex-1 flex items-center justify-center p-8">
        <div className="text-center space-y-6">
          {/* Welcome Message - Warm Copper/Orange */}
          <h1 className="text-6xl md:text-7xl font-bold tracking-wide text-[var(--text-header)] drop-shadow-[0_0_20px_var(--orange-glow)]">
            Welcome to ConvoBridge!
          </h1>
          
          {/* Tagline */}
          <p className="text-xl md:text-2xl text-[var(--text-muted)] font-light italic">
            (Practice real conversations. Build confidence. Find your voice..)
          </p>
        </div>
      </main>
    </div>
  );
}
