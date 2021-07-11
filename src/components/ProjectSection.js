import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { useScroll } from "./useScroll";
import { scrollReveal } from "../animation";

function ProjectSection() {
  const [element, controls] = useScroll();
  return (
    <Project
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <Projects>
        <p>1500+</p>
        <h3>Projects</h3>
      </Projects>
      <Projects>
        <p>300+</p>
        <h3>Clients</h3>
      </Projects>
      <Projects>
        <p>11+</p>
        <h3>Partners</h3>
      </Projects>
      <Projects>
        <p>150+</p>
        <h3>Meetings</h3>
      </Projects>
    </Project>
  );
}

const Project = styled(motion.div)`
  background-color: #202224;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 120px;
  color: white;
  padding-top: 50px;
  padding-bottom: 80px;
  @media (max-width: 800px) {
    display: block;
    margin: 30px;
  }
`;

const Projects = styled.div`
  text-align: center;
  padding: 20px;
  flex: 1;
  p {
    font-size: 40px;
  }
  h3 {
    font-size: 20px;
  }
`;

export default ProjectSection;
