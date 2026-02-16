'use client';

import { useState } from 'react';
import Header from '../components/Header';
import TopicCard from '../components/TopicCard';
import Robot from '../components/Robot';
import QuestionBubble from '../components/QuestionBubble';
import ResponseCard from '../components/ResponseCard';
import VocabularyPanel from '../components/VocabularyPanel';
import BackgroundEffects from '../components/BackgroundEffects';
import Car from '../components/Car';

// Icons for topics
const GameIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
  </svg>
);

const SchoolIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 01.557 1.223l-1.94 7.06a1 1 0 01-1.449 1.265l-4.5-2.5a1 1 0 00-1.18 0l-4.5 2.5a1 1 0 01-1.449-1.265l1.94-7.06a1 1 0 00-.557-1.223L.25 9.088l-1.94-.831a1 1 0 01-.557-1.223l1.94-7.06a1 1 0 011.449-1.265l4.5 2.5a1 1 0 001.18 0l4.5-2.5a1 1 0 011.449 1.265l-1.94 7.06z" />
  </svg>
);

const PetIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
  </svg>
);

const MusicIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
    <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" />
  </svg>
);

const topics = [
  { id: 'games', title: 'Games', icon: <GameIcon /> },
  { id: 'school', title: 'School', icon: <SchoolIcon /> },
  { id: 'pets', title: 'Pets', icon: <PetIcon /> },
  { id: 'music', title: 'Music', icon: <MusicIcon /> },
];

export default function ChatPage() {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [selectedResponse, setSelectedResponse] = useState<number | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [showTopicSelection, setShowTopicSelection] = useState(true);

  // Sample data - will be replaced with actual agent responses
  const currentQuestion = "Tell me about your pet! What kind of animal do you have?";
  const responses = [
    "I have a dog.",
    "I own a parrot.",
    "I have a cat.",
  ];
  const vocabulary = {
    word: "Breed",
    definition: "A breed is a specific type or kind of animal within a species. Example: Labradors and Poodles are different breeds of dogs.",
    example: "Labradors and Poodles are different breeds of dogs."
  };

  const handleTopicSelect = (topicId: string) => {
    setSelectedTopic(topicId);
    // Don't hide topic selection - only "Let's Chat" button does that
  };

  const handleResponseSelect = (index: number) => {
    setSelectedResponse(index);
    setIsRecording(true);
    // TODO: Start speech recording
    setTimeout(() => setIsRecording(false), 3000); // Simulate recording
  };

  const handleListen = () => {
    // TODO: Play question audio
    console.log('Playing question audio');
  };

  return (
    <div className="relative min-h-screen flex flex-col">
      <BackgroundEffects />
      
      {/* Header */}
      <div className="relative z-10">
        <Header />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex gap-6 p-6">
        {/* Left Sidebar - Topics */}
        <aside className="w-[22%] flex flex-col">
          <div className="rounded-2xl bg-[var(--panel-bg)] border border-[var(--border-orange)] p-6 shadow-[0_0_15px_var(--orange-shadow)] h-fit">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-[var(--text-primary)] mb-2">
              READY TO CHAT
            </h2>
            <p className="text-xs text-[var(--text-muted)] mb-6">
              BE MAR - TENGINIIGG
            </p>

            <div className="space-y-3 mb-6">
              {topics.map((topic) => (
                <TopicCard
                  key={topic.id}
                  title={topic.title}
                  icon={topic.icon}
                  isActive={selectedTopic === topic.id}
                  onClick={() => handleTopicSelect(topic.id)}
                />
              ))}
            </div>

            <button
              onClick={() => {
                if (selectedTopic) {
                  setShowTopicSelection(false);
                }
              }}
              disabled={!selectedTopic}
              className="w-full py-3 rounded-full bg-gradient-to-r from-[var(--orange-500)] to-[var(--orange-600)] text-white font-semibold hover:shadow-[0_0_25px_var(--orange-glow-strong)] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed border border-[var(--orange-500)]"
            >
              Let&apos;s Chat
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4z" />
                <path d="M5.5 9.643a.75.75 0 00-1.5 0V10c0 3.314 2.686 6 6 6s6-2.686 6-6v-.357a.75.75 0 00-1.5 0V10c0 2.486-2.014 4.5-4.5 4.5S5.5 12.486 5.5 10v-.357z" />
              </svg>
            </button>
          </div>
        </aside>

        {/* Center Panel - Conversation */}
        <main className="flex-1 flex flex-col relative">
          {showTopicSelection ? (
            // Topic Selection View (First Session)
            <div className="flex-1 flex items-center justify-center relative">
              <div className="text-center space-y-4 relative z-10">
                <h2 className="text-3xl font-bold text-[var(--text-primary)]">
                  Select a Topic to Begin
                </h2>
                <p className="text-[var(--text-muted)]">
                  Choose a topic from the sidebar to start your conversation practice
                </p>
              </div>
              {/* Car in topic selection view */}
              <div className="absolute bottom-10 right-10 w-48 h-24 opacity-50 pointer-events-none z-0">
                <svg viewBox="0 0 200 100" className="w-full h-full" style={{ filter: 'drop-shadow(0 0 10px rgba(255, 107, 53, 0.5))' }}>
                  <path
                    d="M20 60 Q20 50 30 50 L50 50 L60 40 L140 40 L150 50 L170 50 Q180 50 180 60 L180 80 Q180 90 170 90 L160 90 L160 85 L40 85 L40 90 L30 90 Q20 90 20 80 Z"
                    fill="rgba(0, 0, 0, 0.6)"
                    stroke="var(--orange-500)"
                    strokeWidth="1.5"
                    opacity="0.8"
                  />
                  <g opacity="0.3">
                    <line x1="50" y1="55" x2="70" y2="55" stroke="var(--orange-500)" strokeWidth="0.5" />
                    <line x1="130" y1="55" x2="150" y2="55" stroke="var(--orange-500)" strokeWidth="0.5" />
                    <line x1="80" y1="60" x2="80" y2="75" stroke="var(--orange-500)" strokeWidth="0.5" />
                    <line x1="120" y1="60" x2="120" y2="75" stroke="var(--orange-500)" strokeWidth="0.5" />
                  </g>
                  <rect x="60" y="45" width="30" height="15" fill="rgba(0, 229, 255, 0.2)" stroke="var(--cyan-500)" strokeWidth="0.5" />
                  <rect x="110" y="45" width="30" height="15" fill="rgba(0, 229, 255, 0.2)" stroke="var(--cyan-500)" strokeWidth="0.5" />
                  <circle cx="50" cy="85" r="8" fill="rgba(0, 0, 0, 0.8)" stroke="var(--orange-500)" strokeWidth="1.5" />
                  <circle cx="150" cy="85" r="8" fill="rgba(0, 0, 0, 0.8)" stroke="var(--orange-500)" strokeWidth="1.5" />
                  <ellipse cx="100" cy="85" rx="80" ry="5" fill="var(--orange-glow)" opacity="0.4" />
                </svg>
              </div>
            </div>
          ) : (
            // Active Conversation View
            <div className="flex-1 rounded-2xl bg-[var(--panel-bg)] border border-[var(--border-orange)] p-8 shadow-[0_0_15px_var(--orange-shadow)] relative min-h-[600px] overflow-hidden">
              {/* Car - Positioned in background */}
              <div className="absolute bottom-10 right-20 w-48 h-24 opacity-50 pointer-events-none z-0">
                <svg viewBox="0 0 200 100" className="w-full h-full" style={{ filter: 'drop-shadow(0 0 10px rgba(255, 107, 53, 0.5))' }}>
                  <path
                    d="M20 60 Q20 50 30 50 L50 50 L60 40 L140 40 L150 50 L170 50 Q180 50 180 60 L180 80 Q180 90 170 90 L160 90 L160 85 L40 85 L40 90 L30 90 Q20 90 20 80 Z"
                    fill="rgba(0, 0, 0, 0.6)"
                    stroke="var(--orange-500)"
                    strokeWidth="1.5"
                    opacity="0.8"
                  />
                  <g opacity="0.3">
                    <line x1="50" y1="55" x2="70" y2="55" stroke="var(--orange-500)" strokeWidth="0.5" />
                    <line x1="130" y1="55" x2="150" y2="55" stroke="var(--orange-500)" strokeWidth="0.5" />
                    <line x1="80" y1="60" x2="80" y2="75" stroke="var(--orange-500)" strokeWidth="0.5" />
                    <line x1="120" y1="60" x2="120" y2="75" stroke="var(--orange-500)" strokeWidth="0.5" />
                  </g>
                  <rect x="60" y="45" width="30" height="15" fill="rgba(0, 229, 255, 0.2)" stroke="var(--cyan-500)" strokeWidth="0.5" />
                  <rect x="110" y="45" width="30" height="15" fill="rgba(0, 229, 255, 0.2)" stroke="var(--cyan-500)" strokeWidth="0.5" />
                  <circle cx="50" cy="85" r="8" fill="rgba(0, 0, 0, 0.8)" stroke="var(--orange-500)" strokeWidth="1.5" />
                  <circle cx="150" cy="85" r="8" fill="rgba(0, 0, 0, 0.8)" stroke="var(--orange-500)" strokeWidth="1.5" />
                  <ellipse cx="100" cy="85" rx="80" ry="5" fill="var(--orange-glow)" opacity="0.4" />
                </svg>
              </div>

              {/* Robot and Question */}
              <div className="mb-6 relative z-10">
                <Robot />
                <div className="mt-4">
                  <QuestionBubble question={currentQuestion} onListen={handleListen} />
                </div>
              </div>

              {/* Response Cards */}
              <div className="space-y-4 max-w-[60%] mb-6 relative z-10">
                {responses.map((response, index) => (
                  <ResponseCard
                    key={index}
                    text={response}
                    isSelected={selectedResponse === index}
                    isRecording={isRecording && selectedResponse === index}
                    onClick={() => handleResponseSelect(index)}
                  />
                ))}
              </div>

              {/* Vocabulary Panel - Positioned Bottom Right */}
              <div className="absolute bottom-6 right-6 w-[320px] z-20">
                <VocabularyPanel
                  word={vocabulary.word}
                  definition={vocabulary.definition}
                  example={vocabulary.example}
                />
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
