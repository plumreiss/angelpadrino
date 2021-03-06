import Image from "next/image";
import { useScreen } from "@/hooks";

import {
  Section,
  Article,
  WrapperImage,
  Subtitle,
  Row,
  Paragraph,
} from "@/components";

export function AboutMe() {
  const [isLargeScreen] = useScreen();

  return (
    <Section pd="1.5rem 0">
      <Subtitle>About me</Subtitle>
      <Article
        direction={isLargeScreen ? "row" : "column"}
        alignItems={isLargeScreen ? "" : "center"}
        pd="1.5rem 0"
      >
        <WrapperImage height="150px" mw="150px" width="150px">
          <Image
            src="/my-profile-photo.jpg"
            layout="fill"
            alt="Angel Padrino"
          />
        </WrapperImage>
        <Row
          boxShadow="0px 0px 10px 3px rgba(239,239,247,1)"
          bg="rgb(255 255 255)"
          mh="250px"
          mg={isLargeScreen ? "0 0 0 90px" : "90px 0 0 0"}
          borderRadius="1rem"
          pd="0 1rem"
        >
          <Paragraph>
            Quis quis consectetur consectetur non qui non magna cupidatat eu ea
            excepteur est. Nostrud sint in cillum mollit magna non laboris. Esse
            ea tempor veniam aute ut duis occaecat irure occaecat adipisicing
            exercitation culpa. In sunt excepteur sit ea ea et aliquip ex et ut
            ad.
          </Paragraph>
        </Row>
      </Article>
    </Section>
  );
}
