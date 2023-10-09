import React from "react";
import PageHeader from "../lib/header";
import PageFooter from "../lib/footer";
import { Button, Layout } from "antd";
import './styles.css';
import DestinationPicker from "../lib/destinationPicker";
import { useNavigate } from "react-router";

export const HomePage = (props) => {
    const navigate = useNavigate();

    const onSignInClick = () => navigate('/login');

    return (
        <Layout className="home-page">
            <PageHeader />
            <Layout.Content>
                <div className="main-content">
                    <h2>Select  your destination</h2>
                    <DestinationPicker />
                </div>
                <div>
                    <Button onClick={onSignInClick}>Sign in / Logout</Button>
                </div>
            </Layout.Content>
            <PageFooter />
        </Layout>
    )
}