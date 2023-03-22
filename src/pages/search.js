import { Button } from "src/components/Button";
import { AiOutlineSearch } from "react-icons/ai";

export const Search = () => {
  function onSubmit(e) {
    e.preventDefault();
  }

  return (
    <>
      <div
        style={{
          height: "92vh",
          width: "100%",
          display: "flex",
        }}
      >
        <aside
          style={{
            width: "25vw",
            height: "100%",
            backgroundColor: "#0d0d0d",
          }}
        >
          <form
            onSubmit={onSubmit}
            style={{
              width: "94%",
              background: "rgba(255, 255, 255, 0.4)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "8px",
              padding: "4px 8px",
              margin: "20px 10px",
            }}
          >
            {/* // Todo: Create pseudo ::placeholder to change color */}
            <input
              type="text"
              placeholder="Search for parking near you"
              style={{
                background: "transparent",
                flex: 1,
                border: 0,
                color: "#fff",
                outline: "none",
                fontSize: "18px",
                "::placeholder": { color: "#fff" },
              }}
            />
            <button
              type="submit"
              style={{
                background: "none",
                border: "none",
                padding: "none",
                display: "flex",
                alignItems: "center",
                fontSize: "25px",
                borderRadius: "50%",
                width: "25px",
                height: "25px",
                cursor: "pointer",
              }}
            >
              <AiOutlineSearch fill="#fff" />
            </button>
          </form>
        </aside>
        <div
          style={{ backgroundColor: "blue", width: "85vw", height: "100%" }}
        ></div>
        {/* <h1>Search</h1>
        <div>
          <Button to="/parking" primary="true">
            Search for Parking
          </Button>
        </div> */}
      </div>
    </>
  );
};
