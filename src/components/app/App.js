import React from 'react';
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
    return (
        <Router>
            <Layout>
                <Sider className="site-sider">
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={['4']}
                    >
                        <Menu.Item key="1">
                            <UserOutlined />
                            <Link to="/" className="item">
                                Home
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <VideoCameraOutlined />
                            <Link to="/projects" className="item">
                                Projects
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <UploadOutlined />
                            <Link to="/about" className="item">
                                About
                            </Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout" style={{ marginLeft: 200 }}>
                    <Header
                        className="site-layout-background"
                        style={{ padding: 0 }}
                    />
                    <Content
                        style={{ margin: '24px 16px 0', overflow: 'initial' }}
                    >
                        <div
                            className="site-layout-background"
                            style={{ padding: 24, textAlign: 'center' }}
                        >
                            <AppRouter />
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Copyright &copy; 2020 by Eleazar Maestre.
                    </Footer>
                </Layout>
            </Layout>
        </Router>
    );
}

export default App;
