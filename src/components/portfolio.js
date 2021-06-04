import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Link, getImage, GatsbyImage } from "gatsby-plugin-image";
import { PROJECTS_ORDERED, PROJECTS_DATA } from "./projects-data";
import "./portfolio.css";
import CarouselModal from "./CarouselModal";

const Portfolio = ({ openCarouselModal }) => {
  const data = useStaticQuery(graphql`
  query MyQuery {
    allFile(
      filter: {extension: {regex: "/png|jpg/i"}, name: {regex: "/\\d+/"}, relativeDirectory: {regex: "/^portfolio/"}}
    ) {
      edges {
        node {
          id
          relativeDirectory
          name
          extension
          relativePath
          childrenImageSharp {
            id
            gatsbyImageData
            fluid(maxWidth: 1000) {
              base64
              aspectRatio
              src
              srcSet
              sizes
            }
          }
        }
      }
    }
  }	
`);

  // console.log(data.allFile.edges);
  const projectData = data.allFile.edges?.reduce((acc, { node }) => {
    const { name: filename, extension, relativeDirectory, relativePath } = node;
    const file = `${filename}.${extension}`;
    const [baseDir, project] = relativeDirectory.split("/");
    if (project) {
      acc[project] = acc[project] ?? [];
      acc[project].push(node);
    } else {
      console.log("[WARNING] Project is not defined.");
    }
    return acc;
  }, {});

  const projects = PROJECTS_ORDERED.map((project, i) => {
    const imagesData = projectData[project].sort((a, b) => +a.name - +b.name);
    // console.log(imagesData);
    const imagesCount = imagesData.length;

    const PROJECT_DATA = PROJECTS_DATA[project];
    const firstImage = imagesData[0];
    const gatsbyImageData = firstImage?.childrenImageSharp[0].gatsbyImageData;
    if (!gatsbyImageData) console.log("No Data-------------------------------");

    return (
      <div
        key={i}
        className="transition delay-100 transform group w-80 mr-4 mb-4 border border-gray-200 rounded overflow-hidden shadow-lg relative hover:-translate-y-1 hover:border-blue-300 flex"
      >
        <a
          href="#"
          onClick={(e) => {
            openCarouselModal(e, PROJECT_DATA, imagesData);
          }}
          alt="Display Project Image Carousel"
          className=""
        >
          <div className="rounded overflow-hidden">
            <GatsbyImage
              className="gatsby-image h-36 w-full object-cover"
              image={gatsbyImageData}
              alt="image"
            />
          </div>
          <article className="p-4">
            <div className="project-title text-gray-700 font-bold pb-4">
              {PROJECT_DATA.name}
            </div>
            <p className="pb-4">{PROJECT_DATA.description}</p>
            <div className="flex flex-wrap">
              {PROJECT_DATA.technologiesUsed.split(",").map((tech, i) => {
                return (
                  <div
                    key={i}
                    className="text-gray-700 font-sans text-sm font-bold mr-1 mt-1 px-2 py-1 rounded-md bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200"
                  >
                    {tech.trim()}
                  </div>
                );
              })}
            </div>
          </article>
        </a>
      </div>
    );
  });

  return <div className="flex flex-wrap justify-around">{projects}</div>;
};

export default Portfolio;
