import { createContext, useState, useCallback } from "react";
// AWS Auth
import { Amplify, Auth } from "aws-amplify";
import awsconfig from "src/aws-exports";
import "@aws-amplify/ui-react/styles.css";
Amplify.configure(awsconfig);

export const AuthContext = createContext();

export function AuthProvider(props) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [invalidLogin, setInvalidLogin] = useState("");

  const handleLogout = useCallback(() => {
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
  }, [setIsAuthenticated]);

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

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, handleLogout, signIn, invalidLogin }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
