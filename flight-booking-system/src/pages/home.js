import React from "react";
import PageHeader from "../lib/header";
import PageFooter from "../lib/footer";
import { Layout } from "antd";
import './styles.css';
import FlightPicker from "../lib/flightPicker";
import FlightList from "../lib/flightList";

export const HomePage = (props) => {
    return (
        <Layout className="home-page">
            <PageHeader />
            <Layout.Content>
                <div className="main-content">
                    <h2>Select  your destination</h2>
                    <FlightPicker />
                    <FlightList />
                </div>
            </Layout.Content>
            <PageFooter />
        </Layout>
    )
}