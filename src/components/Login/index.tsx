import React, { useState } from 'react';
import { browserLocalPersistence, setPersistence, signInWithEmailAndPassword } from 'firebase/auth';
import { FirebaseError } from 'firebase/app';

import { auth } from '../../firebase';

type Props = {
  callback?: () => void;
};

const Login = ({ callback }: Props) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const inputStyles =
    '!outline-0 text-xl w-full max-w-md my-4 bg-transparent border-x-transparent ' +
    `border-t-transparent rounded-none border-b-2 mr-2 border-primary`;

  const handleFormSubmit = async () => {
    if (email.length > 0 && password.length > 0) {
      setLoading(false);
      setPersistence(auth, browserLocalPersistence)
        .then(() => {
          signInWithEmailAndPassword(auth, email, password)
            .then(() => {
              setEmail('');
              setPassword('');
              if (callback) {
                callback();
              }
            })
            .catch((err: FirebaseError) => {
              console.log(err);
              setError(err.message);
              // if (err.message === firebaseErrorMessages.wrongPassword) {
              //   dispatch({ type: SET_USER_ERROR, error: errorMessages.wrongPassword });
              // } else if (err.message === firebaseErrorMessages.invalidEmail) {
              //   dispatch({ type: SET_USER_ERROR, error: errorMessages.invalidEmail });
              // } else {
              //   dispatch({
              //     type: SET_USER_ERROR,
              //     error: errorMessages.unknown
              //   });
            });
        })
        .catch((err: FirebaseError) => console.log(err))
        .finally(() => setLoading(false));
    }
  };

  return (
    <div className="flex flex-col w-full items-center p-4">
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={`input ${inputStyles}`}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className={`input ${inputStyles}`}
      />
      <p className="text-red-500 font-bold mt-4">{error}</p>
      <div className="flex flex-col w-full items-center mt-4">
        {loading && (
          <div className="flex flex-row justify-center p-4">
            {/* <BounceLoader size={75} color="#4ECCA3" /> */}
          </div>
        )}
        {!loading && (
          <div className="flex flex-col w-full items-center mt-4">
            <button
              className="btn bg-primary hover:bg-primary/50 w-40 border-none my-2 text-white"
              onClick={handleFormSubmit}>
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
