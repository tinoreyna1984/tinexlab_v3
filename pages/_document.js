import { Html, Head, Main, NextScript } from 'next/document'
import SplashScreen from './components/splash-screen'

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <meta name="description" content="TinexLab - el sitio de Tino Reyna" />
        <link rel="icon" href="/tinexlab-logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Quicksand&family=Inconsolata&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
      </Head>
      <body>
        <SplashScreen />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
