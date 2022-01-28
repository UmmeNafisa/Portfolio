import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectView.css'

const ProjectView = ({ project }) => {
    const { projectName, subTitlle, img, description, tools, githubClientLink, githubServerLink, liveLink, id } = project
    return (
        <>
            <div>
                <div class="box box1" style={{ backgroundImage: `url(${img})` }}>
                </div>
                {/* flip card start */}
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <h1 className='project-name'>{projectName}</h1>
                            <small>{subTitlle}</small>
                            <p>{description}</p>
                        </div>


                        <div className="flip-card-back">
                            <br />
                            <a href={githubClientLink} target="_blank" className='github-link'><i class="fab fa-github"></i> Github Client Side</a>
                            <br />
                            <a href={githubServerLink} target="_blank" className='github-link'><i class="fab fa-github"></i> Github Server Side </a>

                            <p className="tool">
                                <h4 className='tech'>Tools  </h4>
                                {tools.map(tool =>
                                    (<button className="tools"> {tool} </button>)
                                )
                                } </p>
                        </div>
                    </div>
                </div>
                {/* flip card end */}

                <div className='button-cm'> <a href={liveLink} target="_blank">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span><i class="fab fa-chrome"></i> Demo</a>
                </div>
            </div>
        </>
    );
};

export default ProjectView;