import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();

const auth = getAuth(app);

const UserConext = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  const googleProvide = new GoogleAuthProvider();

  const createUser = (name, email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const singIn = (name, email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const singInWithGoogle = () => {
    return signInWithPopup(auth, googleProvide);
  };

  const logOut = () => {
    return signOut(auth);
  };

  // Why are we doing this?
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      // console.log("Auth State Changes", currentUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    singIn,
    logOut,
    singInWithGoogle,
  };

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
      <h2>User Context</h2>
    </div>
  );
};

export default UserConext;
