'use client'

import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Environment, OrthographicCamera } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { InstancedMesh, Matrix4 } from "three";

function MeshComponent({ position, direction, scale }) {
    const fileUrl="/paddle.gltf";
    const mesh = useRef(null);
    const gltf = useLoader(GLTFLoader, fileUrl);

    const selfpos = useRef([0, 0, 0])
    const selfrotate = useRef([1.2, -0.2, 0])
    
    useFrame(() => {
        selfrotate.current[2] -= 0.06 * direction

        mesh.current.rotation.x = selfrotate.current[0]
        mesh.current.rotation.y = selfrotate.current[1] * direction
        mesh.current.rotation.z = selfrotate.current[2]
    })
    
    if (position != null) {
        selfpos.current = [position[0], position[1], position[2]]
    }
    
    const paddle = gltf.scene.clone();

    return(
        <mesh ref={mesh} position={selfpos.current}>
            <primitive object={paddle} scale={(20, 20, 20)} />
        </mesh>
    )
}

import { Suspense } from "react";

export function Paddle3D() {
    const [cameraProps, setCameraProps] = useState({
        left: -5,   // Modify these based on your scene
        right: 5,   // Modify these based on your scene
        top: 5,     // Modify these based on your scene
        bottom: -5, // Modify these based on your scene
        near: 0.1,  // Near clipping plane
        far: 100   // Far clipping plane
    });

    const cameraRef = useRef("hi");
    
    const tileToPixels = 100 /* -8 to 8 x-values for 1536 px */
    const [xpos, setXPos] = useState(0)
    const [ypos, setYPos] = useState(-1)
    const [zpos, setZPos] = useState(0)

    useEffect(() => {
        const handleResize = () => {
            const aspectx = window.innerWidth / window.innerHeight;
            setCameraProps({
                left: -5 * aspectx,
                right: 5 * aspectx,
                top: 5,
                bottom: -5,
                near: 0.1,
                far: 100
            })

            setXPos(window.innerWidth / 2 / tileToPixels)
        }

        // equivalent to compounent mounting
        window.addEventListener("resize", handleResize);
        handleResize()
    }, []);
    
    return (
        <div className='absolute left-0 top-0 -z-10 flex justify-center items-center h-screen w-screen'>
            <Canvas>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <Environment preset="city" />
                <OrthographicCamera
                    ref={cameraRef}
                    makeDefault
                    manual
                    left={cameraProps.left}
                    right={cameraProps.right}
                    top={5}
                    bottom={-5}
                    near={cameraProps.near}
                    far={cameraProps.far}
                    position={[0, 0, 10]}
                />
                <Suspense fallback={null}>
                    <MeshComponent position={[-xpos, ypos, zpos]} direction={1}/> {/* -8 to 8 x-values for 1920 px */}
                    <MeshComponent position={[xpos, ypos, zpos]} direction={-1}/>
                </Suspense>
            </Canvas>
        </div>
    )
}