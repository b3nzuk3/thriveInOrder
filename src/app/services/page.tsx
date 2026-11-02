import type { Metadata } from "next";
import { ServicesExplorer } from "@/components/services-explorer";
import { ConsultationClose } from "@/components/consultation-close";

export const metadata: Metadata = { title: "Our Services", description: "Explore personalized home organization, decluttering, laundry support, nursery setup, relocation support, and senior downsizing with Thrive in Order." };

export default function ServicesPage() {
  return <main id="main"><section className="page-intro olive-intro"><h1>Thoughtful support.<br />For every chapter.</h1><p>From everyday routines to life’s big changes, find practical help that meets you where you are.</p></section><ServicesExplorer /><ConsultationClose /></main>;
}
