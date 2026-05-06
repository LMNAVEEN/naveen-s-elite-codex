import { Canvas, useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import { useRef, useState } from "react";
import * as THREE from "three";

const TECH = [
  { name: "Spring Boot", cat: "Backend" },
  { name: "Java", cat: "Backend" },
  { name: "React", cat: "Frontend" },
  { name: "Redux", cat: "Frontend" },
  { name: "JWT", cat: "Security" },
  { name: "Spring Security", cat: "Security" },
  { name: "MySQL", cat: "Database" },
  { name: "Docker", cat: "DevOps" },
  { name: "Axios", cat: "Frontend" },
];

function Orbit() {
  const group = useRef<THREE.Group>(null);
  useFrame((_, d) => {
    if (group.current) group.current.rotation.y += d * 0.15;
  });
  return (
    <group ref={group}>
      {/* rings */}
      {[2.6, 3.4, 4.2].map((r, i) => (
        <mesh key={i} rotation={[Math.PI / 2 + i * 0.2, 0, i * 0.4]}>
          <torusGeometry args={[r, 0.005, 8, 100]} />
          <meshBasicMaterial color="#e8394a" transparent opacity={0.3} />
        </mesh>
      ))}
      {TECH.map((t, i) => {
        const a = (i / TECH.length) * Math.PI * 2;
        const r = 3.4;
        const x = Math.cos(a) * r;
        const z = Math.sin(a) * r;
        const y = Math.sin(a * 2) * 0.6;
        return <Node key={t.name} pos={[x, y, z]} {...t} />;
      })}
      <mesh>
        <icosahedronGeometry args={[0.8, 1]} />
        <meshStandardMaterial color="#0d0d10" emissive="#e8394a" emissiveIntensity={0.5} metalness={0.8} roughness={0.3} />
      </mesh>
    </group>
  );
}

function Node({ pos, name, cat }: { pos: [number, number, number]; name: string; cat: string }) {
  const [hover, setHover] = useState(false);
  return (
    <group position={pos}>
      <mesh
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
      >
        <sphereGeometry args={[0.18, 16, 16]} />
        <meshStandardMaterial
          color={hover ? "#ffffff" : "#e8394a"}
          emissive="#e8394a"
          emissiveIntensity={hover ? 1.5 : 0.6}
        />
      </mesh>
      <Html distanceFactor={10} center style={{ pointerEvents: "none" }}>
        <div
          className="whitespace-nowrap rounded-full border px-3 py-1 text-[10px] font-mono uppercase tracking-widest"
          style={{
            background: "rgba(13,13,16,0.85)",
            borderColor: hover ? "#e8394a" : "rgba(255,255,255,0.15)",
            color: "#fff",
            transform: "translateY(-32px)",
            backdropFilter: "blur(8px)",
            transition: "all 0.2s",
            boxShadow: hover ? "0 0 20px rgba(232,57,74,0.6)" : "none",
          }}
        >
          {name} <span style={{ opacity: 0.5 }}>· {cat}</span>
        </div>
      </Html>
    </group>
  );
}

export function TechOrbit() {
  return (
    <div className="h-[520px] w-full">
      <Canvas dpr={[1, 1.5]} camera={{ position: [0, 1.5, 7], fov: 50 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[0, 0, 0]} color="#e8394a" intensity={2} />
        <Orbit />
      </Canvas>
    </div>
  );
}
