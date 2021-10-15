import styled from "styled-components";

const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
`;

export function Row({ justifyContent, alignItems, children }) {
  return (
    <StyledRow justifyContent={justifyContent} alignItems={alignItems}>
      {children}
    </StyledRow>
  );
}
