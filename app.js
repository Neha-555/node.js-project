import React, { useState } from 'react';
import MoodSelector from './MoodSelector';
import QuoteDisplay from './QuoteDisplay';

const App = () => {
  const [mood, setMood] = useState(null);

  return (
    <div className="app">
      <h1>Mood-Based Quote Generator</h1>
      <MoodSelector setMood={setMood} />
      <QuoteDisplay mood={mood} />
    </div>
  );
};

export default App;
