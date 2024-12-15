import { GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase";

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userLoading, setUserLoading] = useState(true);

  useEffect(() => {
    // Subscribe to the auth state change listener
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);  // Set user if logged in
        console.log(currentUser);
      } else {
        setUser(null);  // Set user to null if logged out
        console.log('User is absent.');
      }
      setUserLoading(false);
    });
    // Cleanup function to unsubscribe on component unmount
    return () => {
      unsubscribe();
    };
  }, []);  // Empty dependency array ensures this runs once when component mounts


  const googleSignIn = async () => {
    setUserLoading(true);
    try {
      const provider = new GoogleAuthProvider()
      const data = await signInWithPopup(auth, provider);
      return data.user;
    } catch (err) {
      return err;
    } finally {
      setUserLoading(false);
    }
  }

  const gitHubSignIn = async () => {
    setUserLoading(true);
    try {
      const provider = new GithubAuthProvider()
      const data = await signInWithPopup(auth, provider);
      return data.user;
    } catch (err) {
      console.log(err)
      return err;
    } finally {
      setUserLoading(false);
    }
  }

  const logOut = async () => {
    setUserLoading(true)
    try {
      await signOut(auth);
      return { success: true };
    } catch (err) {
      return { success: false, err };
    } finally {
      setUserLoading(false);
    }

  }

  const authInfo = {
    user,
    userLoading,
    googleSignIn,
    gitHubSignIn,
    logOut
  }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;