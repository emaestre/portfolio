import React, { useState, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Layout, Menu, Alert, Avatar, Row, Col, Typography } from 'antd';
import {
    ContactsOutlined,
    FundProjectionScreenOutlined,
    UserOutlined,
    LinkedinOutlined,
    GithubOutlined,
    MailOutlined,
} from '@ant-design/icons';
import Logo from 'components/logo';
import profileImg from 'assets/profile.jpg';
import AppRouter from './App.router';
import myLogo from 'assets/logo.png';
import './App.scss';

const { Header, Content, Footer, Sider } = Layout;
const { Paragraph } = Typography;

// TODO: Try to create a Menu component to reduce the App complexity
function App() {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const location = useLocation();

    const handleCollapse = useCallback(collapsed => {
        setIsCollapsed(collapsed);
    }, []);

    return (
        <Layout className="App__layout">
            {/* TODO: This should be a component */}
            <Sider
                width="500"
                className="App__sider"
                collapsible
                collapsed={isCollapsed}
                onCollapse={handleCollapse}
            >
                <Logo collapsed={isCollapsed} />
                <Menu
                    theme="dark"
                    mode="inline"
                    selectedKeys={[location.pathname]}
                    className="App__menu"
                >
                    <Menu.Item key="/" title="About">
                        <UserOutlined />
                        <span>
                            <Link className="App__menu-item-link" to="/">
                                About
                            </Link>
                        </span>
                    </Menu.Item>
                    <Menu.Item key="/projects" title="Projects">
                        <FundProjectionScreenOutlined />
                        <span>
                            <Link
                                className="App__menu-item-link"
                                to="/projects"
                            >
                                Projects
                            </Link>
                        </span>
                    </Menu.Item>
                    <Menu.Item key="/contact" title="Contact">
                        <ContactsOutlined />
                        <span>
                            <Link className="App__menu-item-link" to="/contact">
                                Contact Me
                            </Link>
                        </span>
                    </Menu.Item>
                </Menu>
                {/* TODO: This should be a component */}
                <Row
                    gutter={[0, 24]}
                    justify="center"
                    align="middle"
                    className="Profile__container"
                >
                    <Col span={24}>
                        {!isCollapsed && <Avatar size={100} src={profileImg} />}
                    </Col>
                    <Col span={24}>
                        {!isCollapsed && (
                            <Paragraph className="Profile__intro">
                                I'm a responsible and friendly full-stack
                                software engineer, welcome to my portfolio!
                            </Paragraph>
                        )}
                    </Col>
                    <Col span={24}>
                        {!isCollapsed && (
                            <div className="Profile__social">
                                <Row justify="center" align="middle">
                                    <a
                                        href="https://www.linkedin.com/in/eleazarmaestre"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <LinkedinOutlined />
                                    </a>
                                    <a
                                        href="https://github.com/emaestre"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <GithubOutlined />
                                    </a>
                                    <a
                                        href="mailto:eleazarenrique23@gmail.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <MailOutlined />
                                    </a>
                                </Row>
                            </div>
                        )}
                    </Col>
                </Row>
            </Sider>
            <Layout className="App__layout">
                <Header className="App__header App__layout--background">
                    <Row>
                        <Col xs={0} sm={0} md={4} lg={4} xl={4}>
                            <img
                                src={myLogo}
                                className="App__header--logo"
                                alt="MyLogo"
                            />
                        </Col>
                        <Col xs={24} sm={24} md={18} lg={18} xl={18}>
                            <h1>Eleazar Maestre D' Armas</h1>
                        </Col>
                    </Row>
                </Header>
                <Alert
                    message="This website is under development, for any ideas or concerns please refer to eleazarenrique23@gmail.com"
                    type="warning"
                    showIcon
                    closable
                />
                <Content className="App__content">
                    <div className="App__content-container App__layout--background">
                        <AppRouter />
                    </div>
                </Content>
                <Footer className="App__footer">
                    Copyright &copy; 2020 by Eleazar Maestre.
                </Footer>
            </Layout>
        </Layout>
    );
}

export default App;
