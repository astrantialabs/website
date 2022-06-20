import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import NextApp, { AppProps } from "next/app";
import Head from "next/head";

const theme = extendTheme({
    fonts: {
        body: "'Be Vietnam Pro', sans-serif",
        heading: "'Plus Jakarta Sans', sans-serif",
    },
});

class _app extends NextApp<AppProps> {

    constructor(props: AppProps) {
        super(props);

    }

    render() {
        const { Component, pageProps } = this.props;

        return (
            <>
                <Head>
                    <meta charSet="UTF-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <link rel="icon" href="/favicon.ico" />

                    <title>Astrantia Labs</title>
                </Head>
                    <ChakraProvider theme={theme}>
                                <Component {...pageProps} />
                    </ChakraProvider>
            </>
        );
    }
}

export default _app;