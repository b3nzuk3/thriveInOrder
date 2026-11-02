"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqs } from "@/lib/content";

export function FaqSection() {
  return <section id="faqs" className="section faq-section" aria-labelledby="faq-title"><div><h2 id="faq-title">A few things you<br />might be wondering.</h2><p className="section-copy">Asking for help can be a big first step. Here are a few answers to make it feel a little easier.</p><Link href="/contact/" className="text-link">Have another question? <ArrowRight size={18} aria-hidden="true" /></Link></div><Accordion type="single" collapsible className="faq-list">{faqs.map((faq, index) => <AccordionItem value={`faq-${index}`} key={faq.question}><AccordionTrigger>{faq.question}</AccordionTrigger><AccordionContent><p>{faq.answer}</p></AccordionContent></AccordionItem>)}</Accordion></section>;
}
