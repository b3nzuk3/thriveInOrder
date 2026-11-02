"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { services } from "@/lib/content";

export function ServiceList() {
  return <Accordion type="single" collapsible className="service-list">{services.map(service => <AccordionItem key={service.id} value={service.id}><AccordionTrigger>{service.title}</AccordionTrigger><AccordionContent><p>{service.description}</p><Link className="text-link service-enquire" href={`/contact/?service=${service.id}`}>Ask about this service <ArrowRight size={17} aria-hidden="true" /></Link></AccordionContent></AccordionItem>)}</Accordion>;
}
