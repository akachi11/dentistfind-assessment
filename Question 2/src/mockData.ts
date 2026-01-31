import { PracticeSummary } from './types';

export const mockPractices: PracticeSummary[] = [
  {
    id: '1',
    name: 'Bright Smile Dental',
    city: 'San Francisco',
    country: 'USA',
    newPatientsThisMonth: 45,
    appointmentRequests: 128,
    conversionRate: 35.2,
    monthlyTrend: [28, 32, 29, 38, 42, 45]
  },
  {
    id: '2',
    name: 'Ocean View Dentistry',
    city: 'Miami',
    country: 'USA',
    newPatientsThisMonth: 12,
    appointmentRequests: 95,
    conversionRate: 7.2,
    monthlyTrend: [22, 18, 20, 15, 16, 12]
  },
  {
    id: '3',
    name: 'Premier Dental Care',
    city: 'London',
    country: 'UK',
    newPatientsThisMonth: 52,
    appointmentRequests: 156,
    conversionRate: 33.3,
    monthlyTrend: [38, 42, 45, 48, 50, 52]
  }
];
