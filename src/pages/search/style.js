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

export const SearchForm = styled.form`
  width: 94%;
  background: rgba(255, 255, 255, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  padding: 4px 8px;
  margin-top: 15px;
  margin-bottom: 20px;
  margin-inline: auto;
`;

export const SearchInput = styled.input`
  background: transparent;
  flex: 1;
  border: 0;
  color: #fff;
  outline: none;
  font-size: 18px;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #fff;
  }
  :-ms-input-placeholder {
    color: #fff;
  }
`;

export const SearchButton = styled.button`
  background: none;
  border: none;
  padding: none;
  display: flex;
  align-items: center;
  font-size: 25px;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  cursor: pointer;
`;

export const AddressCard = styled.div`
  margin-inline: auto;
  background-color: #29282b;
  width: 94%;
  padding: 20px 20px;
  border-radius: 4px;
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
    0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12);
`;

export const GarageImage = styled.img`
  display: block;
  width: 100%;
  border-radius: 3px;
`;

export const CompanyText = styled.h3`
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 18px;
  line-height: 16px;
  font-weight: 500;
  letter-spacing: 1.4px;
  color: var(--clr-accent-blue);
`;

export const LocationText = styled.h2`
  color: #fff;
`;

export const TimeText = styled.p`
  margin-bottom: 15px;
  color: #efefef;
`;

export const LoadingBackground = styled.div`
  background-color: #d3d3d3;
  width: 85vw;
  height: 100%;
  display: grid;
  place-items: center;
`;

export const LoaderWrapper = styled.div`
  width: 80px;
  height: 80px;
`;

export const Loader = styled.div`
  width: 100%;
  height: 100%;
  border: 5px solid #162534;
  border-top-color: #2cd9ff;
  border-bottom-color: #18a0fb;
  border-radius: 50%;
  animation: rotate 5s linear infinite;
`;

export const InnerLoader = styled.div`
  width: 100%;
  height: 100%;
  border: 5px solid #162534;
  border-top-color: #2cd9ff;
  border-bottom-color: #18a0fb;
  border-radius: 50%;
  animation: rotate 5s linear infinite;
`;
