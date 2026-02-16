'use client';

interface QuestionBubbleProps {
  question: string;
  onListen?: () => void;
}

export default function QuestionBubble({ question, onListen }: QuestionBubbleProps) {
  return (
    <div className="relative ml-20">
      {/* Question Bubble - Orange Glow */}
      <div className="relative rounded-[18px] border-2 border-[var(--orange-500)] bg-[var(--panel-bg)] p-5 shadow-[0_0_25px_var(--orange-glow-strong),inset_0_0_15px_var(--orange-shadow)]">
        <p className="text-lg text-[var(--text-primary)] leading-relaxed">
          {question}
        </p>
      </div>

      {/* Listen Button */}
      {onListen && (
        <button
          onClick={onListen}
          className="mt-3 ml-2 px-4 py-2 rounded-full bg-[var(--panel-bg)] border border-[var(--border-orange)] text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:border-[var(--orange-500)] hover:shadow-[0_0_15px_var(--orange-glow)] transition-all duration-300 flex items-center gap-2 text-sm"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.793L4.383 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.383l4-3.617a1 1 0 011.617.793zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" />
          </svg>
          Listen
        </button>
      )}
    </div>
  );
}
