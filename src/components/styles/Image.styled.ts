import styled from "styled-components";

export const ImageWrapper = styled.div`
  width: 100%;
  height: 15.5rem;
  padding-bottom: 2rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (min-width: 768px) {
    width: 62.5%;
    height: 28.75rem;
    margin-left: 18.75%;
  }

  @media (min-width: 1024px) {
    width: 33.3333%;
    margin-left: 0;
    padding-bottom: 0;
  }
`;
