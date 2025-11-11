import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import RotatingModel from './RotatingModel';

function HeroSection() {

  return (
    <div className="relative flex flex-col md:flex-row min-h-[85vh] 
     items-center overflow-hidden bg-[#3B1C32]">

      <div className='absolute z-5 pt-15'>
            <svg id="visual" viewBox="0 0 1500 800" width="1500" height="800" 
              xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
              <rect width="1500" height="800" fill="#3B1C32"></rect><g><g transform="translate(968 770)">
              <path d="M152.3 -49.5C173.4 15.4 150 94.8 96.3 134.1C42.7 173.5 -41.2 172.8 -96.7 132.6C-152.2 92.4 -179.3 12.7 -158.5 -51.9C-137.6 -116.5 -68.8 -165.8 -1.6 -165.3C65.6 -164.8 131.2 -114.4 152.3 -49.5Z" stroke="#592c4c" fill="none" stroke-width="20"></path></g><g transform="translate(1366 245)"><path d="M110.5 -34.7C123.2 3.1 99.6 53.8 63.2 78.2C26.7 102.7 -22.5 100.7 -57.6 76C-92.8 51.3 -113.7 3.7 -101.8 -33.1C-89.8 -69.9 -44.9 -96 2 -96.6C48.9 -97.3 97.9 -72.5 110.5 -34.7Z" stroke="#592c4c" fill="none" stroke-width="20"></path></g><g transform="translate(308 651)"><path d="M143.6 -44.2C164 16.1 143.1 92.2 96.2 124.3C49.3 156.5 -23.6 144.7 -76.1 106.2C-128.7 67.7 -160.8 2.5 -144.7 -51.9C-128.6 -106.2 -64.3 -149.8 -1.4 -149.3C61.6 -148.9 123.2 -104.5 143.6 -44.2Z" stroke="#592c4c" fill="none" stroke-width="20"></path></g><g transform="translate(554 142)"><path d="M31.9 -11C36.8 4.7 33.1 22.5 21 32.1C8.8 41.6 -11.6 42.9 -24.4 33.6C-37.3 24.3 -42.4 4.4 -37.1 -11.8C-31.7 -28.1 -15.9 -40.7 -1.2 -40.4C13.5 -40 27.1 -26.6 31.9 -11Z" stroke="#592c4c" fill="none" stroke-width="20"></path></g></g></svg>
      </div>

      <div className="h-[80vh] z-10">
        <p className="text-white text-4xl sm:text-6xl lg:text-8xl 
        md:text-7xl font-bold pt-10 pl-5 pr-5 md:pl-30 md:pr-20 font-Intel">
          Organize and Attach Notes on YouTube Videos.
        </p>
      </div>


       <div className='absolute  w-[35rem] h-[25rem] bottom-0 sm:right-0 pr-5 md:pr-20 z-50'>
        <Canvas
          shadows
          camera={{ position: [-1, 2, -5], fov: 55 }}
        >
          <ambientLight intensity={0.3} />
          <hemisphereLight skyColor="lightblue" groundColor="brown" intensity={0.6} />
          <gridHelper args={[4, 4, '#444']} position={[0, -0.01, 0]} />
          <directionalLight
            position={[5, 10, 5]}
            intensity={1}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />
          <RotatingModel />
          <OrbitControls />
        </Canvas>
       </div>

    </div>
  );
}

export default HeroSection;
