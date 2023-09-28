import Firebase from "firebase/app";
import "firebase/auth"
import "firebase/firestore"
// import {seedDatabase} from "../../seed"
const firebaseConfig = {
    apiKey: "AIzaSyBU4kM-mJsOGDs72Pa3rvMXfqr_orx19LI",
    authDomain: "netflixapp-562f8.firebaseapp.com",
    projectId: "netflixapp-562f8",
    storageBucket: "netflixapp-562f8.appspot.com",
    messagingSenderId: "447952792393",
    appId: "1:447952792393:web:00b5fc32fa035c7feb8898"
  };
  const app=Firebase.initializeApp(firebaseConfig)
//   seedDatabase(app)
  export {app}