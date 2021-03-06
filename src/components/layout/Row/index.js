import styled from "styled-components";

const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  width: ${({ w }) => w};
  margin: ${({ mg }) => mg};
  padding: ${({ pd }) => pd};
  min-height: ${({ mh }) => mh};
  background: ${({ bg }) => bg};
  flex-wrap: ${({ wrap }) => wrap};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  box-shadow: ${({ boxShadow }) => boxShadow};
  border-radius: ${({ borderRadius }) => borderRadius};
`;

export function Row({ children, ...rest }) {
  return <StyledRow {...rest}>{children}</StyledRow>;
}
