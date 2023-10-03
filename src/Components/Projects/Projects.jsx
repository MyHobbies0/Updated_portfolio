import React from "react";
import "./Projects.css";
import { FaReact} from "react-icons/fa";
import { IoServer } from "react-icons/io5";
import {
  SiHtml5,
  SiCss3,
  SiHeroku,
  SiChakraui,
  SiExpress,
  SiMongodb,
  SiNodedotjs,
  SiJavascript,
  SiTailwindcss,
  SiReact,
  SiRedux
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
import { BsBootstrap } from "react-icons/bs";
export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different" data-aos="fade-right">
          Projects
        </h2>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="./disc.png"
                  alt="DiscoveryPlus"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Discovery Plus</h2>
              <p>
            
              Passwords hashed for 75% reduced guessing risk
              Added security to prevent unauthorized access.
              <br />
              Manual and voice search for efficient user experience.
              Voice search reduces 30% of the user’s time.
             <br />
              Seamless in-platform video playback
             
              </p>
              <div>
                <FaReact />
                <SiCss3/>
                <SiExpress/>
                <SiMongodb/>
                <SiChakraui/>
                <SiTailwindcss/>
              </div>
              <div>
                <a
                  href="https://discovery-plus-clone1.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/Md-Irshad-Alam/DiscoveryPlus-Clone1"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="./alibaba.png"
                  alt="Alibaba"
                />
              </div>
            </div>
            
            <div className="project_information" data-aos="fade-right">
              <h2>Alibaba Clone</h2>
              <p>
    
              Secure Login with user credentials
              <br />
              Users can search for products by typing queries
              <br />
              Users can add multiple products to the cart
              <br />
              Sort the Product based on category and price
              </p>
              <div>
                <SiJavascript />
                <SiHtml5 />
                <BsBootstrap/>
                <DiCss3/>
              </div>
              <div>
                <a
                  href="https://alibaba-clone.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/Md-Irshad-Alam/Alibaba_Clone"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="./unplash.png"
                  alt="unplash"
                />
              </div>
            </div>
            
            <div className="project_information" data-aos="fade-right">
              <h2>Unsplash</h2>
              <p>
              The features of this project include the ability for users to scroll infinitely with a smooth scrolling feature.
               Additionally, users can search for images by entering the name of the object
              </p>
              <div>
                <SiJavascript />
                <SiReact />
                <SiRedux />
                <DiCss3/>
              </div>
              <div>
                <a
                  href="https://unplash.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                {/* <a
                  href="https://github.com/Md-Irshad-Alam/Alibaba_Clone"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a> */}
              </div>
            </div>
          </div>
        </div>
{/* project -pharmeasy */}
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="./pharmEasy.png"
                  alt="pharmeasy"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Amazon Clone</h2>
              <p>
              PharmEasy is an Indian e-pharmacy company that sells medicines, diagnostics and telehealth .
              In this project you can Login , register, Add to card product , Buy product, Filter the product buy price or location etc.... 
              </p>
              <div>
                <IoLogoJavascript />
                <SiHtml5 />
                <SiCss3 />
                <IoServer />
                <SiHeroku />
              </div>
              <div>
                <a
                  href="https://bespoke-jalebi-440ea8.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/Md-Irshad-Alam/pharmEasy_clone"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
{/* Youtube */}
        {/* <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="./Youtube.png"
                  alt="ESPN"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>YouTube</h2>
              <p>
              YouTube is a global online video sharing and social media platform , In this project you can watch the the real video , 
              search video, short the video by length and  Popular video on Youtube etc...
    
              </p>
              <div>
                <SiHtml5 />
                <SiCss3 />
                <IoLogoJavascript />
              </div>
              <div>
                <a
                  href="https://bespoke-jalebi-440ea8.netlify.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/Md-Irshad-Alam/YouTube_Clone"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};
