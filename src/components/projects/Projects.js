import React from 'react';
import { Row, Col } from 'antd';
import Thumbnail from '../thumbnail';
import alaskaImg from '../../assets/alaska-4714097_1280.jpg';
import './Projects.scss';

function Projects(props) {
    return (
        <div className="Projects">
            <h1>Projects</h1>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col span={8}>
                    <Thumbnail
                        link="/"
                        image={alaskaImg}
                        title="First project"
                    />
                </Col>
                <Col span={8}>
                    <Thumbnail
                        link="/"
                        image={alaskaImg}
                        title="Second Project"
                    />
                </Col>
                <Col span={8}>
                    <Thumbnail
                        link="/"
                        image={alaskaImg}
                        title="Third project"
                    />
                </Col>
            </Row>
        </div>
    );
}

export default Projects;
