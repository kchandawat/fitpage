import { Flex } from "@chakra-ui/react";
import Segment from "./segment";

export default function List(props) {
  const data = props.data;
  console.log(data);
  return (
    <Flex flexDir="column" backgroundColor="black" py="5vh" px="5vw">
      {data.map((value, key) => (
        <div>
          <Segment
            key={key}
            id={key}
            title={value.name}
            subtitle={value.tag}
            color={value.color}
            criteria={value.criteria}
          />
          <hr />
        </div>
      ))}
    </Flex>
  );
}
