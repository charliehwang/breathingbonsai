import React from "react";
import { createPortal } from "react-dom";
import ProjectCarousel from "./ProjectCarousel";

const SLIDE_COUNT = 5;
const slides = Array.from(Array(SLIDE_COUNT).keys());

const CarouselModal = ({ setOpen, onClose, projectSelected }) => {
  return createPortal(
    <>
      <div
        id="modal-shadow"
        onClick={() => {
          onClose();
        }}
        className="fixed h-full w-full top-0 bg-black opacity-70 z-10"
      />
      <div
        id="modal"
        className="rounded bg-white fixed z-10 inset-x-4 h-4/5 top-4"
      >
        <ProjectCarousel projectSelected={projectSelected} />
      </div>
    </>,
    document.getElementById("app-modal")
  );
};

export default CarouselModal;
