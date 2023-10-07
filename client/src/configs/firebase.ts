// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyB2Ych3HiQ15GaiGDLt-zZAMX40cRbZ3ls',
  authDomain: 'recipes-io.firebaseapp.com',
  projectId: 'recipes-io',
  storageBucket: 'recipes-io.appspot.com',
  messagingSenderId: '423210504580',
  appId: '1:423210504580:web:2adb88d2101b6af32b8dd1',
  measurementId: 'G-C9DZ2YVH6Z',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const analytics = getAnalytics(app);

export const auth = getAuth(app);
auth.useDeviceLanguage();

export const googleProvider = new GoogleAuthProvider();
