import React, { useEffect, useState } from 'react';
import ProjectView from '../ProjectView/ProjectView';
import './Projects.css'

const Projects = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(result => setData(result))
    }, [])
    return (
        <div id="projects" className="project-bg">
            <h1 className="about-header"> My Projects </h1>
            <h4 className="about-who"> What I do </h4>
            <hr className="horizontal-line" />

            <div className="row">

                {
                    data.map(project => <ProjectView
                        key={project.id} project={project}
                    ></ProjectView>)
                }
            </div>


        </div>
    );
};

export default Projects;