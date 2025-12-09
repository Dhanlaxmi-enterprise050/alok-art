// Configuration constants - Uses environment variables with fallbacks

export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919876543210";
export const INSTAGRAM_HANDLE = process.env.NEXT_PUBLIC_INSTAGRAM_HANDLE || "alokartistry";
export const EMAIL = process.env.NEXT_PUBLIC_ARTIST_EMAIL || "artist@gmail.com";

// Pricing (starting from prices)
export const PRICING = {
  SINGLE_PORTRAIT: 1499,
  COUPLE: 2499,
  FAMILY_GROUP: 3999,
  DIGITAL_LINE_ART: 999,
  FULL_CUSTOM: 4999,
};

