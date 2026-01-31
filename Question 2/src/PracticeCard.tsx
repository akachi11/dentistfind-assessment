import React from 'react';
import { PracticeSummary } from './types';
import './PracticeCard.css';

interface PracticeCardProps {
  practice: PracticeSummary;
}

const PracticeCard: React.FC<PracticeCardProps> = ({ practice }) => {
  const getStatusColor = (rate: number): 'high' | 'risk' | 'stable' => {
    if (rate >= 20) return 'high';
    if (rate < 10) return 'risk';
    return 'stable';
  };

  const status = getStatusColor(practice.conversionRate);

  const maxTrend = Math.max(...practice.monthlyTrend);
  const minTrend = Math.min(...practice.monthlyTrend);
  const range = maxTrend - minTrend || 1;

  const recommendations = [
    'Consider increasing ad budget on top-performing channels.',
    'Optimize mobile landing page layout.'
  ];

  const statusLabels = {
    high: 'High Performer',
    risk: 'At Risk',
    stable: 'Stable'
  };

  return (
    <div className="practice-card">
      <div className="card-header">
        <div className="practice-info">
          <h2 className="practice-name">{practice.name}</h2>
          <p className="practice-location">{practice.city}, {practice.country}</p>
        </div>
        <div className={`status-badge status-${status}`}>
          <div className="status-dot"></div>
          <span className="status-text">{statusLabels[status]}</span>
        </div>
      </div>

      <div className="metrics-grid">
        <div className="metric">
          <div className="metric-label">New Patients</div>
          <div className="metric-value">{practice.newPatientsThisMonth}</div>
        </div>
        <div className="metric">
          <div className="metric-label">Appointment Requests</div>
          <div className="metric-value">{practice.appointmentRequests}</div>
        </div>
        <div className="metric">
          <div className="metric-label">Conversion Rate</div>
          <div className="metric-value">{practice.conversionRate}%</div>
        </div>
      </div>

      <div className="trend-section">
        <div className="trend-label">6-Month Trend</div>
        <div className="trend-chart">
          {practice.monthlyTrend.map((value, index) => {
            const height = ((value - minTrend) / range) * 100;
            return (
              <div 
                key={index} 
                className="trend-bar"
                style={{ height: `${Math.max(height, 10)}%` }}
              >
                <div className="trend-bar-inner"></div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="recommendations">
        <div className="recommendations-label">Recommendations</div>
        <ul className="recommendations-list">
          {recommendations.map((rec, index) => (
            <li key={index}>{rec}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PracticeCard;
