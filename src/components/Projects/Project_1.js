import React from "react";
import "./Project_1.css";
import "./Project1.css";
import Project1 from "./Project1";

export default function Project_1(props) {
  const data = [
    {
      title: "Password generator",
      url: "https://user-images.githubusercontent.com/79800224/147360385-74808886-007a-48ef-af74-f4a22113f737.png",
      url2: "https://saifkhan29.github.io/password-generator/"
    },
    {
      title: "Construction Website",
      url: "https://user-images.githubusercontent.com/79800224/147360377-f957c504-106f-4a4b-8f21-6c64ed1fe92b.png",
      url2: "https://saifkhan29.github.io/SP-Construction/"
    },
    {
      title: "CSS Gradient Generator",
      url: "https://user-images.githubusercontent.com/79800224/147360376-583d11ac-f8d5-4413-ad6b-1ce6e64474f2.png",
      url2: "https://saifkhan29.github.io/CSS-Gradient-Project/"
    },
  ];

  return (
    <div className='projects_section'>
      <h2>
        {props.main1Head} <span> {props.main1Sub}</span>
      </h2>
      <div className="pCardMain">
      <Project1 title={data[0].title} url={data[0].url} url2={data[0].url2} />
      <Project1 title={data[1].title} url={data[1].url} url2={data[1].url2}/>
      <Project1 title={data[2].title} url={data[2].url} url2={data[2].url2}/>
      
      </div>
    </div>
  );
}
