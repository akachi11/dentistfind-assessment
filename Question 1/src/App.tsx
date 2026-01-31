import React from 'react';
import PracticeSummaryCard, { PracticeMetrics } from './PracticeSummaryCard';
import './App.css';

const App: React.FC = () => {
  const practices: PracticeMetrics[] = [
    {
      practiceName: 'Bright Smiles Dental',
      location: 'San Francisco, CA',
      activePatients: 2847,
      monthlyAppointments: 456,
      averageRating: 4.8,
      monthlyRevenue: 287500,
      specialties: ['General Dentistry', 'Cosmetic', 'Orthodontics'],
      status: 'excellent',
    },
    {
      practiceName: 'Downtown Dental Care',
      location: 'Austin, TX',
      activePatients: 1523,
      monthlyAppointments: 312,
      averageRating: 4.5,
      monthlyRevenue: 156800,
      specialties: ['General Dentistry', 'Pediatric', 'Emergency Care'],
      status: 'good',
    },
    {
      practiceName: 'Harbor View Dentistry',
      location: 'Seattle, WA',
      activePatients: 892,
      monthlyAppointments: 178,
      averageRating: 4.2,
      monthlyRevenue: 98400,
      specialties: ['General Dentistry', 'Periodontics'],
      status: 'needs-attention',
    },
  ];

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">Practice Dashboard</h1>
        <p className="app-subtitle">
          Real-time overview of your dental practice network
        </p>
      </header>

      <main className="app-main">
        <div className="cards-container">
          {practices.map((practice, index) => (
            <PracticeSummaryCard
              key={index}
              practice={practice}
            />
          ))}
        </div>
      </main>

      <footer className="app-footer">
        <p>© 2026 DentistFind Practice Management</p>
      </footer>
    </div>
  );
};

export default App;
