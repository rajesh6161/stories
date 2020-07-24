import * as firebase from "firebase";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKNOy51RgvC5JXVZ_vsyYdu4q6jSvWK1Q",
  authDomain: "react-hooks-firestore-te-3d4fd.firebaseapp.com",
  databaseURL: "https://react-hooks-firestore-te-3d4fd.firebaseio.com",
  projectId: "react-hooks-firestore-te-3d4fd",
  storageBucket: "react-hooks-firestore-te-3d4fd.appspot.com",
  messagingSenderId: "530512513797",
  appId: "1:530512513797:web:c912ed4584da723364456c",
};

// Initialize Firebase
var fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();
