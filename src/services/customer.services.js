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

const customerCollectionRef = collection(db, 'user');
class CustomerDataService {
  addCustomer = (newCustomer) => {
    return addDoc(customerCollectionRef, newCustomer);
    };
    
  updateCustomer = (id, updatedCustomer) => {
    const customerDoc = doc(db, 'user', id);
    return updateDoc(customerDoc, updatedCustomer);
  };

    
  deletCustome = (id) => {
    const customerDoc = doc(db, 'user', id);
    return deleteDoc(customerDoc);
    };
    
  getAllCustomer = () => {
    return getDocs(customerCollectionRef);
    };
    
  getCustomer = (id) => {
    const customerDoc = doc(db, 'user', id);
    return getDoc(customerDoc);
    };
    
}
export default new CustomerDataService();
