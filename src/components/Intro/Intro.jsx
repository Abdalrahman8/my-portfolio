import "./Intro.scss";
import { useEffect, useRef } from "react";
import { init } from "ityped";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
   faBehance,
   faGithub,
   faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function Intro() {
   const textRef = useRef();

   useEffect(() => {
      init(textRef.current, {
         showCursor: false,
         backDelay: 1500,
         backSpeed: 60,
         strings: [
            "Frontend Developer",
            "Designer",
            "Computer Science Student",
         ],
      });
   }, []);

   return (
      <div className="intro" id="intro">
         <div className="left">
            <div className="imagecontainer">
               <img src="assets/man.png" alt="" />
            </div>
         </div>
         <div className="right">
            <div className="wrapper">
               <h2>Hi There, I'm</h2>
               <h1>Abdul</h1>
               <h3>
                  <span ref={textRef}></span>
               </h3>

               <div className="social">
                  <div class="button">
                     <div class="icon">
                        <a
                           className="iconLink"
                           href="https://github.com/Abdalrahman8"
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                           <FontAwesomeIcon className="i fab" icon={faGithub} />
                        </a>
                     </div>
                  </div>

                  <div class="button">
                     <div class="icon">
                        <a
                           className="iconLink"
                           href="https://www.linkedin.com/in/abdalrahmansaleh/"
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                           <FontAwesomeIcon
                              className="i fab"
                              icon={faLinkedin}
                           />
                        </a>
                     </div>
                  </div>

                  <div class="button">
                     <div class="icon">
                        <a
                           className="iconLink"
                           href="https://www.behance.net/abdalrahman8"
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                           <FontAwesomeIcon
                              className="i fab"
                              icon={faBehance}
                           />
                        </a>
                     </div>
                  </div>
               </div>
            </div>
            <a href="#portfolio" className="clickBottom">
               <img src="assets/down.png" alt="" />
            </a>
         </div>
      </div>
   );
}
