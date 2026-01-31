import React from 'react';
import PracticeCard from './PracticeCard';
import { mockPractices } from './mockData';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <div className="cards-wrapper">
        {mockPractices.map(practice => (
          <PracticeCard key={practice.id} practice={practice} />
        ))}
      </div>
    </div>
  );
};

export default App;
