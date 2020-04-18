import React from 'react';
import { Row, Col } from 'antd';
import Thumbnail from 'components/thumbnail';
import alaskaImg from 'assets/alaska-4714097_1280.jpg';
import './Projects.scss';

function Projects(props) {
    return (
        <div className="Projects">
            <h1>Projects</h1>
            <Row gutter={[24, 24]}>
                <Col
                    xs={{ span: 24 }}
                    sm={{ span: 24 }}
                    md={{ span: 12 }}
                    lg={{ span: 8 }}
                    xl={{ span: 8 }}
                >
                    <Thumbnail
                        link="/"
                        image={alaskaImg}
                        title="First project"
                    />
                </Col>
                <Col
                    xs={{ span: 24 }}
                    sm={{ span: 24 }}
                    md={{ span: 12 }}
                    lg={{ span: 8 }}
                    xl={{ span: 8 }}
                >
                    <Thumbnail
                        link="/"
                        image={'https://source.unsplash.com/random'}
                        title="Second Project"
                    />
                </Col>
                <Col
                    xs={{ span: 24 }}
                    sm={{ span: 24 }}
                    md={{ span: 12 }}
                    lg={{ span: 8 }}
                    xl={{ span: 8 }}
                >
                    <Thumbnail
                        link="/"
                        image={'https://source.unsplash.com/user/erondu'}
                        title="Third project"
                    />
                </Col>
            </Row>
        </div>
    );
}

export default Projects;
