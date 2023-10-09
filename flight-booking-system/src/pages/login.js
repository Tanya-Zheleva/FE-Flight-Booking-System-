import React from "react";
import PageHeader from "../lib/header";
import PageFooter from "../lib/footer";
import './styles.css';
import { Button, Layout } from "antd";
import { useNavigate } from "react-router";
import LoginForm from "../lib/loginForm";

export const SignInPage = (props) => {
    const navigate = useNavigate();

    const onRegisterClick = () => navigate('/register');

    return (
        <Layout className="sign-in-page">
            <PageHeader />
            <Layout.Content>
                <h2>Login</h2>
                <LoginForm />
                <div className="register-info">
                    <p>Don't have an account?<Button type="link" onClick={onRegisterClick}>Register here</Button></p>
                </div>
            </Layout.Content>
            <PageFooter />
        </Layout>
    );
}