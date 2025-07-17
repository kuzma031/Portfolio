# Portfolio Website - Next.js + TypeScript

A modern portfolio website built with Next.js and TypeScript, migrated from Gatsby.

## 🚀 Features

- **Next.js 14** - Latest React framework with App Router
- **TypeScript** - Full type safety and better developer experience
- **SASS/SCSS** - Advanced styling with variables and mixins
- **Responsive Design** - Mobile-first approach
- **SEO Optimized** - Meta tags, Open Graph, Twitter Cards
- **Performance** - Optimized images and code splitting
- **Google Analytics** - Built-in tracking

## 📁 Project Structure

```
portfolio/
├── public/                 # Static assets
│   └── images/            # Images and screenshots
├── src/
│   ├── components/        # React components
│   ├── hooks/            # Custom React hooks
│   ├── pages/            # Next.js pages
│   ├── sass/             # SCSS stylesheets
│   └── types/            # TypeScript type definitions
├── next.config.js         # Next.js configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies and scripts
```

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: SASS/SCSS
- **Icons**: React Ionics
- **Animations**: GSAP
- **Analytics**: Google Analytics

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking
- `npm run format` - Format code with Prettier

## 🔧 Configuration

### Next.js Config (`next.config.js`)

- SASS support enabled
- Image optimization configured
- Static export options available

### TypeScript Config (`tsconfig.json`)

- Strict mode enabled
- Path aliases configured
- JSX preserved for Next.js

## 📱 Pages

- **Home** (`/`) - Main portfolio page with sections
- **Project Pages** - Individual project showcases:
  - `/gridzone` - GridZone project
  - `/valudio` - Valudio project
  - `/heata` - Heata project
  - `/scorpio` - Scorpio project
  - `/inboxroad` - Inboxroad project
  - `/buildwithhubs` - BuildWithHubs project
- **404** - Custom error page

## 🎨 Components

### Core Components

- `Layout` - Main layout wrapper
- `SEO` - SEO and meta tag management
- `Link` - Custom navigation with transitions
- `Page` - Page wrapper component

### Project Components

- `ProjectPageLayout` - Project page layout
- `ProjectHeader` - Project header with info
- `ProjectFooter` - Project footer with screenshots
- `ProjectGallery` - Image gallery modal

### Section Components

- `About` - About section
- `Projects` - Projects showcase
- `Skills` - Skills and technologies
- `Contact` - Contact information

## 🔄 Migration from Gatsby

This project was migrated from Gatsby to Next.js with the following changes:

### Key Changes

1. **Framework**: Gatsby → Next.js 14
2. **Language**: JavaScript → TypeScript
3. **Routing**: Gatsby pages → Next.js pages
4. **SEO**: React Helmet → Next.js Head
5. **Images**: Gatsby Image → Next.js Image
6. **Data**: GraphQL → Static data
7. **Styling**: SASS (unchanged)

### Removed Dependencies

- All Gatsby-specific packages
- React Helmet
- PropTypes
- Gatsby plugins

### Added Dependencies

- Next.js 14
- TypeScript
- Type definitions for React and Node.js

## 🎯 SEO Features

- Dynamic meta tags
- Open Graph support
- Twitter Cards
- Canonical URLs
- Robots meta tags
- Structured data ready

## 📊 Performance

- Automatic code splitting
- Image optimization
- CSS optimization
- Bundle analysis available
- Lighthouse optimized

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository
2. Deploy automatically on push

### Netlify

1. Build command: `npm run build`
2. Publish directory: `out` (if using static export)

### Static Export

Uncomment the export configuration in `next.config.js` for static hosting.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the 0BSD License.

## 👨‍💻 Author

**Đorđe Kuzmanović**

- Full-Stack Software Developer
- Expert in JavaScript, React and Node.js
- [Portfolio](https://djordjekuzmanovic.com)

---

Built with ❤️ using Next.js and TypeScript
