import { initializeApp } from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyClu9601YBFx9fLStcPv5W14VEu8eEO9c0",
    authDomain: "pro101-434f9.firebaseapp.com",
    databaseURL: "https://pro101-434f9.firebaseio.com",
    projectId: "pro101-434f9",
    storageBucket: "pro101-434f9.appspot.com",
    messagingSenderId: "997453555036",
    appId: "1:997453555036:web:ee986027ff05847eac0d99",
    measurementId: "G-4MWNZE4416"
  };

const app = initializeApp( firebaseConfig )

export const db = app.firestore()
export const todosCollection = db.collection('todos') // เรียกใช้ collection 