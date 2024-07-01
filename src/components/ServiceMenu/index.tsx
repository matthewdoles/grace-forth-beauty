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
        <div className="w-full lg:w-[650px] p-2 md:p-4 m-0 md:m-4">
          <div className="flex flex-row h-24">
            <div className="flex justify-end items-center w-full md:w-[600px] pr-8 overlockBlack">
              <p className="text-xl md:text-4xl text-right">Service</p>
            </div>
            <div
              className="w-[100px] md:w-[200px] bg-primary flex justify-center items-center"
              style={{ borderTopLeftRadius: 12, borderTopRightRadius: 12 }}>
              <p className="text-xl md:text-4xl text-white overlockBlack">Pricing</p>
            </div>
          </div>
          {services.map((service, i) => (
            <div key={i}>
              <div className="flex flex-row h-2">
                <div className="flex justify-center w-full md:w-[600px] pr-8"></div>
                <div className="w-[100px] md:w-[200px] bg-primary flex justify-center items-center">
                  <div className="w-[50px] md:w-[100px] border-white border-b-2 md:border-b-4"></div>
                </div>
              </div>
              <div className="flex flex-row min-h-[80px]">
                <div className="flex flex-col justify-center w-full md:w-[600px] pr-8">
                  <p className="text-xl md:text-3xl text-right">{service.name}</p>
                  <p className="text-sm md:text-lg text-right">{service.description}</p>
                </div>
                <div
                  className="w-[100px] md:w-[200px] bg-primary flex justify-center items-center"
                  style={
                    i + 1 === services.length
                      ? { borderBottomLeftRadius: 12, borderBottomRightRadius: 12 }
                      : {}
                  }>
                  <p className="text-xl md:text-4xl text-white overlockBlack">${service.price}</p>
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
