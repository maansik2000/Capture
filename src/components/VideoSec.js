import React from "react";

import camera from "../img/camera.jpg";
import { About, Description, Image } from "../styled";
import styled from "styled-components";
import { useScroll } from "./useScroll";
import { scrollReveal } from "../animation";

function VideoSec() {
  const [element, controls] = useScroll();
  return (
    <Services
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <Description>
        <h2 className="title">
          <span>Capture</span> is A Creative Direction, Photography Agency
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          eveniet aperiam excepturi vitae suscipit alias! Repellendus, rerum
          quis quia accusamus et ab laudantium eum temporibus asperiores
        </p>
        <a href="/work">
          <button>Explore</button>
        </a>
      </Description>
      <Image>
        <img src={camera} alt="home-image2" />
      </Image>
    </Services>
  );
}

const Services = styled(About)`
  h2 {
    padding-bottom: 3rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
  @media (max-width: 1080px) {
    display: block;
    h2 {
      font-size: 35px;
    }
    p {
      text-align: center;
      padding: 0;
      width: 100%;
    }
    margin: 20px;
  }
`;

export default VideoSec;
