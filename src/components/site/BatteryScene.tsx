"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { ContactShadows, RoundedBox } from "@react-three/drei";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";

function useLabelTexture() {
  return useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 768;
    canvas.height = 960;
    const ctx = canvas.getContext("2d");
    if (!ctx) return null;

    // paper
    ctx.fillStyle = "#f4f6fc";
    ctx.fillRect(0, 0, 768, 960);

    // top blue band
    ctx.fillStyle = "#1638c6";
    ctx.fillRect(0, 0, 768, 206);

    // bolt mark
    ctx.fillStyle = "#ffffff";
    ctx.beginPath();
    ctx.moveTo(132, 44);
    ctx.lineTo(58, 132);
    ctx.lineTo(106, 132);
    ctx.lineTo(88, 196);
    ctx.lineTo(164, 108);
    ctx.lineTo(116, 108);
    ctx.closePath();
    ctx.fill();

    // wordmark
    ctx.fillStyle = "#ffffff";
    ctx.font = "800 96px Arial, Helvetica, sans-serif";
    ctx.fillText("VIJETA", 188, 122);
    ctx.font = "500 22px Consolas, monospace";
    ctx.fillText("B A T T E R I E S   ·   1 9 8 8", 192, 162);

    // 12V
    ctx.fillStyle = "#0a0f1e";
    ctx.font = "800 172px Arial, Helvetica, sans-serif";
    ctx.fillText("12V", 54, 404);

    // series
    ctx.fillStyle = "#1638c6";
    ctx.font = "800 60px Arial, Helvetica, sans-serif";
    ctx.fillText("HEAVY", 58, 486);
    ctx.fillText("DUTY", 58, 546);

    // rule
    ctx.fillStyle = "#c6cddf";
    ctx.fillRect(58, 588, 652, 2);

    // spec lines
    ctx.fillStyle = "#8e97ac";
    ctx.font = "500 26px Consolas, monospace";
    ctx.fillText("LEAD-ACID  ·  LOW MAINTENANCE", 58, 646);
    ctx.fillText("HIGH CRANKING  ·  6 CELL", 58, 690);
    ctx.fillText("MADE IN PITHAMPUR, INDIA", 58, 734);

    // warranty row
    ctx.fillStyle = "#1638c6";
    ctx.fillRect(58, 786, 652, 78);
    ctx.fillStyle = "#ffffff";
    ctx.font = "800 34px Arial, Helvetica, sans-serif";
    ctx.fillText("36 MONTHS WARRANTY", 82, 836);

    // barcode
    let x = 58;
    for (let i = 0; i < 34; i += 1) {
      const width = i % 3 === 0 ? 5 : i % 2 === 0 ? 3 : 1;
      ctx.fillStyle = "#0a0f1e";
      ctx.fillRect(x, 892, width, 26);
      x += width + 5;
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.anisotropy = 8;
    texture.needsUpdate = true;
    return texture;
  }, []);
}

function Battery() {
  const group = useRef<THREE.Group>(null);
  const label = useLabelTexture();
  const { gl } = useThree();

  // User-controlled view: no auto-rotation. Drag rotates 360°, wheel/pinch zooms.
  const target = useRef({ yaw: 0.35, pitch: -0.05, zoom: 8.1 });
  const pointers = useRef(new Map<number, { x: number; y: number }>());
  const drag = useRef<{ x: number; y: number } | null>(null);
  const pinch = useRef<number | null>(null);

  useEffect(() => {
    const el = gl.domElement;
    el.style.cursor = "grab";

    const onDown = (event: PointerEvent) => {
      el.setPointerCapture(event.pointerId);
      pointers.current.set(event.pointerId, { x: event.clientX, y: event.clientY });
      if (pointers.current.size === 1) {
        drag.current = { x: event.clientX, y: event.clientY };
        el.style.cursor = "grabbing";
      } else if (pointers.current.size === 2) {
        const [a, b] = [...pointers.current.values()];
        pinch.current = Math.hypot(a.x - b.x, a.y - b.y);
        drag.current = null;
      }
    };

    const onMove = (event: PointerEvent) => {
      if (!pointers.current.has(event.pointerId)) return;
      pointers.current.set(event.pointerId, { x: event.clientX, y: event.clientY });

      if (pointers.current.size >= 2) {
        const [a, b] = [...pointers.current.values()];
        const distance = Math.hypot(a.x - b.x, a.y - b.y);
        if (pinch.current && distance > 0) {
          target.current.zoom = THREE.MathUtils.clamp(
            target.current.zoom * (pinch.current / distance),
            6.2,
            10.5,
          );
        }
        pinch.current = distance;
        return;
      }

      if (drag.current) {
        const dx = event.clientX - drag.current.x;
        const dy = event.clientY - drag.current.y;
        drag.current = { x: event.clientX, y: event.clientY };
        target.current.yaw += dx * 0.008;
        target.current.pitch = THREE.MathUtils.clamp(target.current.pitch + dy * 0.006, -0.55, 0.55);
      }
    };

    const onUp = (event: PointerEvent) => {
      pointers.current.delete(event.pointerId);
      if (el.hasPointerCapture(event.pointerId)) el.releasePointerCapture(event.pointerId);
      if (pointers.current.size === 0) {
        drag.current = null;
        pinch.current = null;
        el.style.cursor = "grab";
      } else {
        const [remaining] = [...pointers.current.values()];
        drag.current = { x: remaining.x, y: remaining.y };
        pinch.current = null;
      }
    };

    const onWheel = (event: WheelEvent) => {
      event.preventDefault();
      target.current.zoom = THREE.MathUtils.clamp(target.current.zoom + event.deltaY * 0.004, 6.2, 10.5);
    };

    el.addEventListener("pointerdown", onDown);
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerup", onUp);
    el.addEventListener("pointercancel", onUp);
    el.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      el.removeEventListener("pointerdown", onDown);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerup", onUp);
      el.removeEventListener("pointercancel", onUp);
      el.removeEventListener("wheel", onWheel);
      el.style.cursor = "";
    };
  }, [gl]);

  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.y = THREE.MathUtils.damp(group.current.rotation.y, target.current.yaw, 6, delta);
    group.current.rotation.x = THREE.MathUtils.damp(group.current.rotation.x, target.current.pitch, 6, delta);
    state.camera.position.z = THREE.MathUtils.damp(state.camera.position.z, target.current.zoom, 6, delta);
  });

  return (
      <group ref={group} scale={0.96} position={[0, -0.02, 0]}>
        {/* body */}
        <RoundedBox args={[2.02, 2.62, 1.12]} radius={0.09} smoothness={5} castShadow>
          <meshStandardMaterial color="#101728" metalness={0.6} roughness={0.33} />
        </RoundedBox>

        {/* blue edge light */}
        <mesh position={[-1.0, 0, 0.02]}>
          <boxGeometry args={[0.012, 2.3, 0.012]} />
          <meshStandardMaterial color="#2f5cff" emissive="#2f5cff" emissiveIntensity={2.2} toneMapped={false} />
        </mesh>

        {/* cap band */}
        <RoundedBox args={[2.06, 0.32, 1.16]} radius={0.06} smoothness={4} position={[0, 1.45, 0]}>
          <meshStandardMaterial color="#1638c6" metalness={0.55} roughness={0.26} />
        </RoundedBox>

        {/* terminals */}
        <mesh position={[-0.6, 1.72, 0.26]}>
          <cylinderGeometry args={[0.145, 0.145, 0.24, 32]} />
          <meshStandardMaterial color="#d9dde8" metalness={0.95} roughness={0.22} />
        </mesh>
        <mesh position={[0.62, 1.72, 0.26]}>
          <cylinderGeometry args={[0.13, 0.13, 0.22, 32]} />
          <meshStandardMaterial color="#1b3fd0" metalness={0.5} roughness={0.25} emissive="#1638c6" emissiveIntensity={0.35} />
        </mesh>

        {/* vent caps */}
        {[-0.46, 0, 0.46].map((x) => (
          <mesh key={x} position={[x, 1.615, -0.22]}>
            <cylinderGeometry args={[0.085, 0.085, 0.05, 24]} />
            <meshStandardMaterial color="#0b1120" metalness={0.7} roughness={0.3} />
          </mesh>
        ))}

        {/* label */}
        {label ? (
          <mesh position={[0, -0.02, 0.567]}>
            <planeGeometry args={[1.44, 1.92]} />
            <meshStandardMaterial map={label} roughness={0.55} metalness={0.04} />
          </mesh>
        ) : null}

        {/* base glow strip */}
        <mesh position={[0, -1.25, 0]}>
          <boxGeometry args={[2.05, 0.035, 1.14]} />
          <meshStandardMaterial color="#2f5cff" emissive="#2f5cff" emissiveIntensity={3} toneMapped={false} />
        </mesh>

        {/* base */}
        <RoundedBox args={[2.06, 0.1, 1.16]} radius={0.03} smoothness={3} position={[0, -1.32, 0]}>
          <meshStandardMaterial color="#080d19" metalness={0.4} roughness={0.5} />
        </RoundedBox>
      </group>
  );
}

function Rings() {
  const ringA = useRef<THREE.Mesh>(null);
  const ringB = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (ringA.current) ringA.current.rotation.z += delta * 0.12;
    if (ringB.current) ringB.current.rotation.z -= delta * 0.08;
  });

  return (
    <group>
      <mesh ref={ringA} rotation={[Math.PI / 2.35, 0.22, 0]}>
        <torusGeometry args={[1.92, 0.006, 8, 160]} />
        <meshStandardMaterial color="#2f5cff" emissive="#2f5cff" emissiveIntensity={1.6} transparent opacity={0.55} toneMapped={false} />
      </mesh>
      <mesh ref={ringB} rotation={[Math.PI / 1.85, -0.35, 0.4]}>
        <torusGeometry args={[2.28, 0.0045, 8, 160]} />
        <meshStandardMaterial color="#8ba2ff" emissive="#2f5cff" emissiveIntensity={1} transparent opacity={0.32} toneMapped={false} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.66, 0]}>
        <ringGeometry args={[1.72, 1.742, 128]} />
        <meshBasicMaterial color="#b9c4e2" transparent opacity={0.75} side={THREE.DoubleSide} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.66, 0]}>
        <ringGeometry args={[2.24, 2.25, 128]} />
        <meshBasicMaterial color="#d4daea" transparent opacity={0.5} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
}

function Particles() {
  const points = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const count = 90;
    const array = new Float32Array(count * 3);
    for (let i = 0; i < count; i += 1) {
      const radius = 1.4 + Math.random() * 2.2;
      const theta = Math.random() * Math.PI * 2;
      const y = (Math.random() - 0.5) * 3.4;
      array[i * 3] = Math.cos(theta) * radius;
      array[i * 3 + 1] = y;
      array[i * 3 + 2] = Math.sin(theta) * radius * 0.6;
    }
    return array;
  }, []);

  useFrame((_, delta) => {
    if (points.current) points.current.rotation.y += delta * 0.03;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.022} color="#5a79ff" transparent opacity={0.55} sizeAttenuation depthWrite={false} />
    </points>
  );
}

type Props = {
  active?: boolean;
};

export function BatteryScene({ active = true }: Props) {
  return (
    <Canvas
      frameloop={active ? "always" : "never"}
      dpr={[1, 1.6]}
      camera={{ position: [0, 0.15, 8.1], fov: 30 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ background: "transparent" }}
      aria-hidden="true"
    >
      <ambientLight intensity={0.95} />
      <directionalLight position={[4.5, 6, 5]} intensity={2.6} color="#ffffff" />
      <directionalLight position={[-5, 2.5, -3]} intensity={1.6} color="#8fa5ff" />
      <pointLight position={[0, -0.5, 4]} intensity={16} color="#2f5cff" distance={9} decay={2} />

      <Battery />
      <Rings />
      <Particles />

      <ContactShadows
        position={[0, -1.66, 0]}
        opacity={0.34}
        scale={6.5}
        blur={2.6}
        far={3.2}
        color="#0a1024"
      />
    </Canvas>
  );
}
