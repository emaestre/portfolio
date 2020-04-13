import React from 'react';
import { Card } from 'antd';
import { GithubOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import './Thumbnail.scss';

const { Meta } = Card;

function Thumbnail(props) {
    const { link, image, title } = props;

    return (
        <div className="Thumbnail">
            <Card
                cover={
                    <img
                        className="Thumbnail__image"
                        src={image}
                        alt="Project"
                    />
                }
                actions={[
                    <Link to={link}>
                        <GithubOutlined key="githubUrl" />
                    </Link>,
                ]}
            >
                <Meta title={title} />
            </Card>
        </div>
    );
}

export default Thumbnail;
