import '@/styles/globals.scss'
import { Fragment } from 'react'
import { Footer } from '@/layout'
export default function App({ Component, pageProps }) {
  return <Fragment>
    <Component {...pageProps} />
    <Footer />
  </Fragment>
}
