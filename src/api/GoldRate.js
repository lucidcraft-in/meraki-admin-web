import {db} from './firebase'
import { collection, addDoc, Timestamp, updateDoc, doc } from 'firebase/firestore'

const updateGoldRate = async (req, res) => { 

    const taskDocRef = doc(db, 'goldrate', id)
    try {
        
    }
    catch (err) {
        await updateDoc(taskDocRef, {
            down: req.body.down,
            gram: req.body.gram,
            pavan: req.body.pavan,
            up:req.body.up,
        })
        onClose()
    }
    
}
   
