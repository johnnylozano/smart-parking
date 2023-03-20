import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import Logo from "src/assets/logo/Logo.svg";
import { AuthContext } from "src/context/AuthProvider";

const INITIAL_DATA = {
  code: "",
};

export const Verification = () => {
  const { confirmSignUp, isAuthenticated } = useContext(AuthContext);

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
          {isAuthenticated && <Navigate to="/" />}
          <form onSubmit={onSubmit}>
            <img
              src={Logo}
              alt=""
              style={{ display: "block", marginInline: "auto" }}
            />
            <h2
              style={{ textAlign: "center", margin: 0, marginBottom: "2rem" }}
            >
              Enter Verification Code
            </h2>
            <div
              style={{
                display: "grid",
                gap: "1rem 0.5rem",
                justifyContent: "flex-start",
                gridTemplateColumns: "auto minmax(auto, 400px)",
              }}
            >
              <label>Verification</label>
              <input
                autoFocus
                required
                type="text"
                onChange={(e) => updateFields({ code: e.target.value })}
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
              <button type="submit">Login</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
