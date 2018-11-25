import Document, { Head, Main, NextScript } from "next/document"
import { ServerStyleSheet } from "styled-components"
import { Normalize } from 'styled-normalize'

import Meta from '../components/Meta/Meta'
import GlobalStyles from './GlobalStyles'
export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    )
    const styleTags = sheet.getStyleElement()

    return { ...page, styleTags }
  }

  render() {
    return (
      <html lang="en">
        <Head>
          {this.props.styleTags}
          <Meta />
        </Head>
        <body>
          <Normalize />
          <GlobalStyles />
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
