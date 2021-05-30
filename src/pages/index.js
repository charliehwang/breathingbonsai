import * as React from "react"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"
import Portfolio from "../components/portfolio"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Breathing Bonsai" />
    <h1>Breathing Bonsai</h1>
    <Portfolio />
  </Layout>
)

export default IndexPage
