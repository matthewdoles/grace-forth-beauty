import React from 'react';
import { ImInstagram } from 'react-icons/im';
import headerImage from '../../images/header-background.jpg';

const InstaFeed = () => {
  return (
    <div className="w-full min-[1200px]:w-[800px] p-2 min-[1200px]:p-0 mx-0 min-[1200px]:mx-4">
      <div className="flex flex-row items-center my-8">
        <ImInstagram className="h-8 w-8 mr-4" />
        <p className="text-3xl min-[600px]:text-4xl" style={{ fontFamily: 'Overlock-Black' }}>
          @graceforthbeauty
        </p>
      </div>
      <div className="grid gap-2 min-[600px]:gap-4 grid-cols-2 min-[600px]:grid-cols-3">
        <img className="w-full h-[200px] min-[800px]:h-[250px] object-cover" src={headerImage} />
        <img className="w-full h-[200px] min-[800px]:h-[250px] object-cover" src={headerImage} />
        <img className="w-full h-[200px] min-[800px]:h-[250px] object-cover" src={headerImage} />
        <img className="w-full h-[200px] min-[800px]:h-[250px] object-cover" src={headerImage} />
        <img className="w-full h-[200px] min-[800px]:h-[250px] object-cover" src={headerImage} />
      </div>
    </div>
  );
};

export default InstaFeed;
