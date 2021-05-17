import React from "react";
import styled from "styled-components";
import { About } from "../style";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";
import { scrollReveal } from "../animation";
import { useScroll } from "./useScroll";
import { motion } from "framer-motion";

function ProfessionalSecion() {
  const [element, controls] = useScroll();
  return (
    <Faq
      variants={scrollReveal}
      ref={element}
      animate={controls}
      initial="hidden"
    >
      <h2>
        About <span> Me </span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="Skills and Technology">
          <div className="answer">
            <Social>
              <Circle />
              <span>Skills and FrameWorks: </span>
              <p>
                C#,ADO.Net,ASP.Net MVC.Entity FrameWork,Entity FrameWork
                Core,Jquery,JavaScript,ReactJs,Redux,Web API,SQL,HTML,CSS
              </p>
            </Social>
            <Social>
              <Circle />
              <span>Tools: </span>
              <p>
                Visual Studio,Visual Code,SSMS,PostMan,Pencil,Mysql,Jira,Office
              </p>
            </Social>
            <Social>
              <Circle />
              <span>Version control: </span>
              <p>Git,TFS</p>
            </Social>
          </div>
        </Toggle>
        <Toggle title="Work Experience">
          <div className="answer">
            <Social>
              <Circle />
              <span>Infosys: </span>
              <p>2018-Present</p>
            </Social>
            <Social>
              <Circle />
              <span>Experience: </span>
              <p>2+ Years</p>
            </Social>
            <Social>
              <Circle />
              <span>Projects: </span>
              <p>
                Completed two .Net project which shaped my skills of C#,Entity
                FrameWork,EntityFramework core,Web Services,JavaScript,ASP.Net
                MVC,SQL.
              </p>
            </Social>
            <Social>
              <Circle />
              <span>Current Project : </span>
              <p>
                Currently working on a project as a Frontend Developer using
                Reactjs and Redux.
              </p>
            </Social>
          </div>
        </Toggle>
        <Toggle title="Education and Certification">
          <div className="answer">
            <Social>
              <Circle />
              <span>Bachelor of Engineering:</span>
              <p>Computer Science and Technology - 2018.</p>
            </Social>
            <Social>
              <Circle />
              <span>College:</span>
              <p>Maharaja Institute of Technology,Mysore.</p>
            </Social>
            <Social>
              <Circle />
              <span>Certification :</span>
              <p>
                Microsoft AZ-900:Azure Fundamentals,ReactJs Professional(Infosys
                Internal),Agile(Infosys Internal)
              </p>
            </Social>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
}

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 0rem 0rem;
    }
  }
  @media (max-width: 1300px) {
    h2 {
      padding-bottom: 0.8rem;
      font-size: 2rem;
    }
    .question {
      padding: 1rem 0rem;
    }
    .answer {
      padding: 1rem 0rem;
      p {
        padding: 0rem;
        font-size: 0.8rem;
      }
    }
  }
`;

const Circle = styled.div`
  border-radius: 50%;
  width: 1rem;
  height: 1rem;
  background: #cccccc;
  @media (max-width: 1300px) {
    width: 0.5rem;
    height: 0.5rem;
  }
`;

const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  p {
    margin: 1rem 0.3rem 1rem;
  }
  span {
    font-weight: lighter;
    margin-left: 1rem;
  }
  .points {
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 1300px) {
    p {
      margin: 0rem;
      font-size: 0.8rem;
    }
    span {
      font-size: 0.8rem;
      margin: 0.5rem;
    }
  }
`;
export default ProfessionalSecion;
