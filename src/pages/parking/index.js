import { useState, useRef } from "react";
import {
  Card,
  CardContainer,
  Circle,
  InputContainer,
  InputGroup,
  Label,
  Number,
  ProgressBar,
  ProgressBarContainer,
  Input,
} from "./style";

export const Parking = () => {
  const [spotsTaken, setSpotsTaken] = useState(0);
  const [totalSpots, setTotalSpots] = useState(255);
  const circleRef = useRef();
  const percent = (spotsTaken / totalSpots) * 100;

  const handleSpotsTaken = (event) => {
    setSpotsTaken(event.target.value);
  };

  const handleTotalSpots = (event) => {
    setTotalSpots(event.target.value);
  };

  return (
    <CardContainer>
      <Card>
        <ProgressBarContainer>
          <ProgressBar>
            <Circle height="150" width="150" percent={percent} ref={circleRef}>
              <circle
                cx="75"
                cy="75"
                r="65"
                stroke="#18a0fb"
                strokeWidth="20"
                fill="none"
              />
            </Circle>
            <Number className="number">{`${percent.toFixed(0)} %`}</Number>
          </ProgressBar>
        </ProgressBarContainer>
        <InputContainer>
          <InputGroup>
            <Label>Spots Taken:</Label>
            <Input
              type="number"
              value={spotsTaken}
              onChange={handleSpotsTaken}
            />
          </InputGroup>
          <InputGroup>
            <Label>Total Spots:</Label>
            <Input
              type="number"
              value={totalSpots}
              onChange={handleTotalSpots}
            />
          </InputGroup>
        </InputContainer>
      </Card>
    </CardContainer>
  );
};
