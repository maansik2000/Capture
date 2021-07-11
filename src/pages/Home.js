import React from "react";
import FaqSection from "../components/FaqSection";
import HomeSection from "../components/HomeSection";
import ServiceSection from "../components/ServiceSection";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import ScrollTop from "../components/ScrollTop";
import VideoSec from "../components/VideoSec";
import SkillSection from "../components/SkillSection";
import ProjectSection from "../components/ProjectSection";
import PricingSection from "../components/PricingSection";

function Home() {
  return (
    <motion.div
      variants={pageAnimation}
      exit="exit"
      initial="hidden"
      animate="show"
    >
      <HomeSection />
      <ServiceSection />
      <VideoSec />
      <SkillSection />
      <ProjectSection />
      <PricingSection />
      <FaqSection />

      <ScrollTop />
    </motion.div>
  );
}

export default Home;
