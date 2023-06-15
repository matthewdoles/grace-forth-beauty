import React, { useEffect, useState } from 'react';
import { Circles } from 'react-loader-spinner';
import { MdClose, MdOutlineDelete } from 'react-icons/md';
import { getRecordId, getServices } from '../../functions';
import { ServiceDetail } from '../../models/ServiceDetail.model';
import { serviceCol } from '../../firebase';
import { doc, updateDoc } from 'firebase/firestore';
import { FirebaseError } from 'firebase/app';

const inputStyles =
  '!outline-0 text-xl w-full max-w-md my-4 bg-transparent border-x-transparent ' +
  `border-t-transparent rounded-none border-b-2 mr-2 border-primary`;

const ServiceEdit = () => {
  const [services, setServices] = useState<ServiceDetail[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  const [showError, setShowError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    setServices(await getServices());
  };

  const onSave = async () => {
    setLoading(true);
    const recordId = await getRecordId();
    const boardDocRef = doc(serviceCol, recordId);
    updateDoc(boardDocRef, {
      services
    })
      .then(() => setShowSuccess(true))
      .catch((err: FirebaseError) => {
        setShowError(true);
        setErrorMessage(err.message);
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="flex flex-col items-center justify-center h-full">
      {showSuccess ? (
        <div className="alert bg-green-500 mb-8">
          <p></p>
          <h3 className="text-2xl text-white font-bold">Updates successfully saved!</h3>
          <MdClose
            className="text-2xl text-white cursor-pointer"
            onClick={() => setShowSuccess(false)}
          />
        </div>
      ) : null}
      {showError ? (
        <div className="alert bg-red-500 mb-8">
          <p></p>
          <div>
            <h3 className="text-2xl text-white font-bold">Error!</h3>
            <div className="text-xl text-white">{errorMessage}</div>
          </div>
          <MdClose
            className="text-2xl text-white cursor-pointer"
            onClick={() => setShowError(false)}
          />
        </div>
      ) : null}
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
                  className={`input ${inputStyles} text-2xl min-[600px]:text-4xl text-white text-center border-white w-[150px]`}
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
      <div className="flex flex-row mx-auto justify-center w-full items-center mt-8">
        {loading ? (
          <Circles height="50" width="50" color="rgb(240,141,159)" visible={true} />
        ) : (
          <>
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
          </>
        )}
      </div>
    </div>
  );
};

export default ServiceEdit;
