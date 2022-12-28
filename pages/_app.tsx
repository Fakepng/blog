import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { ChakraProvider } from "@chakra-ui/react";
import SSRProvider from "react-bootstrap/SSRProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <SSRProvider>
        <SessionProvider session={pageProps.session}>
          <Component {...pageProps} />
        </SessionProvider>
      </SSRProvider>
    </ChakraProvider>
  );
}
