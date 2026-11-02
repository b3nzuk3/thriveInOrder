"use client";
import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowRight, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

const BrighterAnimation = dynamic(() => import("@/components/brighter-animation"), { ssr: false, loading: () => <div className="brighter-animation" aria-hidden="true"><Sun size={54} strokeWidth={1.25} /></div> });

export function ConsultationClose() {
  return <section className="consultation-close" aria-labelledby="close-title"><div><BrighterAnimation /><h2 id="close-title">Make space for<br />brighter days.</h2></div><div className="close-copy"><p>You don’t have to figure it all out at once. Tell us a little about your home, and let’s find a starting point together.</p><Button asChild variant="secondary" size="lg"><Link href="/contact/">Book a consultation <ArrowRight aria-hidden="true" /></Link></Button></div></section>;
}
