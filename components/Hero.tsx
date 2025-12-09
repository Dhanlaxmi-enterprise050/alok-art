"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { redirectToWhatsApp } from "@/lib/whatsapp";
import { ArrowRight, Sparkles } from "lucide-react";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white via-cream/30 to-white"
    >
      {/* Animated Grain Texture */}
      <div className="absolute inset-0 grain-texture pointer-events-none z-0" />

      {/* Subtle Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold-subtle/10 to-transparent pointer-events-none z-0" />

      {/* Highlight Sketch Image - Parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ opacity: useTransform(scrollYProgress, [0, 0.6], [0.08, 0.2]), y: useTransform(scrollYProgress, [0, 1], [0, 200]) }}
      >
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1600&h=1600&fit=crop&q=80')`,
            filter: "grayscale(100%) contrast(1.1) brightness(0.95)",
          }}
        />
      </motion.div>

      {/* Content */}
      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10"
        style={{ opacity, y, scale }}
      >
        <div className="max-w-5xl mx-auto text-center">
          {/* Sparkle Decoration */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center mb-8"
          >
            <Sparkles className="h-6 w-6 text-gold animate-pulse" />
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-ink mb-6 leading-[1.1] tracking-tight"
          >
            <span className="block">Handcrafted</span>
            <span className="block bg-gradient-to-r from-ink via-ink to-gold-dark bg-clip-text text-transparent">
              Portraits.
            </span>
            <span className="block">Timeless Art.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg sm:text-xl md:text-2xl text-ink/60 mb-12 max-w-3xl mx-auto font-light leading-relaxed"
          >
            Custom sketches made with emotion, detail, and precision — created exclusively for you.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              onClick={() => redirectToWhatsApp()}
              size="lg"
              className="group text-lg px-10 py-7 bg-ink hover:bg-ink/90 text-white rounded-none font-medium tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-premium"
            >
              Order a Custom Sketch
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              onClick={() => {
                document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" });
              }}
              size="lg"
              variant="outline"
              className="text-lg px-10 py-7 border-2 border-ink/20 hover:border-ink/40 text-ink rounded-none font-medium tracking-wide transition-all duration-300 hover:scale-105 bg-white/80 backdrop-blur-sm"
            >
              View Masterpieces
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-6 h-10 border-2 border-ink/30 rounded-full flex justify-center p-2"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-1 h-3 bg-ink/50 rounded-full"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
