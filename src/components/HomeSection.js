import React from "react";
import home1 from "../img/home1.png";
import { About, Image, Hide, Description } from "../styled";
import { motion } from "framer-motion";
import Waves from "./Waves";
import { titleAnim, fade, photuAnimation } from "../animation";

function HomeSection() {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>We work to make </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              Your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>true.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills.{" "}
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </Description>
      <Image>
        <motion.img
          variants={photuAnimation}
          src={home1}
          alt="guy with a camera"
          animate="show"
          initial="hidden"
        />
      </Image>
      <Waves />
    </About>
  );
}

//styling

export default HomeSection;
