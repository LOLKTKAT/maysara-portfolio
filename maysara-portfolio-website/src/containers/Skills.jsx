import React from "react";
import style from "../styles";
import skillsIcon from "../assets/icons/skills.svg";
import { icons } from "../assets/icons/icons";
import SkillsIcon from "../components/SkillsIcon";

const Skills = () => {
  return (
    // <article className="container">
    <article className="skills">
      <div className="skills-left-section">
        <div className="x">
          <img src={skillsIcon} className="skills__icon" />
          <div>
            <h1>skills</h1>
            <h4>These are technologies that I use to build websites</h4>
          </div>
          <section>
            <p>Programming languages</p>
            <p>Tools</p>
            <p>Design tools</p>
          </section>
        </div>
      </div>
      <div className="skills-right-section">
        <section>
          <h3 className="skills-right-section-heading">
            programming languages
          </h3>
        </section>
        <section className="skills-right-icon-section">
          {icons[0].programmingLanguage.map((icon, i) => {
            return <SkillsIcon icon={icon} index={i} />;
          })}
        </section>

        <section>
          <h3 className="skills-right-section-heading">tools</h3>
        </section>
        <section className="skills-right-icon-section">
          {icons[0].tools.map((icon, i) => {
            return <SkillsIcon icon={icon} index={i} />;
          })}
        </section>

        <section>
          <h3 className="skills-right-section-heading">design tools</h3>
        </section>
        <section className="skills-right-icon-section">
          {icons[0].designTools.map((icon, i) => {
            return <SkillsIcon icon={icon} index={i} />;
          })}
        </section>
      </div>

      <style>
        {`.skills {
              display: flex;
              margin: 0px auto;
              // padding-top: 64px; 
              align-items: center;
              background-color: ${style[1].backgroundColor};
              color: black;
            }
            .container {
              width: 100%;
              background-color: white;
              display: flex;
            }
            .skills-left-section {
              height: 100vh;
              width: 50vw;
              background-color: ${style[0].backgroundColor};
              border-right: 3px solid black; 
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: end;
              gap: 1rem;
              padding-right: 3.4vw;
            }
            .skills-right-section {
              padding: 0 0 0 3vw;
              width: 50vw;
              display: flex;
              flex-direction: column;
              gap: 10px;
            }
            .skills-right-icon-section {
              display: flex;
              gap: 17px;
              flex-wrap: wrap;  
            }
            .x {
              display: flex;
              flex-direction: column;
            }
            .x .skills__icon  {
              align-items: center;
            }
            .skills__icon {
              height: 5rem;
              width: 5rem;
              aspect-ratio: 1;
            }
            .skills-right-section h4  {
              color: black;
            }
            .skills-right-section p {
              color: black;
              text-transform: capitalize;
            }
            .skills-right-section-icons {
              display: flex;
              flex-direction: column;
              max-width:3.5rem;
              text-align: center;
              gap: 2.5px;
            }
            .icon-container {
                background-color: ${style[0].green};
                height: 3rem;
                width: 3rem;
                border-radius: 50px;
                border: 1px solid black;
                display: flex;
                align-items: center;
                justify-content: center;
                box-shadow: 3px 3px 0px 0px rgba(0,0,0,1);
                -webkit-box-shadow: 3px 3px 0px 0px rgba(0,0,0,1);
                -moz-box-shadow: 3px 3px 0px 0px rgba(0,0,0,1);
              }    
              .skills__icon {
                margin: 0 auto;
              }
              .skills__programming-icon {
                height: 60%;
                filter: grayscale(100%);
              }
              @media only screen and (max-width: 800px) {
                .skills {
                  flex-direction: column;
                }
                .skills-left-section {
                  height: 50vh;
                  width: 100%;
                  border: none;
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  align-items: center;
                  padding: 0 0 48px 0;
                } 
                .skills-right-section {
                  margin-top: 32px;
                  width: 100%;
                  height: 100vh;
                  gap: 24px;
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  align-items: center;
                }
              }
            }`}
      </style>
      {/* </article> */}
    </article>
  );
};

export default Skills;
