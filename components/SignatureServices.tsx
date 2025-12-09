"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { User, Users, UsersRound, PenTool, Palette } from "lucide-react";
import { PRICING } from "@/lib/constants";

const services = [
  {
    id: "single",
    title: "Single Portrait Sketch",
    description: "A detailed, handcrafted portrait capturing every nuance of your subject.",
    icon: User,
    price: PRICING.SINGLE_PORTRAIT,
  },
  {
    id: "couple",
    title: "Couple Sketches",
    description: "Two subjects beautifully composed together, celebrating your connection.",
    icon: Users,
    price: PRICING.COUPLE,
  },
  {
    id: "family",
    title: "Family / Group Sketches",
    description: "Multi-subject portraits preserving your family memories in art.",
    icon: UsersRound,
    price: PRICING.FAMILY_GROUP,
  },
  {
    id: "digital",
    title: "Digital Line Art",
    description: "Clean, modern line art perfect for prints and digital displays.",
    icon: PenTool,
    price: PRICING.DIGITAL_LINE_ART,
  },
  {
    id: "custom",
    title: "Full Custom Art Commissions",
    description: "Complete artistic freedom — bring your vision to life.",
    icon: Palette,
    price: PRICING.FULL_CUSTOM,
  },
];

export default function SignatureServices() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section ref={ref} className="py-32 bg-gradient-to-b from-white via-cream/20 to-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-ink mb-6">
            Signature Services
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6" />
          <p className="text-xl text-ink/60 max-w-2xl mx-auto font-light">
            Premium handcrafted artwork, tailored to your vision
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <Card className="h-full border border-ink/10 hover:border-ink/20 transition-all duration-500 rounded-none bg-white/80 backdrop-blur-sm shadow-floating hover:shadow-premium hover:-translate-y-2 group overflow-hidden relative">
                  {/* Gradient Border Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/0 via-gold/0 to-gold/0 group-hover:from-gold/5 group-hover:via-gold/10 group-hover:to-gold/5 transition-all duration-500 pointer-events-none" />
                  
                  <CardContent className="p-8 relative z-10">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="mb-6 inline-block"
                    >
                      <div className="p-4 bg-gradient-to-br from-gold-subtle to-gold/20 rounded-none border border-gold/20">
                        <Icon className="h-8 w-8 text-gold-dark" />
                      </div>
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-2xl font-serif font-bold text-ink mb-4 group-hover:text-gold-dark transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-ink/60 mb-6 leading-relaxed font-light">
                      {service.description}
                    </p>

                    {/* Price */}
                    <div className="pt-6 border-t border-ink/10">
                      <p className="text-sm text-ink/50 mb-1">Starting from</p>
                      <p className="text-3xl font-serif font-bold text-ink">
                        ₹{service.price.toLocaleString()}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

