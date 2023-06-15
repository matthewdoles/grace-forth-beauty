import React from 'react';
import { Parallax, ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';
import { FaPhoneAlt } from 'react-icons/fa';

import headerImage from '../../images/header-background.jpg';
import backgroundImage from '../../images/background.jpg';
import ServiceMenu from '../../components/ServiceMenu';
import InstaFeed from '../../components/InstaFeed';

function Home() {
  return (
    <div className="min-w-[380px]">
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
          <ServiceMenu />
        </Parallax>
        <ParallaxBanner
          layers={[{ image: backgroundImage, speed: -15 }]}
          className="h-[300px] min-[600px]:h-[500px]">
          <div className="h-[300px] min-[600px]:h-[500px] bg-black opacity-20"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <p
              className="text-4xl min-[600px]:text-7xl text-white text-center"
              style={{ fontFamily: 'Overlock-Black' }}>
              Call for Scheduling
            </p>
            <p className="text-3xl min-[600px]:text-5xl text-white text-center mt-8">
              317-376-0416
            </p>
            <a
              className="btn bg-primary hover:bg-primary/75 w-60 h-12 min-[600px]:h-16 border-2 mt-8 text-white text-2xl min-[600px]:text-3xl capitalize"
              href="tel:317-376-0416">
              <FaPhoneAlt className="h-6" /> Call Now
            </a>
          </div>
        </ParallaxBanner>
        <Parallax speed={10}>
          <div className="flex mx-auto justify-center items-center pb-16">
            <InstaFeed />
          </div>
        </Parallax>
      </ParallaxProvider>
    </div>
  );
}

export default Home;
