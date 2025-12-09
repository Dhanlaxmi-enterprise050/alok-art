"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Upload, MessageCircle, Palette, Gift } from "lucide-react";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "You Send Your Photo",
    description: "Share your favorite photo with clear details and good lighting. Multiple angles help capture the essence perfectly.",
    icon: Upload,
    color: "from-gold/20 to-gold/5",
  },
  {
    number: "02",
    title: "We Discuss Style & Details",
    description: "Together we refine your vision — style preferences, composition, and any special touches you want included.",
    icon: MessageCircle,
    color: "from-ink/20 to-ink/5",
  },
  {
    number: "03",
    title: "Artwork Created by Hand",
    description: "Every stroke is meticulously handcrafted with attention to detail, emotion, and artistic precision.",
    icon: Palette,
    color: "from-gold/20 to-gold/5",
  },
  {
    number: "04",
    title: "Delivered Digitally or Physically",
    description: "Receive your finished masterpiece digitally or as a high-quality physical print, ready to treasure forever.",
    icon: Gift,
    color: "from-ink/20 to-ink/5",
  },
];

export default function ProcessSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-32 bg-gradient-to-b from-white via-cream/30 to-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-ink mb-6">
            The Process
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6" />
          <p className="text-xl text-ink/60 max-w-2xl mx-auto font-light">
            From concept to creation, every step is crafted with care
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-24">
          {steps.map((step, index) => {
            const StepIcon = step.icon;
            const isEven = index % 2 === 0;
            const stepRef = useRef<HTMLDivElement>(null);
            const stepInView = useInView(stepRef, { once: true, amount: 0.3 });
            const { scrollYProgress } = useScroll({
              target: stepRef,
              offset: ["start end", "center center"],
            });

            const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);
            const y = useTransform(scrollYProgress, [0, 0.5], [100, 0]);

            return (
              <motion.div
                key={step.number}
                ref={stepRef}
                style={{ opacity, y }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  !isEven ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Image/Icon Section */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  animate={stepInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -50 : 50 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className={`${!isEven ? "lg:col-start-2" : ""}`}
                >
                  <div className="relative">
                    {/* Background Circle */}
                    <motion.div
                      animate={stepInView ? { scale: 1 } : { scale: 0.8 }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                      className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-full blur-3xl opacity-50`}
                    />
                    
                    {/* Icon Container */}
                    <motion.div
                      whileHover={{ scale: 1.05, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="relative bg-white border-2 border-ink/10 p-12 rounded-none shadow-premium aspect-square flex items-center justify-center"
                    >
                      <StepIcon className="h-16 w-16 text-ink" />
                      
                      {/* Stroke Reveal Animation */}
                      <motion.div
                        initial={{ pathLength: 0 }}
                        animate={stepInView ? { pathLength: 1 } : { pathLength: 0 }}
                        transition={{ duration: 2, delay: 0.5 }}
                        className="absolute inset-0 border-2 border-gold"
                        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
                      />
                    </motion.div>
                  </div>
                </motion.div>

                {/* Content Section */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  animate={stepInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? 50 : -50 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className={`${!isEven ? "lg:col-start-1 lg:row-start-1" : ""}`}
                >
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <span className="text-6xl font-serif font-bold text-gold/30">
                        {step.number}
                      </span>
                      <div className="h-px flex-1 bg-gradient-to-r from-ink/20 to-transparent" />
                    </div>
                    <h3 className="text-3xl md:text-4xl font-serif font-bold text-ink">
                      {step.title}
                    </h3>
                    <p className="text-lg text-ink/60 leading-relaxed font-light">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

