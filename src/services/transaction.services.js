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
const customerCollectionRef = collection(db, 'user');
class TransactionDataService {
  addTransaction = (newTransaction, updateBalance, id) => {
    console.log("check inside  transactyion");
    console.log(updateBalance);
    addDoc(transactionCollectionRef, newTransaction);
      const customerDoc = doc(db, 'user', id);
      return updateDoc(customerDoc, updateBalance);
   
  };

  updateTransaction = (id, updatedTransaction,updateBalance,custId) => {
    const transactionDoc = doc(db, 'transactions', id);
     updateDoc(transactionDoc, updatedTransaction);
       const customerDoc = doc(db, 'user', custId);
      return updateDoc(customerDoc, updateBalance);
   
    
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