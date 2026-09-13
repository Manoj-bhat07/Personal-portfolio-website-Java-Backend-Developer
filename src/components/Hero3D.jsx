import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls, Stars } from "@react-three/drei";
import { useRef } from "react";

function TechObject() {
  const meshRef = useRef();

  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.25;
    meshRef.current.rotation.y += delta * 0.45;

    // Smooth mouse interaction
meshRef.current.rotation.x +=
  (state.pointer.y * 0.3 - meshRef.current.rotation.x) * 0.035;

meshRef.current.rotation.y +=
  (state.pointer.x * 0.3 - meshRef.current.rotation.y) * 0.035;
  });

  return (
    <Float
      speed={2}
      rotationIntensity={0.4}
      floatIntensity={1.5}
    >
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.5, 2]} />

        <meshStandardMaterial
          color="#60a5fa"
          wireframe
          transparent
          opacity={0.9}
        />
      </mesh>
    </Float>
  );
}

export default function Hero3D() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
      <ambientLight intensity={0.4} />

      <pointLight
        position={[3, 3, 3]}
        intensity={20}
        distance={10}
      />

      <pointLight
        position={[-3, -2, 2]}
        intensity={10}
        distance={10}
      />

      <TechObject />

      <Stars
        radius={50}
        depth={30}
        count={800}
        factor={2}
        saturation={0}
        fade
        speed={0.5}
      />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
      />
    </Canvas>
  );
}