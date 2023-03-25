import { createContext, useState } from "react";
// AWS Auth
import { Amplify, Auth } from "aws-amplify";
import awsconfig from "src/aws-exports";
import "@aws-amplify/ui-react/styles.css";
Amplify.configure(awsconfig);

export const AuthContext = createContext();

export function AuthProvider(props) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [invalidLogin, setInvalidLogin] = useState("");
  const [usernameToVerify, setUsernameToVerify] = useState("");

  async function handleLogout() {
    try {
      await Auth.signOut();
      setIsAuthenticated(false);
    } catch (error) {
      console.log("Error signing out:", error);
    }
  }

  async function signIn(data) {
    try {
      const user = await Auth.signIn(data.email, data.password);
      if (user) {
        setInvalidLogin("");
        setIsAuthenticated(true);
      }
    } catch (error) {
      setInvalidLogin("Invalid login or password");
      setIsAuthenticated(false);
    }
  }

  async function signUp(userData) {
    try {
      const { user } = await Auth.signUp(userData);
      if (user) {
        setUsernameToVerify(userData.attributes.email);
        setIsRegistered(true);
      }
    } catch (error) {
      console.log("error signing up:", error);
      setIsRegistered(false);
    }
  }

  async function confirmSignUp(userCode) {
    try {
      await Auth.confirmSignUp(usernameToVerify, userCode.code);
      setIsAuthenticated(true);
    } catch (error) {
      console.log("error confirming sign up", error);
      setIsRegistered(false);
    }
  }

  async function resendConfirmationCode(usernameToVerify) {
    try {
      await Auth.resendSignUp(usernameToVerify);
      console.log("code resent successfully");
    } catch (err) {
      console.log("error resending code: ", err);
    }
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        isRegistered,
        invalidLogin,
        usernameToVerify,
        handleLogout,
        signIn,
        signUp,
        confirmSignUp,
        resendConfirmationCode,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
