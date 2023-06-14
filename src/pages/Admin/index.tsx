import React, { useEffect, useState } from 'react';
import headerImage from '../../images/header-background.jpg';
import Login from '../../components/Login';
import { auth } from '../../firebase';
import { User } from 'firebase/auth';

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
      <img className="w-full absolute top-0 -z-10 h-screen object-cover" src={headerImage} />
      <div className="h-screen bg-black opacity-30"></div>
      <div className="absolute top-0 min-w-full h-screen">
        <div className="flex justify-center items-center h-screen">
          {isAuth ? (
            <div className="bg-white p-8 rounded-lg w-[500px]"></div>
          ) : (
            <div className="bg-white p-8 rounded-lg w-[500px]">
              <Login />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Admin;
