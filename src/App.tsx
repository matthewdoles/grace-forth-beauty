import React from 'react';
import headerImage from './images/header-background.jpg';
import ServiceMenu from './components/ServiceMenu';

function App() {
  return (
    <div className="min-h-screen min-w-full">
      <img className="w-full absolute top-0 -z-10 h-[400px] object-cover" src={headerImage} />
      <div className="h-[400px] bg-black opacity-20"></div>
      <div className="absolute top-0 min-w-full h-[400px]">
        <div className="flex flex-col justify-center items-center h-[400px]">
          <p className="text-9xl text-white" style={{ fontFamily: 'DancingScript-SemiBold' }}>
            Grace Forth Beauty
          </p>
          <p className="mt-8 text-4xl text-white">licensed esthetician &amp; lash artist</p>
        </div>
      </div>
      <div className="flex flex-col mx-auto max-w-[800px] min-w-[800px] h-[600px]">
        <ServiceMenu />
      </div>
    </div>
  );
}

export default App;
