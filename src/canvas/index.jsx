import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, Center } from '@react-three/drei'
import Shirt from './Shirt'
import BackDrop from './BackDrop'
import CameraRig from './CameraRig';
const CanvasModal = () => {
    return (
        <Canvas>
            <ambientLight intensity={0.5} />
            {/* <Environment preset='city' /> */}
            <CameraRig>
                <Center>
                    <Shirt />
                </Center>
            </CameraRig>
        </Canvas>
    )
}

export default CanvasModal
