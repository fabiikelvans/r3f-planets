import React from 'react';
import { Stars} from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import PlanetBackground from "../Background/PlanetBackground";

function Sun() {

    // Load Texture
    const colorMap = useLoader(TextureLoader, 'textures/planets/sun/8k_sun.jpg')

    return (
        <>
            {/* Lights */}
            <ambientLight intensity={0.5} />
            <directionalLight castShadow position={[2.5, 8, 5]} shadow-mapSize={[1024, 1024]} />

            {/* Mesh */}
            <mesh scale={3}>
                <sphereGeometry args={[1, 100, 100]} />
                <meshStandardMaterial
                    map={colorMap}
                />

            </mesh>
        </>
    );
}

export default Sun;