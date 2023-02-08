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
          <FeaturesIcon src={Icon1} />
          <FeaturesH2>Reduce Expenses</FeaturesH2>
          <FeaturesP>
            We help reduce your fees and increase you overall revenue.
          </FeaturesP>
        </FeaturesCard>
        <FeaturesCard>
          <FeaturesIcon src={Icon2} />
          <FeaturesH2>Virtual Offices</FeaturesH2>
          <FeaturesP>
            You can access our platform online anywhere in the world.
          </FeaturesP>
        </FeaturesCard>
        <FeaturesCard>
          <FeaturesIcon src={Icon3} />
          <FeaturesH2>Premium Benefits</FeaturesH2>
          <FeaturesP>
            Unlock our special membership card that returns 5% cash back.
          </FeaturesP>
        </FeaturesCard>
      </FeaturesWrapper>
    </FeaturesContainer>
  );
};

export default Feature;
