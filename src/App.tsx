import React from 'react';
import headerImage from './images/header-background.jpg';
import backgroundImage from './images/background.jpg';
import ServiceMenu from './components/ServiceMenu';
import InstaFeed from './components/InstaFeed';
import { Parallax, ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';

function App() {
  return (
    <ParallaxProvider>
      <ParallaxBanner
        layers={[{ image: headerImage, speed: -15 }]}
        className="h-[300px] min-[600px]:h-[500px]">
        <div className="h-[300px] min-[600px]:h-[500px] bg-black opacity-20"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <p
            className="text-5xl min-[550px]:text-7xl min-[920px]:text-9xl text-white"
            style={{ fontFamily: 'DancingScript-SemiBold' }}>
            Grace Forth Beauty
          </p>
          <p className="mt-8 text-2xl min-[550px]:text-3xl min-[900px]:text-4xl text-white">
            licensed esthetician &amp; lash artist
          </p>
        </div>
      </ParallaxBanner>
      <Parallax speed={10}>
        <div className="flex justify-center items-center w-screen">
          <ServiceMenu />
        </div>
      </Parallax>
      <ParallaxBanner
        layers={[{ image: backgroundImage, speed: -15 }]}
        className="h-[300px] min-[600px]:h-[500px]">
        <div className="h-[300px] min-[600px]:h-[500px] bg-black opacity-20"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <p
            className="text-4xl min-[600px]:text-7xl text-white"
            style={{ fontFamily: 'Overlock-Black' }}>
            Call for Scheduling
          </p>
          <p className="text-3xl min-[600px]:text-5xl text-white mt-8">317-376-0416</p>
        </div>
      </ParallaxBanner>
      <Parallax speed={10}>
        <div className="flex flex-col mx-auto justify-center items-center w-screen">
          <InstaFeed />
        </div>
      </Parallax>
    </ParallaxProvider>
  );
}

export default App;
