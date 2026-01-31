# Practice Summary Card - Technical Assessment

A visually polished, self-contained React + TypeScript component for displaying dental practice metrics.

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
├── src/
│   ├── App.tsx                    # Main app component
│   ├── App.css                    # Global styles
│   ├── PracticeSummaryCard.tsx    # Card component
│   └── main.tsx                   # Entry point
├── index.html                      # HTML template
├── package.json                    # Dependencies
├── tsconfig.json                   # TypeScript config
└── vite.config.ts                  # Vite config
```

## Design Philosophy

### Visual Aesthetic
**Refined medical-professional aesthetic** that balances visual appeal with easy usage:

- **Typography**: Playfair Display (serif) for headings paired with DM Sans for body text
- **Color Palette**: Deep blue primary (#1a3a52) with coral accent (#e8505b)
- **Layout**: Enough whitespace and subtle depth through shadows
- **Motion**: Smooth micro-interactions (hover states, entrance animations)

### Technical Decisions

#### Component Architecture
```typescript
interface PracticeMetrics {
  practiceName: string;
  location: string;
  activePatients: number;
  monthlyAppointments: number;
  averageRating: number;
  monthlyRevenue: number;
  specialties: string[];
  status: 'excellent' | 'good' | 'needs-attention';
}
```

**Why this structure?**
- Strong TypeScript typing prevents errors
- Flat structure keeps the component simple
- Status enum allows for semantic color coding
- All data is presentational - no business logic in the component

#### Responsive Strategy
Mobile-first CSS with three breakpoints:
- **Desktop (>768px)**: 3-column grid layout
- **Tablet (768px)**: 2-column or single column
- **Mobile (<480px)**: Single column stack

#### Formatting & Localization
- `Intl.NumberFormat` for currency ($287,500) and numbers (2,847)
- Future-proof for internationalization

#### CSS Architecture
- CSS Custom Properties (variables) for design tokens
- Consistent spacing/color systems
- Clear semantic naming

## Key Features

### 1. Status Indicators
Visual dots show practice health:
- 🟢 Green = Excellent performance
- 🟡 Yellow = Good, stable
- 🔴 Red = Needs attention

### 2. Metrics Grid
Four key metrics:
- Active Patients
- Monthly Appointments
- Average Rating (with star icon)
- Monthly Revenue (highlighted)

### 3. Specialty Tags
Interactive pills with hover effects

### 4. Animations
- Cards animate in with staggered delays
- Hover lifts cards with enhanced shadow
- Color bar animates on hover
- Micro-interactions on metrics and tags

### 5. Accessibility
- Semantic HTML structure
- ARIA labels for status indicators
- Keyboard-navigable elements
- Sufficient color contrast
- Responsive text sizing with `clamp()`

## Trade-offs & Decisions

### What I Prioritized
✅ **Visual polish**: Design details create memorable impression
✅ **Code quality**: Clean TypeScript, clear naming, comments
✅ **Responsiveness**: Works 320px mobile to 4K displays
✅ **Maintainability**: CSS variables and clear structure

### What I Simplified
- **No state management**: Static props keep focus on presentation
- **No routing**: Single page as requested
- **No API**: Sample data demonstrates the component
- **No tests**: Would add Jest/RTL in production

### With More Time
1. Component variants (compact/list/detailed views)
2. Interactive features (expand for details, trend charts)
3. Sorting/filtering controls
4. Data visualization (sparklines)
5. WCAG 2.1 AA accessibility audit
6. Unit tests
7. Storybook documentation
8. `prefers-reduced-motion` support
9. Dark mode
10. Export functionality (PDF/CSV)

## Technologies Used
- React 18
- TypeScript 5
- Vite
- CSS3 (Grid, Flexbox, Custom Properties, Animations)
- Google Fonts (Playfair Display, DM Sans)

## Performance Considerations
- Pure CSS animations (GPU accelerated)
- No external libraries (smaller size)
- Optimized font loading with `display=swap`
- Efficient React renders

---
