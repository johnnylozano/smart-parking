import { useState } from "react";
import Logo from "src/assets/logo/Logo.svg";

const INITIAL_DATA = {
  email: "",
  password: "",
};

export const SignIn = () => {
  const [data, setData] = useState(INITIAL_DATA);
  function updateFields(fields) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }

  function onSubmit(e) {
    e.preventDefault();
    console.log(data);
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
            <h2
              style={{ textAlign: "center", margin: 0, marginBottom: "2rem" }}
            >
              Login
            </h2>
            <div
              style={{
                display: "grid",
                gap: "1rem 0.5rem",
                justifyContent: "flex-start",
                gridTemplateColumns: "auto minmax(auto, 400px)",
              }}
            >
              <label>Email</label>
              <input
                required
                type="email"
                onChange={(e) => updateFields({ email: e.target.value })}
              />
              <label>Password</label>
              <input
                required
                type="password"
                onChange={(e) => updateFields({ password: e.target.value })}
              />
            </div>
            <div
              style={{
                marginTop: "1rem",
                display: "flex",
                gap: "0.5rem",
                justifyContent: "flex-end",
              }}
            >
              <p>Create an account</p>
              <button type="submit">Login</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};