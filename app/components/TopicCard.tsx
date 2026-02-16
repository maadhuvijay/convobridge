'use client';

interface TopicCardProps {
  title: string;
  icon: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
}

export default function TopicCard({ title, icon, isActive = false, onClick }: TopicCardProps) {
  return (
    <button
      onClick={onClick}
      className={`
        relative w-full rounded-2xl p-4 text-left transition-all duration-300
        ${isActive 
          ? 'bg-[var(--panel-bg)] border-2 border-[var(--orange-500)] scale-[1.02] shadow-[0_0_25px_var(--orange-glow-strong),inset_0_0_20px_var(--orange-shadow)]' 
          : 'bg-[var(--panel-bg)] border border-[var(--border-orange)] opacity-70 hover:opacity-100 hover:border-[var(--orange-500)] hover:shadow-[0_0_15px_var(--orange-glow)]'
        }
      `}
    >
      <div className="flex items-center gap-3">
        <div className={`text-2xl ${isActive ? 'text-[var(--orange-500)]' : 'text-[var(--text-muted)]'}`}>
          {icon}
        </div>
        <span className={`font-semibold ${isActive ? 'text-[var(--text-primary)]' : 'text-[var(--text-muted)]'}`}>
          {title}
        </span>
      </div>
      {isActive && (
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[var(--orange-glow)]/20 to-transparent pointer-events-none"></div>
      )}
    </button>
  );
}
