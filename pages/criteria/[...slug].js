import { Flex, Heading, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Subcriteria from "../../components/subcriteria";

export default function Criteria(props) {
  const router = useRouter();
  const { slug } = router.query;
  var data = {};
  data = props.data[slug];
  console.log(data);

  return (
    <Flex mx="auto" my="auto">
      <Flex flexDir="column" backgroundColor="black" py="2vh" px="2vw">
        <Flex flexDir="column" p="10px" bgColor="blue.300">
          <Heading textColor="white">{data?.name}</Heading>
          <Text color={data?.color}>{data?.tag}</Text>
        </Flex>
        <Flex flexDir="column" py="2vh">
          {data?.criteria.map((value, key) => (
            <div>
              <Subcriteria
                textColor="white"
                key={key}
                id={key}
                slug={slug}
                variable={value.variable}
                type={value.type}
                line={value.text}
              />
              <Text textColor="white" fontSize="8px">
                and
              </Text>
            </div>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
}
