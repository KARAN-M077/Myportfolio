import { useState, useEffect } from "react";
import "./navbarStyles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faCopyright , faLink } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";
import Typewriter from "typewriter-effect";
import person1 from "../component/assests/person1.jpeg";
import html5 from "../component/assests/html5.png";
import js from "../component/assests/js.png";
import css3 from "../component/assests/css3.png";
import react from "../..";
import nodejs from "./nodejs.png";
import developer from "./developer.png";
import footerimg from "./footerimg.png";
import mongodb from "./mongodb.png";
import flutter from "./flutter.png";
import vscode from "./vscode.png";
import { Link, Element } from 'react-scroll';
import data from "../data/data"
function ScrollAnimation() {
 
  {
    useEffect(() => {
      AOS.init({ duration: 2000 });
    }, []);
  }

  
  
       const [showMenu, setShowMenu] = useState(false);

const toggleMenu = () => {
  setShowMenu(!showMenu);
};

return (
  <>
  <nav data-aos="zoom-in">
    <input type="checkbox" id="check" checked={showMenu} />
    <label htmlFor="check" className="checkbtn" onClick={toggleMenu}>
      <FontAwesomeIcon icon={faBars} />
    </label>
    <label className="logo">
      Portfolio
      <sup>
            
            <a href="index.html" className="sup">
              <FontAwesomeIcon icon={faCopyright} />
            </a>
          </sup>
    </label>
    <ul id="navbar" className={showMenu ? "show" : ""}>
      <li className="active" >
        <Link to="frontpage" spy={true} smooth={true} offset={-70} duration={800} onClick={toggleMenu}>
          Home
        </Link>
      </li>
      <li>
        <Link to="about" spy={true} smooth={true} offset={-70} duration={800} onClick={toggleMenu}>
          About
        </Link>
      </li>
      <li>
        <Link to="project" spy={true} smooth={true} offset={-70} duration={800} onClick={toggleMenu}>
          Projects
        </Link>
      </li>
      <li>
        <Link to="contact" spy={true} smooth={true} offset={-70} duration={800} onClick={toggleMenu}>
          Contact
        </Link>
      </li>
    </ul>
  </nav>
     
      <div className="outer">
        <div className="outer-info" data-aos="fade-right">
          <h1 className="hi">Hi,</h1>
          <h2 className="iam">
            I'am <span>Karan M</span>
          </h2>
          <h2 className="iam">   <Typewriter
    onInit={(typewriter) => {
        function startTypewriter() {
            typewriter
              .start()
                .typeString("Software Developer")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Fullstack Developer")
                .pauseFor(1000)
                .deleteAll()         
        }
        const intervalId = setInterval(startTypewriter, 2000); 
        return () => clearInterval(intervalId);
    }}
/></h2>
          <h3 className="description">
            -My mission is to design and develop a website{" "}
          </h3>
          <h3 className="description"> that you and your audience love</h3>
        </div>
        <div className="person" data-aos="fade-left">
          <img src={person1} alt="person1" />
        </div>
        <div className="btt" data-aos="zoom-out">
        <a href="https://drive.google.com/file/d/1Oz1tS0aBKaOd4JDkU0b9rV3C1ghKD6Bu/view" >  <button className="button2">Download CV</button> </a>
        </div>
        <div className="social" data-aos="zoom-in">
          <a href="https://instagram.com/_.karan._m?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://linkedin.com/in/karan55">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/KARAN-M077">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          
        </div>
      </div>
    
      <div className="about-out" data-aos="fade-right" sectionid="about">
        <div className="about-in">
        <Element name="about"></Element>
          <h1> ABOUT</h1>

          <hr></hr>
        </div>
      </div>
      <div className="content">
        <div div className="person1" data-aos="fade-right">
          <img src={developer} alt="developer.png"></img>
        </div>
        
      <div className="aboutme-in" data-aos="fade-left">
        <h1>
        <Typewriter
    onInit={(typewriter) => {
        function startTypewriter() {
            typewriter
              .start()
                .typeString("Software Engineer")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Fullstack Developer")
                .pauseFor(1000)
                .deleteAll()         
        }
        const intervalId = setInterval(startTypewriter, 2000); 
        return () => clearInterval(intervalId);
    }}
/>
        </h1>
       
        <h3>
          Welcome!! Hi there! I'm KARAN M, a passionate and experienced web
          developer with a strong focus on creating engaging and user-friendly
          web applications. I have honed my skills in front-end and back-end
          development{" "}
        </h3>
        <h1>
          <span>Skills & Tools Used</span>
        </h1>
        <div className="framework" data-aos="fade-right">
          <img className="frameworkimage" src={js} alt="js.png" data-aos="zoom-in"></img>

          <img className="frameworkimage" src={react} alt="react.png" data-aos="zoom-in"></img>

          <img className="frameworkimage" src={html5} alt="html5.png" data-aos="zoom-in"></img>

          <img className="frameworkimage" src={css3} alt="css3.png" data-aos="zoom-in"></img>

          <img className="frameworkimage" src={nodejs} alt="nodejs.png" data-aos="zoom-in"></img>

          <img className="frameworkimage" src={mongodb} alt="mongodb.png" data-aos="zoom-in"></img>

          <img className="frameworkimage" src={flutter} alt="flutter.png" data-aos="zoom-in"></img>

          <img className="frameworkimage" src={vscode} alt="vscode.png" data-aos="zoom-in"></img>
        </div>
        
      </div>
      </div>
      
      <div className="skillset-out" >
        <div className="skillset-in">
          <h1>Projects</h1>
          <hr></hr>
        </div>
      </div>
      <Element name="project"></Element>
      <div className="project-outer" data-aos="zoom-in">
            {data.map((project, index) => (
                <div className="project1" key={index}>
                    <div className="project-img">
                        <div className="image">
                            <img src={project.image} alt={`${project.title} image`} />
                        </div>
                    </div>
                    <div className="project-name">
                        <h1>{project.title}</h1>
                        <a href={project.link}>
                            <i className="fa fa-github"><FontAwesomeIcon icon={faGithub} /></i>
                        </a>
                    </div>
                    <div className="project-content">
                        <p>{project.description}</p>
                    </div>
                </div>
            ))}
        </div>
      <div className="formouter">
      <Element name="contact"></Element>
      <div className="thankyou">
        <img src={footerimg} alt="footerimg png" className="thankyouimg"></img>
      </div>
      <div className="forminner">
       <p>"Delving into the dynamic world of full-stack development, where creativity meets functionality. Crafting visually stunning interfaces and architecting robust server-side systems – it's the art and science of the digital realm."
       <br></br>
        <span className="messagetext">"Feel free to <span>contact me</span> through the <span>social media links above</span>. I will reply to your messages as soon as possible."
        </span>
        </p>
    </div>
    </div>
    </>
  );
}
export default ScrollAnimation;
