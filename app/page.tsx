"use client";

import Hero from "@/components/Hero";
import ArtistIntro from "@/components/ArtistIntro";
import SignatureServices from "@/components/SignatureServices";
import ProcessSection from "@/components/ProcessSection";
import PricingSection from "@/components/PricingSection";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import ArtworkGrid from "@/components/ArtworkGrid";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { redirectToWhatsApp } from "@/lib/whatsapp";
import { ArrowRight } from "lucide-react";

// Sample artwork data for homepage
const sampleArtworks = [
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
    title: "Elegant Portrait",
    category: "Portraits",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=800&h=1100&fit=crop&q=80",
  },
  {
    id: "8",
    title: "Romantic Couple",
    category: "Couple Art",
    image: "https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?w=800&h=1200&fit=crop&q=80",
  },
];

const testimonials = [
  {
    id: "1",
    name: "Priya Sharma",
    text: "The sketch captured my daughter's smile perfectly. It's priceless. The attention to detail is incredible, and it exceeded all my expectations.",
    rating: 5,
  },
  {
    id: "2",
    name: "Rahul Mehta",
    text: "Got a couple portrait done for our anniversary. The artist captured our essence beautifully. Every stroke feels intentional and emotional.",
    rating: 5,
  },
  {
    id: "3",
    name: "Anjali Patel",
    text: "Fast delivery and amazing quality. The pet portrait of my dog looks so lifelike! I can't stop looking at it. Highly recommend!",
    rating: 5,
  },
  {
    id: "4",
    name: "Sneha Kapoor",
    text: "The family portrait we ordered is now the centerpiece of our living room. Handcrafted perfection that will be treasured for generations.",
    rating: 5,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Artist Intro */}
      <ArtistIntro />

      {/* Signature Services */}
      <SignatureServices />

      {/* Gallery Section */}
      <section id="gallery" className="py-32 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-ink mb-6">
              Gallery
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6" />
            <p className="text-xl text-ink/60 max-w-3xl mx-auto font-light leading-relaxed">
              Explore a curated collection of handcrafted portraits and custom artwork
            </p>
          </motion.div>
          <ArtworkGrid artworks={sampleArtworks} />
          
          {/* View More Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <a
              href="/gallery"
              className="inline-flex items-center gap-2 text-ink/70 hover:text-ink font-medium transition-colors group"
            >
              View Full Gallery
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <ProcessSection />

      {/* Testimonials Section */}
      <section className="py-32 bg-gradient-to-b from-white via-cream/30 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-ink mb-6">
              What Clients Say
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6" />
            <p className="text-xl text-ink/60 max-w-2xl mx-auto font-light">
              Stories from those who trusted us with their memories
            </p>
          </motion.div>
          <div className="max-w-4xl mx-auto">
            <TestimonialCarousel testimonials={testimonials} />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingSection />

      {/* Final CTA Section */}
      <section className="py-32 bg-gradient-to-b from-ink via-ink to-black text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
              Let&apos;s create something beautiful together. Transform your memories into timeless art.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={() => redirectToWhatsApp()}
                size="lg"
                className="group text-lg px-12 py-8 bg-gold hover:bg-gold-dark text-ink rounded-none font-medium tracking-wide transition-all duration-300 shadow-premium"
              >
                Order a Custom Sketch
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
