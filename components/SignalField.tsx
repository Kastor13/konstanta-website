"use client";

import { useEffect, useRef } from "react";

/**
 * SignalField — animated ECU-grid overlay for the hero.
 *
 * Bright "signal" pulses travel up the vertical grid traces and fade out as
 * they climb, reading as data moving through the ECU board. Tuned to feel like
 * an oscilloscope sweep, not a particle toy.
 *
 * Theme-aware: colour is read live from the `--grid` token, so it follows
 * `[data-mode]`. Runs in DESIGN mode only (matches `.hero-aura`); cleared in
 * wireframe. Fully disabled under `prefers-reduced-motion`. Pauses when the tab
 * is hidden or the hero is scrolled out of view.
 */
const GRID = 44; // px — matches the static hero grid backgroundSize

export default function SignalField() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const root = document.documentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");

    let raf = 0;
    let running = false;
    let onScreen = true;
    let w = 0;
    let h = 0;

    type Pulse = {
      x: number; // grid column centre (CSS px)
      y: number; // head position (CSS px)
      speed: number;
      len: number; // trailing tail length
      life: number; // 0..1 fade envelope
      decay: number;
    };
    let pulses: Pulse[] = [];

    // Brand/grid colour as an OKLCH "L C H" triple, read from the live theme.
    let trip = "0.66 0.15 240";
    const readColor = () => {
      const v = getComputedStyle(root).getPropertyValue("--grid").trim();
      if (v) trip = v;
    };
    const ink = (a: number) => `oklch(${trip} / ${a})`;

    const columns = () => Math.max(1, Math.floor(w / GRID));
    // Keep the population light — perf budget over density.
    const target = () => Math.min(36, Math.floor(w / 55));

    // Recycle-spawn: always enters from below the fold (normal loop behaviour).
    const spawn = (p?: Pulse): Pulse => {
      const col = Math.floor(Math.random() * columns());
      const next = p ?? ({} as Pulse);
      next.x = col * GRID + GRID / 2;
      next.y = h + Math.random() * h * 0.35;
      next.speed = Math.random() * 0.8 + 0.45;
      next.len = Math.random() * 60 + 40;
      next.life = 0;
      next.decay = Math.random() * 0.004 + 0.003;
      return next;
    };

    // Seed particles distributed across the visible area with pre-warmed life
    // so the canvas is populated from the very first frame.
    const seed = (): Pulse => {
      const col = Math.floor(Math.random() * columns());
      return {
        x: col * GRID + GRID / 2,
        y: Math.random() * h,           // anywhere in the hero
        speed: Math.random() * 0.8 + 0.45,
        len: Math.random() * 60 + 40,
        life: Math.random() * 0.6 + 0.2, // already visible
        decay: Math.random() * 0.004 + 0.003,
      };
    };

    const resize = (initial = false) => {
      const r = canvas.getBoundingClientRect();
      w = r.width;
      h = r.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const t = target();
      // First load: seed all particles in-view so animation is instant.
      // Resize: top-up with below-fold spawns (avoids a jarring re-seed).
      while (pulses.length < t) pulses.push(initial ? seed() : spawn());
      if (pulses.length > t) pulses.length = t;
    };

    const frame = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of pulses) {
        p.y -= p.speed;
        if (p.life < 1) p.life = Math.min(1, p.life + 0.02); // ramp in
        if (p.y < h * 0.5) p.life -= p.decay * 5; // dissolve as it rises

        if (p.life <= 0 || p.y + p.len < 0) {
          spawn(p); // recycle in place
          continue;
        }

        const a = Math.max(0, p.life);

        // Trailing streak: bright head, fading tail below it.
        const g = ctx.createLinearGradient(0, p.y, 0, p.y + p.len);
        g.addColorStop(0, ink(0.5 * a));
        g.addColorStop(1, ink(0));
        ctx.fillStyle = g;
        ctx.fillRect(p.x - 0.5, p.y, 1, p.len);

        // Node glow at the head — a contact lighting up on the trace.
        ctx.fillStyle = ink(0.85 * a);
        ctx.fillRect(p.x - 1, p.y - 1, 2, 2);
      }
      raf = requestAnimationFrame(frame);
    };

    const eligible = () =>
      !reduce.matches &&
      !document.hidden &&
      onScreen &&
      root.getAttribute("data-mode") === "design";

    const start = () => {
      if (running || !eligible()) return;
      running = true;
      readColor();
      raf = requestAnimationFrame(frame);
    };

    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
      ctx.clearRect(0, 0, w, h);
    };

    const sync = () => (eligible() ? start() : stop());

    // --- observers & listeners -------------------------------------------
    const ro = new ResizeObserver(() => resize(false));
    ro.observe(canvas);

    const io = new IntersectionObserver(
      ([entry]) => {
        onScreen = entry.isIntersecting;
        sync();
      },
      { threshold: 0 }
    );
    io.observe(canvas);

    // React to theme toggle (data-mode flips on <html>).
    const mo = new MutationObserver(() => {
      readColor();
      sync();
    });
    mo.observe(root, { attributes: true, attributeFilter: ["data-mode"] });

    document.addEventListener("visibilitychange", sync);
    reduce.addEventListener("change", sync);

    resize(true);
    start();

    return () => {
      stop();
      ro.disconnect();
      io.disconnect();
      mo.disconnect();
      document.removeEventListener("visibilitychange", sync);
      reduce.removeEventListener("change", sync);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full opacity-80 mix-blend-screen"
      style={{
        maskImage:
          "radial-gradient(120% 120% at 50% 65%, #000 50%, transparent 100%)",
        WebkitMaskImage:
          "radial-gradient(120% 120% at 50% 65%, #000 50%, transparent 100%)",
      }}
    />
  );
}
