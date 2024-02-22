//globe js
import React from 'react';
import useTextureLoader from './useTextureLoader';
import { useMarker } from './MarkerContext'; // Assuming Marker is its own component
import colorMap from '../../assets/textures/8k_earth_daymap.jpg';

// Add this function inside Globe.js or import it if defined elsewhere
function latLongToVector3(lat, lon, radius) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  return [x, y, z];
}

function Globe({ markers }) {
  return (
    <mesh receiveShadow>
      <sphereGeometry args={[2, 32, 32]} />
      <meshStandardMaterial color="earthColor" />
      {markers.map((marker) => (
        <mesh key={marker.id} position={marker.position}>
          <sphereGeometry args={[0.1, 32, 32]} />
          <meshStandardMaterial color="red" />
          {/* Additional marker logic */}
        </mesh>
      ))}
    </mesh>
  );
}

export default Globe;