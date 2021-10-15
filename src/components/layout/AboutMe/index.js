import Image from "next/image";
import {
  Section,
  Article,
  WrapperImage,
  Row,
  Subtitle,
  Box,
  Paragraph,
} from "@/components";

export function AboutMe() {
  return (
    <Section>
      <Subtitle>About me</Subtitle>
      <Article direction="row">
        <WrapperImage height="200px" width="200px">
          <Image
            src="/my-profile-photo.jpg"
            layout="fill"
            alt="Angel Padrino"
          />
        </WrapperImage>
        <Box>
          <Paragraph>
            Quis quis consectetur consectetur non qui non magna cupidatat eu ea
            excepteur est. Nostrud sint in cillum mollit magna non laboris. Esse
            ea tempor veniam aute ut duis occaecat irure occaecat adipisicing
            exercitation culpa. In sunt excepteur sit ea ea et aliquip ex et ut
            ad.
          </Paragraph>
        </Box>
      </Article>
    </Section>
  );
}
