import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { AiFillEyeInvisible } from "react-icons/ai";
import Logo from "src/assets/logo/LogoTextless.svg";
import { AuthContext } from "src/context/AuthProvider";
import {
  Section,
  FormLogin,
  FormContent,
  Header,
  Form,
  FieldInputField,
  Input,
  FieldButtonField,
  LoginButton,
  FormLink,
  ForgotPass,
  SignupLink,
  HiddenEyeIcon,
} from "./style";

const INITIAL_DATA = {
  email: "",
  password: "",
};

export const SignIn = () => {
  const { signIn, isAuthenticated, invalidLogin } = useContext(AuthContext);

  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState(INITIAL_DATA);
  function updateFields(fields) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }

  function onSubmit(e) {
    e.preventDefault();
    signIn(data);
  }
  return (
    <>
      <Section>
        {isAuthenticated && <Navigate to="/" />}
        <FormLogin>
          <FormContent>
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
            <Header>Login</Header>
            <Form onSubmit={onSubmit}>
              <FieldInputField>
                <Input
                  type="Email"
                  placeholder="Email"
                  onChange={(e) => updateFields({ email: e.target.value })}
                />
              </FieldInputField>
              <FieldInputField>
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  onChange={(e) => updateFields({ password: e.target.value })}
                />
                <HiddenEyeIcon onClick={(e) => setShowPassword(!showPassword)}>
                  <AiFillEyeInvisible />
                </HiddenEyeIcon>
              </FieldInputField>
              <p style={{ marginTop: "1rem", color: "red" }}>{invalidLogin}</p>
              <FormLink>
                <ForgotPass to="/" onClick={(event) => event.preventDefault()}>
                  Forgot Password?
                </ForgotPass>
              </FormLink>
              <FieldButtonField>
                <LoginButton type="submit">Login</LoginButton>
              </FieldButtonField>
              <FormLink>
                <span style={{ color: "#fff" }}>
                  Already have an account?{" "}
                  <SignupLink to="/signup">Signup</SignupLink>
                </span>
              </FormLink>
            </Form>
          </FormContent>
        </FormLogin>
      </Section>
    </>
  );
};
