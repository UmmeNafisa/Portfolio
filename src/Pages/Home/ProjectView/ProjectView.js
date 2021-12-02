import React from 'react';
import { Link } from 'react-router-dom';

const ProjectView = ({ project }) => {
    const { projectName, subTitlle, img, description, tools, id } = project
    return (

        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img src={img} alt="The-Toy-Shop" className="project-img" />
                </div>
                <div className="flip-card-back">
                    <h1>{projectName}</h1>
                    <small>{subTitlle}</small>
                    <p>{description}</p>
                </div>
            </div>
            <Link to={`/project/${id}`}>
                <button className="explore-btn">Explore</button>
            </Link>
        </div>


    );
};

export default ProjectView;