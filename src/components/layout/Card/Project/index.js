import Image from "next/image";
import { Box, WrapperImage, Row, Article, Subtitle, Link } from "@/components";

export function Project({ img, name, sourceCode, url }) {
  return (
    <Article
      w="200px"
      h="200px"
      position="relative"
      justifyContent="center"
      alignItems="center"
    >
      <WrapperImage rounded="0px">
        <Image src={img} layout="fill" alt={name} />
      </WrapperImage>
      <Box position="absolute" textAlign="center">
        <Box>
          <Subtitle>{name}</Subtitle>
        </Box>
        <Row justifyContent="space-around" w="200px">
          <Link url={sourceCode}>Source Code</Link>

          <Link url={url}>Site Live</Link>
        </Row>
      </Box>
    </Article>
  );
}
