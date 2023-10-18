import PropTypes from "prop-types";

import {

  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "./firebase.config";


export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {


  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // console.log(typeof children);

// email password sign up
const emailSignUp = (email, password) => {
  setLoading(true)
  return createUserWithEmailAndPassword(auth, email, password);
};

// email password Login

const emailLogin = (email, password) => {
  setLoading(true)
  return signInWithEmailAndPassword(auth, email, password);
};

// All user LOGOUT
  const userSignOut = () => {
    setLoading(true)
    return signOut(auth);
  };


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false)
      return () => {
        unsubscribe();
      };
    });
  }, []);

  const authInfo = {
    user,
    loading,
    emailSignUp,
    emailLogin,
    userSignOut
  };
  return (
    <AuthContext.Provider value={authInfo}> {children}</AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.object.isRequired,
};
export default AuthProvider;