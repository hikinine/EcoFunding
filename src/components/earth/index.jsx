// earthindex.js
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { MarkerProvider } from './MarkerContext';
import Globe from './Globe';
import { OrbitControls } from '@react-three/drei';

const handleMarkerClick = (marker) => {
  console.log("Marker clicked:", marker);
  // Add additional logic here as needed
};
export function Earth() {
  // Marker data including image URLs
  const markers = [
    { lat: 40.7128, lon: -74.0060, name: 'New York', imageUrl: 'https://placehold.co/100' },
    // Add more markers as needed
  ];

  return (
    <MarkerProvider>
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight color="#ffffff" intensity={2} position={[1, -5, 5]} castShadow />
        <Globe markers={markers} onMarkerClick={(marker) => handleMarkerClick(marker)}/>
        <OrbitControls enableZoom={false} enablePan={true} enableRotate={true} />
      </Canvas>
    </MarkerProvider>
  );
}