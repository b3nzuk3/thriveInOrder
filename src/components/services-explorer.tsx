"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowRight, Check } from "lucide-react";
import { services } from "@/lib/content";

const filters = ["All services", "Everyday living", "Life changes"] as const;
type Filter = typeof filters[number];

// Illustrative spaces, not photographs of client projects.
const serviceImages: Record<string, string> = {
  "customized-systems": "/images/linen-cupboard.webp",
  "home-organization": "/images/photo-1556912172-45b7abe8b7e1.jpg",
  decluttering: "/images/photo-1600210492486-724fe5c67fb0.jpg",
  "laundry-support": "/images/linen-cupboard.webp",
  "nursery-baby": "/images/hero.webp",
  "moving-relocation": "/images/photo-1600607687939-ce8a6c25118c.jpg",
  "senior-downsizing": "/images/photo-1600210492486-724fe5c67fb0.jpg",
};

export function ServicesExplorer() {
  const [filter, setFilter] = useState<Filter>("All services");
  const [activeId, setActiveId] = useState<string>(services[0].id);
  const storiesRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const visible = services.filter(service => filter === "All services" || service.group === filter);
  const active = visible.find(service => service.id === activeId) ?? visible[0];

  useEffect(() => {
    const sections = Array.from(storiesRef.current?.querySelectorAll<HTMLElement>("[data-service-story]") ?? []);
    if (!("IntersectionObserver" in window)) return;
    const updateActive = () => {
      const readingLine = window.innerHeight * .42;
      let current = sections[0];
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= readingLine) current = section;
      }
      if (current) setActiveId(current.dataset.serviceStory ?? sections[0].id);
    };
    const observer = new IntersectionObserver(updateActive, { rootMargin: "-35% 0px -55% 0px", threshold: 0 });
    sections.forEach(section => observer.observe(section));
    updateActive();
    return () => observer.disconnect();
  }, [filter]);

  function selectFilter(next: Filter) {
    setActiveId(services.find(service => next === "All services" || service.group === next)?.id ?? services[0].id);
    setFilter(next);
  }

  return (
    <section className="section services-explorer" aria-label="Explore services">
      <div className="service-filter" role="group" aria-label="Filter services">
        {filters.map(label => <button key={label} aria-pressed={filter === label} onClick={() => selectFilter(label)}>{label}</button>)}
      </div>
      <p className="filter-count" aria-live="polite">{visible.length} {visible.length === 1 ? "service" : "services"} to explore</p>
      <div className="service-story-layout">
        <aside className="service-story-visual" aria-hidden="true">
          <div className="service-story-frame">
            <AnimatePresence initial={false}>
              <motion.img key={active.id} src={serviceImages[active.id]} alt="" initial={reduceMotion ? false : { opacity: 0, scale: 1.035, clipPath: "inset(0 0 4% 0)" }} animate={{ opacity: 1, scale: 1, clipPath: "inset(0 0 0% 0)" }} exit={{ opacity: 0 }} transition={{ duration: reduceMotion ? 0 : .6, ease: [0.16, 1, 0.3, 1] }} />
            </AnimatePresence>
          </div>
          <div className="service-story-caption"><span>{active.title}</span><div className="service-story-progress">{visible.map(service => <i key={service.id} className={service.id === active.id ? "is-active" : ""} />)}</div></div>
        </aside>
        <div className="service-details" ref={storiesRef}>
          {visible.map(service => <article key={service.id} id={service.id} data-service-story={service.id} className="service-detail">
            <div className="service-story-mobile-image" aria-hidden="true"><img src={serviceImages[service.id]} alt="" loading="lazy" /></div>
            <div><h2>{service.title}</h2><p className="service-short">{service.short}</p></div>
            <div><p className="section-copy service-description">{service.description}</p><div className="practical-panel"><h3>Support can include</h3><ul>{service.includes.map(item => <li key={item}><Check size={17} strokeWidth={1.6} aria-hidden="true" />{item}</li>)}</ul></div><Link href={`/contact/?service=${service.id}`} className="text-link">Let’s talk about your space <ArrowRight size={18} aria-hidden="true" /></Link></div>
          </article>)}
        </div>
      </div>
    </section>
  );
}
