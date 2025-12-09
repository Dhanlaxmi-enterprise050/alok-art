"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQ[];
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  return (
    <Accordion defaultValue={faqs[0]?.question}>
      {faqs.map((faq, index) => (
        <AccordionItem key={index} value={faq.question}>
          <AccordionTrigger value={faq.question}>
            {faq.question}
          </AccordionTrigger>
          <AccordionContent value={faq.question}>
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

