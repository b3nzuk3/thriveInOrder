"use client";
import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export const Accordion = AccordionPrimitive.Root;
export function AccordionItem({ className, ...props }: React.ComponentProps<typeof AccordionPrimitive.Item>) { return <AccordionPrimitive.Item className={cn("border-b border-border", className)} {...props} />; }
export function AccordionTrigger({ className, children, ...props }: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return <AccordionPrimitive.Header className="flex"><AccordionPrimitive.Trigger className={cn("group flex w-full flex-1 items-center justify-between gap-5 py-5 text-left font-medium transition-colors hover:text-[#477153] [&[data-state=open]>svg]:rotate-90", className)} {...props}>{children}<ArrowRight className="size-5 shrink-0 text-[#A67211] transition-transform duration-300" aria-hidden="true" /></AccordionPrimitive.Trigger></AccordionPrimitive.Header>;
}
export function AccordionContent({ className, children, ...props }: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return <AccordionPrimitive.Content className="accordion-content overflow-hidden" {...props}><div className={cn("pb-6 pt-0", className)}>{children}</div></AccordionPrimitive.Content>;
}
