# ByeWind Dashboard

A modern, pixel-perfect dashboard application built with React, TypeScript, and Tailwind CSS. Features a beautiful eCommerce dashboard with dark/light theme support, responsive design, and interactive data visualizations.

![Dashboard Preview](https://via.placeholder.com/1200x600?text=Dashboard+Preview)

## ✨ Features

### Core Functionality
- 🎨 **Pixel-Perfect Design** - Matches Figma designs exactly with precise spacing, typography, and colors
- 🌓 **Dark/Light Theme** - Seamless theme switching with system preference detection
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- 🔍 **Search & Filter** - Real-time search and filtering capabilities
- 📊 **Data Visualization** - Interactive charts using Recharts library
- 🗂️ **Sorting & Pagination** - Efficient data management with sorting and pagination
- ⚡ **Smooth Animations** - Delightful microinteractions and transitions
- ♿ **Accessible** - Built with accessibility standards in mind

### Pages
- **Dashboard (eCommerce)** - Overview with metrics, charts, and analytics
  - Customer, Orders, Revenue, and Growth metrics
  - Revenue trends with line charts
  - Projections vs Actuals bar chart
  - Revenue by location with world map
  - Top selling products table
  - Total sales breakdown with pie chart
  - Activity feed and notifications

- **Order List** - Comprehensive order management
  - Searchable and sortable data table
  - Checkbox selection for bulk actions
  - Status badges with color coding
  - Pagination controls
  - Responsive table layout

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
```bash
cd dashboard-design/deshboard-design
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm run dev
```

4. **Open your browser**
Navigate to `http://localhost:5173` to view the application.

## 📦 Project Structure

```
deshboard-design/
├── src/
│   ├── components/          # Reusable components
│   │   ├── charts/         # Chart components (Revenue, Sales, Projections)
│   │   ├── layout/         # Layout components (Sidebar, Header, etc.)
│   │   └── ui/             # UI components (Button, Card, Input, etc.)
│   ├── contexts/           # React contexts (Theme)
│   ├── data/               # Mock data for development
│   ├── hooks/              # Custom React hooks
│   ├── pages/              # Page components
│   ├── types/              # TypeScript type definitions
│   ├── utils/              # Utility functions
│   ├── App.tsx             # Main application component
│   ├── main.tsx            # Application entry point
│   └── index.css           # Global styles
├── public/                 # Static assets
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite configuration
└── package.json            # Project dependencies
```

## 🎨 Design System

### Colors
The application uses a carefully crafted color palette that works seamlessly in both light and dark modes:

- **Light Theme**: Clean whites and subtle grays
- **Dark Theme**: Deep blacks with muted accents
- **Status Colors**: Success (green), Warning (yellow), Error (red), Info (blue)

### Typography
- **Font Family**: Inter (Google Fonts)
- **Font Weights**: 300, 400, 500, 600, 700, 800
- **Responsive Sizing**: Adapts to screen size

### Components
All components follow a consistent design language:
- Rounded corners (8px, 12px)
- Consistent spacing (4px, 8px, 16px, 24px)
- Smooth transitions (200ms)
- Hover states and focus indicators

## 🛠️ Technology Stack

### Core
- **React 19** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server

### Styling
- **Tailwind CSS** - Utility-first CSS framework
- **Custom CSS** - For advanced animations and effects

### Routing & State
- **React Router DOM** - Client-side routing
- **React Context API** - State management (theme)

### Data Visualization
- **Recharts** - Chart library for React

### Icons
- **React Icons** - Icon library (HeroIcons, Material Design)

## 📱 Responsive Breakpoints

The application is fully responsive with the following breakpoints:

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: 1024px - 1280px
- **Large Desktop**: > 1280px

### Responsive Features
- Mobile-optimized navigation with hamburger menu
- Collapsible sidebars on smaller screens
- Stacked layouts on mobile
- Touch-friendly interactive elements
- Optimized font sizes and spacing

## 🎯 Key Features Breakdown

### Theme System
```typescript
// Automatic theme detection from system preferences
// Persistent theme storage in localStorage
// Smooth transitions between themes
```

### Search & Filter
- Real-time search across all table fields
- Debounced input for performance
- Visual feedback for active filters

### Sorting
- Click column headers to sort
- Toggle between ascending/descending
- Visual indicators for active sort

### Pagination
- Configurable items per page
- Page number navigation
- Previous/Next controls
- Disabled states for edge cases

## 🎭 Animations & Microinteractions

The application includes carefully crafted animations:

- **Page transitions**: Smooth fade-in effects
- **Card hover states**: Subtle scale and shadow changes
- **Button interactions**: Color transitions and ripple effects
- **Loading states**: Skeleton screens (ready to implement)
- **Sidebar animations**: Slide-in/out transitions

## 🧪 Code Quality

### Best Practices
- ✅ Component-based architecture
- ✅ TypeScript for type safety
- ✅ Reusable components (DRY principle)
- ✅ Semantic HTML
- ✅ Accessible markup
- ✅ Clean, documented code
- ✅ Consistent naming conventions
- ✅ Organized file structure

### Performance Optimizations
- React.memo for expensive components
- useMemo for computed values
- useCallback for event handlers
- Code splitting with React.lazy (ready to implement)
- Optimized re-renders

## 📚 Available Scripts

```bash
# Development
npm run dev          # Start development server

# Build
npm run build        # Build for production
npm run preview      # Preview production build

# Linting
npm run lint         # Run ESLint
```

## 🚢 Deployment

### Build for Production
```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

### Deploy to Vercel
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

### Deploy to Netlify
```bash
# Build the project
npm run build

# Drag and drop the 'dist' folder to Netlify
```

### Deploy to GitHub Pages
```bash
# Install gh-pages
npm install -D gh-pages

# Add to package.json scripts:
# "deploy": "vite build && gh-pages -d dist"

# Deploy
npm run deploy
```

## 🔧 Configuration

### Tailwind CSS
Customize colors, fonts, and other design tokens in `tailwind.config.js`

### TypeScript
Adjust compiler options in `tsconfig.json`

### Vite
Configure build settings in `vite.config.ts`

## 🎨 Customization

### Changing Theme Colors
Edit the color palette in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      // Add your custom colors here
    }
  }
}
```

### Adding New Components
1. Create component in appropriate folder (`components/ui/`, `components/layout/`)
2. Use TypeScript interfaces for props
3. Follow existing naming conventions
4. Add proper documentation

### Adding New Pages
1. Create page component in `pages/`
2. Add route in `App.tsx`
3. Add navigation link in `Sidebar.tsx`

## 🤝 Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Design inspiration from modern dashboard interfaces
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Charts powered by [Recharts](https://recharts.org/)
- Built with [Vite](https://vitejs.dev/) and [React](https://react.dev/)

## 📞 Support

For support, please open an issue in the GitHub repository or contact the development team.

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**
