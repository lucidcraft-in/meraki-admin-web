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

const transactionCollectionRef = collection(db, 'transactions');
class TransactionDataService {
  addTransaction = (newTransaction) => {
    return addDoc(transactionCollectionRef, newTransaction);
  };

  updateTransaction = (id, updatedTransaction) => {
    const transactionDoc = doc(db, 'transactions', id);
    return updateDoc(transactionDoc, updatedTransaction);
  };

  deletTransaction = (id) => {
    const transactionDoc = doc(db, 'transactions', id);
    return deleteDoc(transactionDoc);
  };
  getAllTransactions = () => {
    return getDocs(transactionCollectionRef);
    };
    
    getTransaction = (id) => {
        const transactionDoc = doc(db, 'transactions', id);
        return getDoc(transactionDoc);
        };
}
export default new TransactionDataService();