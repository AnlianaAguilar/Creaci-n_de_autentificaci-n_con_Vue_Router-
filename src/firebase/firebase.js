import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

import { firebaseConfig } from "./firebaseConf";

initializeApp(firebaseConfig);

export const db =  getFirestore();