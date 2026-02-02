# Girisree Yetukuri - Portfolio Website

A professional, elegant portfolio website built with React and Vite, showcasing my experience as a React Developer.

## Features

- **Modern Design**: Sophisticated dark theme with refined typography and subtle animations
- **Fully Responsive**: Optimized for all devices from mobile to desktop
- **Smooth Animations**: Powered by Framer Motion for elegant interactions
- **Optimized Performance**: Built with Vite for lightning-fast development and production builds
- **Accessible**: Follows web accessibility best practices

## Tech Stack

- **React 18**: Modern React with hooks
- **Vite**: Next-generation frontend tooling
- **Framer Motion**: Production-ready animation library
- **React Icons**: Beautiful icon set
- **CSS3**: Custom styling with CSS variables for theming

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository or extract the project files

2. Navigate to the project directory:
```bash
cd portfolio
```

3. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

Create an optimized production build:
```bash
npm run build
```

Preview the production build locally:
```bash
npm run preview
```

## Project Structure

```
portfolio/
├── public/              # Static assets
├── src/
│   ├── components/     # React components
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Experience.jsx
│   │   ├── Skills.jsx
│   │   ├── Education.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx         # Main App component
│   ├── App.css         # Global app styles
│   ├── main.jsx        # Entry point
│   └── index.css       # Global CSS and variables
├── index.html          # HTML template
├── package.json        # Dependencies
└── vite.config.js      # Vite configuration
```

## Customization

### Colors

Edit the CSS variables in `src/index.css`:
```css
:root {
  --color-bg-primary: #0a0a0a;
  --color-accent: #c9a05f;
  /* ... other colors */
}
```

### Fonts

The portfolio uses:
- **Cormorant Garamond** for headings (elegant serif)
- **Work Sans** for body text (clean sans-serif)

To change fonts, update the Google Fonts link in `index.html` and the CSS variables in `src/index.css`.

### Content

Update your information in the respective component files:
- Personal info: `src/components/Hero.jsx`
- About section: `src/components/About.jsx`
- Work experience: `src/components/Experience.jsx`
- Skills: `src/components/Skills.jsx`
- Education: `src/components/Education.jsx`
- Contact: `src/components/Contact.jsx`

## Deployment

The site can be deployed to various platforms:

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload the 'dist' folder to Netlify
```

### GitHub Pages
```bash
npm run build
# Deploy the 'dist' folder to gh-pages branch
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available for personal use.

## Contact

- **Email**: ygirisree@gmail.com
- **Phone**: 267-376-1203
- **Location**: Sterling, Virginia

---

Built with ❤️ using React and Vite
