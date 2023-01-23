import React from 'react';
import { Stars} from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import PlanetBackground from "../Background/PlanetBackground";

function Saturn() {

    // Load Texture
    const colorMap = useLoader(TextureLoader, 'textures/planets/saturn/8k_saturn.jpg')
    const alphaMap = useLoader(TextureLoader, 'textures/planets/saturn/8k_saturn_ring_alpha.png')

    return (
        <>
            {/* Lights */}
            <ambientLight intensity={0.5} />
            <directionalLight castShadow position={[2.5, 8, 5]} shadow-mapSize={[1024, 1024]} />

            {/* Stars */}
            <PlanetBackground/>

            {/* Mesh */}
            <mesh scale={4}>
                <sphereGeometry args={[1, 100, 100]} />
                <meshStandardMaterial
                    map={colorMap}
                    alphaMap={alphaMap}
                />

            </mesh>
        </>
    );
}

export default Saturn;