import {db} from './firebase'
import { collection, addDoc, Timestamp, query, orderBy, onSnapshot, QuerySnapshot,updateDoc,deleteDoc, doc  } from 'firebase/firestore'
import { async } from '@firebase/util'

 const addCustomer = async (req,res) => {
    try {
        
        await addDoc(collection(db, "user"), {
            name: req.body.name,
            address: req.body.address,
            cust_id: req.body.cust_id,
            phone_no: req.body.phone_no,
            balance: req.body.balance,
            place: req.body.place,
            timestamp: Timestamp.now(),
            token:""
        })
        onClose()
    }
    catch (err) {
        alert(err)
    }
   
}

const viewCustomers = () => {
    const q = query(collection(db, 'user'), orderBy('timestamp', 'desc'))
    onSnapshot(q, (QuerySnapshot) => {
        QuerySnapshot.docs.map(doc => ({
            id: doc.id,
            data:doc.data()
        }))
    })

} 
const updateCustomer = async (req, res) => {
    
    const taskDocRef = doc(db, 'user', id)
    try {
        await updateDoc(taskDocRef, {
            name: req.body.name,
            address: req.body.address,
            cust_id: req.body.cust_id,
            phone_no: req.body.phone_no,
            balance: req.body.balance,
            place: req.body.place,
            timestamp: Timestamp.now(),
          
        })
        onClose()
    }
    catch (err) {
        alert(err)
    }
}

const deleteCustomer = async (req, res) => {
    const taskDocRef = doc(db, 'user', id)
    
    try {
        await deleteDoc(taskDocRef)
    }
    catch (err) {
        alert(err)
    }
}