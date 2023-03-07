import { createContext, useState } from "react";
// AWS Auth
import { Amplify, Auth } from "aws-amplify";
import awsconfig from "src/aws-exports";
import { Authenticator, withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
Amplify.configure(awsconfig);

export const AuthContext = createContext();

export function AuthProvider(props) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

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

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, handleLogout, handleLogin }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
