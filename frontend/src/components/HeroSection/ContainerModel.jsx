import { useGLTF } from '@react-three/drei'

export default function ContainerModel(props) {
  const { scene } = useGLTF('/models/container.glb')
  return <primitive object={scene} {...props}     scale={[1, 1, 1]}/>
}

useGLTF.preload('/models/container.glb')
