import styled from "styled-components";

const StyledWrapperImage = styled.div`
  position: relative;
  height: ${({ height }) => height};
  width: ${({ width }) => width};

  img {
    border-radius: ${({ rounded }) => rounded || "55%"};
  }
`;

export function WrapperImage({
  height = "200px",
  width = "200px",
  rounded,
  children,
}) {
  return (
    <StyledWrapperImage height={height} width={width} rounded={rounded}>
      {children}
    </StyledWrapperImage>
  );
}
