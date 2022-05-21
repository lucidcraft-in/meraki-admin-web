import { db } from "../firebase";
import { collection, addDoc, Timestamp, query, orderBy, onSnapshot, QuerySnapshot, updateDoc, deleteDoc, doc } from 'firebase/firestore'

const addTransaction = async (req, res) => {
    try {
        
        await addDoc(collection(db, 'transactions'), {
            
            amount: req.body.amount,
            customerId: req.body.customerId,
            customerName: req.body.customerName,
            date: req.body.date,
            note: req.body.note,
            timestamp: Timestamp.now(),
            transactionType:req.body.transactionType,
        })
        onClose()
    }
    catch (err) {
        alert(err)
    }
}

const viewTransactions = () => {
    const q = query(collection(db, 'transactions'), orderBy('timestamp', 'desc'))
    onSnapshot(q, (QuerySnapshot) => {
        QuerySnapshot.docs.map(doc => ({
            id: doc.id,
            data:doc.data()
        }))
    })

} 

const updateTransaction = async (req, res) => {
    
    const taskDocRef = doc(db, 'transactions', id)
    try {
        await updateDoc(taskDocRef, {
            amount: req.body.amount,
            customerId: req.body.customerId,
            customerName: req.body.customerName,
            date: req.body.date,
            note: req.body.note,
            timestamp: Timestamp.now(),
            transactionType:req.body.transactionType,
          
        })
        onClose()
    }
    catch (err) {
        alert(err)
    }
}

const deleteTransaction = async (req, res) => {
    const taskDocRef = doc(db, 'transactions', id)
    
    try {
        await deleteDoc(taskDocRef)
    }
    catch (err) {
        alert(err)
    }
}