# Sawar - Premium Wallpaper Hosting Website

A modern, animated, and fully responsive wallpaper hosting website built with Next.js, featuring stunning Web3-style design with glassmorphism effects.

## 🎨 Features

- **Modern Design**: Web3-style interface with glassmorphism, gradients, and neon highlights
- **Smooth Animations**: Powered by Framer Motion for fluid user interactions
- **Responsive Design**: Perfect on desktop, tablet, and mobile devices
- **Category Filtering**: Browse PC (16:9) and Mobile (9:16) wallpapers
- **Download Functionality**: One-click download with confirmation
- **Dark/Light Mode**: Theme toggle with smooth transitions
- **Modal Preview**: Full-screen wallpaper preview with download options
- **Optimized Performance**: Built with Next.js for optimal loading

## 🚀 Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **Lucide React** - Modern icons
- **Next-themes** - Theme management

## 📦 Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🖼️ Wallpaper Collection

- **PC Wallpapers**: 60+ high-quality desktop wallpapers (16:9 aspect ratio)
- **Mobile Wallpapers**: 16+ mobile-optimized wallpapers (9:16 aspect ratio)
- **4K Quality**: Stunning resolution for all devices
- **Free Downloads**: All wallpapers are free to download

## 🔧 Project Structure

```
sawar-wallpapers/
├── app/
│   ├── globals.css          # Global styles and animations
│   ├── layout.tsx           # Root layout with theme provider
│   └── page.tsx            # Main homepage component
├── components/
│   ├── Header.tsx          # Navigation with theme toggle
│   ├── HeroSection.tsx     # Animated hero section
│   ├── CategoryToggle.tsx  # PC/Mobile filter toggle
│   ├── WallpaperGrid.tsx   # Responsive wallpaper grid
│   ├── WallpaperCard.tsx   # Individual wallpaper cards
│   ├── WallpaperModal.tsx  # Full-screen preview modal
│   └── Footer.tsx          # Footer with Dynamic.IO branding
├── public/wallpapers/      # Wallpaper image files
│   ├── pc/PC/             # Desktop wallpapers
│   └── mobile/Mobile/     # Mobile wallpapers
└── package.json           # Dependencies and scripts
```

## 🎯 Key Components

### Header
- Responsive navigation with mobile menu
- Dark/light theme toggle
- Smooth scroll navigation

### Hero Section
- Animated background with floating orbs
- Statistics display
- Call-to-action button

### Wallpaper Grid
- Dynamic filtering by category
- Responsive grid layout
- Hover animations and effects

### Wallpaper Modal
- Full-screen preview
- Download functionality
- Share options
- Info panel with metadata

## 🎨 Design Features

### Glassmorphism Effects
- Backdrop blur and transparency
- Glass-like components
- Subtle borders and shadows

### Neon Highlights
- Cyan, purple, and pink accents
- Glowing animations
- Gradient text effects

### Responsive Layout
- Mobile-first design
- Flexible grid system
- Touch-friendly interactions

## 📱 Usage

1. **Browse Wallpapers**: Use the category toggle to switch between PC and Mobile wallpapers
2. **Preview**: Click any wallpaper to view full-screen preview
3. **Download**: Use the download button for instant file download
4. **Theme**: Toggle between dark and light modes
5. **Navigation**: Smooth scroll navigation through sections

## 🌟 Performance

- **Optimized Images**: Next.js Image component for optimal loading
- **Lazy Loading**: Images load as needed
- **Smooth Animations**: 60fps animations with Framer Motion
- **Fast Navigation**: Client-side routing

## 🔄 Development Scripts

```bash
npm run dev    # Start development server
npm run build  # Build for production
npm run start  # Start production server
npm run lint   # Run ESLint
```

## 🎨 Customization

### Adding New Wallpapers
1. Add image files to `public/wallpapers/pc/PC/` or `public/wallpapers/mobile/Mobile/`
2. Update the file arrays in `app/page.tsx`
3. Images will automatically appear in the grid

### Styling
- Modify `app/globals.css` for global styles
- Update `tailwind.config.js` for custom colors and animations
- Components use Tailwind classes for easy customization

## 🏆 Credits

**Powered by Dynamic.IO** - As featured in the footer

Built with modern web technologies for optimal performance and user experience.

## 📄 License

Free to use for personal and commercial projects.

---

*Transform your devices with stunning wallpapers from Sawar* ✨ 