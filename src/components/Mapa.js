import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Earth } from './earth';
import ZoomButtons from './ZoomButtons';
import Overlay from './Overlay';

function Mapa({ name }) {
    return (
        <div style={{ width: '100%', height: '100vh' }}>
            <Canvas>
                <Suspense>
                    <Earth />
                    <ZoomButtons />
                    <Overlay />
                </Suspense>
            </Canvas>
        </div>
    );
}

export default Mapa;