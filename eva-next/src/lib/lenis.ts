import Lenis from "lenis";
import { gsap, ScrollTrigger } from "./gsap";

let instance: Lenis | null = null;
let tickerCallback: ((time: number) => void) | null = null;

// pointer: coarse = touchscreen (phone/tablet).
// pointer: fine   = mouse (desktop/laptop).
function isTouchDevice(): boolean {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(pointer: coarse)").matches
  );
}

export function initLenis(): Lenis {
  const touch = isTouchDevice();

  instance = new Lenis({
    // On touch devices, reduce duration so wheel-based easing is shorter.
    // Touch scroll stays native regardless (syncTouch: false is the default).
    duration: touch ? 0.6 : 1.2,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),

    // Smooth wheel events on desktop. On touch devices it doesn't matter
    // since wheel isn't the primary input, but we keep it consistent.
    smoothWheel: true,

    // syncTouch: false (Lenis default) — touch events go through native browser
    // momentum, not Lenis's RAF loop. This is correct: Lenis + ScrollTrigger
    // scrub both smoothing touch simultaneously = double lag = jitter.
    syncTouch: false,

    // touchMultiplier was 2 — caused overshoot on fast flicks.
    // 1 = native 1:1 touch sensitivity.
    touchMultiplier: 1,
  });

  // Keep ScrollTrigger's playhead in sync with Lenis position on every frame.
  instance.on("scroll", () => ScrollTrigger.update());

  // GSAP ticker drives Lenis RAF (ticker time = seconds, Lenis expects ms).
  tickerCallback = (time: number) => {
    instance!.raf(time * 1000);
  };
  gsap.ticker.add(tickerCallback);

  // Prevent GSAP from compensating for dropped frames — Lenis owns smoothing.
  gsap.ticker.lagSmoothing(0);

  return instance;
}

export function destroyLenis(): void {
  if (!instance) return;
  if (tickerCallback) {
    gsap.ticker.remove(tickerCallback);
    tickerCallback = null;
  }
  instance.destroy();
  instance = null;
}

export function getLenis(): Lenis | null {
  return instance;
}
