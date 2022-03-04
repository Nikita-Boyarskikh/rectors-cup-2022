const Favicons = () => {
  return (
    <>
      <link rel="manifest" href="/manifest.json" key="manifest" />
      <meta name="msapplication-config" content="/browserconfig.xml" key="browserconfig" />
      <meta name="theme-color" content="#FCD800" />

      { /* Apple splash screen images */ }
      <link href="iphone5_splash.png" media="(width: 320px) and (height: 568px) and (resolution: 2dppx)" rel="apple-touch-startup-image" key="iphone5_splash" />
      <link href="iphone6_splash.png" media="(width: 375px) and (height: 667px) and (resolution: 2dppx)" rel="apple-touch-startup-image" key="iphone6_splash" />
      <link href="iphoneplus_splash.png" media="(width: 621px) and (height: 1104px) and (resolution: 3dppx)" rel="apple-touch-startup-image" key="iphoneplus_splash" />
      <link href="iphonex_splash.png" media="(width: 375px) and (height: 812px) and (resolution: 3dppx)" rel="apple-touch-startup-image" key="iphonex_splash" />
      <link href="iphonexr_splash.png" media="(width: 414px) and (height: 896px) and (resolution: 2dppx)" rel="apple-touch-startup-image" key="iphonexr_splash" />
      <link href="iphonexsmax_splash.png" media="(width: 414px) and (height: 896px) and (resolution: 3dppx)" rel="apple-touch-startup-image" key="iphonexsmax_splash" />
      <link href="ipad_splash.png" media="(width: 768px) and (height: 1024px) and (resolution: 2dppx)" rel="apple-touch-startup-image" key="ipad_splash" />
      <link href="ipadpro1_splash.png" media="(width: 834px) and (height: 1112px) and (resolution: 2dppx)" rel="apple-touch-startup-image" key="ipadpro1_splash" />
      <link href="ipadpro3_splash.png" media="(width: 834px) and (height: 1194px) and (resolution: 2dppx)" rel="apple-touch-startup-image" key="ipadpro3_splash" />
      <link href="ipadpro2_splash.png" media="(width: 1024px) and (height: 1366px) and (resolution: 2dppx)" rel="apple-touch-startup-image" key="ipadpro2_splash" />

      { /* Favicon */ }
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" key="favicon16" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" key="favicon32" />
      <link rel="shortcut icon" sizes="32x32" href="/favicon.ico" key="favicon" />

      { /* MacOS */ }
      <link rel="mask-icon" href="/mask-icon.svg" color="#FCD800" key="maskicon" />

      { /* Microsoft 8 Tablet */ }
      <meta name="msapplication-TileColor" content="#FFC40D" />
      <meta name="msapplication-TileImage" content="/icons/mstile-144x144.png" />

      { /* Apple Touch */ }
      <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-57x57.png" key="appicon57" />
      <link rel="apple-touch-icon" sizes="60x60" href="/apple-touch-icon-60x60.png" key="appicon60" />
      <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-72x72.png" key="appicon72" />
      <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon-76x76.png" key="appicon76" />
      <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114x114.png" key="appicon114" />
      <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon-120x120.png" key="appicon120" />
      <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144x144.png" key="appicon144" />
      <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon-152x152.png" key="appicon152" />
      <link rel="apple-touch-icon-precomposed" sizes="57x57" href="/apple-touch-icon-57x57-precomposed.png" key="appprecomp57" />
      <link rel="apple-touch-icon-precomposed" sizes="60x60" href="/apple-touch-icon-60x60-precomposed.png" key="appprecomp60" />
      <link rel="apple-touch-icon-precomposed" sizes="72x72" href="/apple-touch-icon-72x72-precomposed.png" key="appprecomp72" />
      <link rel="apple-touch-icon-precomposed" sizes="76x76" href="/apple-touch-icon-76x76-precomposed.png" key="appprecomp76" />
      <link rel="apple-touch-icon-precomposed" sizes="114x114" href="/apple-touch-icon-114x114-precomposed.png" key="appiprecomp14" />
      <link rel="apple-touch-icon-precomposed" sizes="120x120" href="/apple-touch-icon-120x120-precomposed.png" key="appiprecomp20" />
      <link rel="apple-touch-icon-precomposed" sizes="144x144" href="/apple-touch-icon-144x144-precomposed.png" key="appiprecomp44" />
      <link rel="apple-touch-icon-precomposed" sizes="152x152" href="/apple-touch-icon-152x152-precomposed.png" key="appiprecomp52" />
    </>
  )
}

export default Favicons
