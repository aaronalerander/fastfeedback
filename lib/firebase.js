import firebase from 'firebase/app';
import 'firebase/auth';

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: process.env.NEXT_PUBLIC__FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC__FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC__FIREBASE_PROJECT_ID
  });
}

export default firebase;
