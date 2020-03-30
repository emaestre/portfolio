import React from 'react';
import { Link } from 'react-router-dom';
import './Thumbnail.scss';

function Thumbnail(props) {
    const { link, image, title } = props;

    return (
        <div className="Thumbnail">
            <Link to={link}>
                <div className="Thumbnail__imageContainer">
                    <img
                        className="Thumbnail__image"
                        src={image}
                        alt="Project"
                    />
                </div>
                <div className="Thumbnail__title">{title}</div>
            </Link>
        </div>
    );
}

export default Thumbnail;
