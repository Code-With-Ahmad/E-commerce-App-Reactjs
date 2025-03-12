import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase_auth";
import { onAuthStateChanged, signOut } from "firebase/auth";

const AuthContext = createContext();

const getInitialUser = () => {
  const storedSession = localStorage.getItem("authSession");
  if (storedSession) {
    const { userData, timestamp } = JSON.parse(storedSession);
    const now = Date.now();
    const fifteenMinutes = 15 * 60 * 1000;
    if (now - timestamp < fifteenMinutes) {
      return userData;
    } else {
      localStorage.removeItem("authSession");
    }
  }
  return null;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        const userData = {
          uid: currentUser.uid,
          email: currentUser.email,
          displayName: currentUser.displayName,
        };
        setUser(userData);
        localStorage.setItem(
          "authSession",
          JSON.stringify({ userData, timestamp: Date.now() })
        );
      } else {
        const localUser = getInitialUser();
        setUser(localUser);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      localStorage.removeItem("authSession");
      localStorage.removeItem("cartItems"); // Clear cart cache
      localStorage.removeItem("favorites"); // Clear favorites cache
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <AuthContext.Provider value={{ user, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
