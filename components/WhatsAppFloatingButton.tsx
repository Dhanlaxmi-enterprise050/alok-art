"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { redirectToWhatsApp } from "@/lib/whatsapp";

export default function WhatsAppFloatingButton() {
  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 200, damping: 15 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => redirectToWhatsApp()}
      className="fixed bottom-8 right-8 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-5 shadow-premium flex items-center justify-center transition-all duration-300 group"
      aria-label="Contact on WhatsApp"
    >
      <motion.div
        animate={{
          boxShadow: [
            "0 0 0 0 rgba(37, 211, 102, 0.7)",
            "0 0 0 10px rgba(37, 211, 102, 0)",
            "0 0 0 0 rgba(37, 211, 102, 0)",
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeOut",
        }}
        className="absolute inset-0 rounded-full"
      />
      <MessageCircle className="h-6 w-6 relative z-10 group-hover:scale-110 transition-transform" />
    </motion.button>
  );
}
