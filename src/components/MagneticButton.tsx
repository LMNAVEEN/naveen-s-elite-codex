import { useRef, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "ghost";
  onClick?: () => void;
  className?: string;
  external?: boolean;
};

export function MagneticButton({ children, href, variant = "primary", onClick, className = "", external }: Props) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);
    el.style.transform = `translate(${x * 0.25}px, ${y * 0.35}px)`;
  };
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "translate(0,0)";
  };

  const cls = `${variant === "primary" ? "btn-primary" : "btn-ghost"} hoverable ${className}`;
  const style = { transition: "transform 0.3s cubic-bezier(0.2,0.8,0.2,1), box-shadow 0.3s ease, border-color 0.3s ease" };

  if (href) {
    return (
      <a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={cls}
        style={style}
      >
        {children}
      </a>
    );
  }
  return (
    <button
      ref={ref as React.RefObject<HTMLButtonElement>}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onClick={onClick}
      className={cls}
      style={style}
    >
      {children}
    </button>
  );
}
