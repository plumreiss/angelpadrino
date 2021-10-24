import styled from "styled-components";

const StyledArticle = styled.article`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  justify-content: ${({ justifyContent }) => justifyContent};
  margin: ${({ mg }) => mg};
  padding: ${({ pd }) => pd};
`;

export function Article({ direction, justifyContent, mg, pd, children }) {
  return (
    <StyledArticle
      direction={direction}
      justifyContent={justifyContent}
      mg={mg}
      pd={pd}
    >
      {children}
    </StyledArticle>
  );
}
