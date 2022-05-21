import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// const firebaseConfig = {
//   apiKey: 'AIzaSyDeEwQhp2_VeSBLKLPd669hiltPIRQ8Y94',
//   authDomain: 'meraki-gold.firebaseapp.com',
//   projectId: 'meraki-gold',
//   storageBucket: 'meraki-gold.appspot.com',
//   messagingSenderId: '73076062747',
//   appId: '1:73076062747:web:19e73785ec1fe539e916be',
//   measurementId: 'G-JLSJTVNN5Y',
// };

const firebaseConfig = {
    apiKey: "AIzaSyBr_-PifmOrGheAOCfRuFGuNPMXYiRNPb8",
    authDomain: "oro-app-228c9.firebaseapp.com",
    projectId: "oro-app-228c9",
    storageBucket: "oro-app-228c9.appspot.com",
    messagingSenderId: "706593650125",
    appId: "1:706593650125:web:20a792e23ff90345458084",
    measurementId: "G-76NK6KDFPK"
  };
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const db = getFirestore(app);
export { db };

// firebase.initializeApp(firebaseConfig);
// export default firebase;
