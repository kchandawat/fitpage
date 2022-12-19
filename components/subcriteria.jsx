import { color, Text } from "@chakra-ui/react";
import Link from "next/link";
import reactStringReplace from "react-string-replace";

export default function SubCriteria(props) {
  return (
    <Text textColor="white">
      {" "}
      {props.type == "variable"
        ? reactStringReplace(props.line, /([$]+[0-9]+)/g, (match, i) =>
            props.variable[match]["type"] !== "indicator" ? (
              <Link
                href={{
                  pathname: "/subcriteria/[slug]/[subslug]/[dollar]",
                  query: { slug: props.slug, subslug: props.id, dollar: match },
                }}
                style={{ color: "blue" }}
              >
                ({props.variable[match]["values"][0]})
              </Link>
            ) : (
              <Link
                style={{ color: "blue" }}
                href={{
                  pathname: "/subcriteria/[slug]/[subslug]/[dollar]",
                  query: { slug: props.slug, subslug: props.id, dollar: match },
                }}
              >
                ({props.variable[match]["default_value"]})
              </Link>
            )
          )
        : props.line}
    </Text>
  );
}
