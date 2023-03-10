import '../scss/app.scss'
import { ThemeProvider } from "next-themes"
import Head from 'next/head'
import Header from '../layout/header'
import "@fortawesome/fontawesome-svg-core/styles.css"; /** Font Awesome */
import { config } from "@fortawesome/fontawesome-svg-core"; /** Font Awesome */
import { NextIntlProvider } from 'next-intl';
import { useEffect } from 'react';
import { Provider } from "react-redux";
import { store } from '../redux/store';
config.autoAddCss = false; /** Font Awesome */

export default function App({ Component, pageProps }) {

  /* useEffect hook for splash screen animation */
  useEffect(() => {
    const body = document.querySelector("body");
    if (typeof window !== 'undefined') {
      body.classList.add('fixed-body');
      const splash = document.querySelector(".splash");
      if (splash) {
        setTimeout(() => {
          splash.classList.add('display-none');
          body.classList.remove('fixed-body');
        }, 3000);
      }
    }
  }, []);

  return (
    <>
      <Head>
        <title>TinexLab</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Provider store={store}>
        <NextIntlProvider messages={pageProps.messages}>
          <ThemeProvider enableSystem={false} attribute="class">
            <Header />
            <Component {...pageProps} />
          </ThemeProvider>
        </NextIntlProvider>
      </Provider>
    </>
  )
}
