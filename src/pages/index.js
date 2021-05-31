<<<<<<< HEAD
import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
=======
import * as React from "react"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"
import Portfolio from "../components/portfolio"
>>>>>>> origin/master

import Layout from "../components/layout";
import Seo from "../components/seo";

const IndexPage = () => (
  <Layout>
<<<<<<< HEAD
    <Seo title="Home" />
    <h1 className="bg-red-300">Breathing Bonsai</h1>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p>
=======
    <Seo title="Breathing Bonsai" />
    <h1>Breathing Bonsai</h1>
    <Portfolio />
>>>>>>> origin/master
  </Layout>
);

export default IndexPage;
