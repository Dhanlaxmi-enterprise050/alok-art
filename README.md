# Alok Artistry - Custom Artwork Website

A modern, high-conversion website for Alok Artistry, built with Next.js 14, TailwindCSS, Framer Motion, and Shadcn/UI.

## Features

- 🎨 **Modern Design**: Clean, minimal, premium theme with soft shadows and rounded corners
- 📱 **Fully Responsive**: Optimized for all screen sizes
- ✨ **Smooth Animations**: Framer Motion animations throughout
- 💬 **WhatsApp Integration**: Direct WhatsApp lead generation
- 🖼️ **Gallery**: Filterable artwork gallery with lightbox modal
- 📝 **Contact Form**: Form submission with localStorage backup
- 🎯 **High Conversion**: Optimized CTAs and user flow

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **TailwindCSS**
- **Framer Motion**
- **Shadcn/UI**
- **Lucide React** (Icons)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd alok-artistry
```

2. Install dependencies:
```bash
npm install
```

3. Update contact information:
   - Open `lib/constants.ts`
   - Replace the placeholder values with your actual:
     - WhatsApp number (format: country code + number without + or spaces, e.g., "919876543210")
     - Instagram handle
     - Email address

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── page.tsx          # Homepage
│   ├── gallery/
│   │   └── page.tsx      # Gallery page
│   ├── pricing/
│   │   └── page.tsx      # Pricing & Process page
│   ├── contact/
│   │   └── page.tsx      # Contact page
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── components/
│   ├── ui/               # Shadcn/UI components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── ArtworkGrid.tsx
│   ├── TestimonialCarousel.tsx
│   ├── FAQAccordion.tsx
│   └── WhatsAppFloatingButton.tsx
└── lib/
    ├── utils.ts          # Utility functions
    └── whatsapp.ts       # WhatsApp integration
```

## Customization

### Colors

Edit `tailwind.config.ts` to customize the color scheme:
- `cream`: Background color (#FFF8F0)
- `gold`: Accent color (#D4AF37)

### Content

- **Artwork Images**: Replace placeholder images in `app/page.tsx` and `app/gallery/page.tsx` with your actual artwork
- **Testimonials**: Update testimonials in `app/page.tsx`
- **FAQ**: Modify FAQ questions in `app/page.tsx`
- **Pricing**: Adjust pricing packages in `app/pricing/page.tsx`

### Contact Information

Update all contact details in `lib/constants.ts`:
```typescript
export const WHATSAPP_NUMBER = "919876543210"; // Replace with your number
export const INSTAGRAM_HANDLE = "alokartistry"; // Replace with your handle
export const EMAIL = "hello@alokartistry.com"; // Replace with your email
```

## Build for Production

```bash
npm run build
npm start
```

## Features Overview

### Homepage
- Hero section with CTA
- Sample artwork grid (3-6 items)
- Testimonials carousel
- "Why Choose Me" section
- FAQ accordion
- Final CTA section

### Gallery Page
- Filterable artwork grid
- Category filters (Pencil Art, Portraits, Couple Art, Pet Art, Digital Art)
- Lightbox modal for image viewing
- Hover effects

### Pricing Page
- 3 sample packages (reference only)
- 4-step process explanation
- CTA button

### Contact Page
- Contact form (name, phone, art type, message)
- Form data saved to localStorage
- Direct WhatsApp redirect on submit
- Social media links

## License

This project is private and proprietary.

## Support

For questions or support, contact via WhatsApp or email.

