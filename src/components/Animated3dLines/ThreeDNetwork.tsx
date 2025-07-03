import * as THREE from "three";
import { useRef, useMemo, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";

const PARTICLE_COUNT = 160;
const CONNECT_DISTANCE = 2;

type Particle = {
  position: THREE.Vector3;
  velocity: THREE.Vector3;
};

const NetworkLines = () => {
  const particles = useMemo<Particle[]>(() => {
    const temp: Particle[] = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      temp.push({
        position: new THREE.Vector3(
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 10
        ),
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02
        ),
      });
    }
    return temp;
  }, []);

  const linesRef = useRef<THREE.BufferGeometry>(null);
  const pointsRef = useRef<THREE.Points>(null);

  useFrame(() => {
    const positions: number[] = [];

    particles.forEach((p) => {
      p.position.add(p.velocity);
      if (Math.abs(p.position.x) > 5) {
        p.velocity.x *= -1;
      }
      if (Math.abs(p.position.y) > 5) {
        p.velocity.y *= -1;
      }
      if (Math.abs(p.position.z) > 5) {
        p.velocity.z *= -1;
      }
    });

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      for (let j = i + 1; j < PARTICLE_COUNT; j++) {
        const a = particles[i].position;
        const b = particles[j].position;
        if (a.distanceTo(b) < CONNECT_DISTANCE) {
          positions.push(a.x, a.y, a.z, b.x, b.y, b.z);
        }
      }
    }

    if (linesRef.current) {
      linesRef.current.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(positions, 3)
      );
      linesRef.current.computeBoundingSphere();
    }

    if (pointsRef.current) {
      const posArray = particles.flatMap((p) => [p.position.x, p.position.y, p.position.z]);
      pointsRef.current.geometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(posArray, 3)
      );
    }
  });

  return (
    <>
      <points ref={pointsRef}>
        <bufferGeometry />
        <pointsMaterial size={0.05} color="#CBAB00" />
      </points>
      <lineSegments>
        <bufferGeometry ref={linesRef} />
        <lineBasicMaterial color="#E3B419" transparent opacity={0.2} />
      </lineSegments>
    </>
  );
};

const CameraController = ({ mouse }: { mouse: { x: number; y: number } }) => {
  const { camera } = useThree();

  useFrame(() => {
    const radius = 3;
    const targetX = mouse.x * radius;
    const targetY = mouse.y * radius;

    camera.position.x += (targetX - camera.position.x) * 0.05;
    camera.position.y += (-targetY - camera.position.y) * 0.05;

    camera.lookAt(0, 0, 0);
  });

  return null;
};

export const ThreeDNetwork = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  return (
    <div
      className="w-full h-[600px] bg-transparent"
      onPointerMove={(e) => {
        const x = (e.clientX / window.innerWidth) * 2 - 1;
        const y = (e.clientY / window.innerHeight) * 2 - 1;
        setMouse({ x, y });
      }}
    >
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <CameraController mouse={mouse} />
        <NetworkLines />
      </Canvas>
    </div>
  );
};
