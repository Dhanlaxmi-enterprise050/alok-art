"use client";

import { motion } from "framer-motion";
import PricingSection from "@/components/PricingSection";
import ProcessSection from "@/components/ProcessSection";

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      <PricingSection />
      <ProcessSection />
    </div>
  );
}
