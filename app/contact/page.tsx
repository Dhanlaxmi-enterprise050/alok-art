"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  redirectToWhatsApp,
  saveToLocalStorage,
  FormData,
} from "@/lib/whatsapp";
import { MessageCircle, Instagram, Mail, ArrowRight, Heart } from "lucide-react";
import { WHATSAPP_NUMBER, INSTAGRAM_HANDLE, EMAIL } from "@/lib/constants";

const artTypes = [
  "Portrait",
  "Couple Art",
  "Pet Art",
  "Pencil Art",
  "Digital Art",
  "Other",
];

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    artType: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Save to localStorage
    saveToLocalStorage(formData);
    
    // Redirect to WhatsApp
    redirectToWhatsApp(formData);
    
    // Reset form
    setFormData({
      name: "",
      phone: "",
      artType: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen py-32 bg-gradient-to-b from-white via-cream/30 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-block mb-6"
          >
            <Heart className="h-12 w-12 text-gold mx-auto" />
          </motion.div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-ink mb-6 tracking-tight">
            Let's Create Together
          </h1>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6" />
          <p className="text-xl md:text-2xl text-ink/60 max-w-3xl mx-auto font-light leading-relaxed">
            Your memories deserve to be art. Share your vision, and let's bring it to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2"
          >
            <div className="bg-white/80 backdrop-blur-xl border border-ink/10 shadow-premium rounded-none p-8 md:p-12">
              <h2 className="text-3xl font-serif font-bold text-ink mb-8">
                Send a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-3 text-ink/70"
                    >
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="rounded-none border-ink/20 focus:border-gold transition-colors bg-white/50"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium mb-3 text-ink/70"
                    >
                      Phone Number *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="rounded-none border-ink/20 focus:border-gold transition-colors bg-white/50"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="artType"
                    className="block text-sm font-medium mb-3 text-ink/70"
                  >
                    Art Type
                  </label>
                  <select
                    id="artType"
                    name="artType"
                    value={formData.artType}
                    onChange={handleChange}
                    className="flex h-12 w-full rounded-none border border-ink/20 bg-white/50 px-4 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:border-gold transition-colors"
                  >
                    <option value="">Select art type</option>
                    {artTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-3 text-ink/70"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your custom artwork requirements..."
                    rows={6}
                    className="rounded-none border-ink/20 focus:border-gold transition-colors bg-white/50 resize-none"
                  />
                </div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-ink hover:bg-ink/90 text-white rounded-none py-7 text-base font-medium group"
                  >
                    Send via WhatsApp
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </motion.div>
              </form>
            </div>
          </motion.div>

          {/* Direct Contact Links & Promise */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            {/* Promise Statement */}
            <div className="bg-gradient-to-br from-gold-subtle to-gold/20 border border-gold/30 rounded-none p-8 shadow-premium">
              <h3 className="text-2xl font-serif font-bold text-ink mb-4">
                Your memories deserve to be art.
              </h3>
              <p className="text-ink/70 leading-relaxed font-light">
                Every portrait tells a story. Every sketch captures a moment. Let's preserve yours forever.
              </p>
            </div>

            {/* Direct Contact */}
            <div className="bg-white/80 backdrop-blur-xl border border-ink/10 shadow-premium rounded-none p-8">
              <h3 className="text-xl font-serif font-bold text-ink mb-6">
                Direct Contact
              </h3>
              <div className="space-y-4">
                <motion.a
                  whileHover={{ x: 5 }}
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-none border border-ink/10 hover:border-gold bg-white/50 hover:bg-gold-subtle/20 transition-all duration-300 group"
                >
                  <MessageCircle className="h-6 w-6 text-[#25D366] flex-shrink-0" />
                  <div>
                    <p className="font-medium text-ink">WhatsApp</p>
                    <p className="text-sm text-ink/60">Quick response</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-ink/40 ml-auto group-hover:translate-x-1 transition-transform" />
                </motion.a>

                <motion.a
                  whileHover={{ x: 5 }}
                  href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-none border border-ink/10 hover:border-gold bg-white/50 hover:bg-gold-subtle/20 transition-all duration-300 group"
                >
                  <Instagram className="h-6 w-6 text-pink-600 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-ink">Instagram</p>
                    <p className="text-sm text-ink/60">@{INSTAGRAM_HANDLE}</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-ink/40 ml-auto group-hover:translate-x-1 transition-transform" />
                </motion.a>

                <motion.a
                  whileHover={{ x: 5 }}
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-4 p-4 rounded-none border border-ink/10 hover:border-gold bg-white/50 hover:bg-gold-subtle/20 transition-all duration-300 group"
                >
                  <Mail className="h-6 w-6 text-blue-600 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-ink">Email</p>
                    <p className="text-sm text-ink/60">{EMAIL}</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-ink/40 ml-auto group-hover:translate-x-1 transition-transform" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
