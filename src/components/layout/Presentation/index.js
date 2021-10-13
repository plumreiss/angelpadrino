import Image from "next/image";

import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

import {
  Section,
  Col,
  Row,
  Center,
  WrapperImage,
  Title,
  Link,
} from "@/components";

import { SOCIAL_NETWORKS } from "@/constants";

export function Presentation() {
  return (
    <Section mh="100vh">
      <Center>
        <Col>
          <WrapperImage>
            <Image
              src="/my-profile-photo.jpg"
              layout="fill"
              alt="Angel Padrino"
            />
          </WrapperImage>
          <Title>Hey there! I'm a Fronted Developer</Title>
          <Row>
            <Link url={SOCIAL_NETWORKS["instagram"]} margin="0 0.3rem 0 0">
              <FaInstagram />
            </Link>
            <Link url={SOCIAL_NETWORKS["linkedin"]} margin="0 0.3rem 0 0">
              <FaLinkedin />
            </Link>
            <Link url={SOCIAL_NETWORKS["github"]}>
              <FaGithub />
            </Link>
          </Row>
        </Col>
      </Center>
    </Section>
  );
}
