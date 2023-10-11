import React from "react";
import PageHeader from "../lib/header";
import PageFooter from "../lib/footer";
import './styles.css';
import { Layout } from "antd";
import FlightBookingForm from "../lib/flightBookingForm";

export const BookFlightPage = (props) => {
    return (
        <Layout className="book-flight-page">
            <PageHeader />
            <Layout.Content>
                <h2>Book your flight</h2>
                <FlightBookingForm />
            </Layout.Content>
            <PageFooter />
        </Layout>
    );
}