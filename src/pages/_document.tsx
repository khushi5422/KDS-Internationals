import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href="/favicon.svg" />
        <link rel='canonical' href='Link' />
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous"></link>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:site_name" content="KDS Exports" />
        {/* <meta property="og:url" content="https://jkexports.vercel.app/" /> */}
        <meta property="og:title" content="Trusted Source for Quality Organic Herbs and Spices" />
        <meta property="og:description" content="KDS Exports epitomizes a legacy of delivering unparalleled quality in the realm of spice exports. With a commitment to excellence, our journey unfolds against the backdrop of Indias rich culinary heritage. We take pride in being a beacon of quality, seamlessly blending the diverse flavors of India into every spice we export." />
        <meta property="og:image" content="c2.webp" />
        <meta property="og:type" content="website" />
      </Head>
      <body>
        <div id="globalLoader">
          <img src="loader.gif" alt="loader" loading="lazy" />
        </div>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
