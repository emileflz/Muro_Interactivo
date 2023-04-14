import firebase from "firebase/compat/app";
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyBgm5V2IaDBgqW8XBPdLIhVWoL7CspBp-s",
  authDomain: "murointeractivo-107b0.firebaseapp.com",
  projectId: "murointeractivo-107b0",
  storageBucket: "murointeractivo-107b0.appspot.com",
  messagingSenderId: "384629934976",
  appId: "1:384629934976:web:e334f6a570a524205e0f65"
};
const storage = firebase.initializeApp(firebaseConfig);

export {storage, firebase as default}