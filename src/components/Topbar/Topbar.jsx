import "./Topbar.scss";
// import { Person, Mail } from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
   return (
      <div className={"topbar " + (menuOpen && "active")}>
         <div className="wrapper">
            <div className="left">
               <a href="#intro" className="logo">
                  abdul.
               </a>
               <div className="itemContainer">
                  {/* <Person className="icon" /> */}
                  <span>+49 178 6725221</span>
               </div>
               <div className="itemContainer">
                  {/* <Mail className="icon" />  */}
                  <span>Abdelrahman.Saleh@rub.de</span>
               </div>
            </div>
            <div className="right">
               <div className="resume">
                  <a
                     href="https://drive.google.com/file/d/17c6aJU5xPHw23kSclFgzZo5gK480vLhh/view?usp=sharing"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     Download Resume
                  </a>
               </div>
               <div
                  className="hamburger"
                  onClick={() => setMenuOpen(!menuOpen)}
               >
                  <span className="line1"></span>
                  <span className="line2"></span>
                  <span className="line3"></span>
               </div>
            </div>
         </div>
      </div>
   );
}
