'use client';

interface ResponseCardProps {
  text: string;
  isSelected?: boolean;
  isRecording?: boolean;
  onClick?: () => void;
}

export default function ResponseCard({ text, isSelected = false, isRecording = false, onClick }: ResponseCardProps) {
  return (
    <button
      onClick={onClick}
      className={`
        relative w-full rounded-2xl p-4 text-left transition-all duration-300
        ${isSelected 
          ? 'bg-[var(--panel-bg)] border-2 border-[var(--cyan-500)] scale-[1.02] shadow-[0_0_20px_var(--cyan-glow-strong),inset_0_0_15px_var(--cyan-glow)] brightness-110' 
          : 'bg-[var(--panel-bg)] border border-[var(--border-cyan)] opacity-80 hover:opacity-100 hover:border-[var(--cyan-400)] hover:scale-[1.01] hover:shadow-[0_0_10px_var(--cyan-glow)]'
        }
        ${isRecording ? 'animate-pulse shadow-[0_0_25px_rgba(255,0,0,0.4)]' : ''}
      `}
    >
      <div className="flex items-center gap-3">
        {/* Mic Icon - Cyan/Turquoise */}
        <div className={`
          w-8 h-8 rounded-full flex items-center justify-center
          ${isSelected ? 'bg-[var(--cyan-glow)] border border-[var(--cyan-500)]' : 'bg-[var(--panel-bg)] border border-[var(--border-cyan)]'}
          ${isRecording ? 'animate-pulse shadow-[0_0_10px_var(--cyan-glow-strong)]' : ''}
        `}>
          <svg className={`w-4 h-4 ${isSelected ? 'text-[var(--cyan-500)]' : 'text-[var(--cyan-400)]'}`} fill="currentColor" viewBox="0 0 20 20">
            <path d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4z" />
            <path d="M5.5 9.643a.75.75 0 00-1.5 0V10c0 3.314 2.686 6 6 6s6-2.686 6-6v-.357a.75.75 0 00-1.5 0V10c0 2.486-2.014 4.5-4.5 4.5S5.5 12.486 5.5 10v-.357z" />
          </svg>
        </div>

        {/* Response Text */}
        <span className={`flex-1 ${isSelected ? 'text-[var(--text-primary)] font-medium' : 'text-[var(--text-muted)]'}`}>
          {text}
        </span>

        {/* Three-dot Menu */}
        <div className="w-6 h-6 flex items-center justify-center">
          <div className="flex gap-1">
            <div className="w-1 h-1 rounded-full bg-[var(--text-muted)]"></div>
            <div className="w-1 h-1 rounded-full bg-[var(--text-muted)]"></div>
            <div className="w-1 h-1 rounded-full bg-[var(--text-muted)]"></div>
          </div>
        </div>
      </div>
    </button>
  );
}
