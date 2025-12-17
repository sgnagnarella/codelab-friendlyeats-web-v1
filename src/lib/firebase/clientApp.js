"use client";

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

import { firebaseConfig as localFirebaseConfig } from "./config";

// Use automatic initialization
// https://firebase.google.com/docs/app-hosting/firebase-sdks#initialize-with-no-arguments

let tfirebaseApp;
if (process.env.NODE_ENV === "development") {
    tfirebaseApp = initializeApp(localFirebaseConfig);
} else {
    tfirebaseApp = initializeApp();
}

export const firebaseApp = tfirebaseApp;



export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);
export const storage = getStorage(firebaseApp);
