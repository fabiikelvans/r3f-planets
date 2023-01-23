import React from 'react';
import {Stars, useTexture} from "@react-three/drei";
import {Canvas, useLoader, useThree} from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import * as THREE from 'three';
import PlanetBackground from "../Background/PlanetBackground";

// All textures are CC0 textures from: https://cc0textures.com/
const name = (type : String) => `textures/planets/earth/8k_earth_${type}.jpg`;


function Earth() {
      const cloudMap = useLoader(TextureLoader, 'textures/planets/earth/2k_earth_clouds.jpg')

    const [
        colorMap,
        displacementMap,
        normalMap,
        roughnessMap,
        aoMap
    ] = useLoader(TextureLoader, [
        name("daymap"),
        // name("normal_map"),
        // name("Displacement"),
        // name("clouds"),
        // name("AmbientOcclusion")
    ]);

    return (
        <>
            <ambientLight intensity={0.5} />
            <directionalLight castShadow position={[2.5, 8, 5]} shadow-mapSize={[1024, 1024]} />

            <PlanetBackground/>

            <mesh scale={4}>
                <sphereGeometry args={[1, 100, 100]} />
                <meshStandardMaterial
                    map={colorMap}
                    aoMap={cloudMap}
                />

            </mesh>
        </>
    );
}

export default Earth;