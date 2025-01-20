import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.init";

export const bistroContext = createContext();
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // create User With Email
  const createUserWithEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInUserWithEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // create User With Google
  const createUserWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  // LogOut User
  const SignOutUser = () => {
    return signOut(auth);
  };
  // current User
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    loading,
    user,
    createUserWithEmail,
    signInUserWithEmail,
    createUserWithGoogle,
    SignOutUser,
  };
  return (
    <jobPortalContext.Provider value={authInfo}>
      {children}
    </jobPortalContext.Provider>
  );
};

export default AuthProvider;
