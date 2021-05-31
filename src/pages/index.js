import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import Seo from "../components/seo";
import Portfolio from "../components/portfolio";

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <section className="mt-8 mb-12">
      <div className="text-5xl">
        <span
          className=""
          style={{
            display: "inline-block",
            transform: `translate(-2px, 0px)`,
          }}
        >
          Hi
        </span>
        , I'm&nbsp;
        <span className="">Charlie</span>.
        <p className="mt-4 text-3xl text-gray-600">
          These are some projects I have worked on.
        </p>
      </div>
    </section>
    <section>
      <Portfolio />
    </section>
    {/* <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p> */}
  </Layout>
);

export default IndexPage;
