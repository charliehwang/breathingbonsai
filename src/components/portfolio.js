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

  const projectData = groupProjects(data);
  const projectCards = createProjectCards(
    PROJECTS_ORDERED,
    projectData,
    openCarouselModal
  );

  return <div className="flex flex-wrap justify-around">{projectCards}</div>;
};

/**
 * Groups all image files of a project into a hash sorted by project
 *
 * @param {data} data List of image file data from the graphQL query with project name
 * @return {Hash} in the shape of { 'projectA': imageFileData, 'projectB': imageFileData, ... }
 */
const groupProjects = (data) => {
  return data.allFile.edges?.reduce((acc, { node }) => {
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
};

/**
 * Create the project card elements
 *
 * @param {Array} orderedProjects Array of project names listed in the desired order. Usually obtained from project-data.js
 * @return {Array[React.Elements]} Array of project card elements
 */
const createProjectCards = (
  orderedProjects,
  projectData,
  openCarouselModal
) => {
  return orderedProjects.map((project, i) => {
    const imagesData = projectData[project].sort((a, b) => +a.name - +b.name);
    // console.log(imagesData);
    const imagesCount = imagesData.length;

    const PROJECT_DATA = PROJECTS_DATA[project];
    const firstImage = imagesData[0];
    const gatsbyImageData = firstImage?.childrenImageSharp[0].gatsbyImageData;
    if (!gatsbyImageData) console.log("No Data-------------------------------");

    return (
      <a
        href="#"
        onClick={(e) => {
          openCarouselModal(e, PROJECT_DATA, imagesData);
        }}
        // aria-label={`Open ${PROJECT_DATA.name} image carousel modal window`}
        // aria-description={`Open carousel modal window for, ${PROJECT_DATA.name} ${PROJECT_DATA.description}`}
        key={i}
        className="project-cards transition delay-100 transform group w-80 mr-4 mb-4 border border-gray-200 rounded overflow-hidden shadow-lg relative  hover:border-blue-300 flex flex-col"
      >
        <div className="rounded overflow-hidden">
          <GatsbyImage
            className="gatsby-image h-36 w-full object-cover"
            image={gatsbyImageData}
            alt={`Heading image ${PROJECT_DATA.name}`}
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
    );
  });
};

export default Portfolio;
