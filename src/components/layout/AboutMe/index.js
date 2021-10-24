import Image from "next/image";
import {
  Section,
  Article,
  WrapperImage,
  Subtitle,
  Row,
  Paragraph,
} from "@/components";

export function AboutMe() {
  return (
    <Section>
      <Subtitle>About me</Subtitle>
      <Article direction="row">
        <WrapperImage height="150px">
          <Image
            src="/my-profile-photo.jpg"
            layout="fill"
            alt="Angel Padrino"
          />
        </WrapperImage>
        <Row
          boxShadow="0px 0px 59px 9px rgba(239,239,247,1)"
          bg="rgb(255 255 255)"
          mh="250px"
          mg="0 0 0 90px"
          borderRadius="1rem"
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
