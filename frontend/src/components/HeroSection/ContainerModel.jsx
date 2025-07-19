import { useGLTF, Preload } from '@react-three/drei'

export default function ContainerModel(props) {
  const { scene } = useGLTF('/models/container.glb')
  return <primitive object={scene} {...props}/>
}

useGLTF.preload('/models/container.glb')
