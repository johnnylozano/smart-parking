import React from "react";
import Icon1 from "src/assets/img/mobile-app.svg";
import Icon2 from "src/assets/img/world.svg";
import Icon3 from "src/assets/img/people-on-car.svg";
import {
  FeaturesContainer,
  FeaturesH1,
  FeaturesWrapper,
  FeaturesCard,
  FeaturesIcon,
  FeaturesH2,
  FeaturesP,
} from "./style";

const Feature = () => {
  return (
    <FeaturesContainer id="features">
      <FeaturesH1>Our Features</FeaturesH1>
      <FeaturesWrapper>
        <FeaturesCard>
          <FeaturesIcon src={Icon1} alt="Mobile App" />
          <FeaturesH2>Real-time Availability</FeaturesH2>
          <FeaturesP>
            Instantly know where parking spots are available.
          </FeaturesP>
        </FeaturesCard>
        <FeaturesCard>
          <FeaturesIcon src={Icon2} alt="Globe" />
          <FeaturesH2>Global Accessibility</FeaturesH2>
          <FeaturesP>
            Access our platform online anywhere in the world.
          </FeaturesP>
        </FeaturesCard>
        <FeaturesCard>
          <FeaturesIcon src={Icon3} alt="Relaxing by vehicle" />
          <FeaturesH2>Navigation Assistance</FeaturesH2>
          <FeaturesP>
            Get turn-by-turn directions to available parking spots.
          </FeaturesP>
        </FeaturesCard>
      </FeaturesWrapper>
    </FeaturesContainer>
  );
};

export default Feature;
