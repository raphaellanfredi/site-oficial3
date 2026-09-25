// Point clouds for the Eden scene. Every shape returns exactly `n` points so
// the scene can morph between them point by point.

export type ShapeName = "apple" | "chaos" | "tree" | "clock";

export type Shape = {
  positions: Float32Array;
  colors: Float32Array;
  sizes: Float32Array;
};

type RGB = [number, number, number];

const hex = (h: string): RGB => {
  const v = parseInt(h.slice(1), 16);
  return [((v >> 16) & 255) / 255, ((v >> 8) & 255) / 255, (v & 255) / 255];
};

const PINK = hex("#FF0080");
const ORANGE = hex("#FF6B00");
const CYAN = hex("#07DAFF");
const LEAF = hex("#2FCB7E");
const STEM = hex("#8A4A1C");
const PALE = hex("#9FB0A6");
const BARK = hex("#C9B8A6");

const mix = (a: RGB, b: RGB, t: number): RGB => [
  a[0] + (b[0] - a[0]) * t,
  a[1] + (b[1] - a[1]) * t,
  a[2] + (b[2] - a[2]) * t,
];

// Deterministic PRNG so the shapes look the same on every visit.
function rng(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function alloc(n: number): Shape {
  return {
    positions: new Float32Array(n * 3),
    colors: new Float32Array(n * 3),
    sizes: new Float32Array(n),
  };
}

function put(s: Shape, i: number, p: [number, number, number], c: RGB, size: number) {
  s.positions[i * 3] = p[0];
  s.positions[i * 3 + 1] = p[1];
  s.positions[i * 3 + 2] = p[2];
  s.colors[i * 3] = c[0];
  s.colors[i * 3 + 1] = c[1];
  s.colors[i * 3 + 2] = c[2];
  s.sizes[i] = size;
}

/** A whole apple: body, stem and leaf. Never a bitten one. */
export function apple(n: number): Shape {
  const s = alloc(n);
  const r = rng(7);
  const nStem = Math.round(n * 0.03);
  const nLeaf = Math.round(n * 0.08);
  const nBody = n - nStem - nLeaf;

  for (let i = 0; i < nBody; i++) {
    const phi = Math.acos(1 - 2 * r());
    const theta = r() * Math.PI * 2;
    const sp = Math.sin(phi);
    const cp = Math.cos(phi);
    const shell = 1 - 0.05 * r() * r();
    const taper = 1 - 0.16 * Math.max(0, -cp) ** 2;
    const rad = (1 + 0.06 * sp * sp) * taper * shell;
    let y = 1.05 * cp * shell;
    y -= 0.32 * Math.exp(-(phi * phi) / 0.1);
    y += 0.12 * Math.exp(-((Math.PI - phi) ** 2) / 0.08);
    y -= 0.05 * Math.cos(5 * theta) * Math.exp(-((Math.PI - phi) ** 2) / 0.4);
    const x = rad * sp * Math.cos(theta);
    const z = rad * sp * Math.sin(theta);
    // Ripe skin: pink on one cheek, orange towards the other.
    const t = Math.min(1, Math.max(0, 0.5 + 0.45 * Math.cos(theta - 0.6) * sp - 0.25 * y));
    const spark = r() < 0.025;
    put(s, i, [x, y, z], spark ? CYAN : mix(PINK, ORANGE, t), spark ? 1.7 : 0.8 + r() * 0.5);
  }

  for (let k = 0; k < nStem; k++) {
    const t = r();
    const j = () => (r() - 0.5) * 0.03;
    put(s, nBody + k, [0.1 * t * t + j(), 0.64 + 0.42 * t + j(), j()], STEM, 0.9);
  }

  const base: [number, number, number] = [0.05, 0.92, 0];
  const ang = (28 * Math.PI) / 180;
  const dir = [Math.cos(ang), Math.sin(ang), 0.25];
  const perp = [-Math.sin(ang), Math.cos(ang), 0.5];
  const L = 0.55;
  for (let k = 0; k < nLeaf; k++) {
    const a = r();
    const w = Math.sin(Math.PI * a) * 0.36 * (r() * 2 - 1);
    const curl = 0.08 * Math.sin(Math.PI * a);
    put(
      s,
      nBody + nStem + k,
      [
        base[0] + dir[0] * a * L + perp[0] * w * L * 0.5,
        base[1] + dir[1] * a * L + perp[1] * w * L * 0.5 + curl,
        base[2] + dir[2] * a * L + perp[2] * w * L * 0.5,
      ],
      mix(LEAF, hex("#1E8F57"), Math.abs(w) * 2),
      0.8,
    );
  }
  return s;
}

/** Scattered chat bubbles: the unanswered messages at 23h. */
export function chaos(n: number): Shape {
  const s = alloc(n);
  const r = rng(23);
  const bubbles = 46;
  const centers = Array.from({ length: bubbles }, () => ({
    x: (r() - 0.5) * 8.5,
    y: (r() - 0.5) * 5,
    z: -2.2 + r() * 3.2,
    w: 0.35 + r() * 0.45,
    h: 0.16 + r() * 0.08,
    rot: (r() - 0.5) * 0.5,
    hot: r() < 0.18,
  }));
  for (let i = 0; i < n; i++) {
    const b = centers[i % bubbles];
    let px: number;
    let py: number;
    if (r() < 0.12) {
      // tail of the bubble
      const t = r();
      px = -b.w / 2 + 0.05 + t * 0.08;
      py = -b.h / 2 - (1 - t) * 0.08;
    } else {
      const edge = r() < 0.55;
      if (edge) {
        const u = r() * 2 * (b.w + b.h);
        if (u < b.w) { px = -b.w / 2 + u; py = b.h / 2; }
        else if (u < b.w + b.h) { px = b.w / 2; py = b.h / 2 - (u - b.w); }
        else if (u < 2 * b.w + b.h) { px = b.w / 2 - (u - b.w - b.h); py = -b.h / 2; }
        else { px = -b.w / 2; py = -b.h / 2 + (u - 2 * b.w - b.h); }
      } else {
        // the "typed text" lines inside
        const line = Math.floor(r() * 2);
        px = -b.w / 2 + 0.06 + r() * (b.w - 0.12) * (line ? 0.6 : 1);
        py = (line ? -0.035 : 0.035);
      }
    }
    const c = Math.cos(b.rot);
    const sn = Math.sin(b.rot);
    put(
      s,
      i,
      [b.x + px * c - py * sn, b.y + px * sn + py * c, b.z + (r() - 0.5) * 0.02],
      b.hot ? mix(PINK, ORANGE, r()) : mix(PALE, hex("#55635B"), r()),
      0.55 + r() * 0.4,
    );
  }
  return s;
}

type Prim = { w: number; sample: () => { p: [number, number, number]; c: RGB; size: number } };

/** The tree of knowledge: cyan roots, pale trunk and branches, ripe fruit. */
export function tree(n: number): Shape {
  const s = alloc(n);
  const r = rng(11);
  const prims: Prim[] = [];
  type V = [number, number, number];
  const add = (a: V, b: V, t: number): V => [a[0] + b[0] * t, a[1] + b[1] * t, a[2] + b[2] * t];
  const norm = (v: V): V => {
    const l = Math.hypot(v[0], v[1], v[2]) || 1;
    return [v[0] / l, v[1] / l, v[2] / l];
  };

  const segment = (start: V, dir: V, len: number, radius: number, colorA: RGB, colorB: RGB) => {
    prims.push({
      w: len * (0.4 + radius * 12),
      sample: () => {
        const t = r();
        const ang = r() * Math.PI * 2;
        const rr = radius * Math.sqrt(r());
        const p = add(start, dir, t * len);
        return {
          p: [p[0] + Math.cos(ang) * rr, p[1] + (r() - 0.5) * rr * 0.5, p[2] + Math.sin(ang) * rr],
          c: mix(colorA, colorB, t),
          size: 0.6 + r() * 0.4,
        };
      },
    });
  };

  const turn = (dir: V, spread: number): V =>
    norm([dir[0] + (r() - 0.5) * spread, dir[1] + (r() - 0.5) * spread * 0.6, dir[2] + (r() - 0.5) * spread]);

  const branch = (start: V, dir: V, len: number, radius: number, depth: number) => {
    const bark = mix(BARK, hex("#EDE6DC"), 1 - depth / 6);
    segment(start, dir, len, radius, bark, bark);
    const end = add(start, dir, len);
    if (depth >= 5) {
      // leaves and, on some tips, a fruit
      prims.push({
        w: 0.35,
        sample: () => ({
          p: [end[0] + (r() - 0.5) * 0.3, end[1] + (r() - 0.5) * 0.22, end[2] + (r() - 0.5) * 0.3],
          c: mix(LEAF, hex("#1E8F57"), r()),
          size: 0.6 + r() * 0.5,
        }),
      });
      if (r() < 0.45) {
        prims.push({
          w: 0.3,
          sample: () => {
            const phi = Math.acos(1 - 2 * r());
            const th = r() * Math.PI * 2;
            const rad = 0.075;
            return {
              p: [end[0] + rad * Math.sin(phi) * Math.cos(th), end[1] - 0.08 + rad * Math.cos(phi), end[2] + rad * Math.sin(phi) * Math.sin(th)],
              c: mix(PINK, ORANGE, r()),
              size: 1.1 + r() * 0.5,
            };
          },
        });
      }
      return;
    }
    const kids = depth < 2 ? 3 : 2 + (r() < 0.4 ? 1 : 0);
    for (let k = 0; k < kids; k++) {
      branch(end, turn(dir, 1.3), len * (0.66 + r() * 0.12), radius * 0.62, depth + 1);
    }
  };

  const root = (start: V, dir: V, len: number, radius: number, depth: number) => {
    segment(start, dir, len, radius, mix(CYAN, BARK, 0.35), CYAN);
    if (depth >= 3) return;
    const end = add(start, dir, len);
    for (let k = 0; k < 2; k++) root(end, norm([dir[0] + (r() - 0.5) * 1.2, dir[1] - 0.2, dir[2] + (r() - 0.5) * 1.2]), len * 0.7, radius * 0.6, depth + 1);
  };

  const base: V = [0, -1.25, 0];
  segment(base, [0, 1, 0], 1.0, 0.09, mix(CYAN, BARK, 0.6), BARK);
  const top: V = [0, -0.25, 0];
  for (let k = 0; k < 3; k++) {
    const a = (k / 3) * Math.PI * 2 + r();
    branch(top, norm([Math.cos(a) * 0.7, 1, Math.sin(a) * 0.7]), 0.55, 0.055, 1);
  }
  for (let k = 0; k < 5; k++) {
    const a = (k / 5) * Math.PI * 2 + r() * 0.5;
    root(base, norm([Math.cos(a), -0.55, Math.sin(a)]), 0.42, 0.04, 1);
  }

  const total = prims.reduce((acc, p) => acc + p.w, 0);
  const cumulative: number[] = [];
  let acc = 0;
  for (const p of prims) { acc += p.w / total; cumulative.push(acc); }
  for (let i = 0; i < n; i++) {
    const u = r();
    let lo = 0;
    let hi = cumulative.length - 1;
    while (lo < hi) { const mid = (lo + hi) >> 1; if (cumulative[mid] < u) lo = mid + 1; else hi = mid; }
    const { p, c, size } = prims[lo].sample();
    put(s, i, [p[0], p[1] * 1.05, p[2]], c, size);
  }
  return s;
}

/** A 24-hour dial: the ring fills from pink to orange, with 24 hour marks. */
export function clock(n: number): Shape {
  const s = alloc(n);
  const r = rng(24);
  const R = 1.35;
  for (let i = 0; i < n; i++) {
    const u = r();
    if (u < 0.72) {
      const a = r() * Math.PI * 2;
      const rr = R + (r() - 0.5) * 0.09;
      const t = ((Math.PI / 2 - a + Math.PI * 4) % (Math.PI * 2)) / (Math.PI * 2);
      put(s, i, [Math.cos(a) * rr, Math.sin(a) * rr, (r() - 0.5) * 0.08], mix(PINK, ORANGE, t), 0.8 + r() * 0.4);
    } else if (u < 0.9) {
      const h = Math.floor(r() * 24);
      const a = Math.PI / 2 - (h / 24) * Math.PI * 2;
      const len = h % 6 === 0 ? 0.22 : 0.1;
      const d = R - 0.14 - r() * len;
      put(s, i, [Math.cos(a) * d, Math.sin(a) * d, 0], h % 6 === 0 ? CYAN : PALE, h % 6 === 0 ? 1.3 : 0.8);
    } else {
      // the hand, pointing at the go-live hour
      const t = r();
      const a = Math.PI / 2 - 0.12;
      put(s, i, [Math.cos(a) * t * R * 0.8, Math.sin(a) * t * R * 0.8, 0], CYAN, 0.9 + r() * 0.5);
    }
  }
  return s;
}

export function buildShapes(n: number): Record<ShapeName, Shape> {
  return { apple: apple(n), chaos: chaos(n), tree: tree(n), clock: clock(n) };
}
