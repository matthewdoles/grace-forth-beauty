import React from 'react';
import '../../const/styles.css';

const HeaderBanner = () => {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center">
      <p className="text-5xl md:text-7xl min-[920px]:text-9xl text-white dancingScriptSemiBold">
        Grace Forth Beauty
      </p>
      <p className="mt-8 text-2xl md:text-3xl min-[900px]:text-4xl text-white">
        licensed esthetician &amp; lash artist
      </p>
    </div>
  );
};

export default HeaderBanner;
