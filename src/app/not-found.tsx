import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
export default function NotFound() { return <main id="main" className="not-found section"><h1>Let’s find your way home.</h1><p>This page has moved or isn’t available. Our services are a good place to start.</p><Button asChild size="lg"><Link href="/">Back to home <ArrowRight aria-hidden="true" /></Link></Button><Link className="text-link" href="/services/">Explore our services</Link></main>; }
