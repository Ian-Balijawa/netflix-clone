import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { config } from '../config/firebase-config';

// we need to somehow seed the database

// we need a config here

// we then initialize the firebase app with that config
const firebase = Firebase.initializeApp(config);
// seedDatabase(firebase);
export { firebase };
