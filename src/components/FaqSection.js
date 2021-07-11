import React from "react";
import styled from "styled-components";
import { About } from "../styled";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";
import { useScroll } from "./useScroll";
import { fade } from "../animation";

function FaqSection() {
  const [element, controls] = useScroll();
  return (
    <div>
      <FAQ variants={fade} ref={element} animate={controls} initial="hidden">
        <h2>
          Any Questions <span>FAQ</span>
        </h2>
        <AnimateSharedLayout>
          <Toggle title="How do I start?">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                repudiandae corrupti adipisci eum, maiores rem.
              </p>
            </div>
          </Toggle>
          <Toggle title="What is the pricing?">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                repudiandae corrupti adipisci eum, maiores rem.
              </p>
            </div>
          </Toggle>
          <Toggle title="Daily Schedule?">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                repudiandae corrupti adipisci eum, maiores rem.
              </p>
            </div>
          </Toggle>
          <Toggle title="What are the payments methods?">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                repudiandae corrupti adipisci eum, maiores rem.
              </p>
            </div>
          </Toggle>
          <Toggle title="What product do you offer?">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                repudiandae corrupti adipisci eum, maiores rem.
              </p>
            </div>
          </Toggle>
        </AnimateSharedLayout>
      </FAQ>
    </div>
  );
}

const FAQ = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  h4 {
    font-weight: bold;
    font-size: 2rem;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
