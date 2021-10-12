import {
  Presentation,
  Box,
  Article,
  Subtitle,
  Link,
  Paragraph,
  Section,
} from "../components";

import { PROJECTS } from "../constants";

import Image from "next/image";

export default function Main() {
  return (
    <>
      <Presentation />

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
                <Link url={sourceCode}>Source Code</Link>

                <Link url={url}>Site Live</Link>
              </Box>
            </Article>
          ))}
        </Box>
      </Section>
    </>
  );
}
