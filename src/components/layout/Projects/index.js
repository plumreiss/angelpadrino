import { Section, Subtitle, Box, Project } from "@/components";

import { PROJECTS } from "@/constants";

export function Projects() {
  return (
    <Section>
      <Subtitle>Projects</Subtitle>
      <Box>
        {PROJECTS.map(({ id, name, url, img, sourceCode }) => (
          <Project
            key={id}
            name={name}
            url={url}
            img={img}
            sourceCode={sourceCode}
          />
        ))}
      </Box>
    </Section>
  );
}
