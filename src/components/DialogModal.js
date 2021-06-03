import React, { useEffect, useRef } from "react";
import { Dialog, DialogOverlay, DialogContent } from "@reach/dialog";
import { VisuallyHidden } from "@reach/visually-hidden";
import { useSpring, animated, config, useTransition } from "react-spring";
import "../styles/dialog.css";

const DialogModal = ({ isModalOpen, setOpen, onClose, children }) => {
  const modalRef = useRef();
  const AnimatedDialogOverlay = animated(DialogOverlay);
  const AnimatedDialogContent = animated(DialogContent);

  const transitions = useTransition(isModalOpen, {
    config: { mass: 1, tension: 300, friction: 30 },
    delay: 50,
    from: { opacity: 0, y: -10 },
    enter: { opacity: 1, y: 0 },
    leave: { opacity: 0, y: -10 },
  });

  useEffect(() => {
    const listener = document.addEventListener("keyup", (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    });

    return () => document.removeEventListener("keyup", listener);
  }, [isModalOpen]);

  const closeModalHandler = (e) => {
    const el = document.querySelector("#dialog-modal");
    if (el === e.target) {
      onClose();
    } else {
      // do nothing, since the modal overlay was not clicked on
    }
  };

  return (
    <>
      {/* {transitions(({ item, key, props: styles }) => { */}
      {transitions((styles, item) => {
        return (
          item && (
            <AnimatedDialogOverlay
              id="dialog-modal"
              onClick={(e) => {
                closeModalHandler(e);
              }}
              className="fixed h-full w-full top-0 z-10"
              style={{ opacity: styles.opacity }}
            >
              <AnimatedDialogContent
                className="rounded bg-white  z-20 m-8 inset-x-4 h-4/5 top-4"
                style={{
                  transform: styles.y.to((value) => `translateY(${value}px)`),
                }}
                aria-label="Project Carousel"
              >
                <button
                  onClick={(e) => {
                    onClose();
                  }}
                  className="embla__button__close"
                >
                  <VisuallyHidden>Close</VisuallyHidden>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    viewBox="0 0 640 480"
                  >
                    <g>
                      <path d="M371.52 241.5l151.3-149.7c13.8-13.6 13.9-35.7.3-49.5-13.6-13.8-35.8-13.9-49.5-.3l-151.5 149.9-149.3-149.7c-13.7-13.7-35.8-13.8-49.5-.1-13.7 13.6-13.7 35.8-.1 49.5l149 149.5-150.2 148.7c-13.8 13.6-13.9 35.7-.3 49.5 6.9 6.9 15.9 10.4 24.9 10.4 8.9 0 17.8-3.4 24.6-10.1l150.5-148.8L473.42 443c6.8 6.9 15.8 10.3 24.8 10.3s17.9-3.4 24.7-10.2c13.7-13.7 13.7-35.8.1-49.5l-151.5-152.1z" />
                    </g>
                  </svg>
                </button>
                {children}
              </AnimatedDialogContent>
            </AnimatedDialogOverlay>
          )
        );
      })}
    </>

    /* <Dialog isOpen={isModalOpen} onDismiss={onClose}>
        <button className="close-button" onClick={onClose}>
          <VisuallyHidden>Close</VisuallyHidden>
          <span aria-hidden>×</span>
        </button>
      </Dialog> */
  );
};

export default DialogModal;
