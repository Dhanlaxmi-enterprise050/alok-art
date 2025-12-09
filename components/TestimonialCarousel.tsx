"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";
import { useRef } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";

interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
  avatar?: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

export default function TestimonialCarousel({
  testimonials,
}: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  // Generate placeholder avatars
  const getAvatar = (name: string) => {
    const initials = name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=D4AF37&color=000&size=128&bold=true&font-size=0.5`;
  };

  return (
    <div ref={ref} className="relative">
      <AnimatePresence mode="wait">
        {testimonials.map((testimonial, index) => {
          if (index !== currentIndex) return null;

          return (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -50, scale: 0.95 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              {/* Blur Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-ink/5 blur-3xl -z-10 rounded-none" />
              
              <Card className="border-0 shadow-premium rounded-none bg-white/80 backdrop-blur-xl overflow-hidden relative">
                <CardContent className="p-12 md:p-16">
                  {/* Quote Icon */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mb-8"
                  >
                    <Quote className="h-12 w-12 text-gold opacity-30" />
                  </motion.div>

                  {/* Testimonial Text */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-2xl md:text-3xl text-ink/80 mb-10 leading-relaxed font-light italic"
                  >
                    &ldquo;{testimonial.text}&rdquo;
                  </motion.p>

                  {/* Author Info */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex items-center gap-6"
                  >
                    {/* Avatar */}
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-gold to-gold-dark rounded-full blur-md opacity-50" />
                      <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-gold/30">
                        <Image
                          src={getAvatar(testimonial.name)}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                          sizes="64px"
                        />
                      </div>
                    </div>

                    <div className="flex-1">
                      <p className="font-serif font-bold text-xl text-ink mb-2">
                        {testimonial.name}
                      </p>
                      <div className="flex items-center gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                            transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                          >
                            <Star className="h-5 w-5 fill-gold text-gold" />
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </AnimatePresence>

      {/* Navigation Dots */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="flex justify-center gap-3 mt-10"
      >
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className="relative group"
            aria-label={`Go to testimonial ${index + 1}`}
          >
            <motion.div
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-12 bg-gold"
                  : "w-2 bg-ink/20 group-hover:bg-ink/40"
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          </button>
        ))}
      </motion.div>
    </div>
  );
}
