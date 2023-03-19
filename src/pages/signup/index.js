import { useState } from "react";
import { AccountForm } from "./AccountForm";
import { CarForm } from "./CarForm";
import { useMultistepForm } from "./useMultistepForm";
import { UserForm } from "./UserForm";

const INITIAL_DATA = {
  firstName: "",
  lastName: "",
  ksuId: "",
  carMake: "",
  carModel: "",
  carYear: "",
  carColor: "",
  email: "",
  password: "",
};

export const SignUp = () => {
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
    alert("Submit");
    console.log(data);

    const UserData = {
      email: data.email,
      password: data.password,
      customAttributes: {
        "custom:ksuId": data.ksuId,
      },
    };
    console.log(UserData);
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
            <div
              style={{ position: "absolute", top: "0.5rem", right: "0.5rem" }}
            >
              {currentStepIndex + 1} / {steps.length}
            </div>
            {step}
            <div
              style={{
                marginTop: "1rem",
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
