import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { useEffect, useState } from "react";
import swal from "sweetalert";
import initializeAuthentication from "../components/Pages/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  // states
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(true);

  // auth and provider
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  // google sign in
  const signInUsingGoogle = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const signInUsingGithub = () => {
    setIsLoading(true);
    return signInWithPopup(auth, githubProvider);
  };
  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser();
      })
      .catch((error) => {
        swal({
          text: error.message,
          icon: "error",
        });
      })
      .finally(() => setIsLoading(false));
  };

  //   observed user
  useEffect(() => {
    const unsubscirbe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser();
      }
      setIsLoading(false);
    });
    return unsubscirbe;
  }, [auth]);

  return {
    signInUsingGoogle,
    signInUsingGithub,
    logOut,
    user,
    setIsLoading,
    isLoading,
  };
};

export default useFirebase;
