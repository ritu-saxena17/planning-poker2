import * as firebase from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyCUx1c0TboZ0eTn8J5LNvSuZ-H93CgrF7U',
	authDomain: 'planit-e3592.firebaseapp.com',
	projectId: 'planit-e3592',
	storageBucket: 'planit-e3592.appspot.com',
	messagingSenderId: '565275652029',
	appId: '1:565275652029:web:c5f85038ca58218e6becd4',
	measurementId: 'G-HJBMDGR178',
}
const fireSettings = firebase.initializeApp(firebaseConfig);
export const firestoreDb = getFirestore(fireSettings)

export default firestoreDb;