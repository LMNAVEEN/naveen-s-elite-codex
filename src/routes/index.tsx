import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { CustomCursor } from "@/components/CustomCursor";
import { Intro } from "@/components/Intro";
import { TiltCard } from "@/components/TiltCard";
import { MagneticButton } from "@/components/MagneticButton";
import { Counter } from "@/components/Counter";
import { Reveal, MaskWipe } from "@/components/Reveal";

const HeroScene = lazy(() => import("@/components/HeroScene").then(m => ({ default: m.HeroScene })));
const TechOrbit = lazy(() => import("@/components/TechOrbit").then(m => ({ default: m.TechOrbit })));

export const Route = createFileRoute("/")({
  component: Index,
});

const SKILLS = [
  { name: "Java / Spring Boot", level: 90 },
  { name: "React / Redux", level: 85 },
  { name: "Spring Security / JWT", level: 82 },
  { name: "MySQL", level: 80 },
  { name: "Docker", level: 70 },
  { name: "REST APIs / Axios", level: 88 },
];

const TIMELINE = [
  { year: "2021", title: "B.Tech — AI & Data Science", desc: "Began the journey at the intersection of intelligence and engineering." },
  { year: "2024", title: "Hexaware Java Full Stack Program", desc: "Forged production-grade fundamentals across Spring Boot and React." },
  { year: "2025", title: "FastX — Bus Booking Platform", desc: "Architected role-based booking system end-to-end with PDF receipts." },
  { year: "2025", title: "Freelance on Fiverr", desc: "Building purposeful systems for clients worldwide." },
];

function SectionLabel({ n, label }: { n: string; label: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="font-mono text-xs text-[#e8394a] tracking-[0.3em]">{n}</span>
      <div className="h-px w-12 bg-[#e8394a]" />
      <span className="font-mono text-xs uppercase tracking-[0.3em] text-white/60">{label}</span>
    </div>
  );
}

function Divider() {
  return (
    <motion.div
      className="divider-sweep my-0"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: [0.2, 0.8, 0.2, 1] }}
    />
  );
}

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#0d0d10] text-white">
      <Intro />
      <CustomCursor />

      {/* NAV */}
      <header className="fixed left-0 right-0 top-0 z-50 px-6 md:px-12 py-5">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <a href="#hero" className="hoverable font-display text-sm font-bold tracking-[0.3em]">
            N<span className="text-[#e8394a]">.</span>LM
          </a>
          <nav className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-[0.25em] text-white/60">
            <a href="#about" className="hoverable hover:text-white transition-colors">About</a>
            <a href="#stack" className="hoverable hover:text-white transition-colors">Stack</a>
            <a href="#projects" className="hoverable hover:text-white transition-colors">Work</a>
            <a href="#stats" className="hoverable hover:text-white transition-colors">Journey</a>
            <a href="#contact" className="hoverable hover:text-white transition-colors">Contact</a>
          </nav>
          <div className="hidden md:flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-white/60">
            <span className="pulse-dot" />
            <span>Available</span>
          </div>
        </div>
      </header>

      {/* SIDE LABELS */}
      <div className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-3 font-mono text-[10px] uppercase tracking-[0.4em] text-white/40">
        <span className="vtext">Portfolio · 2026</span>
        <div className="h-16 w-px bg-white/20" />
      </div>

      {/* HERO */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <Suspense fallback={null}>
          <HeroScene />
        </Suspense>
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, transparent 30%, #0d0d10 90%)" }} />

        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 text-center">
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.8, duration: 0.8 }}
            className="font-mono text-xs uppercase tracking-[0.4em] text-[#e8394a] mb-6"
          >
            ▸ Classified · Developer File · 001
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.9, duration: 1 }}
            className="font-display text-6xl sm:text-8xl md:text-[10rem] font-bold leading-[0.9] tracking-tighter"
            style={{ textShadow: "0 0 60px rgba(232,57,74,0.3)" }}
          >
            NAVEEN <span className="text-[#e8394a]">L</span> M
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.2, duration: 0.8 }}
            className="mt-6 font-sans text-base md:text-xl text-white/70 max-w-2xl mx-auto"
          >
            Java Full Stack Developer <span className="text-[#e8394a]">·</span> AI &amp; Data Science Graduate
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 3.5, duration: 0.8 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <MagneticButton href="#projects">View My Work</MagneticButton>
            <MagneticButton href="https://www.fiverr.com" external variant="ghost">Hire Me on Fiverr</MagneticButton>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <motion.div
            className="h-10 w-px bg-gradient-to-b from-[#e8394a] to-transparent"
            animate={{ scaleY: [0, 1, 0], originY: 0 }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </section>

      <Divider />

      {/* ABOUT */}
      <section id="about" className="relative py-32 px-6 md:px-12">
        <div className="mx-auto max-w-7xl">
          <Reveal><SectionLabel n="01" label="Identity File" /></Reveal>
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <Reveal>
                <TiltCard className="aspect-[4/5] flex flex-col justify-between">
                  <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-white/50">
                    <span>SUBJECT-001</span>
                    <span className="text-[#e8394a]">● LIVE</span>
                  </div>
                  <div className="relative flex-1 flex items-center justify-center my-4">
                    <div className="relative h-48 w-48 md:h-56 md:w-56">
                      <div className="absolute inset-0 rounded-full" style={{ background: "var(--gradient-glow)" }} />
                      <div className="absolute inset-4 rounded-full border-2 border-[#e8394a]/40" />
                      <div className="absolute inset-8 rounded-full border border-white/20" />
                      <div className="absolute inset-0 flex items-center justify-center font-display text-7xl font-bold text-[#e8394a]" style={{ textShadow: "0 0 30px #e8394a" }}>
                        N
                      </div>
                      <svg className="absolute inset-0 animate-spin" style={{ animationDuration: "20s" }} viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="48" fill="none" stroke="rgba(232,57,74,0.3)" strokeWidth="0.3" strokeDasharray="2 4" />
                      </svg>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 font-mono text-[10px] uppercase tracking-wider">
                    <div><div className="text-white/40">Codename</div><div className="text-white">L.M.N</div></div>
                    <div><div className="text-white/40">Class</div><div className="text-white">Full Stack</div></div>
                    <div><div className="text-white/40">Origin</div><div className="text-white">B.Tech AI/DS</div></div>
                    <div><div className="text-white/40">Status</div><div className="text-[#e8394a]">Active</div></div>
                  </div>
                </TiltCard>
              </Reveal>
            </div>

            <div className="lg:col-span-7 space-y-8">
              <Reveal>
                <h2 className="font-display text-4xl md:text-6xl font-bold leading-[1]">
                  <MaskWipe>Built for the </MaskWipe>
                  <MaskWipe delay={0.1}><span className="text-[#e8394a]">long mission</span>.</MaskWipe>
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="text-white/70 leading-relaxed text-lg">
                  I'm Naveen — a Java Full Stack Developer trained at <span className="text-white">Hexaware Technologies</span>,
                  forged through B.Tech in AI &amp; Data Science. I build systems that don't just work — they endure.
                  Spring Boot on the back, React on the front, and zero tolerance for mediocrity in between.
                </p>
              </Reveal>

              <Reveal delay={0.3}>
                <div className="relative pl-6 my-10 border-l-2 border-[#e8394a]">
                  <p className="font-display text-xl md:text-2xl italic leading-snug text-white">
                    "If we don't believe in ourselves, we can't ask others to. <br/>
                    <span className="text-[#e8394a]">Devote your hearts.</span>"
                  </p>
                  <p className="mt-3 font-mono text-xs uppercase tracking-[0.3em] text-white/40">
                    — Erwin Smith · Operating Philosophy
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.4}>
                <div className="space-y-4">
                  {SKILLS.map((s, i) => (
                    <div key={s.name}>
                      <div className="flex justify-between font-mono text-xs uppercase tracking-wider mb-2">
                        <span className="text-white/80">{s.name}</span>
                        <span className="text-[#e8394a]">{s.level}%</span>
                      </div>
                      <div className="h-[3px] bg-white/5 overflow-hidden rounded-full">
                        <motion.div
                          className="h-full rounded-full"
                          style={{ background: "linear-gradient(90deg, #e8394a, #ff6b7a)", boxShadow: "0 0 10px #e8394a" }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${s.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, delay: i * 0.08, ease: [0.2, 0.8, 0.2, 1] }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* TECH STACK */}
      <section id="stack" className="relative py-32 px-6 md:px-12">
        <div className="mx-auto max-w-7xl">
          <Reveal><SectionLabel n="02" label="Arsenal" /></Reveal>
          <Reveal>
            <h2 className="font-display text-4xl md:text-6xl font-bold mb-4">The <span className="text-[#e8394a]">Stack</span>.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-white/60 max-w-xl mb-12">A weaponized toolkit — orbital, modular, battle-tested. Hover the nodes.</p>
          </Reveal>
          <Reveal delay={0.2}>
            <Suspense fallback={<div className="h-[520px] flex items-center justify-center text-white/30 font-mono text-xs">LOADING ORBIT...</div>}>
              <TechOrbit />
            </Suspense>
          </Reveal>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-4 font-mono text-xs uppercase tracking-wider">
            {["Backend", "Frontend", "Security", "Database", "DevOps"].map(c => (
              <div key={c} className="border border-white/10 px-4 py-3 text-center text-white/70 hover:border-[#e8394a] hover:text-white transition-colors hoverable">
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* PROJECTS */}
      <section id="projects" className="relative py-32 px-6 md:px-12">
        <div className="mx-auto max-w-7xl">
          <Reveal><SectionLabel n="03" label="Field Operations" /></Reveal>
          <Reveal>
            <h2 className="font-display text-4xl md:text-6xl font-bold mb-12">Selected <span className="text-[#e8394a]">work</span>.</h2>
          </Reveal>

          <Reveal>
            <TiltCard className="overflow-hidden p-0">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative aspect-[4/3] lg:aspect-auto bg-gradient-to-br from-[#1a0608] via-[#0d0d10] to-[#0d0d10] overflow-hidden">
                  <div className="absolute inset-0 opacity-40" style={{ backgroundImage: "linear-gradient(rgba(232,57,74,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(232,57,74,0.15) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="font-display text-7xl md:text-9xl font-bold text-[#e8394a]" style={{ textShadow: "0 0 60px rgba(232,57,74,0.6)" }}>
                      Fast<span className="text-white">X</span>
                    </div>
                    <div className="mt-4 font-mono text-[10px] uppercase tracking-[0.4em] text-white/50">▸ MISSION COMPLETE</div>
                  </div>
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-between">
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#e8394a] mb-3">Flagship Project</div>
                    <h3 className="font-display text-3xl md:text-5xl font-bold mb-4">FastX</h3>
                    <p className="text-white/70 leading-relaxed mb-6">
                      A full-stack bus booking platform with role-based access for Passengers, Operators, and Admins.
                      Cinematic seat selection UI, booking history with PDF download, and dedicated dashboards for operators and administrators.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {["Spring Boot", "React", "Redux", "JWT", "Spring Security", "MySQL", "Docker"].map(t => (
                        <span key={t} className="px-3 py-1 text-[10px] font-mono uppercase tracking-wider border border-white/15 rounded-full text-white/70">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <MagneticButton href="https://github.com/LMNAVEEN" external>View Code</MagneticButton>
                    <MagneticButton href="https://github.com/LMNAVEEN" external variant="ghost">Case Study</MagneticButton>
                  </div>
                </div>
              </div>
            </TiltCard>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {[
              { title: "Auth Microservice", desc: "JWT + refresh token flow with Spring Security and role guards.", tags: ["Spring", "JWT", "Redis"] },
              { title: "Dashboard System", desc: "Admin/Operator analytics dashboards with React + Redux Toolkit.", tags: ["React", "Redux", "Recharts"] },
            ].map((p, i) => (
              <Reveal key={p.title} delay={i * 0.1}>
                <TiltCard className="h-full group">
                  <div className="flex items-start justify-between mb-4">
                    <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">0{i + 2} / Module</div>
                    <div className="h-2 w-2 rounded-full bg-[#e8394a]" style={{ boxShadow: "0 0 10px #e8394a" }} />
                  </div>
                  <h3 className="font-display text-2xl font-bold mb-3">{p.title}</h3>
                  <p className="text-white/60 mb-6">{p.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map(t => (
                      <span key={t} className="px-2.5 py-1 text-[10px] font-mono uppercase border border-white/15 rounded-full text-white/60">{t}</span>
                    ))}
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* STATS / TIMELINE */}
      <section id="stats" className="relative py-32 px-6 md:px-12">
        <div className="mx-auto max-w-7xl">
          <Reveal><SectionLabel n="04" label="Telemetry" /></Reveal>
          <Reveal>
            <h2 className="font-display text-4xl md:text-6xl font-bold mb-12">By the <span className="text-[#e8394a]">numbers</span>.</h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {[
              { n: 400, suf: "+", label: "LeetCode Problems" },
              { n: 1, suf: "+", label: "Production Project" },
              { n: 2, suf: "+", label: "Years Building" },
            ].map((s, i) => (
              <Reveal key={s.label} delay={i * 0.1}>
                <TiltCard className="text-center py-12">
                  <div className="font-display text-6xl md:text-7xl font-bold text-[#e8394a]" style={{ textShadow: "0 0 30px rgba(232,57,74,0.5)" }}>
                    <Counter to={s.n} suffix={s.suf} />
                  </div>
                  <div className="mt-3 font-mono text-xs uppercase tracking-[0.3em] text-white/50">{s.label}</div>
                </TiltCard>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-10">Mission <span className="text-[#e8394a]">timeline</span>.</h3>
          </Reveal>
          <div className="relative">
            <div className="absolute left-3 md:left-1/2 top-0 bottom-0 w-px bg-white/10" />
            <div className="space-y-12">
              {TIMELINE.map((t, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <div className={`relative grid md:grid-cols-2 gap-8 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
                    <div className={`pl-10 md:pl-0 ${i % 2 ? "md:text-left md:pl-12" : "md:text-right md:pr-12"}`}>
                      <div className="font-mono text-xs text-[#e8394a] tracking-[0.3em] mb-2">{t.year}</div>
                      <h4 className="font-display text-2xl font-bold mb-2">{t.title}</h4>
                      <p className="text-white/60">{t.desc}</p>
                    </div>
                    <div className="hidden md:block" />
                    <div className="absolute left-3 md:left-1/2 -translate-x-1/2 top-2 h-3 w-3 rounded-full bg-[#e8394a]" style={{ boxShadow: "0 0 0 6px rgba(232,57,74,0.15), 0 0 20px #e8394a" }} />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* CONTACT */}
      <section id="contact" className="relative py-32 px-6 md:px-12">
        <div className="mx-auto max-w-5xl">
          <Reveal><SectionLabel n="05" label="Open Channel" /></Reveal>
          <Reveal>
            <h2 className="font-display text-5xl md:text-7xl font-bold mb-4 leading-[1]">
              Let's build something <span className="text-[#e8394a]">worth</span> remembering.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex items-center gap-3 mb-12 mt-6">
              <span className="pulse-dot" />
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-white/70">Available for Freelance</span>
            </div>
          </Reveal>

          <div className="grid lg:grid-cols-5 gap-10">
            <Reveal className="lg:col-span-3">
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                {[
                  { id: "name", label: "Identifier", type: "text", placeholder: "Your name" },
                  { id: "email", label: "Channel", type: "email", placeholder: "you@domain.com" },
                ].map(f => (
                  <div key={f.id}>
                    <label className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/50 mb-2 block">{f.label}</label>
                    <input
                      type={f.type}
                      placeholder={f.placeholder}
                      className="hoverable w-full bg-transparent border-b border-white/15 py-3 text-white placeholder-white/30 focus:border-[#e8394a] focus:outline-none transition-colors"
                      style={{ caretColor: "#e8394a" }}
                    />
                  </div>
                ))}
                <div>
                  <label className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/50 mb-2 block">Transmission</label>
                  <textarea
                    rows={4}
                    placeholder="Tell me about the mission..."
                    className="hoverable w-full bg-transparent border-b border-white/15 py-3 text-white placeholder-white/30 focus:border-[#e8394a] focus:outline-none transition-colors resize-none"
                    style={{ caretColor: "#e8394a" }}
                  />
                </div>
                <div className="pt-4">
                  <MagneticButton>Send Transmission</MagneticButton>
                </div>
              </form>
            </Reveal>

            <Reveal delay={0.2} className="lg:col-span-2">
              <TiltCard>
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/50 mb-6">Direct Channels</div>
                <div className="space-y-4">
                  {[
                    { label: "GitHub", val: "@LMNAVEEN", href: "https://github.com/LMNAVEEN" },
                    { label: "Fiverr", val: "Hire Me", href: "https://www.fiverr.com" },
                    { label: "LinkedIn", val: "Connect", href: "https://www.linkedin.com" },
                  ].map(s => (
                    <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="hoverable group flex items-center justify-between border-b border-white/10 py-3 hover:border-[#e8394a] transition-colors">
                      <span className="font-mono text-xs uppercase tracking-[0.3em] text-white/60 group-hover:text-white">{s.label}</span>
                      <span className="font-display text-base text-white group-hover:text-[#e8394a] transition-colors">
                        {s.val} →
                      </span>
                    </a>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-white/10">
                  <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40 mb-2">Off-Hours Encryption</div>
                  <p className="text-white/60 text-sm">MLBB · Anime — AOT, One Piece · Self-improvement</p>
                </div>
              </TiltCard>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-10 px-6 md:px-12">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">
          <div>© 2026 Naveen L M · Devote your heart.</div>
          <div className="flex items-center gap-6">
            <a href="https://github.com/LMNAVEEN" target="_blank" rel="noopener noreferrer" className="hoverable hover:text-[#e8394a] transition-colors">GitHub</a>
            <span>v1.0 · Classified</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
