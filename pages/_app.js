import App, { Container } from "next/app";
import NProgress from "next-nprogress/component";
import { Normalize } from 'styled-normalize'

import Page from "../components/Page/Page";
import GlobalStyles from '../GlobalStyles'

class _App extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    pageProps.query = ctx.query;
    return { pageProps };
  }
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Page>
          <NProgress
            color="#141414"
            options={{ trickleSpeed: 50 }}
            showAfterMs={300}
            spinner />
          <Normalize />
          <GlobalStyles />
          <Component {...pageProps} />
        </Page>
      </Container>
    );
  }
}

export default _App;
