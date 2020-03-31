import React, { useState, useCallback } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import {
    UserOutlined,
    UploadOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import Logo from '../logo';
import AppRouter from './App.router';
import './App.scss';

const { Header, Content, Footer, Sider } = Layout;

// TODO: Try to create a Menu component to reduce the App complexity
function App() {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const handleCollapse = useCallback(collapsed => {
        setIsCollapsed(collapsed);
    }, []);

    return (
        <Router>
            <Layout className="App__layout">
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
                        defaultSelectedKeys={['1']}
                        className="App__menu"
                    >
                        <Menu.Item key="1" title="Home">
                            <UserOutlined />
                            <span>
                                <Link
                                    className="App__menu-item-link"
                                    to="/portfolio"
                                >
                                    Home
                                </Link>
                            </span>
                        </Menu.Item>
                        <Menu.Item key="2" title="Projects">
                            <VideoCameraOutlined />
                            <span>
                                <Link
                                    className="App__menu-item-link"
                                    to="/portfolio/projects"
                                >
                                    Projects
                                </Link>
                            </span>
                        </Menu.Item>
                        <Menu.Item key="3" title="About">
                            <UploadOutlined />
                            <span>
                                <Link
                                    className="App__menu-item-link"
                                    to="/portfolio/about"
                                >
                                    About
                                </Link>
                            </span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="App__layout">
                    <Header className="App__header App__layout--background">
                        <h1>Eleazar Maestre D' Armas</h1>
                    </Header>
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
        </Router>
    );
}

export default App;
