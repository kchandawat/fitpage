import { ChakraProvider, extendTheme, Flex } from "@chakra-ui/react";
import Head from "next/head";
import { useEffect, useState } from "react";
import "../styles/globals.css";

const theme = extendTheme({
  colors: {
    brand: {
      50: "#fec409", //yellow
      100: "#e5e6ea", // dark mode white
      200: "#1a1b1f", //text - color
      300: "#5ab0e5", //dark mode blue text
      400: "#9ea6b4", //dark mode grey text
      500: "#fb7f09", //orange
      600: "#BF5709", //dark orange
      700: "#822f08", //brand dark orange
      800: "#230c0f", //brown siena
    },
  },
  config: {
    initialColorMode: "light",
    useSystemColorMode: true,
  },
});

function MyApp({ Component, pageProps }) {
  const [data, setdata] = useState([]);
  useEffect(() => {
    const pull_data = async () => {
      await fetch("/api/database", {
        method: "POST",
        body: JSON.stringify({}),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Basic",
        },
      }).then((resp) => {
        resp.json().then((response) => {
          setdata(response);
        });
      });
    };
    pull_data();
  }, []);
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <meta charset="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="viewport" content="initial-scale=1, maximum-scale=1" />

        <title>Fitpage Parser</title>
        <meta name="keywords" content="" />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <link rel="apple-touch-icon" sizes="300x300" href="/logo.png" />
        <link rel="icon" type="image/png" sizes="300x300" href="/logo.png" />
        <link rel="icon" type="image/png" sizes="300x300" href="/logo.png" />

        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Flex width="100%" height="100vh">
        <Component {...pageProps} data={data} />
      </Flex>
    </ChakraProvider>
  );
}

export default MyApp;
