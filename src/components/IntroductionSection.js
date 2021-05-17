import React from "react";
import home1 from "../img/vijat1.jpeg";
import { motion } from "framer-motion";
import { About, Description, Image, Hide } from "../style";
import { titleAnim, fade, photoAnim } from "../animation";
import Wave from "./Wave";
import Pdf from "../Resume.pdf";

function IntroductionSection() {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>
              If you can <span>think</span> it,
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              we can <span> develop </span>
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>it.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Below you'll find a section which describes some of the projects i
          worked on, that showcases the type of skills I work with.
        </motion.p>
        <a href={Pdf} rel="noreferrer" target="_blank">
          <motion.button variants={fade}>View My Resume</motion.button>
        </a>
      </Description>
      <Image>
        <motion.img variants={photoAnim} src={home1} alt="" />
      </Image>
      <Wave />
    </About>
  );
}

export default IntroductionSection;
