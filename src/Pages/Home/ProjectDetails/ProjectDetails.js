import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const ProjectDetails = () => {
    const { id } = useParams()

    const [data, setData] = useState([])
    useEffect(() => {
        fetch('/json')
            .then(res => res.json())
            .then(result => setData(result[id - 1]))
    }, [])

    const { projectName, subTitlle, img, description, tools, githubClientLink, githubServerLink, liveLink, moreImg, functionality } = data
    console.log(data)

    return (
        <div className="project-bg">
            <h1 className="about-header"> {projectName} </h1>
            <h4 className="subtitle"> {subTitlle} </h4>
            <img src={img} alt="" className="projects-pic" />
            {
                moreImg.map(pic => (<img src={pic} alt="" className="projects-pic" />))
            }


            <p>{description}</p>
            <p className="func">Functionality: {
                functionality.map(func => (<ul className="func">
                    <li> {func} </li>
                </ul>))
            } </p>
            <p className="tool">Tools: {
                tools.map(tool =>
                    (<button className="tools"> {tool} </button>)
                )
            } </p>

            <Link to="/home">
                <button className="explore-btn"> Back to Home </button>
            </Link>
        </div>
    );
};

export default ProjectDetails;