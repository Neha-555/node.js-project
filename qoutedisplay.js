import React from 'react';

const quotes = {
  Happy: [
    "Happiness is not by chance, but by choice.",
    "Smile, it’s free therapy.",
    "Be happy for this moment. This moment is your life.",
  ],
  Sad: [
    "Every day may not be good, but there’s good in every day.",
    "Tough times never last, but tough people do.",
    "It’s okay to not be okay.",
  ],
  Angry: [
    "For every minute you are angry, you lose sixty seconds of happiness.",
    "Control your anger, before it controls you.",
    "Anger doesn’t solve anything. It builds nothing.",
  ],
  Calm: [
    "Peace begins with a smile.",
    "Inhale peace. Exhale stress.",
    "Stay close to people who feel like sunshine.",
  ],
  Excited: [
    "The best is yet to come!",
    "Get ready to shine like never before.",
    "Your vibe attracts your tribe!",
  ],
};

const QuoteDisplay = ({ mood }) => {
  if (!mood) return <p className="quote-message">Pick a mood to get started!</p>;

  const randomQuote = quotes[mood][Math.floor(Math.random() * quotes[mood].length)];

  return (
    <div className={`quote-box ${mood.toLowerCase()}`}>
      <h2>{mood} Mood</h2>
      <p>"{randomQuote}"</p>
    </div>
  );
};

export default QuoteDisplay;
