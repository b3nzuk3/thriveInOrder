"use client";
import { useEffect, useRef, useState } from "react";
import { DotLottieReact, setWasmUrl } from "@lottiefiles/dotlottie-react";
import { useInView, useReducedMotion } from "motion/react";
import { Sun } from "lucide-react";

setWasmUrl("/animations/dotlottie-player.wasm");

export default function BrighterAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "100px" });
  const reduceMotion = useReducedMotion();
  const [ready, setReady] = useState(false);
  useEffect(() => { setReady(true); }, []);
  return <div className="brighter-animation" ref={ref} aria-hidden="true">{ready && inView && !reduceMotion ? <DotLottieReact src="/animations/brighter-days.json" autoplay loop={false} renderConfig={{ devicePixelRatio: 1.5, autoResize: true }} /> : <Sun size={54} strokeWidth={1.25} />}</div>;
}
