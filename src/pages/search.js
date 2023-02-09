import { Button } from "src/components/Button";

export const Search = () => {
  return (
    <>
      <h1>Search</h1>;
      <div>
        <Button to="/parking" primary="true">
          Search for Parking
        </Button>
      </div>
    </>
  );
};
