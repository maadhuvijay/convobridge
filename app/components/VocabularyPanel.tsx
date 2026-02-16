'use client';

interface VocabularyPanelProps {
  word: string;
  definition: string;
  example?: string;
}

export default function VocabularyPanel({ word, definition, example }: VocabularyPanelProps) {
  return (
    <div className="relative rounded-2xl bg-[var(--panel-bg)] border-2 border-[var(--orange-500)] p-6 shadow-[0_0_35px_var(--orange-glow-strong),inset_0_0_20px_var(--orange-shadow)]">
      {/* Title */}
      <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--text-primary)] mb-4">
        Vocabulary
      </h3>

      {/* Word - Warm Copper/Orange */}
      <h4 className="text-3xl font-bold text-[var(--text-header)] mb-3 drop-shadow-[0_0_10px_var(--orange-glow)]">
        {word}
      </h4>

      {/* Definition */}
      <p className="text-[var(--text-secondary)] mb-3 leading-relaxed">
        {definition}
      </p>

      {/* Example (if provided) */}
      {example && (
        <p className="text-[var(--text-muted)] text-sm italic mb-4">
          {example}
        </p>
      )}

      {/* Hear Me Say Button */}
      <button className="w-full rounded-full bg-gradient-to-r from-[var(--orange-500)] to-[var(--orange-600)] px-4 py-2 text-sm font-semibold text-white hover:shadow-[0_0_20px_var(--orange-glow-strong)] transition-all duration-300 flex items-center justify-center gap-2 border border-[var(--orange-500)]">
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.793L4.383 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.383l4-3.617a1 1 0 011.617.793zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" />
        </svg>
        Hear me say!
      </button>
    </div>
  );
}
