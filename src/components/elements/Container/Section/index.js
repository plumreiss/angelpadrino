import styled from "styled-components";

const StyledSection = styled.section`
  min-height: ${({ mh }) => mh || "20vh"};
  display: flex;
  flex-direction: column;
`;

export function Section({ mh, children }) {
  return <StyledSection mh={mh}>{children}</StyledSection>;
}
