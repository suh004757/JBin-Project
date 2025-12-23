# JBIN Project Website Redesign

Modern, professional website for JBIN Project - a boutique IT infrastructure firm with AI research capabilities.

## Overview

This static website is built with HTML5, CSS3, and Vanilla JavaScript. It requires no build process and can be deployed to any static hosting service.

## Project Structure

```
JBIN Project V3/
├── index.html          # Homepage
├── services.html       # Services page with tabs
├── projects.html       # Portfolio with filters
├── team.html           # Team profiles
├── research.html       # Publications timeline
├── contact.html        # Contact form and info
├── css/
│   ├── design-system.css  # Colors, typography, variables
│   ├── layout.css         # Grid, flex, responsive utilities
│   └── components.css     # Buttons, cards, forms, nav
├── js/
│   ├── main.js            # Navigation, smooth scroll
│   ├── tabs.js            # Tab functionality
│   ├── filter.js          # Project filtering
│   └── form-validation.js # Contact form validation
└── images/             # Project assets
```

## Features

- **Modern Design System**: Custom CSS variables for consistent branding
- **Responsive Layout**: Mobile-first approach working on all devices
- **Interactive Elements**:
  - Filterable project portfolio
  - Tabbed service interfaces
  - Accordion FAQ sections
  - Smooth scrolling and animations
  - Client-side form validation
- **Performance Optimized**: Clean code, no heavy frameworks

## Deployment

Simply upload all files to any static hosting provider:
- GitHub Pages
- Netlify
- Vercel
- AWS S3 / CloudFront

## Customization

### Changing Colors
Edit `css/design-system.css` and update the root variables:
```css
:root {
  --color-primary: #1a365d;
  --color-accent: #00d4ff;
  /* ... */
}
```

### Updating Content
All text content is directly in the HTML files for easy editing.

### Adding Images
Place new images in the `images/` folder and update the `src` attributes in the HTML.
