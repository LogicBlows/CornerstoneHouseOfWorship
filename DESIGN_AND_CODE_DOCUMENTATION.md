# Church Website - Design & Code Documentation

## Project Overview

This is a modern, responsive church website built with React, TypeScript, and Tailwind CSS. It features a clean, spiritual design with multiple pages showcasing different aspects of church life and leadership.

## 🎨 Design System

### Color Palette
The design uses a cohesive color scheme defined in `src/index.css`:

- **Primary Colors**: Deep blues and purples for spiritual, trustworthy feel
- **Secondary Colors**: Warm accent colors for highlights
- **Neutral Colors**: Clean grays for text and backgrounds
- **Dark Mode**: Full dark mode support with appropriate contrast ratios

### Typography
- **Font Family**: System fonts for optimal performance and readability
- **Hierarchy**: Clear heading structure (h1-h6) with appropriate sizing
- **Line Heights**: Optimized for readability across devices

### Layout Principles
- **Responsive Design**: Mobile-first approach with breakpoints for tablet and desktop
- **Grid System**: Tailwind's grid and flexbox utilities for consistent layouts
- **Spacing**: Consistent spacing scale using Tailwind's spacing tokens
- **Visual Hierarchy**: Clear content hierarchy with proper contrast and sizing

## 🏗️ Architecture

### Tech Stack
- **React 18**: Modern React with hooks and functional components
- **TypeScript**: Type safety and better developer experience
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework
- **React Router**: Client-side routing
- **Shadcn/ui**: High-quality, accessible UI components
- **Lucide React**: Consistent icon library

### Project Structure
```
src/
├── components/           # Reusable UI components
│   ├── ui/              # Shadcn/ui components
│   ├── HeroSection.tsx  # Hero component for homepage
│   ├── MediaPlaceholder.tsx # Placeholder for media content
│   └── Navigation.tsx   # Main navigation component
├── pages/               # Page components
│   ├── Index.tsx        # Homepage
│   ├── About.tsx        # About page
│   ├── Worship.tsx      # Worship page
│   ├── Leadership.tsx   # Leadership page
│   ├── Ministry.tsx     # Ministry page
│   ├── Pastor.tsx       # Pastor's word page
│   ├── Apostle.tsx      # Apostle's word page
│   └── NotFound.tsx     # 404 page
├── assets/              # Static assets (images)
├── lib/                 # Utility functions
├── hooks/               # Custom React hooks
├── App.tsx              # Main app component with routing
├── main.tsx             # Application entry point
└── index.css            # Global styles and design tokens
```

## 🧩 Component Architecture

### Navigation Component (`src/components/Navigation.tsx`)
- **Purpose**: Main navigation bar with responsive menu
- **Features**: 
  - Mobile hamburger menu
  - Active route highlighting
  - Smooth transitions
  - Accessible keyboard navigation

### Hero Section (`src/components/HeroSection.tsx`)
- **Purpose**: Eye-catching hero section for homepage
- **Features**:
  - Background image with overlay
  - Call-to-action buttons
  - Responsive text sizing
  - Centered content layout

### Media Placeholder (`src/components/MediaPlaceholder.tsx`)
- **Purpose**: Consistent placeholder for images throughout the site
- **Features**:
  - Aspect ratio preservation
  - Loading states
  - Fallback content
  - Responsive sizing

### Page Components
Each page follows a consistent structure:
- **Header Section**: Page title and introduction
- **Content Sections**: Main content with proper spacing
- **Media Integration**: Images and visual elements
- **Call-to-Actions**: Relevant buttons and links

## 🎯 Design Patterns

### Component Composition
- Small, focused components that do one thing well
- Composition over inheritance
- Reusable UI patterns through Shadcn/ui components

### State Management
- Local state with `useState` for component-specific data
- No global state management (keeps it simple)
- URL state management through React Router

### Responsive Design
```css
/* Mobile First Approach */
.container {
  /* Mobile styles (default) */
  @apply px-4 py-8;
  
  /* Tablet styles */
  @apply md:px-8 md:py-12;
  
  /* Desktop styles */
  @apply lg:px-16 lg:py-20;
}
```

### Accessibility
- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- Color contrast compliance
- Screen reader friendly

## 🔧 Code Patterns

### TypeScript Usage
```typescript
// Props interfaces for type safety
interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
}

// Component with typed props
const HeroSection: React.FC<HeroSectionProps> = ({ 
  title, 
  subtitle, 
  backgroundImage 
}) => {
  // Component logic
};
```

### Styling Approach
```typescript
// Using Tailwind classes with cn utility
import { cn } from "@/lib/utils";

const Button = ({ className, ...props }) => (
  <button
    className={cn(
      "base-button-styles",
      "hover:enhanced-styles",
      className
    )}
    {...props}
  />
);
```

### Routing Pattern
```typescript
// Clean routing setup in App.tsx
const router = createBrowserRouter([
  { path: "/", element: <Index /> },
  { path: "/about", element: <About /> },
  { path: "/worship", element: <Worship /> },
  // ... other routes
  { path: "*", element: <NotFound /> }
]);
```

## 📱 Responsive Breakpoints

```css
/* Tailwind breakpoints used throughout */
sm: 640px   /* Small devices (landscape phones) */
md: 768px   /* Medium devices (tablets) */
lg: 1024px  /* Large devices (laptops) */
xl: 1280px  /* Extra large devices (desktops) */
2xl: 1536px /* 2X large devices (large desktops) */
```

## 🎨 UI Component Library

### Shadcn/ui Components Used
- **Button**: Primary actions and navigation
- **Card**: Content containers
- **Navigation Menu**: Main navigation
- **Separator**: Visual content separation
- **Typography**: Consistent text styling

### Custom Components
- **HeroSection**: Homepage hero banner
- **MediaPlaceholder**: Image placeholders
- **Navigation**: Site navigation wrapper

## 🚀 Performance Optimizations

### Code Splitting
- Route-based code splitting with React Router
- Lazy loading for images
- Tree-shaking with Vite

### Asset Optimization
- Optimized images in `src/assets/`
- Efficient bundle size with Vite
- CSS purging in production

### SEO Considerations
- Semantic HTML structure
- Proper heading hierarchy
- Meta tags and descriptions
- Fast loading times

## 🛠️ Development Guidelines

### Adding New Pages
1. Create new component in `src/pages/`
2. Add route to `App.tsx`
3. Update navigation in `Navigation.tsx`
4. Follow existing page structure patterns

### Styling Guidelines
- Use Tailwind utility classes
- Follow mobile-first responsive design
- Use design tokens from `index.css`
- Maintain consistent spacing and typography

### Component Guidelines
- Keep components small and focused
- Use TypeScript for prop interfaces
- Follow existing naming conventions
- Add proper accessibility attributes

## 📦 Build and Deployment

### Development
```bash
npm run dev    # Start development server
npm run build  # Build for production
npm run preview # Preview production build
```

### Deployment
- Optimized for static hosting
- Can be deployed to Vercel, Netlify, or any static host
- Environment variables support for configuration

## 🔮 Future Enhancements

### Potential Features
- Contact forms with validation
- Event calendar integration
- Blog/news section
- Member portal
- Online donation system
- Sermon streaming integration

### Technical Improvements
- Progressive Web App (PWA) features
- Advanced SEO optimization
- Content Management System integration
- Internationalization support

## 📋 Maintenance

### Code Quality
- TypeScript for type safety
- Consistent coding patterns
- Component documentation
- Regular dependency updates

### Performance Monitoring
- Bundle size analysis
- Lighthouse score monitoring
- Core Web Vitals tracking
- User experience metrics

---

This documentation serves as a comprehensive guide for understanding and maintaining the church website codebase. The modular architecture and consistent patterns make it easy to extend and customize for specific church needs.
