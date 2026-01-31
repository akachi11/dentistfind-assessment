import React from 'react';

export interface PracticeMetrics {
  practiceName: string;
  location: string;
  activePatients: number;
  monthlyAppointments: number;
  averageRating: number;
  monthlyRevenue: number;
  specialties: string[];
  status: 'excellent' | 'good' | 'needs-attention';
}

interface PracticeSummaryCardProps {
  practice: PracticeMetrics;
}

const PracticeSummaryCard: React.FC<PracticeSummaryCardProps> = ({ practice }) => {
  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatNumber = (num: number): string => {
    return new Intl.NumberFormat('en-US').format(num);
  };

  const getStatusColor = (status: PracticeMetrics['status']): string => {
    switch (status) {
      case 'excellent':
        return 'var(--status-excellent)';
      case 'good':
        return 'var(--status-good)';
      case 'needs-attention':
        return 'var(--status-attention)';
    }
  };

  return (
    <div className="practice-card" data-status={practice.status}>
      <div className="card-header">
        <div className="header-content">
          <h2 className="practice-name">{practice.practiceName}</h2>
          <p className="practice-location">{practice.location}</p>
        </div>
        <div
          className="status-indicator"
          style={{ backgroundColor: getStatusColor(practice.status) }}
          aria-label={`Status: ${practice.status.replace('-', ' ')}`}
        />
      </div>

      <div className="metrics-grid">
        <div className="metric-card">
          <div className="metric-value">{formatNumber(practice.activePatients)}</div>
          <div className="metric-label">Active Patients</div>
        </div>

        <div className="metric-card">
          <div className="metric-value">{formatNumber(practice.monthlyAppointments)}</div>
          <div className="metric-label">Monthly Appointments</div>
        </div>

        <div className="metric-card">
          <div className="metric-value">
            {practice.averageRating.toFixed(1)}
            <span className="rating-star">★</span>
          </div>
          <div className="metric-label">Average Rating</div>
        </div>

        <div className="metric-card metric-highlight">
          <div className="metric-value">{formatCurrency(practice.monthlyRevenue)}</div>
          <div className="metric-label">Monthly Revenue</div>
        </div>
      </div>

      {practice.specialties.length > 0 && (
        <div className="specialties-section">
          <div className="specialties-label">Specialties</div>
          <div className="specialties-tags">
            {practice.specialties.map((specialty, index) => (
              <span key={index} className="specialty-tag">
                {specialty}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PracticeSummaryCard;
