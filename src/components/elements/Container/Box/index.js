import styled from "styled-components";

const StyledBox = styled.div`
  display: ${({ display }) => display};
  text-align: ${({ textAlign }) => textAlign};
  position: ${({ position }) => position};
  flex-direction: ${({ direction }) => direction};
  width: ${({ w }) => w};
  margin: ${({ mg }) => mg};
  min-height: ${({ mh }) => mh};
  background: ${({ bg }) => bg};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  box-shadow: ${({ boxShadow }) => boxShadow};
  border-radius: ${({ borderRadius }) => borderRadius};
  padding: ${({ pd }) => pd};
`;

export function Box({ children, ...rest }) {
  return <StyledBox {...rest}>{children}</StyledBox>;
}
