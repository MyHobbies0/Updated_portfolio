import React from "react";
import "./Techstacks.css";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiRedux,
  SiHtml5,
  SiChakraui,
  SiExpress,
  SiNpm,
  SiNetlify,
  SiJava,
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript
} from "react-icons/si";
import { DiCss3, DiMongodb } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { BsBootstrap } from "react-icons/bs";

export const Techstacks = () => {
  return (
    <>
      <div className="section main" data-aos="fade-right">
        <h2 className="section__title different">Skills</h2>
        <div className="techsection">
          <div>
            <SiJava size={30} />
            <h5>Java</h5>
            
          </div>
          <div>
            <SiJavascript size={30} />
            <h5>Javascript</h5>
          </div>
          <div>
            <SiTypescript size={30} />
            <h5>Typescript</h5>
          </div>
          <div>
            <SiHtml5 size={30} />
            <h5>HTML&CSS</h5>
          </div>
          <div>
            <FaReact size={30} />
            <h5>React.js</h5>
          </div>
          <div>
            <SiRedux size={30} />
            <h5>Redux</h5>
          </div>
          <div>
            <SiNextdotjs size={30} />
            <h5>Next.js</h5>
          </div>
          <div>
            <FaNodeJs size={30} />
            <h5>Nodejs</h5>
          </div>
          <div>
            <SiExpress size={30} />
            <h5>Express</h5>
          </div>
          <div>
            <DiMongodb size={30} />
            <h5>MongoDb</h5>
          </div>
          <div>
            <SiNpm size={30}/>
            <h5>NPM</h5>
          </div>
          <div>
            <SiNetlify size={30} />
            <h5>Netlify</h5>
          </div>
          <div>
            <VscGithub size={30} />
            <h5>Github</h5>
          </div>
          <div>
            <SiTailwindcss size={30} />
            <h5>Tailwind</h5>
          </div>
        </div>
      </div>
     </>
  );
};
