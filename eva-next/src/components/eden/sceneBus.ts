// Lightweight channel between the pages and the WebGL scene, so pages can
// direct the particles without pulling three.js into their own bundle.
import type { ShapeName } from "./shapes";

export type SceneTarget = {
  shape: ShapeName;
  /** Horizontal placement on wide screens. Phones always center. */
  align?: "left" | "center" | "right";
  /** -1 (look at the bottom of the shape) … 1 (look at the top). */
  pan?: number;
  /** Extra brightness, 1 = normal. */
  glow?: number;
};

let last: SceneTarget = { shape: "apple", align: "right" };

export function setSceneTarget(target: SceneTarget) {
  last = { align: "right", glow: 1, pan: 0, ...target };
  window.dispatchEvent(new CustomEvent<SceneTarget>("eden:target", { detail: last }));
}

export function getSceneTarget(): SceneTarget {
  return last;
}
