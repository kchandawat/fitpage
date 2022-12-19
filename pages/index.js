import { Flex, Heading } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import List from "../components/list";

export default function Home(props) {
  const data = props.data;
  return (
    <Flex mx="auto" my="auto">
      {props?.data !== null ? (
        <List data={data} />
      ) : (
        <Heading color="white">LOADING...</Heading>
      )}
    </Flex>
  );
}
