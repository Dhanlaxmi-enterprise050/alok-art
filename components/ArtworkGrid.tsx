"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Artwork {
  id: string;
  title: string;
  category: string;
  image: string;
}

interface ArtworkGridProps {
  artworks: Artwork[];
  showFilters?: boolean;
}

export default function ArtworkGrid({
  artworks,
  showFilters = false,
}: ArtworkGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedImage, setSelectedImage] = useState<Artwork | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const categories = ["All", "Pencil Art", "Portraits", "Couple Art", "Pet Art", "Digital Art"];

  const filteredArtworks =
    selectedCategory === "All"
      ? artworks
      : artworks.filter((art) => art.category === selectedCategory);

  // Find current index when image is selected
  useEffect(() => {
    if (selectedImage) {
      const index = filteredArtworks.findIndex((art) => art.id === selectedImage.id);
      setCurrentIndex(index >= 0 ? index : 0);
    }
  }, [selectedImage, filteredArtworks]);

  const navigateImage = (direction: "prev" | "next") => {
    if (direction === "next") {
      const nextIndex = (currentIndex + 1) % filteredArtworks.length;
      setSelectedImage(filteredArtworks[nextIndex]);
    } else {
      const prevIndex = currentIndex === 0 ? filteredArtworks.length - 1 : currentIndex - 1;
      setSelectedImage(filteredArtworks[prevIndex]);
    }
  };

  // Masonry heights for variety
  const heights = ["h-64", "h-80", "h-72", "h-96", "h-64", "h-88"];

  return (
    <>
      {showFilters && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap gap-3 justify-center mb-16"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 text-sm font-medium transition-all duration-300 rounded-none border-2 ${
                selectedCategory === category
                  ? "bg-ink text-white border-ink shadow-premium"
                  : "bg-white text-ink/70 border-ink/20 hover:border-ink/40 hover:text-ink"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>
      )}

      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
        <AnimatePresence mode="popLayout">
          {filteredArtworks.map((artwork, index) => {
            const heightClass = heights[index % heights.length];
            return (
              <motion.div
                key={artwork.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                className="break-inside-avoid mb-6 group cursor-pointer"
                onClick={() => setSelectedImage(artwork)}
              >
                <div className="relative overflow-hidden bg-gradient-to-br from-cream to-white shadow-floating hover:shadow-premium transition-all duration-500 rounded-none border border-ink/5">
                  {/* Image Container */}
                  <div className={`relative w-full ${heightClass} overflow-hidden`}>
                    <Image
                      src={artwork.image}
                      alt={artwork.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      loading="lazy"
                    />
                    
                    {/* Brush Stroke Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Title Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-white font-serif font-bold text-xl mb-1">
                        {artwork.title}
                      </h3>
                      <p className="text-white/80 text-sm">{artwork.category}</p>
                    </div>

                    {/* Ambient Shadow */}
                    <div className="absolute -inset-4 bg-gradient-to-br from-gold/20 to-transparent opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500 pointer-events-none" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Premium Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="fixed inset-0 bg-black/90 backdrop-blur-md" />
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative z-50 w-full max-w-6xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute -top-12 right-0 text-white hover:text-gold hover:bg-white/10 rounded-full"
                onClick={() => setSelectedImage(null)}
              >
                <X className="h-6 w-6" />
              </Button>

              {/* Navigation Buttons */}
              {filteredArtworks.length > 1 && (
                <>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gold hover:bg-white/10 rounded-full h-12 w-12"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigateImage("prev");
                    }}
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gold hover:bg-white/10 rounded-full h-12 w-12"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigateImage("next");
                    }}
                  >
                    <ChevronRight className="h-6 w-6" />
                  </Button>
                </>
              )}

              {/* Image */}
              <div className="relative w-full aspect-[4/5] max-h-[85vh] bg-white/5 backdrop-blur-sm rounded-none overflow-hidden border border-white/10">
                <Image
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  fill
                  className="object-contain p-4"
                  sizes="90vw"
                  priority
                />
              </div>

              {/* Info */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mt-6 text-center"
              >
                <h3 className="text-3xl font-serif font-bold text-white mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-white/70 text-lg">{selectedImage.category}</p>
                <p className="text-white/50 text-sm mt-2">
                  {currentIndex + 1} / {filteredArtworks.length}
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
