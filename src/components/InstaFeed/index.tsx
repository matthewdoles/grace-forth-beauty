import React from 'react';
import { ImInstagram } from 'react-icons/im';

import insta1 from '../../images/insta1.jpg';
import insta2 from '../../images/insta2.jpg';
import insta3 from '../../images/insta3.jpg';
import insta4 from '../../images/insta4.jpg';
import insta5 from '../../images/insta5.jpg';
import insta6 from '../../images/insta6.jpg';

const InstaFeed = () => {
  return (
    <div className="w-full min-[1200px]:w-[800px] p-2 min-[1200px]:p-0 mx-0 min-[1200px]:mx-4">
      <a className="flex flex-row items-center my-8">
        <a
          className="btn bg-blue-500 hover:bg-blue-500/50 w-26 min-[600px]:w-32 h-6 text-white text-md min-[600px]:text-xl capitalize"
          href="https://www.instagram.com/graceforthbeauty/"
          target="_blank"
          rel="noreferrer">
          <ImInstagram className="h-6" />
          Follow
        </a>
        <p className="ml-4 text-2xl min-[600px]:text-4xl" style={{ fontFamily: 'Overlock-Black' }}>
          @graceforthbeauty
        </p>
      </a>
      <div className="grid gap-2 min-[600px]:gap-4 grid-cols-1 min-[400px]:grid-cols-2 min-[600px]:grid-cols-3">
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
