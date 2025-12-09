"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { redirectToWhatsApp } from "@/lib/whatsapp";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function PricingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-32 bg-gradient-to-b from-white via-ink to-ink text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
            Pricing
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6" />
          <p className="text-xl text-white/70 max-w-2xl mx-auto font-light">
            Premium artwork crafted with passion and precision
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-none p-12 md:p-16 mb-12">
            <p className="text-3xl md:text-4xl font-serif font-light text-white/90 mb-6">
              Custom artwork tailored to your vision
            </p>
            <p className="text-xl text-white/60 mb-8 font-light leading-relaxed">
              Every piece is uniquely crafted, so pricing varies based on complexity, size, and style. Starting prices provide a baseline for your custom commission.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="px-6 py-3 bg-white/10 border border-white/20 rounded-none">
                <p className="text-sm text-white/60 mb-1">Single Portraits</p>
                <p className="text-2xl font-serif font-bold text-gold">Starting from ₹1,499</p>
              </div>
              <div className="px-6 py-3 bg-white/10 border border-white/20 rounded-none">
                <p className="text-sm text-white/60 mb-1">Couple Art</p>
                <p className="text-2xl font-serif font-bold text-gold">Starting from ₹2,499</p>
              </div>
              <div className="px-6 py-3 bg-white/10 border border-white/20 rounded-none">
                <p className="text-sm text-white/60 mb-1">Family/Group</p>
                <p className="text-2xl font-serif font-bold text-gold">Starting from ₹3,999</p>
              </div>
            </div>
            <p className="text-sm text-white/50 italic">
              * Final pricing depends on project specifications
            </p>
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              onClick={() => redirectToWhatsApp()}
              size="lg"
              className="group text-lg px-12 py-8 bg-gold hover:bg-gold-dark text-ink rounded-none font-medium tracking-wide transition-all duration-300 shadow-premium"
            >
              Get Your Custom Quote
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

