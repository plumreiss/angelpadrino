import { Section, Subtitle, Box, Project } from "@/components";

import { PROJECTS } from "@/constants";

export function Projects() {
  return (
    <Section pd="1.5rem 0">
      <Subtitle>Projects</Subtitle>
      <Box pd="1.5rem 0">
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
