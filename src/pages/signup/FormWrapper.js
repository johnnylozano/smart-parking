import { Header } from "./style";

export function FormWrapper({ title, children }) {
  return (
    <>
      <Header>{title}</Header>
      {children}
    </>
  );
}
