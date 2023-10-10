import React from "react";
import PageHeader from "../lib/header";
import PageFooter from "../lib/footer";
import './styles.css';
import { Layout } from "antd";
import RegisterForm from "../lib/registerForm";

export const RegisterPage = (props) => {
    return (
        <Layout className="register-page">
            <PageHeader />
            <Layout.Content>
                <h2>Register</h2>
                <RegisterForm />
            </Layout.Content>
            <PageFooter />
        </Layout>
    );
}