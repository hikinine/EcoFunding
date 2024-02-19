import React, { useState } from 'react';
import { useLoader } from '@react-three/fiber';
import { TextureLoader, Vector3, SphereGeometry, MeshBasicMaterial } from 'three';
import { OrbitControls, Html } from '@react-three/drei';
import './earth.css'; // Make sure this path is correct for your project

// Assets
import EarthDayMap from "../../assets/textures/8k_earth_daymap.jpg";
import EarthNormalMap from "../../assets/textures/8k_earth_normal_map.jpg";
import EarthSpecularMap from "../../assets/textures/8k_earth_specular_map.jpg";
import Img from '../../assets/ESG2.png';

// Function to convert lat/lon to 3D coordinates
const latLongToVector3 = (lat, lon, radius, height) => {
    const phi = (lat) * Math.PI / 180;
    const theta = (lon - 180) * Math.PI / 180;

    const x = -(radius + height) * Math.cos(phi) * Math.cos(theta);
    const y = (radius + height) * Math.sin(phi);
    const z = (radius + height) * Math.cos(phi) * Math.sin(theta);

    return new Vector3(x, y, z);
};

// Define pinpoints data
const pinpoints = [
    { lat: 40.7128, lon: -74.0060, name: 'New York', image: Img}, // Example: New York coordinates
    // Add more pinpoints here
];

export function Earth(props) {
    const [colorMap, normalMap, specularMap] = useLoader(TextureLoader, [EarthDayMap, EarthNormalMap, EarthSpecularMap]);
    const radius = 2; // Radius of the globe (changed to 2)
    const pinpointGeometry = new SphereGeometry(0.02, 32, 32); // Small sphere geometry for pinpoints
    const pinpointMaterial = new MeshBasicMaterial({ color: 0xff0000 }); // Red color for pinpoints
    const [selectedPinpoint, setSelectedPinpoint] = useState(null);

    const handlePinpointClick = (pinpoint) => {
        setSelectedPinpoint(pinpoint);
    };

    // Function to close the overlay
    const closeOverlay = () => {
        setSelectedPinpoint(null);
    };

    return (
        <>
            <ambientLight intensity={2} />
            <pointLight color="#f6f3ea" position={[2, 0, 2]} intensity={5.2} />
            <mesh>
                <sphereGeometry args={[radius, 32, 32]} /> // Changed the sphereGeometry args to [radius, 32, 32]
                <meshPhongMaterial specularMap={specularMap} />
                <meshStandardMaterial map={colorMap} normalMap={normalMap} />
                {pinpoints.map((point, index) => {
                    const position = latLongToVector3(point.lat, point.lon, radius, 0.02);
                    return (
                        <mesh
                            key={index}
                            position={position}
                            geometry={pinpointGeometry}
                            material={pinpointMaterial}
                            onClick={() => handlePinpointClick(point)}
                        />
                    );
                })}
            </mesh>
            {selectedPinpoint && (
                <Html>
                <div className="overlay" onClick={closeOverlay}>
                    <div className="content" onClick={e => e.stopPropagation()}>
                        <img src={selectedPinpoint.image} alt={selectedPinpoint.name} />
                        <button onClick={closeOverlay}>Close</button>
                    </div>
                </div>
                </Html>
            )}
            <OrbitControls enableZoom={false} enablePan={true} enableRotate={true} zoomSpeed={0.6} panSpeed={0.5} rotateSpeed={0.4} />
        </>
    );
}