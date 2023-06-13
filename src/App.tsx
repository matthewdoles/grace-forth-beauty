import React from 'react';
import headerImage from './images/header-background.jpg';

function App() {
  return (
    <div className="min-h-screen min-w-full">
      <img className="w-full absolute top-0 -z-10 h-[600px] object-cover" src={headerImage} />
      <div className="h-[600px] bg-black opacity-30"></div>
      <div className="absolute top-0 min-w-full h-[600px]">
        <div className="flex justify-center items-center h-[600px]">
          <p
            className="text-9xl text-center text-white"
            style={{ fontFamily: 'DancingScript-SemiBold' }}>
            Grace Forth Beauty
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
