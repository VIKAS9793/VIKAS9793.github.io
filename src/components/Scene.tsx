import { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { getGPUTier, prefersReducedMotion } from '@utils';

// Particle system component
function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null);
  const [particleCount, setParticleCount] = useState(1000);
  
  // Adjust particle count based on GPU performance
  useEffect(() => {
    const gpuTier = getGPUTier();
    const count = {
      high: 500,
      medium: 300,
      low: 150,
    }[gpuTier];
    
    setParticleCount(prefersReducedMotion() ? 50 : count);
  }, []);

  // Generate random positions for particles
  const particles = new Float32Array(particleCount * 3);
  for (let i = 0; i < particleCount; i++) {
    particles[i * 3] = (Math.random() - 0.5) * 100;
    particles[i * 3 + 1] = (Math.random() - 0.5) * 100;
    particles[i * 3 + 2] = (Math.random() - 0.5) * 100;
  }

  useFrame((state) => {
    if (!pointsRef.current || prefersReducedMotion()) return;
    
    const time = state.clock.elapsedTime;
    
    // Gentle rotation
    pointsRef.current.rotation.x = Math.sin(time * 0.1) * 0.05;
    pointsRef.current.rotation.y = time * 0.02;
    
    // Mouse parallax effect
    const mouse = state.mouse;
    pointsRef.current.rotation.x += mouse.y * 0.05;
    pointsRef.current.rotation.y += mouse.x * 0.05;
  });

  return (
    <Points ref={pointsRef} positions={particles} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#00ff88"
        size={0.8}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        opacity={0.6}
      />
    </Points>
  );
}

// Floating geometric shapes
function FloatingShapes() {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (!groupRef.current || prefersReducedMotion()) return;
    
    const time = state.clock.elapsedTime;
    const mouse = state.mouse;
    
    // Rotate the entire group
    groupRef.current.rotation.x = Math.sin(time * 0.2) * 0.1;
    groupRef.current.rotation.y = time * 0.1;
    
    // Mouse interaction
    groupRef.current.rotation.x += mouse.y * 0.1;
    groupRef.current.rotation.y += mouse.x * 0.1;
  });

  return (
    <group ref={groupRef}>
      {/* Torus */}
      <mesh position={[15, 0, -10]}>
        <torusGeometry args={[8, 2, 16, 100]} />
        <meshBasicMaterial
          color="#0a84ff"
          wireframe
          transparent
          opacity={0.3}
        />
      </mesh>
      
      {/* Octahedron */}
      <mesh position={[-15, 10, -15]}>
        <octahedronGeometry args={[6]} />
        <meshBasicMaterial
          color="#00ff88"
          wireframe
          transparent
          opacity={0.2}
        />
      </mesh>
      
      {/* Icosahedron */}
      <mesh position={[0, -15, -20]}>
        <icosahedronGeometry args={[4]} />
        <meshBasicMaterial
          color="#ff0080"
          wireframe
          transparent
          opacity={0.25}
        />
      </mesh>
    </group>
  );
}

// Camera controller for cinematic effects
function CameraController() {
  const { camera } = useThree();
  const targetPosition = useRef(new THREE.Vector3(0, 0, 30));
  
  useFrame((state) => {
    if (prefersReducedMotion()) return;
    
    const mouse = state.mouse;
    const time = state.clock.elapsedTime;
    
    // Smooth camera movement based on mouse
    targetPosition.current.x = mouse.x * 2;
    targetPosition.current.y = mouse.y * 2;
    targetPosition.current.z = 30 + Math.sin(time * 0.5) * 2;
    
    // Lerp camera position
    camera.position.lerp(targetPosition.current, 0.02);
    camera.lookAt(0, 0, 0);
  });
  
  return null;
}

// Main Scene Component
interface SceneProps {
  className?: string;
}

export default function Scene({ className = '' }: SceneProps) {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) {
    return (
      <div 
        className={`fixed inset-0 bg-gradient-to-br from-dark-950 via-dark-900 to-dark-950 ${className}`}
        style={{ zIndex: -1 }}
      />
    );
  }
  
  return (
    <div 
      className={`fixed inset-0 ${className}`}
      style={{ zIndex: -1 }}
    >
      <Canvas
        camera={{ position: [0, 0, 30], fov: 75, near: 0.1, far: 1000 }}
        gl={{
          alpha: true,
          antialias: getGPUTier() === 'high',
          powerPreference: 'high-performance',
        }}
        dpr={Math.min(window.devicePixelRatio, 2)}
      >
        {/* Lighting */}
        <ambientLight intensity={0.1} />
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#00ff88" />
        <pointLight position={[-10, -10, -10]} intensity={0.3} color="#0a84ff" />
        
        {/* Scene elements */}
        <ParticleField />
        <FloatingShapes />
        <CameraController />
        
        {/* Post-processing effects could go here */}
      </Canvas>
      
      {/* Gradient overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-transparent to-dark-950/40 pointer-events-none"
      />
      
      {/* Grain texture overlay */}
      <div className="absolute inset-0 grain opacity-30 pointer-events-none" />
    </div>
  );
}
