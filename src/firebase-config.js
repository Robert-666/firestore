import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAGbs_V2nFITyxRjV2gyCGE0rA08TsK-Es",
    authDomain: "fir-tutorial-ab7e7.firebaseapp.com",
    projectId: "fir-tutorial-ab7e7",
    storageBucket: "fir-tutorial-ab7e7.appspot.com",
    messagingSenderId: "610034456370",
    appId: "1:610034456370:web:e0acaf6d862a0f8430692b",
    measurementId: "G-TZG3ZWMF0F"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
