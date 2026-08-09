import data from "@/data/data.json";
import { Html, Main, NextScript, Head } from "next/document";

const Document = () => {
  return (
    <Html lang="en">
      <Head>
        <link href="/kunalFavicon.png" rel="icon" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
