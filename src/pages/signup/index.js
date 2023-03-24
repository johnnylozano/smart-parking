import { useContext, useState } from "react";
import { AccountForm } from "./AccountForm";
import { CarForm } from "./CarForm";
import { useMultistepForm } from "./useMultistepForm";
import { UserForm } from "./UserForm";
import Logo from "src/assets/logo/Logo.svg";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "src/context/AuthProvider";
import { API } from "aws-amplify";

const INITIAL_DATA = {
  ksuId: "",
  firstName: "",
  lastName: "",
  carMake: "",
  carModel: "",
  carYear: "",
  carColor: "",
  licensePlate: "",
  email: "",
  password: "",
};

export const SignUp = () => {
  const { signUp, isRegistered } = useContext(AuthContext);

  const [data, setData] = useState(INITIAL_DATA);
  function updateFields(fields) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <AccountForm {...data} updateFields={updateFields} />,
      <UserForm {...data} updateFields={updateFields} />,
      <CarForm {...data} updateFields={updateFields} />,
    ]);

  function onSubmit(e) {
    e.preventDefault();
    if (!isLastStep) return next();

    const UserData = {
      username: data.email,
      password: data.password,
      attributes: {
        email: data.email,
        "custom:ksuId": data.ksuId,
        "custom:FirstName": data.firstName,
        "custom:LastName": data.lastName,
        "custom:CarMake": data.carMake,
        "custom:CarModel": data.carModel,
        "custom:CarYear": data.carYear,
        "custom:CarColor": data.carColor,
        "custom:LicensePlate": data.licensePlate,
      },
    };
    delete data.password;

    signUp(UserData);

    const apiName = "userApi"; // replace this with your api name.
    const path = "/user"; //replace this with the path you have configured on your API
    const myInit = {
      body: {
        ksuId: parseInt(data.ksuId),
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        carMake: data.carMake,
        carModel: data.carModel,
        carYear: data.carYear,
        carColor: data.carColor,
        licensePlate: data.licensePlate,
      }, // replace this with attributes you need
      headers: {}, // OPTIONAL
    };

    API.post(apiName, path, myInit)
      .then((response) => {
        console.log("Sent success response: ", response);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }
  return (
    <>
      <div
        style={{
          position: "relative",
          background: "white",
          border: "1px solid black",
          padding: "2rem",
          paddingTop: "3rem",
          paddingBottom: "2rem",
          marginTop: "4rem",
          marginBottom: "4rem",
          marginInline: "auto",
          borderRadius: "0.5rem",
          maxWidth: "max-content",
        }}
      >
        <div>
          <form onSubmit={onSubmit}>
            <img
              src={Logo}
              alt=""
              style={{ display: "block", marginInline: "auto" }}
            />
            <div
              style={{ position: "absolute", top: "0.5rem", right: "1.5rem" }}
            >
              {currentStepIndex + 1} / {steps.length}
            </div>
            {step}
            {isFirstStep && (
              <Link to="/signin" style={{ marginTop: "2rem" }}>
                Already Registered? Login
              </Link>
            )}
            {isRegistered && <Navigate to="/verification" />}
            <div
              style={{
                marginTop: "1.5rem",
                display: "flex",
                gap: "0.5rem",
                justifyContent: "flex-end",
              }}
            >
              {!isFirstStep && (
                <button type="button" onClick={back}>
                  Back
                </button>
              )}
              <button type="submit">{isLastStep ? "Submit" : "Next"}</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
