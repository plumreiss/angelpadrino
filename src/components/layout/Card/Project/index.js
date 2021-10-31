import { FaGithub, FaRegEye } from "react-icons/fa";
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
      <Box
        position="absolute"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="center"
        alignItems="center"
        w="100%"
        mh="100%"
        bg="rgba(0, 0, 0, .75)"
        opacity="0"
        trans="opacity 500ms"
        opacityHover="1"
      >
        <Subtitle color="#f4f4f4">{name}</Subtitle>

        <Row justifyContent="space-around" w="200px">
          <Link url={sourceCode}>
            <FaGithub
              size="1.5rem"
              style={{
                color: "#FFF",
                background: "#333",
                "border-radius": "55%",
              }}
            />
          </Link>

          <Link url={url}>
            <FaRegEye size="1.5rem" style={{ color: "#FFF" }} />
          </Link>
        </Row>
      </Box>
    </Article>
  );
}
