import React from 'react';
import { Link } from 'react-router-dom';

function Thumbnail(props) {
    const { link, image, title } = props;

    return (
        <div className="project">
            <Link to={link}>
                <div className="project-image">
                    <img src={image} alt="Project" />
                </div>
                <div className="project-title">{title}</div>
            </Link>
        </div>
    );
}

export default Thumbnail;
