import React from "react";
import "./Project_1.css";
import "./Project1.css";
import Project1 from "./Project1";

export default function Project_1(props) {
  const data = [
    {
      title: "Furniture App",
      url: "https://user-images.githubusercontent.com/79800224/147360373-d4782ff5-18df-479c-a8a0-39a9e1d02ac4.png",
      url2: "https://www.behance.net/gallery/127818047/Furniture-mobile-app-ui-ux-design"
    },
    {
      title: "Shoes Website",
      url: "https://user-images.githubusercontent.com/79800224/147360384-01b9ae10-a9d2-407f-9dad-c447c56a077e.png",
      url2: "https://www.behance.net/gallery/125199583/Shoes-Website-UI-UX-Design"
    },
    {
      title: "Jobs Website Homepage",
      url: "https://user-images.githubusercontent.com/79800224/147360381-0bf90e88-ac0f-41d6-b519-2a13a9461070.png",
      url2: "https://www.behance.net/gallery/125199365/Job-Page"
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
      <Project1 title={data[2].title} url={data[2].url} url2={data[2].url2} />
      
      </div>
    </div>
  );
}
