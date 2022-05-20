import firebase from 'firebase'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyDKBILLptsAHmxWSnL9TOZuNl0go6mhiM0',
  authDomain: 'ayoub-fb-clone.firebaseapp.com',
  projectId: 'ayoub-fb-clone',
  storageBucket: 'ayoub-fb-clone.appspot.com',
  messagingSenderId: '244172357601',
  appId: '1:244172357601:web:b82e648582c89389329ca0',
}

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app()

const db = app.firestore()
const storage = firebase.storage()

export { db, storage }
