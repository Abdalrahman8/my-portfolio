import { useState } from "react";
import "./Contact.scss";

export default function Contact() {
   const [message, setMessage] = useState(false);
   const handelSubmit = (e) => {
      e.preventDefault();
      setMessage(true);
   };
   return (
      <div className="contact" id="contact">
         <div className="left">
            <img src="assets/shake.svg" alt="" />
         </div>
         <div className="right">
            <h2>Contact</h2>
            <form onSubmit={handelSubmit}>
               <input type="text" placeholder="email" />
               <textarea placeholder="message"></textarea>
               <button type="submit">Send</button>
               {message && <span>Thanks, I'll reply ASaP</span>}
            </form>
         </div>
      </div>
   );
}
