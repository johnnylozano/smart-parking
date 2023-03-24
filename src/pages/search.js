import { Button } from "src/components/Button";
import { AiOutlineSearch } from "react-icons/ai";
import Garage from "src/assets/img/ksu.jpg";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import { useState } from "react";

export const Search = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
    }, 1500);
  }

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_API_KEY,
  });

  return (
    <>
      <div
        style={{
          height: "91.5vh",
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
              marginTop: "15px",
              marginBottom: "20px",
              marginInline: "auto",
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
          {/*// Todo: Address card */}
          <div
            style={{
              marginInline: "auto",
              backgroundColor: "#29282b",
              width: "94%",
              padding: "20px 20px",
              borderRadius: "4px",
              boxShadow:
                "0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12)",
            }}
          >
            <img
              src={Garage}
              alt="Garage"
              style={{
                display: "block",
                width: "100%",
                borderRadius: "3px",
              }}
            />
            <h3
              style={{
                color: "var(--clr-accent-blue)",
                marginTop: "20px",
                marginBottom: "10px",
                fontSize: "18px",
                lineHeight: "16px",
                fontWeight: "500",
                letterSpacing: "1.4px",
              }}
            >
              Decepticars
            </h3>
            <h2 style={{ color: "#fff" }}>Kennesaw Location</h2>
            <p style={{ marginBottom: "15px", color: "#efefef" }}>
              Open 8am - 5pm
            </p>
            <Button to="/parking" primary="true">
              View capacity
            </Button>
          </div>
        </aside>
        {isSubmitting || !isLoaded ? (
          <div
            style={{ backgroundColor: "blue", width: "85vw", height: "100%" }}
          ></div>
        ) : (
          <Map />
        )}
      </div>
    </>
  );
};

function Map() {
  return (
    <GoogleMap
      zoom={18}
      center={{ lat: 34.03702, lng: -84.58038 }}
      mapContainerClassName="map-container"
    >
      <MarkerF position={{ lat: 34.03702, lng: -84.58038 }} />
    </GoogleMap>
  );
}
