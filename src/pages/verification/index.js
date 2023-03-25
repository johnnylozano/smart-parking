import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import Logo from "src/assets/logo/LogoTextless.svg";
import { AuthContext } from "src/context/AuthProvider";
import {
  Form,
  FormContent,
  Header,
  FieldInputField,
  Input,
  FieldButtonField,
  LoginButton,
  FormLogin,
  Section,
  FormLink,
  ResendLink,
} from "./style";

const INITIAL_DATA = {
  code: "",
};

export const Verification = () => {
  const {
    confirmSignUp,
    isAuthenticated,
    resendConfirmationCode,
    usernameToVerify,
  } = useContext(AuthContext);

  const [data, setData] = useState(INITIAL_DATA);
  function updateFields(fields) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }

  function onSubmit(e) {
    e.preventDefault();
    confirmSignUp(data);
  }
  return (
    <>
      <Section>
        <FormLogin>
          <FormContent>
            {isAuthenticated && <Navigate to="/" />}
            <img
              src={Logo}
              alt=""
              height="80"
              style={{
                display: "block",
                marginInline: "auto",
                marginBottom: "10px",
              }}
            />
            <Header
              style={{ textAlign: "center", margin: 0, marginBottom: "2rem" }}
            >
              Enter Verification Code
            </Header>
            <p
              style={{
                color: "#efefef",
                marginInline: "auto",
                textAlign: "center",
                width: "100%",
              }}
            >
              A 5-digit code has been sent to your email address. Enter the code
              to verify your account.
            </p>
            <Form onSubmit={onSubmit}>
              <FieldInputField>
                <Input
                  autoFocus
                  required
                  type="text"
                  placeholder="Enter Verification Code"
                  onChange={(e) => updateFields({ code: e.target.value })}
                />
              </FieldInputField>
              <FormLink
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "0.5rem",
                }}
              >
                <span style={{ color: "#fff" }}>Didn't get the code?</span>
                <ResendLink
                  type="button"
                  onClick={() => resendConfirmationCode(usernameToVerify)}
                >
                  Resend
                </ResendLink>
              </FormLink>
              <FieldButtonField>
                <LoginButton type="submit">Verify Account</LoginButton>
              </FieldButtonField>
            </Form>
          </FormContent>
        </FormLogin>
      </Section>
    </>
  );
};
