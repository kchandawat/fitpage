import { Flex } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import List from "../components/list";

export default function Home(props) {
  const data = props.data;
  return (
    <Flex mx="auto" my="auto">
      <List data={data} />
    </Flex>
  );
}
