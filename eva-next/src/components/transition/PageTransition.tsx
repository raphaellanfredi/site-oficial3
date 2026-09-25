"use client";

import { useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import { gsap } from "@/lib/gsap";
import { getLenis } from "@/lib/lenis";
import s from "./transition.module.css";

/**
 * Curtain between pages. An internal link click raises a dark panel with a
 * ripe-fruit edge; the route changes behind it; the panel lifts away on the
 * new page. Lives in the root layout so it survives the navigation.
 */
export default function PageTransition() {
  const router = useRouter();
  const pathname = usePathname();
  const curtain = useRef<HTMLDivElement>(null);
  const covering = useRef(false);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!a || a.target === "_blank" || a.hasAttribute("download")) return;
      const url = new URL(a.href, window.location.href);
      if (url.origin !== window.location.origin) return;
      const samePage = url.pathname.replace(/\/$/, "") === window.location.pathname.replace(/\/$/, "");
      if (samePage) return; // anchors and query changes on the same page scroll normally
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const el = curtain.current;
      if (!el) return;

      e.preventDefault();
      covering.current = true;
      gsap.killTweensOf(el);
      gsap.set(el, { visibility: "visible", y: 0, yPercent: 100 });
      gsap.to(el, {
        yPercent: 0,
        duration: 0.65,
        ease: "expo.inOut",
        onComplete: () => router.push(url.pathname + url.search + url.hash),
      });
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [router]);

  useEffect(() => {
    const el = curtain.current;
    if (!el || !covering.current) return;
    covering.current = false;
    const lenis = getLenis();
    if (!window.location.hash) {
      lenis?.scrollTo(0, { immediate: true, force: true });
      window.scrollTo(0, 0);
    }
    gsap.to(el, {
      yPercent: -100,
      duration: 0.8,
      delay: 0.15,
      ease: "expo.inOut",
      onComplete: () => {
        gsap.set(el, { visibility: "hidden", y: 0, yPercent: 100 });
      },
    });
  }, [pathname]);

  return (
    <div ref={curtain} className={s.curtain} aria-hidden="true">
      <span className={s.edge} />
      <span className={s.mark}>Eva</span>
    </div>
  );
}
