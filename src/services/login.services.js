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
const staffCollectionRef = collection(db, 'staffs');

class LoginDataService { 

    getAllStaff = () => {
        return getDocs(staffCollectionRef);
    };
    
    getStaff = (id) => {
        const cstaffDoc = doc(db, 'staffs', id);
        return getDoc(cstaffDoc);
        };
}

export default new LoginDataService();