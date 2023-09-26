import React from "react";
import PageHeader from "../lib/header";
import PageFooter from "../lib/footer";
import { Layout } from "antd";
import './styles.css';
import DestinationPicker from "../lib/destinationPicker";

export const HomePage = (props) => {
    return (
        <Layout className="home-page">
            <PageHeader />
            <Layout.Content>
                <div className="main-content">
                    <p>Select destination</p>
                    <DestinationPicker />
                </div>
            </Layout.Content>
            <PageFooter />
        </Layout>
    )
}