import React from "react";
import "./Project_1.css";
import "./Project1.css";
import Project1 from "./Project1";

export default function Project_1(props) {
  const data = [
    {
      title: "Portfolio",
      url: "https://media.istockphoto.com/photos/birch-forest-picture-id1285337049?b=1&k=20&m=1285337049&s=170667a&w=0&h=V6MxVf73ickzbllQ_zXrZvXmK5pdqvErhFjr0heD_WI=",
    },
    {
      title: "Tech world",
      url: "https://media.istockphoto.com/photos/rocky-mountains-and-autumnal-forest-with-colorful-trees-high-mountain-picture-id1282522992?b=1&k=20&m=1282522992&s=170667a&w=0&h=W_7cRAwDTWOqqXF3g9zwOaCMgol1-Vb4rYtlqBbJMYE=",
    },
  ];

  return (
    <div className='projects_section'>
      <h2>
        {props.main1Head} <span> {props.main1Sub}</span>
      </h2>
      <div className="pCardMain">
      <Project1 title={data[0].title} url={data[0].url} />
      <Project1 title={data[1].title} url={data[1].url} />
      <Project1 title={data[1].title} url={data[1].url} />
      
      </div>
    </div>
  );
}
