import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import ContainerModel from './ContainerModel';

function HeroSection() {
  return (
    <div className="relative flex flex-col md:flex-row min-h-[80vh] bg-gray-900
     items-center overflow-hidden">
      
      <div className="absolute inset-0">
        <svg
          id="visual"
          viewBox="0 0 1200 600"
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="1200" height="600" fill="#101828" />
         
          <g transform="translate(509 165)"><path d="M73.7 -86.6C93.8 -71 107.2 -46.1 111.1 -20.1C115 5.9 109.6 33 96.2 55C82.8 76.9 61.5 93.8 37.5 102.2C13.4 110.7 -13.4 110.7 -36.3 101.6C-59.2 92.5 -78.1 74.2 -90.6 52.4C-103.2 30.5 -109.4 5.1 -105.4 -18.8C-101.4 -42.6 -87.3 -64.9 -68 -80.6C-48.7 -96.3 -24.4 -105.6 1.2 -107C26.8 -108.5 53.6 -102.2 73.7 -86.6Z" fill="none" stroke="#141d2e" stroke-width="20"></path></g><g transform="translate(252 357)"><path d="M9.2 -10.8C11.8 -8.8 13.6 -5.8 14.2 -2.5C14.8 0.8 14.1 4.3 12.4 7.1C10.7 10 8 12.1 4.8 13.3C1.7 14.4 -1.8 14.5 -5 13.4C-8.2 12.4 -11 10.2 -12.7 7.3C-14.5 4.4 -15 0.8 -14.3 -2.4C-13.6 -5.6 -11.6 -8.5 -9 -10.6C-6.4 -12.6 -3.2 -13.9 0.1 -13.9C3.3 -14 6.6 -12.9 9.2 -10.8Z" fill="none" stroke="#141d2e" stroke-width="20"></path></g><g transform="translate(903 119)"><path d="M68.4 -81.9C86.8 -66.1 98.7 -42.8 102.1 -18.7C105.4 5.3 100.4 30.2 88.2 50.6C76 70.9 56.7 86.9 33.8 96.9C11 106.9 -15.5 111 -37.5 103C-59.5 95 -77.2 74.8 -88 52.5C-98.9 30.2 -102.9 5.7 -100.3 -19.1C-97.6 -43.9 -88.3 -69 -70.4 -84.9C-52.6 -100.9 -26.3 -107.8 -0.7 -107.1C25 -106.3 50 -97.8 68.4 -81.9Z" fill="none" stroke="#141d2e" stroke-width="20"></path></g><g transform="translate(1046 533)"><path d="M25.2 -29.6C32.2 -24.1 37.2 -15.8 38.6 -6.9C40 1.9 37.8 11.2 33.3 19.3C28.7 27.3 21.8 34.1 13.6 37C5.4 39.8 -4.2 38.7 -12.7 35.4C-21.3 32.1 -28.9 26.6 -33.3 19.1C-37.8 11.7 -39.2 2.3 -37.6 -6.6C-36 -15.5 -31.6 -23.9 -24.8 -29.5C-18.1 -35 -9 -37.7 0 -37.8C9.1 -37.8 18.1 -35.1 25.2 -29.6Z" stroke="#141d2e" fill="none" stroke-width="20"></path></g><g transform="translate(1176 16)"><path d="M24.2 -29C31.2 -23.1 36.4 -15.2 38.1 -6.6C39.8 2.1 38 11.5 33.5 19.3C28.9 27 21.6 33.1 13.2 36.1C4.8 39.1 -4.7 39 -13.3 36.1C-21.8 33.1 -29.5 27.3 -34.1 19.6C-38.7 11.9 -40.2 2.2 -38.6 -6.8C-36.9 -15.8 -32.1 -24.1 -25.2 -30.1C-18.2 -36 -9.1 -39.4 -0.2 -39.1C8.7 -38.9 17.3 -34.9 24.2 -29Z" stroke="#141d2e" fill="none" stroke-width="20"></path></g><g transform="translate(448 550)"><path d="M11.5 -13.9C14.5 -11.3 16.1 -7.2 16.8 -3C17.4 1.1 17.1 5.4 15.2 8.8C13.3 12.2 9.8 14.8 6 16C2.2 17.1 -2 16.9 -5.7 15.6C-9.4 14.3 -12.8 11.8 -14.8 8.5C-16.8 5.1 -17.5 1 -16.9 -3C-16.2 -7 -14.2 -10.8 -11.2 -13.4C-8.2 -16.1 -4.1 -17.5 0.1 -17.6C4.3 -17.8 8.6 -16.5 11.5 -13.9Z" stroke="#141d2e" fill="none" stroke-width="20"></path></g><g transform="translate(29 4)"><path d="M43.7 -52.9C55.6 -42 63.5 -27.3 65.6 -12.1C67.7 3.2 64 19 56.5 33.1C48.9 47.2 37.6 59.6 23.4 65C9.3 70.4 -7.6 68.8 -22.1 62.7C-36.6 56.5 -48.8 45.9 -56.6 32.6C-64.4 19.3 -68 3.3 -66.1 -12.4C-64.2 -28.1 -57 -43.7 -45.1 -54.5C-33.1 -65.4 -16.6 -71.5 -0.3 -71.1C15.9 -70.7 31.8 -63.7 43.7 -52.9Z" stroke="#141d2e" fill="none" stroke-width="20"></path></g><g transform="translate(748 597)"><path d="M49 -60.2C62.4 -47.2 71.3 -30.7 75.3 -12.6C79.2 5.4 78.1 24.9 69.7 40.8C61.2 56.6 45.3 68.8 27.7 74.4C10.1 80 -9.2 79.1 -26 72.5C-42.8 65.9 -57.2 53.6 -66.6 38C-76.1 22.5 -80.7 3.7 -78.6 -14.8C-76.5 -33.4 -67.6 -51.7 -53.4 -64.6C-39.2 -77.5 -19.6 -85 -0.9 -83.9C17.8 -82.9 35.6 -73.3 49 -60.2Z" stroke="#141d2e" fill="none" stroke-width="20"></path></g><g transform="translate(285 28)"><path d="M38.2 -45.3C49.3 -36.3 57.9 -24 60.6 -10.4C63.4 3.2 60.2 18.1 52.6 29.6C45 41.2 33 49.4 19.8 54.2C6.5 58.9 -8 60.3 -20.7 56C-33.5 51.8 -44.5 41.9 -51.6 29.7C-58.7 17.6 -61.9 3 -60.1 -11.2C-58.3 -25.5 -51.6 -39.5 -40.8 -48.5C-29.9 -57.5 -15 -61.6 -0.7 -60.8C13.6 -59.9 27.2 -54.2 38.2 -45.3Z" stroke="#141d2e" fill="none" stroke-width="20"></path></g><g transform="translate(773 345)"><path d="M57.4 -69.5C73 -55.3 83.4 -35.9 86.5 -15.6C89.7 4.7 85.7 25.9 75.7 44.2C65.7 62.5 49.8 77.8 30.9 84.5C12 91.2 -9.9 89.3 -29.4 81.7C-48.9 74.2 -66.1 61.1 -77.1 43.7C-88.2 26.3 -93.1 4.5 -90.5 -16.9C-87.8 -38.3 -77.6 -59.3 -61.2 -73.4C-44.9 -87.4 -22.4 -94.7 -0.8 -93.7C20.9 -92.8 41.8 -83.7 57.4 -69.5Z" stroke="#141d2e" fill="none" stroke-width="20"></path></g><g transform="translate(4 467)"><path d="M70.2 -85.3C88.5 -68.3 99 -43.8 103.5 -18.3C108 7.3 106.5 34 94.6 54.6C82.6 75.2 60.3 89.8 35.8 99.1C11.2 108.4 -15.6 112.4 -38.1 104.4C-60.7 96.4 -79 76.3 -92.2 53.3C-105.4 30.3 -113.5 4.4 -110.3 -20.4C-107.1 -45.3 -92.6 -69.2 -72.3 -85.8C-52.1 -102.4 -26 -111.8 0 -111.8C26 -111.7 51.9 -102.3 70.2 -85.3Z" stroke="#141d2e" fill="none" stroke-width="20"></path></g><g transform="translate(1110 289)"><path d="M14.4 -17.2C18.3 -13.9 20.8 -9 21.6 -3.9C22.4 1.2 21.5 6.5 18.9 10.9C16.4 15.4 12.3 18.9 7.5 20.6C2.8 22.3 -2.6 22.1 -7.7 20.5C-12.8 18.9 -17.6 15.9 -20 11.6C-22.5 7.3 -22.5 1.7 -21.6 -3.8C-20.6 -9.3 -18.7 -14.6 -14.9 -17.9C-11.1 -21.3 -5.6 -22.7 -0.2 -22.5C5.2 -22.3 10.5 -20.5 14.4 -17.2Z" stroke="#141d2e" fill="none" stroke-width="20"></path></g>
        </svg>
      </div>

      <div className="w-full md:w-1/2 p-6 md:p-12 z-1">
        <h1
          className="text-white font-bold text-[3rem] md:text-[5rem]"
          style={{ fontFamily: '"Intel One Mono", monospace' }}
        >
          youno
        </h1>
        <p className="text-white text-lg md:text-2xl mt-4">
          <span
            className="font-bold"
            style={{
              fontFamily: '"Intel One Mono", monospace',
              paddingRight: '0.5rem',
            }}
          >
             youno
          </span>
          lets you organize YouTube videos into folders, take timestamped notes,
           sketch ideas, and set reminders, built for focused, connected learning.
        </p>
      </div>

      <div className="w-full md:w-1/2 h-[300px] sm:h-[400px] md:h-[500px]">
        <Canvas
          shadows
          camera={{ position: [-1, 2, -5], fov: 50 }}
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
          <ContainerModel rotation={[0, 70 * (Math.PI / 180), 0]} castShadow receiveShadow />
          <OrbitControls />
        </Canvas>
      </div>
    </div>
  );
}

export default HeroSection;
