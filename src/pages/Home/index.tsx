import React from 'react';
import { Parallax, ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';

import backgroundImage from '../../images/background.jpg';
import headerImage from '../../images/header-background.jpg';
import HeaderBanner from '../../components/HeaderBanner';
import InstaFeed from '../../components/InstaFeed';
import ScheduleAppointment from '../../components/ScheduleAppointment';
import ServiceMenu from '../../components/ServiceMenu';

function Home() {
  return (
    <div className="min-w-[380px]">
      <ParallaxProvider>
        <ParallaxBanner
          layers={[{ image: headerImage, speed: -15 }]}
          className="h-[300px] md:h-[500px]">
          <div className="h-[300px] md:h-[500px] bg-black opacity-20"></div>
          <HeaderBanner />
        </ParallaxBanner>
        <Parallax speed={10}>
          <ServiceMenu />
        </Parallax>
        <ParallaxBanner
          layers={[{ image: backgroundImage, speed: -15 }]}
          className="h-[300px] md:h-[500px]">
          <div className="h-[300px] md:h-[500px] bg-black opacity-20"></div>
          <ScheduleAppointment />
        </ParallaxBanner>
        <Parallax speed={10}>
          <div className="flex justify-center items-center pb-16">
            <InstaFeed />
          </div>
        </Parallax>
      </ParallaxProvider>
    </div>
  );
}

export default Home;
