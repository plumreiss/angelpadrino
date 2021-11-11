import styled from "styled-components";
import { Link, Subtitle, Row } from "@/components";

const StyledHeader = styled.header`
  width: 100%;
  min-height: 60px;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  background: #f9f9ff;
  z-index: 1;
`;

export function Header() {
  return (
    <StyledHeader>
      <Row
        w="80%"
        alignItems="center"
        justifyContent="space-between"
        wrap="wrap"
      >
        <Subtitle>Angel Padrino</Subtitle>
        <nav>
          <Link margin="0 0.5rem 0 0" fontSize="1.1rem">
            About
          </Link>
          <Link fontSize="1.1rem">Projects</Link>
        </nav>
      </Row>
    </StyledHeader>
  );
}
