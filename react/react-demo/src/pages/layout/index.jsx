import React from 'react';
import { Layout, Flex } from 'antd';
import './index.css'
const { Header, Footer, Sider, Content } = Layout;
import { Outlet, useNavigate } from 'react-router-dom';

const LayoutWrap = () => {
    const data = [
        {id: 1, title: '班级人员', path: '/layout/students'},
        {id: 2, title: '就业数据', path: '/layout/employment'},
        {id: 3, title: '个人详情', path: '/layout/persional'}
    ]
    const navigate = useNavigate();

    return (
        <div className='layout'>
            <Layout>
                <Header className='hd'>
                    <h2>旅梦后台管理系统</h2>
                    <p>欢迎admin</p>
                </Header>
                <Layout>
                    <Sider width="200px" className='side'>
                        <ul>
                            {data.map((item) => {
                                return (
                                    <li key={item.id} className='aside-item' onClick={() => {navigate(item.path)}}>{item.title}</li>
                                )
                            })}
                        </ul>
                    </Sider>
                    <Content>
                        <Outlet />
                    </Content>
                </Layout>
            </Layout>
        </div>
    );
};

export default LayoutWrap;