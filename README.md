# Mamikos Frontend Clone

This is a frontend clone of the [Mamikos](https://mamikos.com) landing page, created as part of a technical test. The project focuses on high-quality UI/UX, responsive design, and robust component architecture using modern frontend technologies.

🌐 **Live Demo:** [https://mamikos-frontend-test-fikri.vercel.app/](https://mamikos-frontend-test-fikri.vercel.app/)
🎥 **Video Timelapse:** [https://youtu.be/BJs_4WEu-pA](https://youtu.be/BJs_4WEu-pA)

## 🛠 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **UI Library:** Material UI (MUI) v6
- **Styling:** MUI System (`sx` prop) and standard CSS
- **Carousel:** `embla-carousel-react`
- **Fonts:** Poppins (via `next/font/google`)
- **Deployment:** Vercel

## 🚀 Features

- **Pixel-Perfect UI:** Highly accurate replication of the Mamikos landing page layout and design system.
- **Responsive Design:** Fully optimized for mobile, tablet, and desktop viewports following mobile-first principles. Includes edge-to-edge scrolling for product cards on mobile.
- **Modern Component Architecture:** Built with clean, reusable components grouped logically by domains (`layout/`, `home/`, `ui/`).
- **Interactive Elements:**
  - Sticky Navbar with dynamic search bar behavior based on scroll position (Intersection Observer).
  - Countdown timer for "Promo Ngebut".
  - Horizontal drag-and-swipe carousels for promos and kos recommendations.
  - SEO-friendly accordion sections.
- **Mock Data Integration:** Utilizes static mock data to populate cards without relying on external APIs, ensuring fast and reliable testing.

## 📂 Project Structure

```
├── app/                  # Next.js App Router setup and global styles
├── components/           # React components
│   ├── layout/           # Global layouts (TopBar, Navbar, Footer)
│   ├── home/             # Sections specific to the Home page
│   └── ui/               # Reusable atomic UI elements (ProductCard, InfoCard)
├── data/                 # Static mock data sources
├── hooks/                # Custom React hooks (e.g., useCountdown)
├── public/               # Static assets (images, logos)
├── theme/                # Centralized MUI theme configuration
└── types/                # TypeScript interface definitions
```

## ⚙️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm / yarn / pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/naufaland/mamikos-frontend-test.git
   cd mamikos-frontend-test
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📝 Design Decisions & Constraints

- **MUI Only:** No Tailwind CSS or other utility-first frameworks were used, strictly adhering to MUI's `sx` prop for styling to showcase proficiency in Material UI.
- **Static Content:** No real backend integration. All data points (prices, images, locations) are hardcoded in `data/mock-data.ts`.
- **MUI v6 Compatibility:** Code adheres to the latest MUI v6 standards (e.g., using `slotProps` instead of deprecated component props like `PaperProps`).
