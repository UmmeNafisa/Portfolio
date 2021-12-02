import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const ProjectDetails = () => {
    const { id } = useParams()

    const [data, setData] = useState([])
    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(result => setData(result[id - 1]))
    }, [])
    console.log(data)
    return (
        <div className="project-bg">
            <h1 className="about-header"> {data.projectName} </h1>
            <h4 className="subtitle"> {data.subTitlle} </h4>
            <img src={data.img} alt="" className="projects-pic" />
            {
                data.moreImg.map(pic => <img src={pic} alt="" className="projects-pic" />)
            }


            <p>{data.description}</p>
            <p className="func">Funtionality: {
                data.functionality.map(func => <ul className="func">
                    <li> {func} </li>
                </ul>)
            } </p>
            <p className="tool">Tools: {
                data.tools.map(tool =>
                    <button className="tools"> {tool} </button>
                )
            } </p>

            <Link to="/home">
                <button className="explore-btn"> Back to Home </button>
            </Link>
        </div>
    );
};

export default ProjectDetails;