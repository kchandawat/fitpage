import { Flex, FormLabel, Heading, Input, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function SubCriteria(props) {
  const router = useRouter();
  const { slug } = router.query;
  const page = slug ? slug[0] : 0;
  const subpage = slug ? slug[1] : 0;
  const dollar = slug ? slug[2] : "$1";
  var page_data = props.data[page]?.criteria[subpage]?.variable;
  var renderData = page_data ? page_data[dollar] : [];
  const rendervalues = renderData ? renderData.values : [];

  return (
    <Flex mx="auto" my="auto">
      <Flex flexDir="column" backgroundColor="black" py="2vh" px="2vw">
        {renderData.type == "value" ? (
          Object.entries(rendervalues).map((value, key) => {
            return (
              <Flex flexDir="column" p="10px" w="xl">
                <Text color="white">{value[1]}</Text>
                <hr />
              </Flex>
            );
          })
        ) : renderData.type == "indicator" ? (
          <Flex flexDir="column" w="xl">
            <Heading color="white">{renderData.study_type}</Heading>
            <Text color="white" py="3vh">
              Set Parameters
            </Text>
            <Flex flexDir="row" bgColor="white" p="2vh">
              <FormLabel fontSize="2xl" textColor="black">
                {renderData.parameter_name}
              </FormLabel>
              <Input
                textColor="black"
                type="number"
                min="4"
                defaultValue={renderData.default_value}
              />
            </Flex>
          </Flex>
        ) : (
          <Heading color="white">404 not found</Heading>
        )}
      </Flex>
    </Flex>
  );
}
