# Pulesha Media Website

A modern, responsive website for Pulesha Media - a digital signage and smart media solutions company based in Middelburg, Mpumalanga.

## Features

- **Responsive Design**: Optimized for all devices
- **Modern UI**: Clean, professional design with dark gradient background
- **Digital Signage Focus**: Showcases digital signage services and solutions
- **Contact Integration**: Easy contact information and location details
- **Portfolio Showcase**: Displays completed projects and implementations

## Technology Stack

- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS v4** for styling
- **Lucide React** for icons
- **Responsive Design** with mobile-first approach

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn package manager

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`

### Building for Production

To build the project for production:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Deployment to Netlify

### Method 1: Drag and Drop

1. Run `npm run build` to create the production build
2. Go to [Netlify](https://app.netlify.com/)
3. Drag and drop the `dist` folder to the deployment area

### Method 2: Git Integration

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Connect your repository to Netlify
3. Netlify will automatically detect the build settings from `netlify.toml`

### Method 3: Netlify CLI

1. Install Netlify CLI: `npm install -g netlify-cli`
2. Run `npm run build`
3. Run `netlify deploy --prod --dir=dist`

## Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   ├── figma/          # Figma-specific components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── Services.tsx    # Services section
│   ├── Features.tsx    # Features section
│   ├── Portfolio.tsx   # Portfolio section
│   ├── About.tsx       # About section
│   ├── Contact.tsx     # Contact section
│   └── Footer.tsx      # Footer section
├── lib/                # Utility functions
├── styles/             # CSS and styling
└── App.tsx            # Main application component
```

## Contact Information

**Pulesha Media**
- Location: Middelburg, Mpumalanga 1050
- Phone: 068 647 6222
- Email: pulesha@media.co.za
- Website: www.puleshamedia.co.za

## Services

- Digital Signage Solutions
- Professional Installation
- Remote and Ongoing Support
- Website Creation
- Brand Promotions
- Multi-location Management

## License

This project is proprietary and confidential to Pulesha Media.