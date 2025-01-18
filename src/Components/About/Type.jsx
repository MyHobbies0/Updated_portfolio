import React from "react";

import Typewriter from "typewriter-effect";

export const Type = () => {
  return (
    <div style={{ fontSize: "18px", textAlign:'center' }}>
      <Typewriter
        options={{
          strings: [
            "A Passionate Full Stack Web Developer",
            "Crafting Experiences from Jharkhand",
            "Expert in Frontend Development",
            "Specialized in MERN Stack Technologies",
            "Turning Ideas into Reality with Code",
            "Innovating as a Web Developer"
          ],
          
          autoStart: true,
          loop: true,
          deleteSpeed: 60,
          
        }}
      />
    </div>
  );
};
