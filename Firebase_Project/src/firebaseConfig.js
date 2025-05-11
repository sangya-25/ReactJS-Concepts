import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCdZEl27DhEUJ8GErzrhmFRcMtD-SEJU2Y",
  authDomain: "react-firebase-auth-2025-44790.firebaseapp.com",
  projectId: "react-firebase-auth-2025-44790",
  storageBucket: "react-firebase-auth-2025-44790.firebasestorage.app",
  messagingSenderId: "1076410577666",
  appId: "1:1076410577666:web:953b01e94b5c1624c6481b",
  measurementId: "G-D46HV798QL"
};

const app=initializeApp(firebaseConfig);
const auth=getAuth(app);

export default auth;