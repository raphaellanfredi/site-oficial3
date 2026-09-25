"use client";

import { useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { SplitText } from "gsap/SplitText";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { setSceneTarget, type SceneTarget } from "./sceneBus";
import s from "./eden.module.css";

/**
 * Motion shared by every page, driven by data attributes:
 * - data-scene='{"shape":"apple"}'  the particles take this shape while the section is on screen
 * - data-hero-title / data-hero-fade  entrance on load
 * - data-reveal  headline revealed line by line
 * - data-fade    block rises in
 * - data-count="300" data-decimals="1"  number counts up
 * - data-growth + data-vine + data-stage  vine drawn through a list of stages
 *
 * Page-specific choreography runs in the page's own effect; this hook runs
 * after it (parents' effects run after children's) and re-sorts every
 * ScrollTrigger so pinned sections are measured first.
 */
export function useEdenMotion(root: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText, DrawSVGPlugin);
    const el = root.current;
    if (!el) return;

    const fine = window.matchMedia("(pointer: fine)").matches;
    const onMove = (e: PointerEvent) => {
      el.style.setProperty("--mx", `${e.clientX}px`);
      el.style.setProperty("--my", `${e.clientY}px`);
      // Cards marked data-spot get a glow that follows the cursor.
      const card = (e.target as Element | null)?.closest?.("[data-spot]") as HTMLElement | null;
      if (card) {
        const r = card.getBoundingClientRect();
        card.style.setProperty("--cx", `${e.clientX - r.left}px`);
        card.style.setProperty("--cy", `${e.clientY - r.top}px`);
      }
    };
    if (fine) window.addEventListener("pointermove", onMove, { passive: true });

    const scenes = Array.from(el.querySelectorAll<HTMLElement>("[data-scene]"));
    if (scenes[0]) setSceneTarget(JSON.parse(scenes[0].dataset.scene || "{}") as SceneTarget);

    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      scenes.forEach((sec) => {
        const target = JSON.parse(sec.dataset.scene || "{}") as SceneTarget;
        ScrollTrigger.create({
          trigger: sec,
          start: "top 60%",
          end: "bottom 40%",
          onToggle: (self) => self.isActive && setSceneTarget(target),
        });
      });

      const heroTitle = el.querySelector<HTMLElement>("[data-hero-title]");
      if (heroTitle) {
        const split = SplitText.create(heroTitle, { type: "lines", mask: "lines", linesClass: s.line });
        gsap
          .timeline({ delay: 0.2 })
          .from(split.lines, { yPercent: 110, duration: 1.3, stagger: 0.12, ease: "expo.out" })
          .from(el.querySelectorAll("[data-hero-fade]"), { opacity: 0, y: 24, duration: 1, stagger: 0.08, ease: "power3.out" }, "-=0.9");
      }

      el.querySelectorAll<HTMLElement>("[data-reveal]").forEach((h) => {
        SplitText.create(h, {
          type: "lines",
          mask: "lines",
          linesClass: s.line,
          autoSplit: true,
          onSplit: (self) =>
            gsap.from(self.lines, {
              yPercent: 110,
              duration: 1.2,
              stagger: 0.1,
              ease: "expo.out",
              scrollTrigger: { trigger: h, start: "top 88%" },
            }),
        });
      });

      gsap.utils.toArray<HTMLElement>(el.querySelectorAll("[data-fade]")).forEach((f) => {
        gsap.from(f, { opacity: 0, y: 32, duration: 1, ease: "power3.out", scrollTrigger: { trigger: f, start: "top 90%" } });
      });

      el.querySelectorAll<HTMLElement>("[data-count]").forEach((c) => {
        const to = Number(c.dataset.count);
        const dec = Number(c.dataset.decimals || 0);
        const st = { v: 0 };
        gsap.to(st, {
          v: to,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: { trigger: c, start: "top 92%" },
          onUpdate: () => {
            c.textContent = st.v.toLocaleString("pt-BR", { minimumFractionDigits: dec, maximumFractionDigits: dec });
          },
        });
      });

      el.querySelectorAll<HTMLElement>("[data-growth]").forEach((growth) => {
        const vine = growth.querySelector<SVGPathElement>("[data-vine]");
        if (vine) {
          gsap.fromTo(
            vine,
            { drawSVG: "0%" },
            { drawSVG: "100%", ease: "none", scrollTrigger: { trigger: growth, start: "top 65%", end: "bottom 55%", scrub: 0.6 } },
          );
        }
        growth.querySelectorAll<HTMLElement>("[data-stage]").forEach((st) => {
          ScrollTrigger.create({
            trigger: st,
            start: "top 62%",
            onEnter: () => st.classList.add(s.stageOn),
            onLeaveBack: () => st.classList.remove(s.stageOn),
          });
        });
      });

      ScrollTrigger.sort();
      ScrollTrigger.refresh();
    });

    // Web fonts change line lengths; re-measure once they are in.
    document.fonts?.ready.then(() => ScrollTrigger.refresh());

    return () => {
      mm.revert();
      if (fine) window.removeEventListener("pointermove", onMove);
    };
  }, [root]);
}
