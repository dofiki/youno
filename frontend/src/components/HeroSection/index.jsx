import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import ContainerModel from './ContainerModel'

function HeroSection() {
  return (
    <div className="flex flex-row h-[30rem] bg-gray-900 items-center ">
      
      <div className="flex flex-col justify-center gap-2 p-15 w-[50%]">
        <h1 style={{ fontFamily: '"Intel One Mono", monospace',fontSize:"5rem", fontWeight:"bolder",
        color: "white"
        }}>youno</h1>
        <p className="text-2xl text-white">
          <span style={{ fontFamily: '"Intel One Mono", monospace',fontSize:"1.5rem", fontWeight:"bolder",
            paddingRight: "0.5rem"
           }}>youno</span>
          lets you organize YouTube videos into folders, take timestamped notes, 
          sketch ideas, and set reminders, built for focused, connected learning.
        </p>
      </div>

      <div className="flex-1 h-full">
        <Canvas
          shadows
          camera={{ position: [-1, 2, -5], fov: 50 }}
        >
          <ambientLight intensity={0.3} />
          <hemisphereLight skyColor="lightblue" groundColor="brown" intensity={0.6} />
          <directionalLight
            position={[5, 10, 5]}
            intensity={1}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-near={0.5}
            shadow-camera-far={50}
            shadow-camera-left={-10}
            shadow-camera-right={10}
            shadow-camera-top={10}
            shadow-camera-bottom={-10}
          />
          <ContainerModel 
            rotation={[0, 70 * (Math.PI / 180), 0]} 
            castShadow 
            receiveShadow 
          />
          <OrbitControls />
        </Canvas>
      </div>

    </div>
  )
}

export default HeroSection
