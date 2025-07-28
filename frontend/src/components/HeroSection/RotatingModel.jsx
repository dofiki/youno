import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import ContainerModel from './ContainerModel';

const RotatingModel = () => {
  const SPEED = 0.2;
  const INITIAL_ROTATION_Y = 70 * (Math.PI / 180);
  const modelRef = useRef();

  useEffect(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y = INITIAL_ROTATION_Y;
    }
  }, []);

  useFrame((_, delta) => {
    if (modelRef.current) {
      modelRef.current.rotation.y += delta * SPEED;
      if (modelRef.current.rotation.y > Math.PI * 2) {
        modelRef.current.rotation.y -= Math.PI * 2;
      }
    }
  });

  return <ContainerModel ref={modelRef} castShadow receiveShadow />;
};

export default RotatingModel;
