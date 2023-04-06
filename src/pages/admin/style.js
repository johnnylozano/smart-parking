import styled from "styled-components";

export const Container = styled.div`
  height: 91.5vh;
  width: 100;
  display: flex;
`;

export const SideSearch = styled.aside`
  width: 25vw;
  height: 100%;
  background-color: #0d0d0d;
`;

export const TabContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--clr-accent-blue);
  margin: 5px;
  margin-top: 10px;
  padding: 10px;
  border-radius: 6px;
  cursor: pointer;
`;

export const MainContainer = styled.div`
  background-color: #d3d3d3;
  width: 85vw;
  height: 100%;
  display: grid;
  place-items: center;
`;
