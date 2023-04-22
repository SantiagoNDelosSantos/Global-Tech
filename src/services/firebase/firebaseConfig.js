import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAHU82ozXJzTvS8eP1FJm8oWCdkU9FjOMA",
    authDomain: "global-tech-27.firebaseapp.com",
    projectId: "global-tech-27",
    storageBucket: "global-tech-27.appspot.com",
    messagingSenderId: "549901542242",
    appId: "1:549901542242:web:08e576cda3aa373476823b"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)