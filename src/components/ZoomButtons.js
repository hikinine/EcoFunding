import React from 'react';
import { useThree } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import styled from 'styled-components';

const Button = styled.button`
        position: relative;
        left: -50%
    `;
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
            
            <Button onClick={zoomIn}>ZoomIn</Button>
            <Button onClick={zoomOut}>ZoomOut</Button>
           
        </Html>

    );
}

export default ZoomButtons;