import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import Seo from "../components/seo";
import Portfolio from "../components/portfolio";
import CarouselModal from "../components/CarouselModal";
import ProjectCarousel from "../components/ProjectCarousel";

import "./index.css";

const IndexPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [projectSelected, setProjectSelected] = useState(null);

  const openCarouselModal = (e, projectData, imagesData) => {
    e.preventDefault();
    setProjectSelected({ projectData, imagesData });
    setModalOpen(true);
  };

  const closeCarouselModal = (e) => {
    setModalOpen(false);
  };

  return (
    <Layout>
      <Seo title="Home" />
      <section className="mt-8 mb-12">
        <div className="text-5xl">
          <span
            className="hi"
            style={{
              display: "inline-block",
              transform: `translate(-2px, 0px)`,
            }}
          >
            Hi
          </span>
          <span className="text-gray-500">,</span> I'm&nbsp;
          <div className="inline-block relative">
            <span className="">Charlie</span>
            <div
              id="underline"
              className="absolute w-full h-4 -left-1 -bottom-0"
            >
              <svg
                id="name-underline"
                className="absolute w-full h-8 -left-1 -bottom-2 opacity-50 text-yellow-400 fill-current"
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width="933.333"
                height="340"
                viewBox="90 0 570 255"
                preserveAspectRatio="none"
              >
                <path d="M99.5 84.2c-.3.7.4 3.1 1.5 5.3 2.5 4.9 2.5 6.1-.1 11.9-1.1 2.6-2.5 8.6-3.1 13.4-1.1 8.1-1 9.2 1.2 15.6 2.9 8.9 11.7 21.8 23.1 33.9 8.7 9.3 22.6 20.8 27.9 23 1.4.6 3.3 1.7 4.2 2.5 2.1 1.8 5.9 1.2 15.8-2.3 7.9-2.8 17.5-5.6 27.5-8 3.3-.8 8.2-2.1 10.9-3 2.7-.8 6.5-1.5 8.5-1.5s4.5-.7 5.5-1.5c1.1-.8 3.1-1.5 4.5-1.5s5.5-.7 9.1-1.5c12.6-2.8 30.6-6.3 37.9-7.5 4.1-.6 7.7-1.3 8.1-1.5.4-.2 6.2-1.1 12.9-1.9 6.7-.9 12.7-1.8 13.2-2.1.5-.4 5.1-1 10.2-1.6 5-.5 13.5-1.6 18.7-2.4 11.7-1.8 45.9-5.3 60-6 5.8-.4 17.7-1.3 26.4-2.1 10.5-.9 28.8-1.4 53.5-1.4 31.9 0 41.5.4 63.4 2.5 14.1 1.3 26.1 2.6 26.5 2.9.4.2 4.6 1 9.2 1.6 4.7.6 11.6 2 15.5 3.1 3.8 1 8 1.9 9.3 1.9 1.3 0 3.6.6 5 1.4 1.5.7 6.5 2.6 11.2 4.1 9.4 3.1 21.3 8.7 28 13.1 11.4 7.7 12.5 7.1 9.2-5.4-1.3-4.8-3-9.4-3.8-10.3-.8-.8-1.4-2.1-1.4-2.8 0-1.6-12.6-13.8-16.2-15.7-1.5-.8-4.3-2.5-6.3-3.8-1.9-1.3-7-4.1-11.3-6.1-4.2-2-8.8-4.2-10.2-4.9-1.4-.7-3.8-1.6-5.5-2-1.6-.4-4.3-1.3-6-2.1-1.6-.7-5-1.8-7.5-2.5-2.5-.6-8.5-2.3-13.5-3.7-12.1-3.3-24.2-6-34.5-7.7-4.7-.8-10.5-1.9-13-2.4-2.5-.6-7.6-1.3-11.5-1.7-3.8-.4-10.6-1.3-15-2-4.4-.8-12.3-1.7-17.5-2-5.2-.3-14.2-1.3-20-2-12.5-1.8-80.8-4.5-111-4.5-29.2 0-96.3 2.9-112.5 5-4.4.5-12.9 1.4-19 1.9-14.1 1.3-34.4 3.8-41.5 5.1-3 .6-8.4 1.5-12 2-6.7 1-15.1 2.8-28 6.1-8.8 2.2-8.7 2.2-12-6.9-3.1-8.4-6.8-13.3-13.7-18-6.6-4.4-11.1-5.9-11.8-4z" />
              </svg>
            </div>
            <span id="period" className="text-gray-500">
              .
            </span>
          </div>
          <p className="mt-4 text-3xl text-gray-600">
            Here are projects I've made.
          </p>
        </div>
      </section>
      <section>
        <Portfolio openCarouselModal={openCarouselModal} />
      </section>
      {/* <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p> */}
      {isModalOpen && (
        <CarouselModal isModalOpen={isModalOpen} onClose={closeCarouselModal}>
          <ProjectCarousel projectSelected={projectSelected} />
        </CarouselModal>
      )}
    </Layout>
  );
};

export default IndexPage;
