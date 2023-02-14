import styled from "styled-components";

export const Card = styled.div`
  margin-left: 0;
  margin-bottom: 2rem;
  width: 100%;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  @media screen and (min-width: 768px) {
    padding: 0;
    margin-left: 6.25%;
    width: 87.5%;
  }
  @media screen and (min-width: 1024px) {
    display: flex;
    padding-bottom: 2rem;
    border-bottom: 0.125rem solid ${(props) => props.theme.borderColor};
    margin-left: 8.33333%;
    width: 83.3333%;
  }
`;

export const CardContent = styled.div`
  flex-grow: 1;
  @media (min-width: 768px) {
    margin-left: 18.75%;
    width: 62.5%;
  }
  @media (min-width: 1024px) {
    margin-left: 4.16667%;
  }
`;
