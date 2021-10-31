import styled from "styled-components";

const StyledSubtitle = styled.h2`
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => fontSize};
`;

export function Subtitle({ children, ...rest }) {
  return <StyledSubtitle {...rest}>{children}</StyledSubtitle>;
}
