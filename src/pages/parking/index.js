import { useState, useRef, useEffect } from "react";
import { API } from "aws-amplify";
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

// TODO: Remove inputs and implement data fetching

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

  const getTotalCapacity = (jsonRes) => {
    let capacityTotal = 0;
    for (let i in jsonRes) {
      capacityTotal += parseInt(jsonRes[i].Direction);
    }
    if (capacityTotal < 0) return 0;

    return capacityTotal;
  };

  useEffect(() => {
    API.get("capacityApi", "/capacity")
      .then((capacityRes) => {
        setSpotsTaken(getTotalCapacity(capacityRes));
        console.log(capacityRes);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

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
