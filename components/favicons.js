const Favicons = () => {
  return (
    <>
      <link rel="manifest" href="/manifest.json" key="manifest" />
      <meta name="msapplication-config" content="/browserconfig.xml" key="browserconfig" />

      {
        /*
        Apple splash screen images
        <link rel="apple-touch-startup-image" href="/icons/apple_splash_2048.png" sizes="2048x2732" key="appsplash2048" />
        <link rel="apple-touch-startup-image" href="/icons/apple_splash_1668.png" sizes="1668x2224" key="appsplash1668" />
        <link rel="apple-touch-startup-image" href="/icons/apple_splash_1536.png" sizes="1536x2048" key="appsplash1536" />
        <link rel="apple-touch-startup-image" href="/icons/apple_splash_1125.png" sizes="1125x2436" key="appsplash1125" />
        <link rel="apple-touch-startup-image" href="/icons/apple_splash_1242.png" sizes="1242x2208" key="appsplash1242" />
        <link rel="apple-touch-startup-image" href="/icons/apple_splash_750.png" sizes="750x1334" key="appsplash750" />
        <link rel="apple-touch-startup-image" href="/icons/apple_splash_640.png" sizes="640x1136" key="appsplash640" />
        */
      }

      { /* Favicon */ }
      <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" key="favicon16" />
      <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" key="favicon32" />
      <link rel="shortcut icon" type="image/png" sizes="32x32" href="/favicon.png" key="favicon" />

      { /* MacOS */ }
      <link rel="mask-icon" href="/icons/mask-icon.svg" color="#E35F22" key="maskicon" />

      { /* Microsoft 8 Tablet */ }
      <meta name="msapplication-TileColor" content="#E35F22" />
      <meta name="msapplication-TileImage" content="/icons/mstile-144x144.png" />

      { /* Apple Touch */ }
      <link rel="apple-touch-icon-precomposed" href="/icons/touch-icon-iphone-precomposed.png" key="appprecomp" />
      <link rel="apple-touch-icon-precomposed" sizes="152x152" href="/icons/touch-icon-ipad-precomposed.png" key="appprecomp152" />
      <link rel="apple-touch-icon-precomposed" sizes="180x180" href="/icons/touch-icon-iphone-retina-precomposed.png" key="appprecomp180" />
      <link rel="apple-touch-icon-precomposed" sizes="167x167" href="/icons/touch-icon-ipad-retina-precomposed.png" key="appprecomp167" />
    </>
  )
}

export default Favicons
