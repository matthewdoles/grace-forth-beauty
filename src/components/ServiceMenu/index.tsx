import React from 'react';
import { services } from '../../const';

const ServiceMenu = () => {
  return (
    <div className="w-[600px]">
      <div className="flex flex-row h-24">
        <div className="flex flex-grow items-center justify-end mr-8">
          <p className="text-4xl" style={{ fontFamily: 'Overlock-Black' }}>
            Service
          </p>
        </div>
        <div className="w-[200px] bg-primary flex justify-center items-center">
          <p className="text-4xl text-white" style={{ fontFamily: 'Overlock-Black' }}>
            Pricing
          </p>
        </div>
      </div>
      {services.map((service, i) => (
        <div key={i}>
          <div className="flex flex-row h-2">
            <div className="flex flex-grow"></div>
            <div className="w-[200px] bg-primary flex justify-center items-center">
              <div
                className="w-[125px]"
                style={{ borderBottomWidth: '4px', borderColor: 'white' }}></div>
            </div>
          </div>
          <div className="flex flex-row h-20">
            <div className="flex flex-grow items-center justify-end mr-8">
              <p className="text-4xl">{service.name}</p>
            </div>
            <div className="w-[200px] bg-primary flex justify-center items-center">
              <p className="text-4xl text-white" style={{ fontFamily: 'Overlock-Black' }}>
                ${service.price}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceMenu;
