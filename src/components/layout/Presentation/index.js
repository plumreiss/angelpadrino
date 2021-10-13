import Image from "next/image";

import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

import {
  Section,
  Col,
  Center,
  WrapperImage,
  Title,
  Box,
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
          <Box>
            <Link url={SOCIAL_NETWORKS["instagram"]}>
              <FaInstagram />
            </Link>
            <Link url={SOCIAL_NETWORKS["linkedin"]}>
              <FaLinkedin />
            </Link>
            <Link url={SOCIAL_NETWORKS["github"]}>
              <FaGithub />
            </Link>
          </Box>
        </Col>
      </Center>
    </Section>
  );
}
