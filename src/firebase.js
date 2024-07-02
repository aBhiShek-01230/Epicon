
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyB7qTfEt2QEvMIjck20sZFEaD6F_pAX8qM",
  authDomain: "netflix-clone-f45b0.firebaseapp.com",
  projectId: "netflix-clone-f45b0",
  storageBucket: "netflix-clone-f45b0.appspot.com",
  messagingSenderId: "626249507874",
  appId: "1:626249507874:web:f1b040b26d7f5674ac567b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name,email,password) =>{
  try {
    const res = await createUserWithEmailAndPassword(auth,email,password);
    const user = res.user;
    await addDoc(collection(db,"user"),{
      uid:user.uid,
      name,
      authProvider:"local",
      email,
    })
  } catch (error) {
    toast.error(error.code.split('/')[1].split('-').join(" "));
  }
}

const login = async (email,password)=> {
        try {
          await signInWithEmailAndPassword(auth,email,password);

        } catch (error) {
          toast.error(error.code.split('/')[1].split('-').join(" "));
        }
}

const logout = () =>{
  toast.success("Logged Out");
  signOut(auth);
}

export {auth,db,signup,login,logout};