import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { fade, lineAnim, scrollReveal } from "../animation";
import camera from "../img/camera.jpg";
import child from "../img/child.jpg";
import falls2 from "../img/falls2.jpg";
import fashion2 from "../img/fashion2.jpg";
import men from "../img/men.jpg";
import mountainskies from "../img/mountainskies.jpg";
import ocean from "../img/ocean.jpg";
import oldWomen from "../img/old-women.jpg";
import rocks from "../img/rocks.jpg";
import sailboat from "../img/sailboat.jpg";
import underwater from "../img/underwater.jpg";
import wedding from "../img/wedding.jpg";
import { useScroll } from "./useScroll";

function Showcase() {
  const [element, controls] = useScroll();
  return (
    <ShowWork variants={fade} animate={controls} initial="hidden" ref={element}>
      <h1>
        Discover Our <span>Work</span>{" "}
      </h1>
      <Row>
        <Column>
          <img src={camera} style={{ width: "100%" }} />
          <img src={child} style={{ width: "100%" }} />
          <img src={falls2} style={{ width: "100%" }} />
          <img src={fashion2} style={{ width: "100%" }} />
          <img src={men} style={{ width: "100%" }} />
          <img src={mountainskies} style={{ width: "100%" }} />
        </Column>
        <Column>
          <img src={ocean} style={{ width: "100%" }} />
          <img src={oldWomen} style={{ width: "100%" }} />
          <img src={rocks} style={{ width: "100%" }} />
          <img src={sailboat} style={{ width: "100%" }} />
          <img src={underwater} style={{ width: "100%" }} />
          <img src={wedding} style={{ width: "100%" }} />
        </Column>
      </Row>
    </ShowWork>
  );
}

const Row = styled.div`
  display: -ms-flexbox; /* IE 10 */
  display: flex;
  -ms-flex-wrap: wrap; /* IE 10 */
  flex-wrap: wrap;
  padding: 0 4px;
`;
const Column = styled.div`
  -ms-flex: 50%; /* IE 10 */
  flex: 50%;
  padding: 0 4px;
  img {
    margin-top: 8px;
    vertical-align: middle;
  }
`;

const ShowWork = styled(motion.div)`
  text-align: center;
  color: white;

  padding: 5rem 8rem;
  margin: 50px;
  h1 {
    font-size: 45px;
    margin: 50px;
    .line {
      height: 0.5rem;
      background: #23d997;
      margin-bottom: 3rem;
    }
  }
  @media (max-width: 1080px) {
    h1 {
      font-size: 30px;
    }
    padding: 0;
    margin: 30px;
  }
`;

export default Showcase;
