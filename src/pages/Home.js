import React from "react";
import IntroductionSection from "../components/IntroductionSection";
import ProfessionalSection from "../components/ProfessionalSection";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import ScrollTop from "../components/ScrollTop";

function Home() {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <IntroductionSection />      
      <ProfessionalSection />
      <ScrollTop />
    </motion.div>
  );
}

export default Home;
