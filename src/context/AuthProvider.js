import { createContext, useState } from "react";
// AWS Auth
import { Amplify, Auth } from "aws-amplify";
import awsconfig from "src/aws-exports";
import "@aws-amplify/ui-react/styles.css";
Amplify.configure(awsconfig);

export const AuthContext = createContext();

export function AuthProvider(props) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [invalidLogin, setInvalidLogin] = useState("");

  const handleLogout = () => {
    // Call the Auth.signOut() method to log the user out
    Auth.signOut()
      .then(() => {
        console.log("User logged out");
        // Update the Auth state to reflect the change in authentication status
        setIsAuthenticated(false);
      })
      .catch((error) => {
        console.log("Error signing out:", error);
      });
  };

  async function signIn(data) {
    try {
      const user = await Auth.signIn(data.email, data.password);
      if (user) {
        setInvalidLogin("");
        setIsAuthenticated(true);
      }
    } catch (error) {
      setInvalidLogin("Invalid login or password");
    }
  }

  async function signUp(userData) {
    try {
      const { user } = await Auth.signUp(userData);
      if (user) {
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.log("error signing up:", error);
    }
  }

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, handleLogout, signIn, signUp, invalidLogin }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
