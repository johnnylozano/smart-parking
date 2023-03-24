import { Link } from "react-router-dom";
import styled from "styled-components";

export const Section = styled.section`
  height: 80vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormLogin = styled.div`
  background-color: #171821;
  box-shadow: 0px 1px 8px var(--clr-accent-blue);
  border-radius: 6px;
  max-width: 430px;
  width: 100%;
  padding: 30px;
`;

export const FormContent = styled.div``;

export const Header = styled.header`
  font-size: 28px;
  font-weight: 600;
  color: #fff;
  letter-spacing: 1.4px;
  text-align: center;
`;

export const Form = styled.form`
  margin-top: 30px;
`;

export const FieldInputField = styled.div`
  position: relative;
  height: 50px;
  width: 100%;
  margin-top: 20px;
`;

export const HiddenEyeIcon = styled.i`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-40%);
  font-size: 18px;
  color: #8b8b8b;
  cursor: pointer;
  padding: 5px;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #29282b;
    font-size: 20px;
  }
`;

export const FormLink = styled.div`
  color: #fff;
  text-align: center;
  margin-top: 10px;
`;
export const ForgotPass = styled(Link)`
  text-decoration: none;
  color: var(--clr-accent-blue);

  &:hover {
    text-decoration: underline;
  }
`;

export const Input = styled.input`
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
  border: 1px solid #cacaca;
  padding: 0 15px;
  font-size: 16px;
  font-weight: 400;
  border-radius: 6px;

  &:focus {
    border-bottom-width: 2px;
  }
`;

export const FieldButtonField = styled.div`
  height: 50px;
  width: 100%;
  margin-top: 20px;
`;

export const LoginButton = styled.button`
  height: 100%;
  width: 100%;
  border: none;
  font-size: 16px;
  font-weight: 400;
  border-radius: 6px;
  color: #fff;
  background-color: var(--clr-semi-blue);
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #18a0fb;
  }
`;

export const Span = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: #232836;
`;

export const SignupLink = styled(Link)`
  font-size: 16px;
  font-weight: 400;
  text-decoration: none;
  color: var(--clr-accent-blue);

  &:hover {
    text-decoration: underline;
  }
`;
