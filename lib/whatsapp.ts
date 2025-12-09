// WhatsApp integration helper functions

import { WHATSAPP_NUMBER } from "./constants";

export interface FormData {
  name?: string;
  phone?: string;
  artType?: string;
  message?: string;
}

export function generateWhatsAppMessage(data: FormData): string {
  let message = "Hi, I want to order a custom sketch.\n\n";
  
  if (data.name) {
    message += `Name: ${data.name}\n`;
  }
  if (data.phone) {
    message += `Phone: ${data.phone}\n`;
  }
  if (data.artType) {
    message += `Art Type: ${data.artType}\n`;
  }
  if (data.message) {
    message += `\nMessage: ${data.message}\n`;
  }
  
  return encodeURIComponent(message);
}

export function getWhatsAppUrl(data?: FormData): string {
  const message = data ? generateWhatsAppMessage(data) : encodeURIComponent("Hi, I want to order a custom sketch.");
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
}

export function redirectToWhatsApp(data?: FormData) {
  const url = getWhatsAppUrl(data);
  window.open(url, "_blank");
}

export function saveToLocalStorage(data: FormData) {
  if (typeof window !== "undefined") {
    const existing = localStorage.getItem("alokArtistryLeads");
    const leads = existing ? JSON.parse(existing) : [];
    leads.push({
      ...data,
      timestamp: new Date().toISOString(),
    });
    localStorage.setItem("alokArtistryLeads", JSON.stringify(leads));
  }
}

