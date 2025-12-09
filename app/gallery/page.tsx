"use client";

import { motion } from "framer-motion";
import ArtworkGrid from "@/components/ArtworkGrid";

const allArtworks = [
  {
    id: "1",
    title: "Portrait Sketch",
    category: "Portraits",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&h=1000&fit=crop&q=80",
  },
  {
    id: "2",
    title: "Couple Portrait",
    category: "Couple Art",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&h=1200&fit=crop&q=80",
  },
  {
    id: "3",
    title: "Pet Portrait - Dog",
    category: "Pet Art",
    image: "https://images.unsplash.com/photo-1517849845537-4d257902454a?w=800&h=900&fit=crop&q=80",
  },
  {
    id: "4",
    title: "Pencil Art Portrait",
    category: "Pencil Art",
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=1100&fit=crop&q=80",
  },
  {
    id: "5",
    title: "Digital Portrait",
    category: "Digital Art",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&h=1000&fit=crop&q=80",
  },
  {
    id: "6",
    title: "Family Portrait",
    category: "Portraits",
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&h=1200&fit=crop&q=80",
  },
  {
    id: "7",
    title: "Pet Portrait - Cat",
    category: "Pet Art",
    image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=800&h=900&fit=crop&q=80",
  },
  {
    id: "8",
    title: "Couple Sketch",
    category: "Couple Art",
    image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&h=1100&fit=crop&q=80",
  },
  {
    id: "9",
    title: "Detailed Pencil Art",
    category: "Pencil Art",
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=1000&fit=crop&q=80",
  },
  {
    id: "10",
    title: "Digital Couple Art",
    category: "Digital Art",
    image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&h=1200&fit=crop&q=80",
  },
  {
    id: "11",
    title: "Portrait Study",
    category: "Portraits",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=900&fit=crop&q=80",
  },
  {
    id: "12",
    title: "Pet Portrait - Bird",
    category: "Pet Art",
    image: "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=800&h=1000&fit=crop&q=80",
  },
  {
    id: "13",
    title: "Elegant Portrait",
    category: "Portraits",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=800&h=1100&fit=crop&q=80",
  },
  {
    id: "14",
    title: "Romantic Couple",
    category: "Couple Art",
    image: "https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?w=800&h=1200&fit=crop&q=80",
  },
  {
    id: "15",
    title: "Fine Line Art",
    category: "Pencil Art",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&h=1000&fit=crop&q=80",
  },
  {
    id: "16",
    title: "Modern Digital Portrait",
    category: "Digital Art",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&h=900&fit=crop&q=80",
  },
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-ink mb-6 tracking-tight">
            Gallery
          </h1>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6" />
          <p className="text-xl text-ink/60 max-w-3xl mx-auto font-light leading-relaxed">
            Browse through our collection of custom artwork. Each piece is uniquely crafted with attention to detail and artistic excellence.
          </p>
        </motion.div>

        <ArtworkGrid artworks={allArtworks} showFilters={true} />
      </div>
    </div>
  );
}

