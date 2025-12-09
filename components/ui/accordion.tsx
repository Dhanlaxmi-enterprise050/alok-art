"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItemProps {
  value: string;
  children: React.ReactNode;
}

interface AccordionContextType {
  openItem: string | null;
  setOpenItem: (value: string | null) => void;
}

const AccordionContext = React.createContext<AccordionContextType | undefined>(
  undefined
);

export function Accordion({
  children,
  defaultValue,
}: {
  children: React.ReactNode;
  defaultValue?: string;
}) {
  const [openItem, setOpenItem] = React.useState<string | null>(
    defaultValue || null
  );

  return (
    <AccordionContext.Provider value={{ openItem, setOpenItem }}>
      <div className="w-full">{children}</div>
    </AccordionContext.Provider>
  );
}

export function AccordionItem({ value, children }: AccordionItemProps) {
  const context = React.useContext(AccordionContext);
  if (!context) throw new Error("AccordionItem must be used within Accordion");

  const isOpen = context.openItem === value;

  return (
    <div className="border-b border-border last:border-b-0">
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            ...child.props,
            value,
            isOpen,
          } as any);
        }
        return child;
      })}
    </div>
  );
}

export function AccordionTrigger({
  children,
  value,
  isOpen,
}: {
  children: React.ReactNode;
  value: string;
  isOpen?: boolean;
}) {
  const context = React.useContext(AccordionContext);
  if (!context)
    throw new Error("AccordionTrigger must be used within Accordion");

  return (
    <button
      className="flex w-full items-center justify-between py-4 text-left font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180"
      onClick={() =>
        context.setOpenItem(context.openItem === value ? null : value)
      }
      data-state={isOpen ? "open" : "closed"}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </button>
  );
}

export function AccordionContent({
  children,
  value,
  isOpen,
}: {
  children: React.ReactNode;
  value: string;
  isOpen?: boolean;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden text-sm transition-all",
        isOpen ? "animate-accordion-down" : "animate-accordion-up"
      )}
    >
      <div className={cn("pb-4 pt-0", isOpen ? "block" : "hidden")}>
        {children}
      </div>
    </div>
  );
}

