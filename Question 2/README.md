# Practice Summary Card Component

A responsive React TypeScript component for displaying dental practice performance metrics.

## Features

- **Responsive Design**: Works on desktop (grid layout) and mobile (stacked layout)
- **TypeScript**: Full type safety with interfaces
- **Status Indicators**: Color-coded performance badges
  - Green: High Performer (≥20% conversion rate)
  - Red: At Risk (<10% conversion rate)
  - Blue: Stable (otherwise)
- **Trend Visualization**: Simple CSS-based 6-month trend charts
- **Key Metrics Display**: New patients, appointment requests, conversion rate
- **Recommendations Section**: Actionable insights for each practice

## Project Structure

```
practice-summary-card/
├── src/
│   ├── App.tsx              # Main app component
│   ├── App.css              # App layout styles
│   ├── PracticeCard.tsx     # Practice card component
│   ├── PracticeCard.css     # Card component styles
│   ├── types.ts             # TypeScript interfaces
│   ├── mockData.ts          # Sample practice data
│   ├── main.tsx             # App entry point
│   └── index.css            # Global styles
├── index.html               # HTML template
├── package.json             # Dependencies
├── tsconfig.json            # TypeScript config
├── tsconfig.node.json       # TypeScript config for Vite
├── vite.config.ts           # Vite configuration
└── README.md                # This file
```

## Installation

```bash
# Install dependencies
npm install
```

## Development

```bash
# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

## Build

```bash
# Build for production
npm run build
```

The built files will be in the `dist/` directory.

## Preview Production Build

```bash
# Preview the production build
npm run preview
```

## Technology Stack

- **React 18**: UI framework
- **TypeScript**: Type safety
- **Vite**: Build tool and dev server
- **CSS**: Styling (no external libraries)

## Component Props

### PracticeSummary Type

```typescript
type PracticeSummary = {
  id: string;
  name: string;
  city: string;
  country: string;
  newPatientsThisMonth: number;
  appointmentRequests: number;
  conversionRate: number;
  monthlyTrend: number[]; // Array of 6 numbers
};
```

## Customization

- **Colors**: Modify the gradient colors in `PracticeCard.css`
- **Fonts**: Change the Google Fonts import in `src/index.css`
- **Mock Data**: Edit `src/mockData.ts` to add more practices or modify existing ones
- **Recommendations**: Update the recommendations array in `PracticeCard.tsx`

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

MIT
