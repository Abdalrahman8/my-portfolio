import React, { useEffect, useState } from "react";
import PortfolioList from "../PortfoliList/PortfolioList";
import "./Portfolio.scss";
import {
   featuredPortfolio,
   reactPortfolio,
   nextPortfolio,
   designPortfolio,
   // contentPortfolio,
} from "../../data";

export default function Portfolio() {
   const [selected, setSelected] = useState("featured");

   const [data, setData] = useState([]);

   const list = [
      {
         id: "featured",
         title: "Featured",
      },
      {
         id: "react",
         title: "React",
      },
      {
         id: "next",
         title: "Next",
      },
      {
         id: "design",
         title: "Design",
      },
      // {
      //    id: "content",
      //    title: "Content",
      // },
   ];

   useEffect(() => {
      switch (selected) {
         case "featured":
            setData(featuredPortfolio);
            break;
         case "react":
            setData(reactPortfolio);
            break;
         case "next":
            setData(nextPortfolio);
            break;
         case "design":
            setData(designPortfolio);
            break;
         // case "content":
         //    setData(contentPortfolio);
         //    break;
         default:
            setData(featuredPortfolio);
      }
   }, [selected]);

   return (
      <div className="portfolio" id="portfolio">
         <h1>Portfolio</h1>
         <ul>
            {list.map((item) => (
               <PortfolioList
                  title={item.title}
                  active={selected === item.id}
                  setSelected={setSelected}
                  id={item.id}
               />
            ))}
         </ul>
         <div className="container">
            {data.map((d) => (
               <div className="item">
                  <img src={d.img} alt="" width="220" height="150" />
                  <h3>
                     <a rel="noopener noreferrer" target="_blank" href={d.href}>
                        {d.title}
                     </a>
                  </h3>
               </div>
            ))}
         </div>
      </div>
   );
}
