import React from 'react';

const moods = [
  { emoji: "😄", label: "Happy" },
  { emoji: "😔", label: "Sad" },
  { emoji: "😤", label: "Angry" },
  { emoji: "😌", label: "Calm" },
  { emoji: "🤩", label: "Excited" },
];

const MoodSelector = ({ setMood }) => {
  return (
    <div className="mood-selector">
      <p>Select your mood:</p>
      <div className="mood-buttons">
        {moods.map((mood, index) => (
          <button key={index} onClick={() => setMood(mood.label)} title={mood.label}>
            {mood.emoji}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MoodSelector;
