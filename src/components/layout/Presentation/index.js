import Image from "next/image";

import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

import { Section, Title, Box, Link } from "../../elements";

import { SOCIAL_NETWORKS } from "../../../constants";

export function Presentation() {
  return (
    <Section mh="100vh" >
      <Image
        src="/my-profile-photo.jpg"
        height={200}
        width={200}
        alt="Angel Padrino"
      />
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
    </Section>
  );
}
