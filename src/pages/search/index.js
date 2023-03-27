import { Button } from "src/components/Button";
import { AiOutlineSearch } from "react-icons/ai";
import Garage from "src/assets/img/ksu.jpg";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import { useState } from "react";
import {
  Container,
  SearchForm,
  SearchInput,
  SideSearch,
  SearchButton,
  AddressCard,
  GarageImage,
  CompanyText,
  LocationText,
  TimeText,
  LoadingBackground,
  LoaderWrapper,
  Loader,
  InnerLoader,
} from "./style";

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
      <Container>
        <SideSearch>
          <SearchForm onSubmit={onSubmit}>
            <SearchInput
              type="text"
              placeholder="Search for parking near you"
            />
            <SearchButton type="submit">
              <AiOutlineSearch fill="#fff" />
            </SearchButton>
          </SearchForm>
          {isSubmitting ? (
            <AddressCard
              style={{ display: "grid", placeItems: "center", padding: "80px" }}
            >
              <LoaderWrapper>
                <Loader>
                  <InnerLoader></InnerLoader>
                </Loader>
              </LoaderWrapper>
            </AddressCard>
          ) : (
            <AddressCard>
              <GarageImage src={Garage} alt="Garage" />
              <CompanyText>Decepticars</CompanyText>
              <LocationText>Kennesaw Location</LocationText>
              <TimeText>Open 8am - 5pm</TimeText>
              <Button to="/parking" primary="true">
                View capacity
              </Button>
            </AddressCard>
          )}
        </SideSearch>
        {/* //Todo: Loading Spinner */}
        {isSubmitting || !isLoaded ? (
          <LoadingBackground>
            <LoaderWrapper>
              <Loader>
                <InnerLoader></InnerLoader>
              </Loader>
            </LoaderWrapper>
          </LoadingBackground>
        ) : (
          <Map />
        )}
      </Container>
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
