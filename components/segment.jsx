import { Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function Segment(props) {
  return (
    <Flex flexDir="column" p="10px">
      <Link
        href={{
          pathname: "/criteria/[slug]",
          query: { slug: props.id },
        }}
      >
        <Heading textColor="white">{props.title}</Heading>
        <Text color={props.color}>{props.subtitle}</Text>
      </Link>
    </Flex>
  );
}
