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

const slideCollectionRef = collection(db, 'slide');
class SlideDataService {
 
 

 
  getAllSlides = () => {
    return getDocs(slideCollectionRef);
    };
    
 
    
}
export default new SlideDataService();
