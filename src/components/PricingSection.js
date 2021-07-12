import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { fade } from "../animation";
import { useScroll } from "./useScroll";

function PricingSection() {
  const [element, controls] = useScroll();
  return (
    <Pricing variants={fade} animate={controls} initial="hidden" ref={element}>
      <h1>
        Discover Our <span>Pricing</span>{" "}
      </h1>
      <Project>
        <Projects>
          <h2>Basic</h2>
          <h3>$66/Month</h3>
          <h6>For small event that want to capture moments.</h6>
          <ul>
            <li>
              <h6>PHOTOS</h6>
              <p>Package of 50</p>
            </li>
            <li>
              <h6>TYPE OF CAMERA</h6>
              <p>Casual</p>
            </li>
            <li>
              <h6>RESOLUTION</h6>
              <p>12MP</p>
            </li>
            <li>
              <p>
                <i class="fas fa-check"></i> Videography
              </p>
            </li>
            <li>
              <p>
                <i class="fas fa-times"></i>Photo Optimization
              </p>
            </li>
          </ul>
          <button>Purchase</button>
        </Projects>
        <Pro>
          <h2>Pro</h2>
          <h3>$66/Month</h3>
          <h6>For small event that want to capture moments.</h6>
          <ul>
            <li>
              <h6>PHOTOS</h6>
              <p>Package of 50</p>
            </li>
            <li>
              <h6>TYPE OF CAMERA</h6>
              <p>Casual</p>
            </li>
            <li>
              <h6>RESOLUTION</h6>
              <p>12MP</p>
            </li>
            <li>
              <p>
                <i class="fas fa-check"></i> Videography
              </p>
            </li>
            <li>
              <p>
                <i class="fas fa-times"></i>Photo Optimization
              </p>
            </li>
          </ul>
          <button>Purchase</button>
        </Pro>
        <Projects>
          <h2>Enterprices</h2>
          <h3>$66/Month</h3>
          <h6>For small event that want to capture moments.</h6>
          <ul>
            <li>
              <h6>PHOTOS</h6>
              <p>Package of 50</p>
            </li>
            <li>
              <h6>TYPE OF CAMERA</h6>
              <p>Casual</p>
            </li>
            <li>
              <h6>RESOLUTION</h6>
              <p>12MP</p>
            </li>
            <li>
              <p>
                <i class="fas fa-check"></i> Videography
              </p>
            </li>
            <li>
              <p>
                <i class="fas fa-times"></i>Photo Optimization
              </p>
            </li>
          </ul>
          <button>Purchase</button>
        </Projects>
      </Project>
    </Pricing>
  );
}

const Pricing = styled(motion.div)`
  color: white;
  margin: 80px;
  h1 {
    font-size: 40px;
    text-align: center;
    margin: 50px;
  }
  @media (max-width: 1080px) {
    display: block;
    margin: 30px;
    h1 {
      font-size: 30px;
    }
  }
`;

const Project = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1080px) {
    display: block;
  }
`;

const Projects = styled.div`
  margin: 20px;
  border-radius: 30px;
  padding: 40px 30px;
  h2 {
    text-align: left;
    font-weight: bold;
    font-size: 30px;
    margin-bottom: 20px;
  }
  h3 {
    font-size: 30px;
    margin-bottom: 10px;
  }

  p {
    padding: 0;
    font-size: 16px;
  }
  h6 {
    font-size: 13px;
    color: whitesmoke;
    margin-bottom: 20px;
  }

  ul {
    list-style-type: none;
  }
  i {
    margin-right: 10px;
  }
  li {
    padding: 20px 0;
  }
  button {
    width: 100%;
  }
  transition: all 0.3s ease;

  :hover {
    transform: translateY(-20px);
  }

  background-color: #202224;
  @media (max-width: 1080px) {
    display: block;
  }
`;

const Pro = styled(Projects)`
  background: #484a49;
  transform: scale(1.1);
  @media (max-width: 1080px) {
    transform: scale(1);
  }
`;

export default PricingSection;
