import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { Float, Stars } from "@react-three/drei";

function Particles({ count = 1200 }: { count?: number }) {
  const ref = useRef<THREE.InstancedMesh>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const positions = useMemo(() => {
    const arr: { p: THREE.Vector3; o: THREE.Vector3; s: number }[] = [];
    for (let i = 0; i < count; i++) {
      const p = new THREE.Vector3(
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 25
      );
      arr.push({ p, o: p.clone(), s: Math.random() * 0.04 + 0.01 });
    }
    return arr;
  }, [count]);

  useFrame((state) => {
    mouse.current.x += (state.mouse.x - mouse.current.x) * 0.05;
    mouse.current.y += (state.mouse.y - mouse.current.y) * 0.05;
    const t = state.clock.elapsedTime;
    positions.forEach((d, i) => {
      const offset = Math.sin(t * 0.5 + i * 0.1) * 0.3;
      dummy.position.set(
        d.o.x + mouse.current.x * 1.2 + offset,
        d.o.y + mouse.current.y * 0.8 + Math.cos(t * 0.4 + i) * 0.2,
        d.o.z
      );
      dummy.scale.setScalar(d.s);
      dummy.updateMatrix();
      ref.current?.setMatrixAt(i, dummy.matrix);
    });
    if (ref.current) ref.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={ref} args={[undefined, undefined, count]}>
      <sphereGeometry args={[1, 6, 6]} />
      <meshBasicMaterial color="#e8394a" transparent opacity={0.7} />
    </instancedMesh>
  );
}

function CoreObject() {
  const ref = useRef<THREE.Mesh>(null);
  const wireRef = useRef<THREE.Mesh>(null);
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.15;
      ref.current.rotation.y += delta * 0.2;
    }
    if (wireRef.current) {
      wireRef.current.rotation.x -= delta * 0.1;
      wireRef.current.rotation.y -= delta * 0.15;
      const s = 1 + Math.sin(state.clock.elapsedTime * 1.2) * 0.04;
      wireRef.current.scale.setScalar(s);
    }
  });
  return (
    <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.6}>
      <group>
        <mesh ref={ref}>
          <icosahedronGeometry args={[1.6, 1]} />
          <meshStandardMaterial
            color="#0d0d10"
            emissive="#e8394a"
            emissiveIntensity={0.6}
            metalness={0.9}
            roughness={0.2}
          />
        </mesh>
        <mesh ref={wireRef}>
          <icosahedronGeometry args={[2.1, 1]} />
          <meshBasicMaterial color="#e8394a" wireframe transparent opacity={0.35} />
        </mesh>
        <pointLight position={[0, 0, 0]} color="#e8394a" intensity={3} distance={8} />
      </group>
    </Float>
  );
}

function ParallaxRig() {
  useFrame((state) => {
    const y = window.scrollY * 0.0015;
    state.camera.position.y = -y;
    state.camera.lookAt(0, -y * 0.5, 0);
  });
  return null;
}

export function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.6]}
      camera={{ position: [0, 0, 7], fov: 60 }}
      gl={{ antialias: true, alpha: true }}
      style={{ position: "absolute", inset: 0 }}
    >
      <ambientLight intensity={0.15} />
      <Stars radius={60} depth={50} count={1500} factor={3} fade speed={0.5} />
      <Particles count={900} />
      <CoreObject />
      <ParallaxRig />
      <fog attach="fog" args={["#0d0d10", 8, 22]} />
    </Canvas>
  );
}
