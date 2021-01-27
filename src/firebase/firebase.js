import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAduuce1GOSZJDlXiPvVcxbq_cDRP_-0YU",
  authDomain: "linkedin-clone-4fb93.firebaseapp.com",
  projectId: "linkedin-clone-4fb93",
  storageBucket: "linkedin-clone-4fb93.appspot.com",
  messagingSenderId: "536051144931",
  appId: "1:536051144931:web:f5c67d01843df25bedcdd6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};