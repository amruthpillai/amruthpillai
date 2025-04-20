import "animate.css";
import "tippy.js/dist/tippy.css";
import "styles/globals.css";

import Navigation from "components/Navigation";
import NoSSR from "components/NoSSR";
import ThemeProvider from "contexts/ThemeProvider";
import type { AppProps } from "next/app";
import Head from "next/head";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Owali Ullah Shawon - Resume on the Web</title>
      </Head>

      <ThemeProvider>
        <Component {...pageProps} />

        <NoSSR>
          <Navigation />
        </NoSSR>
      </ThemeProvider>
    </>
  );
};

export default App;
