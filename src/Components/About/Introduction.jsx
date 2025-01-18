import React from "react";
import "./Introduction.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";


export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
            <div class="image-container">
                  <img class="image" src="./profile.png" alt="Your image description"/>   
            </div>
            </div>
            <div className="introduction_datacontainer">
              <h4>
                Hi Everyone, I am{" "}
                <span className="different">Irshad Alam </span> A
                experienced Full Stack Developer with 2 years of expertise in the MERN stack (MongoDB, Express.js, React.js, Node.js) and additional proficiency in Next.js and Java. This includes 1 year of full-time professional experience and 1 year of intensive, hands-on training at Masai School Bootcamp. Skilled in building scalable, high-performance web applications and delivering efficient solutions for complex problems.

              </h4>
              <h4>
                Some of my interests apart form Coding :
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Playing Football{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Travelling{" "}
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
