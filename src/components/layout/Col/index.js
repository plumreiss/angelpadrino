import styled from "styled-components";

const StyledCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export function Col({ children }) {
  return <StyledCol>{children}</StyledCol>;
}
