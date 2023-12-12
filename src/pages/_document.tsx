import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <link rel="shortcut icon" href="/favicon.png" />
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body>
      {/* <div id="globalLoader">
          <img src="../../loader.svg" alt="" />
        </div> */}
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
