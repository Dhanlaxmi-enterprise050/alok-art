"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { useRef } from "react";
import { useInView } from "framer-motion";

export default function ArtistIntro() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Portrait Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <Card className="overflow-hidden border-0 shadow-premium rounded-none bg-gradient-to-br from-cream via-white to-cream">
                <CardContent className="p-0">
                  <div
                    className="aspect-[3/4] w-full bg-cover bg-center"
                    style={{
                      backgroundImage: `url('https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&h=1000&fit=crop&q=80')`,
                    }}
                  />
                </CardContent>
              </Card>
              {/* Floating Shadow */}
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-ink/10 blur-3xl -z-10" />
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-ink leading-tight">
              The Artist Behind the Art
            </h2>
            <div className="w-20 h-px bg-gradient-to-r from-gold to-transparent mb-8" />
            <p className="text-xl md:text-2xl text-ink/70 leading-relaxed font-light">
              I create artwork that captures personality, emotion, and detail. Every stroke is handcrafted. Every portrait is made to tell a story.
            </p>
            <p className="text-lg text-ink/60 leading-relaxed">
              With years of dedication to the craft, I transform your precious memories into timeless art pieces. Each sketch is a labor of love, created with meticulous attention to detail and an unwavering commitment to excellence.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-4 pt-4"
            >
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ duration: 0.3, delay: 0.6 + i * 0.1 }}
                    className="w-2 h-2 bg-gold rounded-full"
                  />
                ))}
              </div>
              <span className="text-sm text-ink/50 font-medium">Handcrafted Excellence</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

