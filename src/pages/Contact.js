import React from "react";
import { motion } from "framer-motion";
import { pageAnimation, titleAnim } from "../animation";
import styled from "styled-components";
import ScrollTop from "../components/ScrollTop";

function Contact() {
  return (
    <ContactStyle
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "#fff" }}
    >
      <Title>
        <Hide>
          <motion.h1 variants={titleAnim}>Reach Me @</motion.h1>
        </Hide>
      </Title>
      <div>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <h4>
              Mail me at vijaysurya0007@gmail.com or vijaysuryas326@gmail.com
            </h4>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <h4>
              <a
                href="https://www.linkedin.com/in/vijay-surya-s-051666190/"
                rel="noopener noreferrer"
                target="_blank"
              >
                LinkedIn-1
              </a>
            </h4>
          </Social>
        </Hide>
        {/* <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <h4>
              <a
                href="https://www.linkedin.com/in/vijay-surya-s-137367210/"
                rel="noopener noreferrer"
                target="_blank"
              >
                LinkedIn-2
              </a>
            </h4>
          </Social>
        </Hide> */}
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <h4>
              <a
                href="https://www.instagram.com/vij_a_y_/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Instagram
              </a>
            </h4>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <h4>
              <a
                href="https://www.facebook.com/Ded3ec/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Facebook
              </a>
            </h4>
          </Social>
        </Hide>
      </div>
      <ScrollTop />
    </ContactStyle>
  );
}

const ContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
  @media (max-width: 1500px) {
    padding: 2rem;
    font-size: 1rem;
  }
`;

const Title = styled.div`
  margin-bottom: 4rem;
  color: black;
  @media (max-width: 1300px) {
    margin-top: 5rem;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Circle = styled.div`
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  background: #353535;
`;

const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h4 {
    margin: 2rem;
    font-weight: lighter;
    a {
      //text-decoration: none;
      color: inherit;
      font: inherit;
    }
  }
`;

export default Contact;
