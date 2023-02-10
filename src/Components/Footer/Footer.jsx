import React from "react";
import "./Footer.css";
import { ThemeContext } from "../../Context/theme";

export const Footer = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <div className={"section " + themename}>
        <a
          href="https://github.com/Md-Irshad-Alam"
          rel="noreferrer"
          target="_blank"
        >
          <h3 className="footer">Made with <span className="_hart_sym"> ❤ </span> By Irshad Alam</h3>
        </a>
      </div>
    </>
  );
};
