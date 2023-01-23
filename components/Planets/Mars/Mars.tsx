import React from 'react';
import { Stars} from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import PlanetBackground from "../Background/PlanetBackground";

function Mars() {

    // Load Texture
    const colorMap = useLoader(TextureLoader, 'textures/planets/mars/8k_mars.jpg')

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
                />

            </mesh>
        </>
    );
}

export default Mars;