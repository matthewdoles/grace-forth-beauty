import React from 'react';
import { ImInstagram } from 'react-icons/im';

import classic from '../../images/classic.jpg';
import volume from '../../images/volume.jpg';
import hybrid from '../../images/hybrid.jpg';
import insta1 from '../../images/insta1.jpg';
import insta2 from '../../images/insta2.jpg';
import insta3 from '../../images/insta3.jpg';
import insta4 from '../../images/insta4.jpg';
import insta5 from '../../images/insta5.jpg';
import insta6 from '../../images/insta6.jpg';
import '../../const/styles.css';

const InstaFeed = () => {
  return (
    <div className="w-full xl:w-[800px] p-2 xl:p-0 mx-2">
      <a className="flex flex-col md:flex-row items-center my-8">
        <a
          className="btn bg-blue-500 hover:bg-blue-500/50 w-26 md:w-32 h-6 text-white text-md md:text-xl capitalize"
          href="https://www.instagram.com/graceforthbeauty/"
          rel="noreferrer"
          target="_blank">
          <ImInstagram className="h-6" />
          <p>Follow</p>
        </a>
        <p className="ml-4 text-xl md:text-4xl mt-4 md:mt-0 overlockBlack">@graceforthbeauty</p>
      </a>
      <div className="grid gap-2 md:gap-4 grid-cols-1 md:grid-cols-3">
        <div className="image relative flex flex-col">
          <img className="w-full h-[500px] object-cover" src={classic} />
          <div className="w-full absolute bottom-0">
            <p className="text-white text-center text-lg bg-black bg-opacity-50">Classic</p>
          </div>
        </div>
        <div className="image relative flex flex-col">
          <img className="w-full h-[500px] object-cover" src={volume} />
          <div className="w-full absolute bottom-0">
            <p className="text-white text-center text-lg bg-black bg-opacity-50">Volume</p>
          </div>
        </div>
        <div className="image relative flex flex-col">
          <img className="w-full h-[500px] object-cover" src={hybrid} />
          <div className="w-full absolute bottom-0">
            <p className="text-white text-center text-lg bg-black bg-opacity-50">Hybrid</p>
          </div>
        </div>
      </div>
      <div className="mt-4 grid gap-2 md:gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <img className="w-full h-[200px] min-[800px]:h-[250px] object-cover" src={insta5} />
        <img className="w-full h-[200px] min-[800px]:h-[250px] object-cover" src={insta3} />
        <img className="w-full h-[200px] min-[800px]:h-[250px] object-cover" src={insta2} />
        <img className="w-full h-[200px] min-[800px]:h-[250px] object-cover" src={insta6} />
        <img className="w-full h-[200px] min-[800px]:h-[250px] object-cover" src={insta1} />
        <img className="w-full h-[200px] min-[800px]:h-[250px] object-cover" src={insta4} />
      </div>
    </div>
  );
};

export default InstaFeed;
