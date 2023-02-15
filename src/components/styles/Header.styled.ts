import styled from "styled-components";

export const HeaderWrapper = styled.header`
  color: ${(props) => props.theme.textPrimary};
  background: ${(props) => props.theme.headerBg};
  min-height: 56px;
  padding: 0 16px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  box-shadow: rgb(0 0 0 / 5%) 0px 0.125rem 1rem;
  transition: all 0.3s ease-in-out;
`;
