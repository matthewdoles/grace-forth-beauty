import { collection, getDocs, query } from 'firebase/firestore';
import { FirebaseError } from 'firebase/app';

import { firestore } from '../firebase';
import { ServiceDetail } from '../Models/ServiceDetail.model';

export const getServices = async () => {
  const serviceData: ServiceDetail[] = [];
  const q = query(collection(firestore, 'services'));
  await getDocs(q)
    .then((serviceDocs) => {
      serviceDocs.forEach((serviceDoc) => {
        const b = serviceDoc.data();
        b.services.forEach((s: ServiceDetail) => serviceData.push(s));
      });
      return serviceData;
    })
    .catch((err: FirebaseError) => {
      console.log(err);
    });
  return serviceData;
};

export const getRecordId = async () => {
  let recordId = '';
  const q = query(collection(firestore, 'services'));
  await getDocs(q)
    .then((serviceDocs) => {
      serviceDocs.forEach((serviceDoc) => {
        recordId = serviceDoc.id;
      });
      return recordId;
    })
    .catch((err: FirebaseError) => {
      console.log(err);
    });
  return recordId;
};
