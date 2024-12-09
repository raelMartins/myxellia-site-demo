import {Html, Head, Main, NextScript} from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <link href="light-mode-favicon.svg" rel="icon" media="(prefers-color-scheme: light)"/>
<link href="dark-mode-favicon.svg" rel="icon" media="(prefers-color-scheme: dark)"/>

        <link
        rel="preload"
          href="https://fonts.cdnfonts.com/css/neue-haas-grotesk-display-pro&display=swap"
        />
        <link
          rel="preload"
          href="/fonts/NeueHaasDisplay-Roman.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link href="https://fonts.cdnfonts.com/css/euclid-circular-b" rel="stylesheet" />
        <link href="https://fonts.cdnfonts.com/css/sf-pro-display" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
