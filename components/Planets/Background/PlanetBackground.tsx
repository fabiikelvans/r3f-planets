import React from 'react';
import {useThree} from "@react-three/fiber";
import {useTexture} from "@react-three/drei";
import * as THREE from "three";

function PlanetBackground() {
    const {gl} = useThree();

    const texture = useTexture('textures/planets/stars/8k_stars.jpg')
    const formatted = new THREE.WebGLCubeRenderTarget(texture.image.height).fromEquirectangularTexture(gl, texture)
    return(
        <primitive attach="background" object={formatted.texture} />
    )
}

export default PlanetBackground;