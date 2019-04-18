import React from "react"

import Page from '../components/Page/Page'
import PageTitle from '../components/PageTitle/PageTitle'
import Container from '../components/Container/Container'

// import SEO from "../components/seo"
// <SEO title="404: Not found" />

const NotFoundPage = () => (
  <Page>
    <Container>
      <PageTitle>Not found —</PageTitle>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Container>
  </Page>
)

export default NotFoundPage