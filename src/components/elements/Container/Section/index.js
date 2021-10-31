import styled from "styled-components";

const StyledSection = styled.section`
  min-height: ${({ mh }) => mh || "20vh"};
  display: flex;
  flex-direction: column;
  padding: ${({pd}) => pd};
`;

export function Section({ children, ...rest }) {
  return <StyledSection {...rest}>{children}</StyledSection>;
}
