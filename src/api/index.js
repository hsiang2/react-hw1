import { getApps, getApp, initializeApp } from 'firebase/app'
import { collection, deleteDoc, doc, getDocs, getFirestore, setDoc } from 'firebase/firestore'
import images from '../json/images.json'

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECTID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APPID,
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
    // apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    // authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    // projectId: import.meta.env.VITE_FIREBASE_PROJECTID,
    // storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    // messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    // appId: import.meta.env.VITE_FIREBASE_APPID,
    // measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
}

const app_length = getApps().length > 0

const app = app_length ? getApp() : initializeApp(firebaseConfig)

const db = getFirestore(app)

const imagesCollection = collection(db, "images")

export const feedImages = async () => {
    const querySnapshot = await getDocs(imagesCollection)
    querySnapshot.forEach(async (image) => {
        await deleteDoc(doc(db, "images", image.id))
    })
    images.forEach(async (image) => {
        const docRef = await doc(imagesCollection)
        await setDoc(docRef, { ...image, id: docRef.id })
    })
}

export const getImages = async () => {
    const querySnapshot = await getDocs(imagesCollection)
    let result = []
    querySnapshot.forEach(async (image) => {
        await result.push(image.data())
    })
    return result
}

// images.forEach(async (doc) => {
//     await addDoc(imagesCollection, doc)
// })