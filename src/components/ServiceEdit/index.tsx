import React, { useEffect, useState } from 'react';
import { MdOutlineDelete } from 'react-icons/md';
import { getRecordId, getServices } from '../../functions';
import { ServiceDetail } from '../../Models/ServiceDetail.model';
import { serviceCol } from '../../firebase';
import { doc, updateDoc } from 'firebase/firestore';
import { FirebaseError } from 'firebase/app';

const inputStyles =
  '!outline-0 text-xl w-full max-w-md my-4 bg-transparent border-x-transparent ' +
  `border-t-transparent rounded-none border-b-2 mr-2 border-primary`;

const ServiceEdit = () => {
  const [services, setServices] = useState<ServiceDetail[]>([]);
  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    setServices(await getServices());
  };

  const onSave = async () => {
    const recordId = await getRecordId();
    console.log(recordId);
    const boardDocRef = doc(serviceCol, recordId);
    updateDoc(boardDocRef, {
      services
    })
      .then(() => {
        console.log('success');
      })
      .catch((err: FirebaseError) => {
        console.log(err);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="overflow-y-scroll h-[600px] w-full">
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
          <div className="w-32"></div>
        </div>
        {services.map((service, i) => (
          <div key={i} className="w-full">
            <div className="flex flex-row h-20">
              <div className="flex flex-grow items-center justify-end mr-8">
                <input
                  type="text"
                  value={service.name}
                  onChange={(e) => {
                    setServices((currState) => {
                      const state = [...currState];
                      state[i].name = e.target.value;
                      return state;
                    });
                  }}
                  className={`input ${inputStyles} text-2xl`}
                />
              </div>
              <div
                className="w-[100px] min-[450px]:w-[200px] bg-primary flex justify-center items-center"
                style={
                  i + 1 === services.length
                    ? { borderBottomLeftRadius: 12, borderBottomRightRadius: 12 }
                    : {}
                }>
                <input
                  type="text"
                  style={{ fontFamily: 'Overlock-Black' }}
                  value={service.price}
                  onChange={(e) => {
                    setServices((currState) => {
                      const state = [...currState];
                      state[i].price = e.target.value;
                      return state;
                    });
                  }}
                  className={`input ${inputStyles} text-2xl min-[600px]:text-4xl text-white text-center border-white w-1/2`}
                />
              </div>
              <div className="flex flex-col w-32 items-center justify-center">
                <MdOutlineDelete
                  className="w-12 h-12 text-red-500 hover:text-red-500/50 border-none"
                  onClick={() => {
                    setServices((currState) => [...currState.filter((_s, index) => i !== index)]);
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-row mx-auto justify-center w-full items-center mt-4">
        <button
          className="btn bg-primary hover:bg-primary/50 w-52 border-none m-2 text-white"
          onClick={() => {
            setServices((currState) => [...currState, { name: '', price: '' }]);
          }}>
          Add
        </button>
        <button
          className="btn bg-green-500 hover:bg-green-500/50 w-52 border-none m-2 text-white"
          onClick={onSave}>
          Save
        </button>
      </div>
    </div>
  );
};

export default ServiceEdit;
