import React from 'react';
import Thumbnail from '../thumbnail';
import alaskaImg from '../../assets/alaska-4714097_1280.jpg';

function Projects(props) {
    return (
        <div>
            <h1>Projects</h1>
            <Thumbnail
                link="/portfolio"
                image={alaskaImg}
                title="Twitter Newsfeed"
            />
        </div>
    );
}

export default Projects;
