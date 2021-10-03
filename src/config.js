import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCpTKNf2rWAWmzTnt43CgbtOCRdlitSF9k",
  authDomain: "connect-5d982.firebaseapp.com",
  databaseURL: "https://connect-5d982-default-rtdb.firebaseio.com",
  projectId: "connect-5d982",
  storageBucket: "connect-5d982.appspot.com",
  messagingSenderId: "1048711472031",
  appId: "1:1048711472031:web:d58052c7acf32b9a08d3aa",
  measurementId: "G-CXRQV73S29"
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);