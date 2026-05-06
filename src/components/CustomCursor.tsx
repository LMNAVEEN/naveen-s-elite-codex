import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    let mx = 0, my = 0, rx = 0, ry = 0;
    const move = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mx - 4}px, ${my - 4}px, 0)`;
      }
    };
    const tick = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${rx - 18}px, ${ry - 18}px, 0) scale(${hover ? 1.8 : 1})`;
      }
      raf = requestAnimationFrame(tick);
    };

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHover(!!t.closest("a, button, .hoverable, input, textarea"));
    };

    let raf = requestAnimationFrame(tick);
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", onOver);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", onOver);
    };
  }, [hover]);

  return (
    <>
      <div
        ref={dotRef}
        className="custom-cursor pointer-events-none fixed left-0 top-0 z-[200] h-2 w-2 rounded-full"
        style={{ background: "#e8394a", boxShadow: "0 0 12px #e8394a, 0 0 24px #e8394a" }}
      />
      <div
        ref={ringRef}
        className="custom-cursor pointer-events-none fixed left-0 top-0 z-[199] h-9 w-9 rounded-full border transition-[transform] duration-150"
        style={{ borderColor: "rgba(232,57,74,0.6)", transitionProperty: "border-color, opacity" }}
      />
    </>
  );
}
