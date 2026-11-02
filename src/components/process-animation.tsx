"use client";

import { DotLottieReact, setWasmUrl } from "@lottiefiles/dotlottie-react";
import { useEffect, useState } from "react";

setWasmUrl("/animations/dotlottie-player.wasm");

export function ProcessAnimation({ step }: { step: number }) {
  const [reducedMotion, setReducedMotion] = useState<boolean | null>(null);
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(preference.matches);
    update();
    preference.addEventListener("change", update);
    return () => preference.removeEventListener("change", update);
  }, []);
  return <div className="process-visual" aria-hidden="true">{reducedMotion !== null && <DotLottieReact key={String(reducedMotion)} src={`/animations/process-step-${step}.json`} autoplay={!reducedMotion} loop renderConfig={{ devicePixelRatio: 1.5, autoResize: true }} />}</div>;
}
