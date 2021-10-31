import styled from "styled-components";

const StyledArticle = styled.article`
  display: flex;
  position: ${({position}) => position};
  height: ${({ h }) => h};
  width: ${({ w }) => w};
  flex-direction: ${({ direction }) => direction};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  margin: ${({ mg }) => mg};
  padding: ${({ pd }) => pd};
`;

export function Article({ children, ...rest }) {
  return <StyledArticle {...rest}>{children}</StyledArticle>;
}
