import React from "react";
import { Header } from "./Components/Header/Header";
import "./App.css";
import { ThemeContext } from "./Context/theme";
import { About } from "./Components/About/About";
import Aos from "aos";
import "aos/dist/aos.css";
import { Github } from "./Components/About/Github";
import { Projects } from "./Components/Projects/Projects";
import { Contact } from "./Components/Contact/Contact";
import { Footer } from "./Components/Footer/Footer";
import { ScrollToTop } from "./Components/ScrollToTop/ScrollToTop";
import ChatBotForm from "./Components/Contact/ChatBotForm";
import ParticleBackground from "./Components/particle/Particle";
export default function App() {
  const [{ themename }] = React.useContext(ThemeContext);
  React.useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div id="top" className={`${themename} app`}>
      <section id="#home">
        <Header />
      </section>
     
      <main>
      
     
       <section id='#about'>
       <About />
       </section>
        <Github />
        <section id="#projects">
          <Projects />
        </section>
        <section id="#contact">
        <Contact />
        <ChatBotForm/>
        </section>
      
      </main>
      <Footer />
      <ScrollToTop />
     
    </div>
  );
}
