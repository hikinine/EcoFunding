import React, { useState } from 'react';
import { Html, OrbitControls } from '@react-three/drei';
import { Vector3, TextureLoader } from 'three';
import { useLoader, Canvas } from '@react-three/fiber';
import { FaMapMarkerAlt } from 'react-icons/fa';
import Overlay from '../Overlay'; // Assuming this is a custom component you've created
import colorMap from '../../assets/textures/8k_earth_daymap.jpg';

let imgProjects = [
  'https://placehold.co/100'
]

// Define the Marker component
function Marker({ position, onClick }) {
    return (
      <group position={position}>
        <Html>
          <div style={{ color: 'orange', cursor: 'pointer' }} onClick={onClick}>
            <FaMapMarkerAlt />
          </div>
        </Html>
      </group>
    );
}

// Define the Globe component
function Globe({ markers, onMarkerClick }) {
  const [colorMapTexture] = useLoader(TextureLoader, [colorMap]);
  const radius = 2; // Radius of the globe

  return (
    <mesh receiveShadow>
      <sphereGeometry args={[radius, 32, 32]} />
      <meshStandardMaterial map={colorMapTexture} />
      {markers.map((marker, index) => {
        const position = latLongToVector3(marker.lat, marker.lon, radius);
        return (
          <Marker
            key={index}
            position={position}
            onClick={() => onMarkerClick(marker)}
          />
        );
      })}
    </mesh>
  );
}
// Define latLongToVector3 outside of the Earth component
const latLongToVector3 = (lat, lon, radius) => {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);

  const x = -radius * Math.sin(phi) * Math.cos(theta);
  const y = radius * Math.cos(phi);
  const z = radius * Math.sin(phi) * Math.sin(theta);

  return new Vector3(x, y, z);
};

// Earth component
export function Earth() {
  // Marker data including image URLs
  const markers = [
    { lat: 40.7128, lon: -74.0060, name: 'New York', imageUrl: imgProjects[0] },
    // Add more markers as needed
  ];

  const [selectedMarker, setSelectedMarker] = useState(null);

  // Handle marker click
  const handleMarkerClick = (marker) => {
    setSelectedMarker(marker);
  };

  // Close the overlay
  const closeOverlay = () => {
    setSelectedMarker(null);
  };

  return (
    <Canvas>
      <>
        <ambientLight intensity={0.5} />
        <directionalLight color="#ffffff" intensity={2} position={[1, -5, 5]} castShadow />
        <Globe markers={markers} onMarkerClick={handleMarkerClick} latLongToVector3={latLongToVector3} />
        {selectedMarker && (
          <Html>
            <div style={{ width: '20vw', height: '20vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Overlay onClose={closeOverlay} marker={selectedMarker} markers={markers}>
                {/* Assuming Overlay is adapted to use the marker prop */}
              </Overlay>
            </div>
          </Html>
        )}
        <OrbitControls 
          enableZoom={false} 
          enablePan={true} 
          enableRotate={true} 
          minAzimuthAngle={-Math.PI / 6} // -30 degrees
          maxAzimuthAngle={Math.PI / 6}  // 30 degrees
        />
      </>
    </Canvas>
  );
}

// Globe component
