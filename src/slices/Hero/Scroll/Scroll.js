import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';
import { Scene } from './Scene';

export default function Scroll() {
  return (
    <div className='mx-auto w-full items-center'>
      <Canvas>
        <ambientLight />
        <directionalLight color='red' intensity={10} />
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}
