"use client";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowRight, Check, ChevronDown, Copy, Mail, Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { services, siteConfig } from "@/lib/content";

type Fields = { name: string; email: string; service: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;

export function EnquiryForm() {
  const [fields, setFields] = useState<Fields>({ name: "", email: "", service: "not-sure", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [prepared, setPrepared] = useState(false);
  const [copyStatus, setCopyStatus] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  useEffect(() => { const selected = new URLSearchParams(window.location.search).get("service"); if (services.some(service => service.id === selected)) setFields(previous => ({ ...previous, service: selected! })); }, []);
  useEffect(() => { if (prepared) previewRef.current?.focus(); }, [prepared]);
  const update = (field: keyof Fields, value: string) => { setFields(previous => ({ ...previous, [field]: value })); if (errors[field]) setErrors(previous => ({ ...previous, [field]: undefined })); };
  const serviceName = services.find(service => service.id === fields.service)?.title ?? "Help finding the right starting point";
  const subject = `Consultation enquiry — ${serviceName}`;
  const body = `Hello Thrive in Order,\n\nI'd love to talk about ${serviceName.toLowerCase()}.\n\n${fields.message.trim()}\n\nName: ${fields.name.trim()}\nEmail: ${fields.email.trim()}\n\nThank you!`;
  const mailto = `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  function prepare(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors: Errors = {};
    if (fields.name.trim().length < 2) nextErrors.name = "Please enter your name (at least 2 characters).";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim())) nextErrors.email = "Please enter a valid email address, such as name@example.com.";
    if (fields.message.trim().length < 10) nextErrors.message = "Tell us a little more about your space (at least 10 characters).";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) { requestAnimationFrame(() => formRef.current?.querySelector<HTMLElement>("[aria-invalid=true]")?.focus()); return; }
    setPrepared(true);
  }
  async function copyEnquiry() {
    try { await navigator.clipboard.writeText(`To: ${siteConfig.email}\nSubject: ${subject}\n\n${body}`); setCopyStatus("Enquiry copied. Paste it into your preferred email app."); }
    catch { setCopyStatus("Copy is unavailable here. Select and copy the draft below, or open your email app."); }
  }
  return <div className="enquiry-card"><AnimatePresence mode="wait" initial={false}>{!prepared ? <motion.form key="form" ref={formRef} onSubmit={prepare} noValidate initial={false} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: reduceMotion ? 0 : .15 }} aria-labelledby="enquiry-title"><h2 id="enquiry-title">Tell us a little about your home.</h2><p className="form-intro">You don’t need to have all the answers. A few details are a lovely place to start.</p><div className="form-two"><div className="field-group"><Label htmlFor="name">Your name <span aria-hidden="true">*</span></Label><Input id="name" name="name" autoComplete="name" required value={fields.name} onChange={event => update("name", event.target.value)} placeholder="Your name" aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined} />{errors.name && <p id="name-error" className="field-error">{errors.name}</p>}</div><div className="field-group"><Label htmlFor="email">Email address <span aria-hidden="true">*</span></Label><Input id="email" name="email" type="email" autoComplete="email" required value={fields.email} onChange={event => update("email", event.target.value)} placeholder="you@example.com" aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} />{errors.email && <p id="email-error" className="field-error">{errors.email}</p>}</div></div><div className="field-group"><Label htmlFor="service">What would you like help with?</Label><div className="select-wrap"><select id="service" className="form-field" name="service" value={fields.service} onChange={event => update("service", event.target.value)}><option value="not-sure">I’m not quite sure yet</option>{services.map(service => <option key={service.id} value={service.id}>{service.title}</option>)}</select><ChevronDown size={18} aria-hidden="true" /></div></div><div className="field-group"><Label htmlFor="message">A little about your space <span aria-hidden="true">*</span></Label><Textarea id="message" name="message" required value={fields.message} onChange={event => update("message", event.target.value)} placeholder="What would you love to feel easier at home?" maxLength={4000} aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-error" : "message-help"} />{errors.message ? <p id="message-error" className="field-error">{errors.message}</p> : <p id="message-help" className="field-help">Share what feels useful. You can leave personal or sensitive details out.</p>}</div><Button type="submit" size="lg">Prepare my enquiry <ArrowRight aria-hidden="true" /></Button><p className="form-footnote">Next, review your draft and send it from your own email app. Fields marked * are required.</p></motion.form> : <motion.div key="preview" ref={previewRef} tabIndex={-1} className="enquiry-preview" initial={{ opacity: reduceMotion ? 1 : .5 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} aria-labelledby="draft-title"><div className="draft-check"><Check size={22} aria-hidden="true" /></div><h2 id="draft-title">Your email draft is ready.</h2><p className="form-intro">Review your enquiry, then send it from your email app.</p><div className="draft-address"><span>To</span><strong>{siteConfig.email}</strong>{siteConfig.emailIsPlaceholder && <small>Placeholder address for this preview</small>}</div><p className="draft-subject">{subject}</p><pre className="draft-body">{body}</pre><div className="draft-actions"><Button asChild><a href={mailto}><Mail aria-hidden="true" />Open email app</a></Button><Button variant="outline" onClick={copyEnquiry}><Copy aria-hidden="true" />Copy enquiry</Button></div><p role="status" className="copy-status">{copyStatus}</p><button className="text-link edit-enquiry" onClick={() => { setPrepared(false); setCopyStatus(""); requestAnimationFrame(() => document.getElementById("name")?.focus()); }}><Pencil size={16} aria-hidden="true" />Edit my details</button></motion.div>}</AnimatePresence></div>;
}
