import Image from "next/image";

import { Section, Subtitle, Box, Article, Link } from "../../elements";

import { PROJECTS } from "../../../constants";

export function Projects() {
  return (
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
  );
}
