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
  BarCard,
  Loader,
  InnerLoader,
  LoaderWrapper,
} from "./style";
import { BarChart } from "./BarChart";
import { PredictionData } from "./PredictionData";
import { useCapacity } from "./useCapacity";

const chartOptions = {
  scales: {
    x: {
      ticks: {
        color: "#e0e0e0", // set the color of the x-axis labels
      },
    },
    y: {
      ticks: {
        color: "#e0e0e0", // set the color of the x-axis labels
      },
    },
  },
  plugins: {
    legend: {
      labels: {
        color: "#e0e0e0", // set the color of the legend labels
      },
    },
  },
};

export const Parking = () => {
  const [totalSpots] = useState(600);
  const { spotsTaken, isLoading, isError, error } = useCapacity();
  const [predictionData, setPredictionData] = useState({
    labels: PredictionData.map((data) => data.time),
    datasets: [
      {
        label: "Predicted Garage Traffic",
        data: PredictionData.map((data) => data.prediction),
      },
    ],
  });

  const circleRef = useRef();
  const percent = (spotsTaken / totalSpots) * 100;

  return (
    <CardContainer>
      <Card>
        <ProgressBarContainer>
          {isLoading ? (
            <LoaderWrapper>
              <Loader>
                <InnerLoader></InnerLoader>
              </Loader>
            </LoaderWrapper>
          ) : (
            <ProgressBar>
              <Circle
                height="150"
                width="150"
                percent={percent}
                ref={circleRef}
              >
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
          )}
        </ProgressBarContainer>
        <InputContainer>
          <InputGroup>
            <Label>Spots Taken:</Label>
            <Input>{spotsTaken}</Input>
          </InputGroup>
          <InputGroup>
            <Label>Total Spots:</Label>
            <Input>{totalSpots}</Input>
          </InputGroup>
        </InputContainer>
      </Card>
      <BarCard>
        <BarChart chartData={predictionData} chartOptions={chartOptions} />
        <select
          name=""
          id=""
          style={{
            padding: "0.3rem",
            borderRadius: "6px",
            position: "absolute",
            bottom: "0",
            marginBottom: "20px",
          }}
        >
          <option value="default">Choose date</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
          <option value="21">21</option>
          <option value="22">22</option>
          <option value="23">23</option>
          <option value="24">24</option>
          <option value="25">25</option>
          <option value="26">26</option>
          <option value="27">27</option>
          <option value="28">28</option>
          <option value="29">29</option>
          <option value="30">30</option>
          <option value="31">31</option>
        </select>
      </BarCard>
    </CardContainer>
  );
};
