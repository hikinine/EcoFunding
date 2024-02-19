
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Earth } from "./earth"; // Add the missing import statement for the Earth component

const CanvasContainer = styled.div`
    width: 100%;
    height: 100vh;
`;

function Mapa() {
    return (
        
            <CanvasContainer>
            <Canvas>
                <Suspense fallback={null}>
                    <Earth />
                </Suspense>
            </Canvas>
        </CanvasContainer>
    );
}

export default Mapa;
