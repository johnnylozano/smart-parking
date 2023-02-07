import React, { useState } from "react";
import Video from "src/assets/video/parking-hero.mp4";
import { Button } from "src/components/Button";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./style";

const Hero = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Find A Garage Near You</HeroH1>
        <HeroP>Sign Up Now</HeroP>
        <HeroBtnWrapper>
          <Button
            to="/search"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
          >
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
