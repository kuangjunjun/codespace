import React from 'react';
import { Layout, Flex } from 'antd';
import './index.css'
const { Header, Footer, Sider, Content } = Layout;

const LayoutWrap = () => {
    return (
        <div className='layout'>
            <Layout>
                <Header className='hd'>
                    <h2>旅梦后台管理系统</h2>
                    <p>欢迎admin</p>
                </Header>
                <Layout>
                    <Sider width="200px" className='side'>
                        Sider
                    </Sider>
                    <Content>Content</Content>
                </Layout>
            </Layout>
        </div>
    );
};

export default LayoutWrap;