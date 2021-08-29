import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAhuQZZ6BtHWU6-VHzkSW_Gc4XEzDx_iIg",
  authDomain: "attendenceapp-c382e.firebaseapp.com",
  databaseURL: "https://attendenceapp-c382e-default-rtdb.firebaseio.com",
  projectId: "attendenceapp-c382e",
  storageBucket: "attendenceapp-c382e.appspot.com",
  messagingSenderId: "99466240304",
  appId: "1:99466240304:web:961588541534d82a55e8f5",
  measurementId: "G-SYBQ7EBPRG"
};
  if(!firebase.apps.lenght){
  firebase.initializeApp(firebaseConfig);

  }
  export default firebase.database(); 