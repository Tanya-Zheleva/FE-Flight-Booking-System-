import React from "react";
import PageHeader from "../lib/header";
import PageFooter from "../lib/footer";
import { Layout } from "antd";
import './styles.css';

export const ErrorPage = (props) => {
    return (
        <Layout className="home-page">
            <PageHeader />
            <Layout.Content>
                <div className="main-content">
                    <h2>There was an error, please try again!</h2>
                </div>
            </Layout.Content>
            <PageFooter />
        </Layout>
    );
}