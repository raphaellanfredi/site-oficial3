"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { buildShapes } from "./shapes";
import { getSceneTarget, type SceneTarget } from "./sceneBus";

const vertex = /* glsl */ `
  attribute float aSize;
  attribute float aSeed;
  attribute vec3 aColor;
  uniform float uTime;
  uniform float uPixelRatio;
  uniform float uScale;
  uniform vec3 uMouse;
  uniform float uMotion;
  varying vec3 vColor;
  varying float vAlpha;
  void main() {
    vec3 p = position;
    // slow breathing so the cloud never looks frozen
    p += normalize(p + 0.0001) * 0.018 * sin(uTime * 1.2 + aSeed * 40.0) * uMotion;
    vec4 world = modelMatrix * vec4(p, 1.0);
    // particles part around the cursor
    vec3 d = world.xyz - uMouse;
    float dist = length(d.xy);
    float push = smoothstep(0.75, 0.0, dist) * 0.45 * uMotion;
    world.xy += normalize(d.xy + 0.0001) * push;
    vec4 mv = viewMatrix * world;
    gl_Position = projectionMatrix * mv;
    gl_PointSize = min(aSize * uScale * uPixelRatio * (7.0 / -mv.z), 18.0 * uPixelRatio);
    vColor = aColor;
    vAlpha = 0.55 + 0.45 * sin(uTime * 2.0 + aSeed * 12.0) * uMotion;
  }
`;

const fragment = /* glsl */ `
  uniform float uGlow;
  varying vec3 vColor;
  varying float vAlpha;
  void main() {
    float d = length(gl_PointCoord - 0.5);
    float a = smoothstep(0.5, 0.0, d);
    a = pow(a, 1.6);
    gl_FragColor = vec4(vColor * uGlow, a * vAlpha);
  }
`;

const fireflyVertex = /* glsl */ `
  attribute float aSeed;
  uniform float uTime;
  uniform float uPixelRatio;
  uniform float uMotion;
  varying float vAlpha;
  void main() {
    vec3 p = position;
    float t = uTime * 0.25 * uMotion;
    p.x += sin(t + aSeed * 31.0) * 0.6;
    p.y += cos(t * 0.8 + aSeed * 17.0) * 0.4;
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = (2.0 + aSeed * 3.0) * uPixelRatio * (7.0 / -mv.z);
    vAlpha = 0.25 + 0.75 * pow(0.5 + 0.5 * sin(uTime * 1.7 + aSeed * 50.0), 3.0);
  }
`;

const fireflyFragment = /* glsl */ `
  varying float vAlpha;
  void main() {
    float d = length(gl_PointCoord - 0.5);
    float a = pow(smoothstep(0.5, 0.0, d), 2.0);
    gl_FragColor = vec4(0.03, 0.85, 1.0, a * vAlpha);
  }
`;

export default function EdenScene() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const phone = window.matchMedia("(max-width: 760px)").matches;
    const N = phone ? 5200 : 9000;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true, powerPreference: "high-performance" });
    } catch {
      host.dataset.fallback = "true";
      return;
    }
    const dpr = Math.min(window.devicePixelRatio || 1, phone ? 1.5 : 1.75);
    renderer.setPixelRatio(dpr);
    renderer.setClearColor(0x000000, 0);
    host.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 50);
    camera.position.set(0, 0, 6.5);

    const shapes = buildShapes(N);
    const current = new Float32Array(shapes.apple.positions);
    const currentColor = new Float32Array(shapes.apple.colors);
    const currentSize = new Float32Array(shapes.apple.sizes);
    const seeds = new Float32Array(N);
    const speed = new Float32Array(N);
    for (let i = 0; i < N; i++) {
      seeds[i] = Math.random();
      speed[i] = 0.025 + Math.random() * 0.05;
    }

    // Start as scattered dust and gather into the apple on load.
    if (!reduced) {
      for (let i = 0; i < N; i++) {
        current[i * 3] = (Math.random() - 0.5) * 9;
        current[i * 3 + 1] = (Math.random() - 0.5) * 6;
        current[i * 3 + 2] = (Math.random() - 0.5) * 2;
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(current, 3));
    geometry.setAttribute("aColor", new THREE.BufferAttribute(currentColor, 3));
    geometry.setAttribute("aSize", new THREE.BufferAttribute(currentSize, 1));
    geometry.setAttribute("aSeed", new THREE.BufferAttribute(seeds, 1));

    const uniforms = {
      uTime: { value: 0 },
      uPixelRatio: { value: dpr },
      uScale: { value: phone ? 3.2 : 3.6 },
      uMouse: { value: new THREE.Vector3(99, 99, 0) },
      uMotion: { value: reduced ? 0 : 1 },
      uGlow: { value: 1 },
    };
    const material = new THREE.ShaderMaterial({
      vertexShader: vertex,
      fragmentShader: fragment,
      uniforms,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const group = new THREE.Group();
    group.add(new THREE.Points(geometry, material));
    scene.add(group);

    // Fireflies: the Eva IA working in the garden.
    const F = phone ? 70 : 140;
    const fpos = new Float32Array(F * 3);
    const fseed = new Float32Array(F);
    for (let i = 0; i < F; i++) {
      fpos[i * 3] = (Math.random() - 0.5) * 12;
      fpos[i * 3 + 1] = (Math.random() - 0.5) * 7;
      fpos[i * 3 + 2] = -3 + Math.random() * 4;
      fseed[i] = Math.random();
    }
    const fgeo = new THREE.BufferGeometry();
    fgeo.setAttribute("position", new THREE.BufferAttribute(fpos, 3));
    fgeo.setAttribute("aSeed", new THREE.BufferAttribute(fseed, 1));
    const fmat = new THREE.ShaderMaterial({
      vertexShader: fireflyVertex,
      fragmentShader: fireflyFragment,
      uniforms: { uTime: uniforms.uTime, uPixelRatio: uniforms.uPixelRatio, uMotion: uniforms.uMotion },
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    scene.add(new THREE.Points(fgeo, fmat));

    let target: SceneTarget = getSceneTarget();
    let tPos = shapes[target.shape].positions;
    let tCol = shapes[target.shape].colors;
    let tSize = shapes[target.shape].sizes;
    const place = { x: 0, y: 0, s: 1, glow: 1 };
    const goal = { x: 0, y: 0, s: 1, glow: 1 };
    let settled = false;

    const visible = () => {
      const h = 2 * camera.position.z * Math.tan((camera.fov * Math.PI) / 360);
      return { h, w: h * camera.aspect };
    };

    const layout = () => {
      const { w, h } = visible();
      const narrow = w < 4.2;
      const size = target.shape === "tree" ? 3.9 : target.shape === "chaos" ? 2.2 : 2.3;
      const fit = target.shape === "chaos" ? 1 : Math.min(1, (h * 0.86) / size, (w * (narrow ? 0.8 : 0.5)) / 2.4);
      goal.s = fit * (narrow && target.shape !== "chaos" ? 0.92 : 1);
      if (narrow) {
        goal.x = 0;
        goal.y = target.shape === "tree" ? 0 : target.shape === "chaos" ? 0 : h * 0.2;
      } else {
        goal.x = target.align === "left" ? -w * 0.24 : target.align === "center" ? 0 : w * 0.24;
        goal.y = 0;
      }
      if (target.shape === "tree") goal.y += -(target.pan ?? 0) * 1.1 * goal.s;
      goal.glow = target.glow ?? 1;
    };

    const onTarget = (e: Event) => {
      const next = (e as CustomEvent<SceneTarget>).detail;
      target = next;
      const shape = shapes[target.shape];
      tPos = shape.positions;
      tCol = shape.colors;
      tSize = shape.sizes;
      settled = false;
      layout();
    };
    window.addEventListener("eden:target", onTarget);

    const resize = () => {
      const w = host.clientWidth;
      const h = host.clientHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      layout();
      settled = false;
    };
    resize();
    window.addEventListener("resize", resize);

    const mouse = { x: 0, y: 0, active: false };
    const ray = new THREE.Raycaster();
    const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
    const hit = new THREE.Vector3();
    const onMove = (e: PointerEvent) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
      mouse.active = e.pointerType === "mouse";
    };
    window.addEventListener("pointermove", onMove, { passive: true });

    let raf = 0;
    let last = performance.now();
    let running = true;
    const tick = (now: number) => {
      raf = requestAnimationFrame(tick);
      if (!running) return;
      // Capped so a stalled tab does not jump, but loose enough that slow
      // devices still finish the morph in about the same wall-clock time.
      const dt = Math.min(0.12, (now - last) / 1000);
      last = now;
      uniforms.uTime.value += dt;

      if (!settled) {
        let moving = 0;
        const f = reduced ? 1 : dt * 60;
        for (let i = 0; i < N; i++) {
          const k = reduced ? 1 : 1 - Math.pow(1 - speed[i], f);
          const i3 = i * 3;
          for (let a = 0; a < 3; a++) {
            const d = tPos[i3 + a] - current[i3 + a];
            current[i3 + a] += d * k;
            currentColor[i3 + a] += (tCol[i3 + a] - currentColor[i3 + a]) * k;
            if (d > 0.002 || d < -0.002) moving++;
          }
          currentSize[i] += (tSize[i] - currentSize[i]) * k;
        }
        geometry.attributes.position.needsUpdate = true;
        (geometry.attributes.aColor as THREE.BufferAttribute).needsUpdate = true;
        (geometry.attributes.aSize as THREE.BufferAttribute).needsUpdate = true;
        if (moving === 0) settled = true;
      }

      const ease = reduced ? 1 : Math.min(1, dt * 3);
      place.x += (goal.x - place.x) * ease;
      place.y += (goal.y - place.y) * ease;
      place.s += (goal.s - place.s) * ease;
      place.glow += (goal.glow - place.glow) * ease;
      group.position.set(place.x, place.y, 0);
      group.scale.setScalar(place.s);
      uniforms.uGlow.value = place.glow;

      if (!reduced) {
        const spin = target.shape === "chaos" ? 0.02 : 0.18;
        group.rotation.y += dt * spin;
        const tiltX = mouse.y * 0.18;
        group.rotation.x += (tiltX - group.rotation.x) * Math.min(1, dt * 2);
      }

      if (mouse.active) {
        ray.setFromCamera(new THREE.Vector2(mouse.x, mouse.y), camera);
        if (ray.ray.intersectPlane(plane, hit)) uniforms.uMouse.value.copy(hit);
      }

      renderer.render(scene, camera);
    };
    raf = requestAnimationFrame(tick);

    const onVisibility = () => {
      running = document.visibilityState === "visible";
      last = performance.now();
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("eden:target", onTarget);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("visibilitychange", onVisibility);
      geometry.dispose();
      material.dispose();
      fgeo.dispose();
      fmat.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return <div ref={hostRef} className="eden-scene" aria-hidden="true" />;
}
