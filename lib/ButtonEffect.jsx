'use client';

import { useState, useEffect } from 'react';

// Version 1: Pulse + Glow Effect (More noticeable)
const AddSemesterButtonPulse = ({ onClick }) => {
  const [showEffect, setShowEffect] = useState(true);
  const [hasBeenClicked, setHasBeenClicked] = useState(false);

  useEffect(() => {
    if (!hasBeenClicked && showEffect) {
      const timer = setTimeout(() => {
        setShowEffect(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [hasBeenClicked, showEffect]);

  const handleClick = () => {
    setHasBeenClicked(true);
    setShowEffect(false);
    onClick();
  };

  return (
    <button
      onClick={handleClick}
      className={`
        relative overflow-hidden px-4 py-2 
        bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg
        transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300
        ${
          showEffect && !hasBeenClicked
            ? 'animate-pulse shadow-lg shadow-blue-300'
            : ''
        }
      `}
    >
      {showEffect && !hasBeenClicked && (
        <div className="absolute inset-0 bg-blue-400 opacity-30 animate-ping rounded-lg"></div>
      )}

      <span className="relative z-10 flex items-center gap-2">
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4v16m8-8H4"
          />
        </svg>
        Add Semester
      </span>
    </button>
  );
};

// Version 2: Subtle Breathing Effect (More elegant)
const AddSemesterButtonBreathing = ({ onClick }) => {
  const [showEffect, setShowEffect] = useState(true);
  const [hasBeenClicked, setHasBeenClicked] = useState(false);

  useEffect(() => {
    if (!hasBeenClicked && showEffect) {
      const timer = setTimeout(() => {
        setShowEffect(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [hasBeenClicked, showEffect]);

  const handleClick = () => {
    setHasBeenClicked(true);
    setShowEffect(false);
    onClick();
  };

  return (
    <button
      onClick={handleClick}
      className={`
        px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg
        transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300
        ${showEffect && !hasBeenClicked ? 'animate-bounce' : ''}
      `}
      style={{
        ...(showEffect &&
          !hasBeenClicked && {
            animation: 'gentle-breathe 2s ease-in-out infinite',
          }),
      }}
    >
      <span className="flex items-center gap-2">
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4v16m8-8H4"
          />
        </svg>
        Add Semester
      </span>
    </button>
  );
};

// Use whichever version you prefer
const AddSemesterButton = AddSemesterButtonBreathing; // or AddSemesterButtonBreathing

export default AddSemesterButton;
