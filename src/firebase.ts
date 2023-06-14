import { initializeApp } from 'firebase/app';
import { getFirestore, CollectionReference, collection, DocumentData } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { Service } from './Models/Service.model';

export const firebaseApp = initializeApp({
  apiKey: 'AIzaSyDzKKfqMWkpU1TW8clr9qq8CXVR8xXtuzk',
  authDomain: 'grace-forth-beauty.firebaseapp.com',
  projectId: 'grace-forth-beauty',
  storageBucket: 'grace-forth-beauty.appspot.com',
  messagingSenderId: '63154514143',
  appId: '1:63154514143:web:148b745435da55505ae16a',
  measurementId: 'G-XMVTV17155'
});

export const firestore = getFirestore();
export const auth = getAuth();

const createCollection = <T = DocumentData>(collectionName: string) => {
  return collection(firestore, collectionName) as CollectionReference<T>;
};

// export all your collections
export const serviceCol = createCollection<Service>('services');
