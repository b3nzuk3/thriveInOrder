import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function SiteFooter() {
  return <footer className="site-footer"><div className="footer-main"><div><Link className="wordmark" href="/">thrive in order</Link><p>Organized Spaces, Brighter Days.</p></div><nav aria-label="Footer navigation"><Link href="/services/">Our services</Link><Link href="/#approach">Our approach</Link><Link href="/#faqs">FAQs</Link><Link href="/contact/">Let’s talk <ArrowUpRight size={16} aria-hidden="true" /></Link></nav></div><div className="footer-bottom"><p>© {new Date().getFullYear()} Thrive in Order</p><p>Thoughtful support. Room to thrive.</p><a href="#top">Back to top</a></div></footer>;
}
