import React from 'react'
import Project_1 from './Project_1';
import Project_2 from './Project_2';
import './ProjectMain.css'

export default function ProjectMain() {

    const heading = [
        {
            main : "Projects",
            sub: "Made"
        },
        {
            main : "Check Out My",
            sub: "Behance Profile"
        },
    ]


    return (
        <div className="projectContainer" id="projects_nav">
            

            <Project_1 main1Head={heading[0].main} main1Sub={heading[0].sub} />
            <Project_2 main1Head={heading[1].main} main1Sub={heading[1].sub}/>
            
            
        </div>
    )
}
