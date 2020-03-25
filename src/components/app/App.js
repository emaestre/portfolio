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
                <Sider width="300" breakpoint="sm" className="App__sider">
                    <div className="App__logo" />
                    <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={['4']}
                    >
                        <Menu.Item key="1">
                            <UserOutlined />
                            <Link to="/">Home</Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <VideoCameraOutlined />
                            <Link to="/projects">Projects</Link>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <UploadOutlined />
                            <Link to="/about">About</Link>
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
