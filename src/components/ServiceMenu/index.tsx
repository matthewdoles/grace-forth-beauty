import React, { useEffect, useState } from 'react';
import { Circles } from 'react-loader-spinner';

import { getServices } from '../../functions';
import { ServiceDetail } from '../../Models/ServiceDetail.model';
import '../../const/styles.css';

const ServiceMenu = () => {
  const [services, setServices] = useState<ServiceDetail[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    const serviceData = await getServices();
    setServices(serviceData);
    setLoading(false);
  };

  return (
    <div className="w-full min-h-[250px] flex justify-center items-center">
      {loading ? (
        <Circles height="80" width="80" color="rgb(240,141,159)" visible={true} />
      ) : (
        <div className="w-full lg:w-[650px] p-4 m-4">
          <div className="flex flex-row h-24">
            <div className="flex flex-grow items-center justify-end mr-8 overlockBlack">
              <p className="text-2xl md:text-4xl">Service</p>
            </div>
            <div
              className="w-[100px] md:w-[200px] bg-primary flex justify-center items-center"
              style={{ borderTopLeftRadius: 12, borderTopRightRadius: 12 }}>
              <p className="text-2xl md:text-4xl text-white overlockBlack">Pricing</p>
            </div>
          </div>
          {services.map((service, i) => (
            <div key={i}>
              <div className="flex flex-row h-2">
                <div className="flex flex-grow"></div>
                <div className="w-[100px] md:w-[200px] bg-primary flex justify-center items-center">
                  <div className="w-[75px] md:w-[125px] border-white border-b-2 md:border-b-4"></div>
                </div>
              </div>
              <div className="flex flex-row h-20">
                <div className="flex flex-grow items-center justify-end mr-8">
                  <p className="text-2xl md:text-3xl">{service.name}</p>
                </div>
                <div
                  className="w-[100px] md:w-[200px] bg-primary flex justify-center items-center"
                  style={
                    i + 1 === services.length
                      ? { borderBottomLeftRadius: 12, borderBottomRightRadius: 12 }
                      : {}
                  }>
                  <p className="text-2xl md:text-4xl text-white overlockBlack">${service.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ServiceMenu;
