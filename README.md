# dentistfind-assessment
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

## Question 2 - Approach, Code Quality & Decision-Making

### 1. Component & Styling Decisions

**Why did you structure your components the way you did?**

I structured the component as one main `PracticeCard` component with smaller subcomponents to keep it small and composable. The main card handles all the logic (status calculation, trend normalization) while rendering is broken into logical sections (header, metrics grid, trend chart, recommendations). This makes the code easier to read and maintain.

**Why did you choose your styling approach?**

I chose plain CSS modules over Tailwind or a UI library for several reasons:
- Full control over the design without framework constraints
- Better performance (no runtime CSS generation)
- Easier to customize the gradient backgrounds and animations
- Cleaner separation of concerns between logic and styles
- No dependency bloat

**How did you ensure visual consistency and responsiveness?**

Visual consistency was achieved through:
- CSS custom properties could be added for a theme system
- Consistent spacing scale (0.5rem increments)
- Reusable color gradients for status badges
- Typography hierarchy with two font families (Instrument Serif for headers, Karla for body)

Responsiveness was handled with:
- CSS Grid with `auto-fit` for flexible layouts
- Mobile-first breakpoints at 768px and 1200px
- Flexbox for internal card layouts that adapt naturally
- Media queries that switch from grid to stacked layout on mobile

### 2. Scaling & Real-World Use

**How would you integrate this card into a larger PracticeFuel dashboard?**

Integration approach:
- Export `PracticeCard` as a reusable component that accepts props
- Create a theme provider for consistent colors/spacing across the dashboard
- Use a state management solution (Redux/Zustand) to manage practice data
- Implement data fetching hooks to load real practice data from APIs
- Add routing to link cards to detailed practice pages
- Implement filters/sorting for multiple practices

**What would you add or change if you had one extra day?**

With more time, I'd add:
- Accessibility improvements (ARIA labels, keyboard navigation, screen reader support)
- Smooth animations using Framer Motion or CSS animations
- Unit tests with Jest/React Testing Library
- Storybook for component documentation
- Internationalization (i18n) for multi-language support
- Loading states and error handling
- Click handlers to expand cards or navigate to detail views
- More dynamic recommendations based on actual data patterns
- Dark mode support with theme switching

### 3. Time Management

**Roughly how did you allocate your 2 hours?**

- Setup: 10 minutes (project structure, dependencies, configuration)
- Layout & structure: 30 minutes (component architecture, basic HTML/JSX)
- Styling & polish: 50 minutes (CSS, gradients, responsive design, hover states)
- README/explanation: 30 minutes (documentation and this write-up)

This breakdown reflects my prioritization: get a working component first, then polish the visual design, and finally document the approach. The visual design took the most time because I focused on creating a distinctive, professional appearance rather than using generic styles.

