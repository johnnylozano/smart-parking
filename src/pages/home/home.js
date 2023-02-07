import Hero from "./Hero";
import Info from "./Info";
import { homeDataOne, homeDataTwo, homeDataThree } from "./Info/data";

export const Home = () => {
  return (
    <>
      <Hero />
      <Info {...homeDataOne} />
      <Info {...homeDataTwo} />
      <Info {...homeDataThree} />
    </>
  );
};
