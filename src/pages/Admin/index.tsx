import React, { useEffect, useState } from 'react';
import { User } from 'firebase/auth';

import { auth } from '../../firebase';
import headerImage from '../../images/header-background.jpg';
import Login from '../../components/Login';
import ServiceEdit from '../../components/ServiceEdit';

function Admin() {
  const [isAuth, setIsAuth] = useState<boolean>(false);

  useEffect(() => {
    const onAuthStateChanged = (loggedInUser: User | null) => {
      if (loggedInUser) {
        setIsAuth(true);
      }
    };
    const subscriber = auth.onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  return (
    <div className="min-h-screen min-w-full">
      <img
        className="hidden md:block w-full absolute top-0 -z-10 h-screen object-cover"
        src={headerImage}
      />
      <div className="hidden md:block h-screen bg-black opacity-30"></div>
      <div className="absolute top-0 min-w-full h-screen">
        <div className="flex justify-center items-center h-screen">
          {isAuth ? (
            <div className="bg-white p-8 rounded-lg w-full lg:w-[800px] h-full lg:h-[800px]">
              <ServiceEdit />
            </div>
          ) : (
            <div className="bg-white p-8 rounded-lg w-full lg:w-[500px]">
              <p className="text-3xl md:text-4xl text-center dancingScriptSemiBold">
                Grace Forth Beauty
              </p>
              <Login />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Admin;
