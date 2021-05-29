import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyBGA5LPgF-ePlENLWCnGn52Q2ifKFEMG_s",
    authDomain: "whatsappism.firebaseapp.com",
    projectId: "whatsappism",
    storageBucket: "whatsappism.appspot.com",
    messagingSenderId: "993710677301",
    appId: "1:993710677301:web:74665826e1cabeb094807c"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();

  const auth = firebase.auth();
  // for authentication purpose

  const provider= new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;