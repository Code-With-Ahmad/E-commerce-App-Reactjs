import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase_auth";
import { onAuthStateChanged, signOut } from "firebase/auth";

// Create AuthContext
const AuthContext = createContext();

// Function to get initial user from localStorage synchronously
const getInitialUser = () => {
  const storedSession = localStorage.getItem("authSession");
  if (storedSession) {
    const { userData, timestamp } = JSON.parse(storedSession);
    const now = Date.now();
    const fifteenMinutes = 15 * 60 * 1000; // 15 minutes in milliseconds
    if (now - timestamp < fifteenMinutes) {
      return userData; // Return valid user data
    } else {
      localStorage.removeItem("authSession"); // Clear expired session
    }
  }
  return null; // No valid session
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(getInitialUser); // Initialize from localStorage

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        const userData = {
          uid: currentUser.uid,
          email: currentUser.email,
          displayName: currentUser.displayName,
        };
        setUser(userData);
        // Store in localStorage with timestamp
        localStorage.setItem(
          "authSession",
          JSON.stringify({ userData, timestamp: Date.now() })
        );
      } else if (!getInitialUser()) {
        // Only clear if localStorage doesn't have a valid session
        setUser(null);
        localStorage.removeItem("authSession");
      }
    });

    return () => unsubscribe();
  }, []);

  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      localStorage.removeItem("authSession");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
