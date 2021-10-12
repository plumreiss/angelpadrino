import Image from "next/image";
import { Section, Subtitle, Article, Box, Paragraph } from "../../elements";

export function AboutMe() {
  return (
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
              ea excepteur est. Nostrud sint in cillum mollit magna non laboris.
              Esse ea tempor veniam aute ut duis occaecat irure occaecat
              adipisicing exercitation culpa. In sunt excepteur sit ea ea et
              aliquip ex et ut ad.
            </Paragraph>
          </Box>
        </Box>
      </Article>
    </Section>
  );
}
