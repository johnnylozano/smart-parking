import Feature from "./Feature";
import Hero from "./Hero";
import Info from "./Info";
import { homeDataOne, homeDataTwo, homeDataThree } from "./Info/data";

export const Home = () => {
  return (
    <>
      <Hero />
      <Info {...homeDataOne} />
      <Feature />
      <Info {...homeDataTwo} />
      <Info {...homeDataThree} />
    </>
  );
};
