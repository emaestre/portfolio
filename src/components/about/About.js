import React from 'react';
import { Typography } from 'antd';

const { Paragraph } = Typography;

function About(props) {
    return (
        <div>
            <Paragraph>
                Hard-working, autodidactic, and prolific Software Engineer with
                a flair for creating elegant and world-class solutions.
                Responsible for the development of web platforms under different
                architectures such as MVC, SOA, and Microservices. I have
                participated in the creation of one-page applications and
                development of modules for customized business solutions based
                on SAP ERP in SofOS, C.A. Winner of the Gold Tester Credential
                in functionality and localization tests in uTest, and I am
                currently involved in modern projects with foreign companies
                using great technologies like Node.js and ReactJS at Trio, Inc.
                Lover of professional growth, always looking to learn new things
                and be better every day.
            </Paragraph>
        </div>
    );
}

export default About;
