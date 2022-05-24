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
const staffCollectionRef = collection(db, 'staff');

class LoginDataService { 

    getAllStaff = () => {
        return getDocs(staffCollectionRef);
    };
    
    getStaff = (id) => {
        const cstaffDoc = doc(db, 'staff', id);
        return getDoc(cstaffDoc);
        };
}

export default new LoginDataService();