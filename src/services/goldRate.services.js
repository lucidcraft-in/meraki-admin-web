import { db } from '../firebase';
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from 'firebase/firestore';

const goldrateCollectionRef = collection(db, 'goldrate');
class GoldRateDataService {
  updateGoldRate = (id, updatedGoldRate) => {
    const goldRateDoc = doc(db, 'goldrate', id);
    return updateDoc(goldRateDoc, updatedGoldRate);
  };

  getGOldRate = (id) => {
    const cgoldRateDoc = doc(db, 'goldrate', id);
    return getDoc(cgoldRateDoc);
  };

  getAllGoldRate = () => {
    return getDocs(goldrateCollectionRef);
  };
}

export default new GoldRateDataService();
