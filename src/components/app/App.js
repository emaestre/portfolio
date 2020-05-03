import React, { useState, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Layout, Menu, Alert, Avatar, Row, Col } from 'antd';
import {
    HomeOutlined,
    FundProjectionScreenOutlined,
    UserOutlined,
} from '@ant-design/icons';
import Logo from 'components/logo';
import profileImg from 'assets/profile.jpg';
import AppRouter from './App.router';
import './App.scss';

const { Header, Content, Footer, Sider } = Layout;

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
                    <Menu.Item key="/" title="Home">
                        <HomeOutlined />
                        <span>
                            <Link className="App__menu-item-link" to="/">
                                Home
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
                    <Menu.Item key="/about" title="About">
                        <UserOutlined />
                        <span>
                            <Link className="App__menu-item-link" to="/about">
                                About
                            </Link>
                        </span>
                    </Menu.Item>
                </Menu>
                {/* TODO: This should be a component */}
                <Row
                    justify="center"
                    align="middle"
                    className="Avatar__container"
                >
                    <Col span={24}>
                        {!isCollapsed && <Avatar size={100} src={profileImg} />}
                    </Col>
                </Row>
            </Sider>
            <Layout className="App__layout">
                <Header className="App__header App__layout--background">
                    <h1>Eleazar Maestre D' Armas</h1>
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
