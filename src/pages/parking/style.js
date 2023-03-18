import styled from "styled-components";

export const CardContainer = styled.div`
  background: #0d0d0d;
  height: 480px;
  display: grid;
  align-items: center;
`;

export const Card = styled.div`
  background-color: var(--clr-dark-blue);
  padding: 60px 80px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px var(--clr-accent-blue);
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  margin-inline: auto;

  @media (max-width: 480px) {
    padding: 20px 10px;
  }
`;

export const ProgressBarContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const ProgressBar = styled.div`
  position: relative;
  max-width: 150px;
  max-height: 150px;
  border-radius: 50%;
  color: #fff;
  outline: 2px solid var(--clr-accent-blue);
  outline-offset: -1px;

  &::after,
  .number {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &::after {
    content: "";
    width: 110px;
    height: 110px;
    border-radius: inherit;
    outline: inherit;
  }
`;

export const Circle = styled.svg`
  stroke-dasharray: 410;
  stroke-dashoffset: ${(props) => ((100 - props.percent) / 100) * 410};
  transform: rotate(-90deg);
  transition: stroke-dashoffset 0.5s linear;
`;

export const Number = styled.span`
  font-size: 21px;
  font-weight: bold;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;

export const Label = styled.label`
  font-weight: bold;
  margin-right: 10px;
  color: #fff;
`;

export const Input = styled.p`
  padding: 5px 10px;
  border-radius: 5px;
  border: 1;
  color: #fff;
  font-weight: 500;
  font-size: 21px;

  @media (max-width: 480px) {
    padding: 2px 7px;
  }
`;
