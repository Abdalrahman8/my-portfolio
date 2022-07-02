import "./Testimonials.scss";

export default function Testimonials() {
   const data = [
      {
         id: 1,
         name: "Mike Wells",
         title: "Mastering Engineer",
         img: require("../../img/Mike.jpg"),
         icon: "assets/linkedin.png",
         desc: "If you are considering Abdul, for a job, look no further. He will be a blessing for your business. Abdul has an eye for design and can transform a regular landing page, into a high converting landing page ",
      },
      {
         id: 2,
         name: "Alena Renner",
         title: "Upwork Client",
         img: "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
         icon: "assets/youtube.png",
         desc: "He goes above, and beyond just completing a job, he views his clients' projects as his projects. His brilliance blows my mind; I am just so thankful that Upwork introduced me to Abdal",
         featured: true,
      },
      {
         id: 3,
         name: "Martin Harold",
         title: "Upwork Client",
         img: "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
         icon: "assets/linkedin.png",
         desc: "His loyalty, technical abilities, and efforts are unparalleled, Abdul has become part of our team.",
      },
   ];

   return (
      <div className="testimonials" id="testimonials">
         <h1>Testimonials</h1>
         <div className="container">
            {data.map((d) => (
               <div className={d.featured ? "card featured" : "card"}>
                  <div className="top">
                     <img
                        className="left"
                        src="assets/right-arrow.png"
                        alt=""
                     />
                     <img className="user" src={d.img} alt="" />
                     <img className="right" src={d.icon} alt="" />
                  </div>
                  <div className="center">{d.desc}</div>
                  <div className="bottom">
                     <h3>{d.name}</h3>
                     <h4>{d.title}</h4>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
}
