import styled from "styled-components";

const StyledCenter = styled.div`
  margin: auto;
`;

export function Center({ children }) {
  return <StyledCenter>{children}</StyledCenter>;
}
