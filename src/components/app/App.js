import React, { useState, useCallback } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import AppRouter from './App.router';
import { Layout, Menu } from 'antd';
import {
    UserOutlined,
    UploadOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import './App.scss';

const { Header, Content, Footer, Sider } = Layout;

function App() {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const handleCollapse = useCallback(collapsed => {
        console.log(collapsed);
        setIsCollapsed(collapsed);
    }, []);

    return (
        <Router>
            <Layout>
                <Sider
                    width="500"
                    breakpoint="sm"
                    className="App__sider"
                    collapsible
                    collapsed={isCollapsed}
                    onCollapse={handleCollapse}
                >
                    <div className="App__logo">
                        <p>Hello, world!</p>
                    </div>
                    <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        className="App__menu"
                    >
                        <Menu.Item key="1">
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
                        <Menu.Item key="2">
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
                        <Menu.Item key="3">
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
                    <Header className="App__header App__layout--background" />
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
