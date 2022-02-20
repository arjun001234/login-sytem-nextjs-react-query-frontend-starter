import '../styles/globals.css'
import {AppProps} from 'next/app'
import React from "react";
import GlobalWrapper from "../components/global/global";
import usePrefetch from '../hooks/usePrefetch';

function MyApp({ Component, pageProps, router }: AppProps) {

  usePrefetch()

  return (
      <GlobalWrapper router={router}>
          <Component {...pageProps} />
      </GlobalWrapper>
  )
}

export default MyApp
