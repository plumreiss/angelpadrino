import {
  Title,
  Box,
  Article,
  Subtitle,
  Link,
  Paragraph,
  Section,
} from "../components";
import { PROJECTS, SOCIAL_NETWORKS } from "../constants";

import Image from "next/image";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Main() {
  return (
    <>
      <Section>
        <Image
          src="/my-profile-photo.jpg"
          height={200}
          width={200}
          alt="Angel Padrino"
        />
        <Title> Hey there! I'm a Fronted Developer</Title>
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

      <Section>
        <Subtitle>About me</Subtitle>
        <Article>
          <Box>
            <Image
              src="/my-profile-photo.jpg"
              height={200}
              width={200}
              alt="Angel Padrino"
            />
            <Box>
              <Paragraph>
                Quis quis consectetur consectetur non qui non magna cupidatat eu
                ea excepteur est. Nostrud sint in cillum mollit magna non
                laboris. Esse ea tempor veniam aute ut duis occaecat irure
                occaecat adipisicing exercitation culpa. In sunt excepteur sit
                ea ea et aliquip ex et ut ad.
              </Paragraph>
            </Box>
          </Box>
        </Article>
      </Section>

      <Section>
        <Subtitle>Projects</Subtitle>
        <Box>
          {PROJECTS.map(({ id, name, url, img, sourceCode }) => (
            <Article key={id}>
              <Box>
                <Image src={img} width={200} height={200} />
              </Box>
              <Box>
                <h3>{name}</h3>
              </Box>
              <Box>
                <Link
                  href={sourceCode}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source Code
                </Link>

                <Link href={url} target="_blank" rel="noopener noreferrer">
                  Site Live
                </Link>
              </Box>
            </Article>
          ))}
        </Box>
      </Section>
    </>
  );
}
