//globe.js
import React from 'react';
import useTextureLoader from './useTextureLoader';
import { MarkerProvider, useMarker } from './MarkerContext'; // Assuming Marker is its own component
import colorMap from '../../assets/textures/8k_earth_daymap.jpg';
import markers from './markers'; // Assuming markers is its own component
import { FaMapPin } from 'react-icons/fa';
import { Html } from '@react-three/drei';

const latLonToSphereCoords = (lat, lon, radius = 2) => {
  // Convert lat and lon to radians
  let phi = (90 - lat) * (Math.PI / 180);
  let theta = (lon + 180) * (Math.PI / 180);

  // Convert spherical coordinates to Cartesian for 3D positioning
  let x = -(radius * Math.sin(phi) * Math.cos(theta));
  let y = radius * Math.cos(phi);
  let z = radius * Math.sin(phi) * Math.sin(theta);

  return [x, y, z];
};

// In Globe.js, when rendering markers

function Globe() {
  // Load the texture using the custom hook
  const earthTexture = useTextureLoader(colorMap);
  const { markers, handleMarkerClick } = useMarker(); // Destructure handleMarkerClick here
  return (
    <mesh receiveShadow>
      <sphereGeometry args={[2, 32, 32]} />
      <meshStandardMaterial map={earthTexture} />
      {markers.map((marker) => {
  const position = latLonToSphereCoords(marker.lat, marker.lon);
  return (
    <Html position={position} key={marker.name} center>
      <MarkerProvider>
      <FaMapPin style={{ color: 'red', fontSize: '24px', cursor: 'pointer' }} onClick={() => handleMarkerClick(marker)} />
      </MarkerProvider>
    </Html>
  );
})}
    </mesh>
  );
}

export default Globe;