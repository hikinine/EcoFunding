import React from 'react';
import { useThree } from '@react-three/fiber';
import { Html } from '@react-three/drei';
function ZoomButtons() {
    const { camera } = useThree();
    
    const zoomIn = () => {
        camera.position.z -= 1;
        camera.updateProjectionMatrix();
    };
    
    const zoomOut = () => {
        camera.position.z += 1;
        camera.updateProjectionMatrix();
    };
    
    return (
        
        <Html style={{ position: 'absolute', marginTop: '-35vh', zIndex: 100, display: 'flex', flexDirection: 'collumn'}}>
            
            <button onClick={zoomIn}>ZoomIn</button>
            <button onClick={zoomOut}>ZoomOut</button>
           
        </Html>

    );
}

export default ZoomButtons;