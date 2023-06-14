import React from 'react';
import { services } from '../../const';

const ServiceMenu = () => {
  return (
    <div className="w-full min-[800px]:w-[520px] p-4 m-4">
      <div className="flex flex-row h-24">
        <div className="flex flex-grow items-center justify-end mr-8">
          <p className="text-2xl min-[600px]:text-4xl" style={{ fontFamily: 'Overlock-Black' }}>
            Service
          </p>
        </div>
        <div
          className="w-[100px] min-[450px]:w-[200px] bg-primary flex justify-center items-center"
          style={{ borderTopLeftRadius: 12, borderTopRightRadius: 12 }}>
          <p
            className="text-2xl min-[600px]:text-4xl text-white"
            style={{ fontFamily: 'Overlock-Black' }}>
            Pricing
          </p>
        </div>
      </div>
      {services.map((service, i) => (
        <div key={i}>
          <div className="flex flex-row h-2">
            <div className="flex flex-grow"></div>
            <div className="w-[100px] min-[450px]:w-[200px] bg-primary flex justify-center items-center">
              <div className="w-[75px] min-[450px]:w-[125px] border-white border-b-2 min-[600px]:border-b-4"></div>
            </div>
          </div>
          <div className="flex flex-row h-20">
            <div className="flex flex-grow items-center justify-end mr-8">
              <p className="text-2xl min-[600px]:text-4xl">{service.name}</p>
            </div>
            <div
              className="w-[100px] min-[450px]:w-[200px] bg-primary flex justify-center items-center"
              style={
                i + 1 === services.length
                  ? { borderBottomLeftRadius: 12, borderBottomRightRadius: 12 }
                  : {}
              }>
              <p
                className="text-2xl min-[600px]:text-4xl text-white"
                style={{ fontFamily: 'Overlock-Black' }}>
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
