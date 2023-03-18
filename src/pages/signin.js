import { Authenticator } from "@aws-amplify/ui-react";
import { useContext } from "react";
import { AuthContext } from "src/context/AuthProvider";
import { Navigate } from "react-router-dom";

export const SignIn = () => {
  const { isAuthenticated, handleLogin } = useContext(AuthContext);

  return (
    <>
      {isAuthenticated ? (
        <Authenticator
          signUpConfig={{
            signUpFields: [
              {
                label: "KSU ID",
                type: "custom:ksuId",
                required: true,
                placeholder: "Enter your KSU ID",
              },
              {
                label: "Car Make",
                type: "custom:CarMake",
                required: true,
                placeholder: "Enter your car make",
              },
              {
                label: "Car Model",
                type: "custom:CarModel",
                required: true,
                placeholder: "Enter your car model",
              },
              {
                label: "Car Year",
                type: "custom:CarYear",
                required: true,
                placeholder: "Enter your car year",
              },
            ],
          }}
        >
          <Navigate to="/" />
        </Authenticator>
      ) : (
        handleLogin()
      )}
    </>
  );
};
