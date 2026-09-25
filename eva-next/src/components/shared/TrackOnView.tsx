"use client";

import { useEffect, useRef } from "react";
import { track } from "@/lib/analytics";

// Invisible marker: sends the event once, the first time it enters the screen.
export default function TrackOnView({ event }: { event: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      track(event, { pagina: window.location.pathname });
      obs.disconnect();
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, [event]);

  return <div ref={ref} aria-hidden="true" style={{ height: 1 }} />;
}
