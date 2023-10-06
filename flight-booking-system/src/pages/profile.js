import React from "react";
import Layout from "antd/es/layout/layout"
import PageHeader from "../lib/header"
import PageFooter from "../lib/footer"
import { FileOutlined, UserOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { useState } from "react";
import UserInfo from "../lib/userInfo";
import './styles.css';
import TicketInfo from "../lib/ticketInfo";

const tabItems = [
    { icon: <UserOutlined />, key: 'profile', label: 'User data' },
    { icon: <FileOutlined />, key: 'tickets', label: 'Tickets' }
];

const MenuTabComponentsByKey = {
    profile: <UserInfo />,
    tickets: <TicketInfo />
};

export const ProfilePage = (props) => {
    const [activeKey, setActiveKey] = useState('profile');

    const onMenuClick = ({ key }) => {
        setActiveKey(key);
    };

    return (
        <Layout className="profile-page">
            <PageHeader />
            <Layout className="content-wrapper">
                <Layout.Sider>
                    <Menu
                        mode="inline"
                        openKeys={[activeKey]}
                        style={{ height: '100%', borderRight: 0 }}
                        items={tabItems}
                        onClick={onMenuClick}
                    />
                </Layout.Sider>
            <Layout.Content>
                {MenuTabComponentsByKey[activeKey]}
            </Layout.Content>
            </Layout>
            <PageFooter />
        </Layout>
    );
}