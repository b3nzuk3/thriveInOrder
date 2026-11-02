"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => { const close = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); }; document.addEventListener("keydown", close); return () => document.removeEventListener("keydown", close); }, []);
  return <><a className="skip-link" href="#main">Skip to content</a><header className="site-header"><div className="header-inner"><Link className="wordmark" href="/" aria-label="Thrive in Order home">thrive in order</Link><nav className="desktop-nav" aria-label="Main navigation"><Link href="/services/" aria-current={pathname === "/services/" ? "page" : undefined}>Services</Link><Link href="/#approach">Our approach</Link><Link href="/#faqs">FAQs</Link><Button asChild><Link href="/contact/">Book a consultation</Link></Button></nav><button className="mobile-menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Close menu" : "Open menu"}>{open ? <X /> : <Menu />}</button></div>{open && <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation"><Link href="/services/" onClick={() => setOpen(false)}>Services</Link><Link href="/#approach" onClick={() => setOpen(false)}>Our approach</Link><Link href="/#faqs" onClick={() => setOpen(false)}>FAQs</Link><Button asChild><Link href="/contact/" onClick={() => setOpen(false)}>Book a consultation</Link></Button></nav>}</header></>;
}
