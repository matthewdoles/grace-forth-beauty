import { collection, getDocs, query } from 'firebase/firestore';
import { firestore } from '../firebase';
import { FirebaseError } from 'firebase/app';
import { ServiceDetail } from '../Models/ServiceDetail.model';

export const getServices = async () => {
  const serviceData: ServiceDetail[] = [];
  const q = query(collection(firestore, 'services'));
  await getDocs(q)
    .then((serviceDocs) => {
      serviceDocs.forEach((serviceDoc) => {
        const b = serviceDoc.data();
        console.log(b.services);
        b.services.forEach((s: ServiceDetail) => serviceData.push(s));
      });
      return serviceData;
    })
    .catch((err: FirebaseError) => {
      console.log(err);
    });
  return serviceData;
};
