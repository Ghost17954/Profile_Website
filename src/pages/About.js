import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { pageAnimation, slider, sliderContainer } from "../animation";
import abtImg1 from "../img/About1.jpeg";
import abtImg2 from "../img/About2.jpeg";
import abtImg3 from "../img/About3.jpeg";
//import abtImg4 from "../img/About4.jpeg";
import ScrollTop from "./../components/ScrollTop";

function About() {
  // eslint-disable-next-line no-unused-vars
  return (
    <Details
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>
      <HeadLine>
        <h2>A few fun facts about myself</h2>
        <img src={abtImg1} alt="movie" />
        <img src={abtImg2} alt="movie" />
        <img src={abtImg3} alt="movie" />
      </HeadLine>
      <Awards>
        <Award
          title="Myself"
          description="I work out of Karnataka-India, I love pour over coffee, and to learn new things that fascinates me "
        />
        <Award
          title="My Passion and Personality"
          description="I play video games like it's my life,I'm a huge fan of Cricket. I knew what I wanted to do at the age of 16, I love to take a bike ride around mountain and hill stations to capture its beauty and my favorite food is all vegan."
        />
      </Awards>
      {/* <ImageDisplay>
            <img src={abtImg4} alt="secondaryImg" />
          </ImageDisplay> */}
      <ScrollTop />
    </Details>
  );
}

const Details = styled(motion.div)`
  color: white;
`;
const HeadLine = styled.div`
  display: flex;
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    flex: 1;
    width: 35%;
    height: 70vh;
    object-fit: cover;
  }
  @media (max-width: 1300px) {
    h2 {
      font-size:2rem;
    }
  }
`;

const Awards = styled.div`
  min-height: 60vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 1300px) {
    display: block;
    margin: 2rem 2rem;
  }
`;

const AwardStyle = styled.div`
  padding: 5rem;
  h3 {
    font-size: 1.8rem;
  }
  .line {
    width: 100%;
    background: #23d997;
    height: 0.5rem;
    margin: 1rem 0rem;
  }
  p {
    padding: 2rem 0rem;
  }
`;

// const ImageDisplay = styled.div`
//   min-height: 50vh;
//   img {
//     width: 100%;
//     height: 100vh;
//     object-fit: cover;
//   }
// `;

const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;

const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;

const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;

const Frame4 = styled(Frame1)`
  background: #8effa0;
`;

const Award = ({ title, description }) => {
  return (
    <AwardStyle>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </AwardStyle>
  );
};
export default About;
