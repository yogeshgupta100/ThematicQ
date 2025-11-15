# ThematicQ Landing Page

A modern landing page built with Next.js 14, featuring an auto-sliding hero carousel.

## Features

- ⚡ Next.js 14 with App Router
- 🎨 Tailwind CSS for styling
- 🖼️ Auto-sliding hero carousel with 3 images
- 📱 Fully responsive design
- ⚛️ React Server Components with async support
- 🎯 TypeScript for type safety

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
ThematicQ/
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Landing page (async component)
│   └── globals.css      # Global styles
├── components/
│   └── HeroCarousel.tsx # Hero carousel component
└── package.json
```

## Hero Carousel

The hero carousel automatically slides through 3 images every 5 seconds. Features include:

- Auto-sliding functionality
- Manual navigation with arrow buttons
- Dot indicators for slide navigation
- Smooth transitions
- Responsive design
- Image optimization with Next.js Image component

## Customization

To customize the carousel images, edit the `carouselImages` array in `components/HeroCarousel.tsx`:

```typescript
const carouselImages: CarouselImage[] = [
  {
    id: 1,
    src: "your-image-url-1.jpg",
    alt: "Description 1",
    title: "Your Title",
    subtitle: "Your Subtitle",
  },
  // ... more images
];
```

## Build for Production

```bash
npm run build
npm start
```

## Technologies Used

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
