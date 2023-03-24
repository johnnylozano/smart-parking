import styled from "styled-components";

export const FeaturesContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--clr-blk);

  @media (max-width: 768px) {
    height: 1100px;
  }

  @media (max-width: 480px) {
    height: 1300px;
  }
`;

export const FeaturesWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const FeaturesCard = styled.div`
  background: #efefef;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 12px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2 ease;
    cursor: pointer;
  }
`;

export const FeaturesIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

export const FeaturesH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;
  letter-spacing: 1.4px;

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const FeaturesH2 = styled.h2`
  color: var(--clr-dark-blue);
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const FeaturesP = styled.p`
  font-size: 1rem;
  text-align: center;
`;
