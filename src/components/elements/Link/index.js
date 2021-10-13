import styled from "styled-components";

const StyledLink = styled.a`
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: 900;
  margin: ${({ margin }) => margin};

  &:hover {
    color: ${({ hoverColor }) => hoverColor};
  }
`;

export function Link({ color, fontSize, hoverColor, margin, url, children }) {
  return (
    <StyledLink
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      color={color}
      fontSize={fontSize}
      margin={margin}
      hoverColor={hoverColor}
    >
      {children}
    </StyledLink>
  );
}
