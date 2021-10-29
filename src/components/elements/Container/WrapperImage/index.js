import styled from "styled-components";

const StyledWrapperImage = styled.div`
  position: relative;
  height: ${({ height }) => height || "200px"};
  min-width: ${({ mw }) => mw};
  width: ${({ width }) => width || "200px"};

  img {
    border-radius: ${({ rounded }) => rounded || "55%"};
  }
`;

export function WrapperImage({ children, ...rest }) {
  return <StyledWrapperImage {...rest}>{children}</StyledWrapperImage>;
}
