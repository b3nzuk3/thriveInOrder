"use client";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroSource from "../../assets/plates/hero-photo.png";

export function Hero() {
  const reduceMotion = useReducedMotion();
  return <section className="home-hero" aria-labelledby="home-title"><div className="hero-copy"><h1 id="home-title"><span>Organized Spaces,</span><br /><span>Brighter Days.</span></h1><p className="hero-tagline">A little order. A lot more room to live.</p><p className="hero-description">Personalized home organizing and everyday support,<br className="wide-only" /> built around you and the way you live.</p><div className="hero-actions"><Button asChild size="lg"><Link href="/contact/">Book a consultation</Link></Button><a className="text-link" href="#services">Explore our services <ArrowRight size={21} aria-hidden="true" /></a></div><p className="hero-reassurance">A fresh start, at your pace.</p></div><motion.picture className="hero-photo" initial={reduceMotion ? false : { clipPath: "inset(0 3% 0 0 round 16px 0 0 16px)" }} animate={{ clipPath: "inset(0 0% 0 0 round 16px 0 0 16px)" }} transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}><source srcSet="/images/hero.webp" type="image/webp" /><img src={heroSource.src} alt="Sunlight falls across an oak entryway console with a woven storage basket and neatly folded blankets." width={1448} height={1086} fetchPriority="high" /></motion.picture></section>;
}
