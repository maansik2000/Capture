import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { useScroll } from "./useScroll";
import { scrollReveal } from "../animation";

function SkillSection() {
  const [element, controls] = useScroll();
  return (
    <AwardsStyle
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <h1>
        Discover Our <span>Skills</span>
      </h1>
      <div>
        <Card>
          <h4>Development</h4>
          <div className="line1"></div>
        </Card>
        <Card>
          <h4>Videography</h4>
          <div className="line2"></div>
        </Card>
        <Card>
          <h4>Photography</h4>
          <div className="line3"></div>
        </Card>
      </div>
    </AwardsStyle>
  );
}

const AwardsStyle = styled(motion.div)`
  color: white;
  background-color: #202224;
  margin: 120px;
  padding: 2rem;
  .line1 {
    width: 90%;
    background: #23d997;
    height: 0.5rem;
    margin: 1rem 0rem;
  }
  .line2 {
    width: 80%;
    background: #23d997;
    height: 0.5rem;
    margin: 1rem 0rem;
  }
  .line3 {
    width: 95%;
    background: #23d997;
    height: 0.5rem;
    margin: 1rem 0rem;
  }
  @media (max-width: 1080px) {
    display: block;

    margin: 30px;
  }
`;

const Card = styled.div`
  padding: 20px;
`;
export default SkillSection;
