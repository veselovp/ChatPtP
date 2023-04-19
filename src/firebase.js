import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyBmsMfpbVnCVuFBGPcDa4rIE18VnKlsYXY',
  authDomain: 'chatapp-f59d3.firebaseapp.com',
  projectId: 'chatapp-f59d3',
  storageBucket: 'chatapp-f59d3.appspot.com',
  messagingSenderId: '16603225495',
  appId: '1:16603225495:web:b41a2e7bfc7bf815b2f8d2',
}

export const app = initializeApp(firebaseConfig)
export const auth = getAuth()
export const storage = getStorage()
export const db = getFirestore()
