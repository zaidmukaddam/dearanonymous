import { Html, Head, Main, NextScript } from "next/document";

function Document() {
  return (
    <Html>
      <Head>
        <meta charSet="utf-8" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* <!-- SimpleAnalytics --> */}
        <script async defer src="https://scripts.simpleanalyticscdn.com/latest.js"></script>
        <noscript><img src="https://queue.simpleanalyticscdn.com/noscript.gif" alt="" referrerPolicy="no-referrer-when-downgrade" /></noscript>

        <meta name="application-name" content="Dear Anonymous" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Dear Anonymous" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <link
          rel="apple-touch-startup-image"
          href="/icons/apple_splash_2048.png"
        />

        <meta
          name="description"
          content="Dear Anonymous is the unofficial anonymous post board for students and community members at NMIMS University in MUMBAI."
        />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#e6d4d5" />

        <meta name="theme-color" content="#e6d4d5" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://dearanonymous.space" />
        <meta name="twitter:title" content="Dear Anonymous" />
        <meta
          name="twitter:description"
          content="Dear Anonymous is the unofficial anonymous post board for students and community members at NMIMS University in MUMBAI."
        />
        <meta name="twitter:image" content="/icons/logo192.png" />
        <meta name="twitter:creator" content="@zaidmukaddam" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Dear Anonymous" />
        <meta
          property="og:description"
          content="Dear Anonymous is the unofficial anonymous post board for students at NMIMS University in MUMBAI."
        />
        <meta property="og:site_name" content="Dear Anonymous" />
        <meta property="og:url" content="https://dearanonymous.space" />
        <meta property="og:image" content="/icons/apple-touch-icon.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;
