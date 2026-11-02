import type { Metadata } from "next";
import { Check, Mail } from "lucide-react";
import { EnquiryForm } from "@/components/enquiry-form";
import { siteConfig } from "@/lib/content";

export const metadata: Metadata = { title: "Book a Consultation", description: "Tell Thrive in Order about your home and the support you are looking for. Start a conversation about your space and everyday routines." };

export default function ContactPage() {
  return <main id="main"><section className="contact-layout section"><div className="contact-intro"><h1>Let’s make room<br />for brighter days.</h1><p className="section-copy">A calmer home can begin with a simple conversation. Tell us what’s on your mind, whether it’s one small space or a whole new chapter.</p><div className="contact-practical"><h2>Start wherever you are.</h2><ul><li><Check size={18} aria-hidden="true" />No need to tidy up first.</li><li><Check size={18} aria-hidden="true" />You choose what matters most.</li><li><Check size={18} aria-hidden="true" />We’ll explore the next step together.</li></ul></div><div className="contact-email"><Mail size={20} aria-hidden="true" /><div><p>Prefer a simple email?</p><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>{siteConfig.emailIsPlaceholder && <small>Placeholder email · replace before launch</small>}</div></div><div className="contact-photo"><img src="/images/hero.webp" alt="A sunlit, thoughtfully arranged entryway." width={1448} height={1086} /></div></div><EnquiryForm /></section></main>;
}
