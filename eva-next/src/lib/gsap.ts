import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.config({
    // Fire callbacks at most once per RAF tick — prevents mobile CPU spikes
    // from queuing multiple overlapping triggers.
    limitCallbacks: true,

    // The iOS address bar changes window.innerHeight as it shows/hides.
    // Without this, ScrollTrigger refreshes on every small resize → pin jumps.
    ignoreMobileResize: true,
  });
}

export { gsap, ScrollTrigger };
