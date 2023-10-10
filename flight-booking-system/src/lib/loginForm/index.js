import React from "react";
import './styles.css';
import { Form, Input } from 'antd';
import { commonFormConfig, emailFieldValidationRules, passwordValidationRules } from '../../configurations';
import SubmitButton from "../submitButton";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const buttonConfig = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

const LoginForm = (props) => {
    const navigate = useNavigate();
    const [form] = Form.useForm();

    const onSubmit = () => {
        const fieldsValues = form.getFieldsValue();

        axios.post('/login', fieldsValues)
            .then((response) => {
                console.log(response);

                navigate('/');
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <div className="login-form-container">
            <Form {...commonFormConfig} form={form}>
                <Form.Item name="username" label="Email" rules={emailFieldValidationRules}>
                    <Input />
                </Form.Item>
                <Form.Item name="password" label="Password" rules={passwordValidationRules}>
                    <Input.Password />
                </Form.Item>
                <Form.Item {...buttonConfig}>
                    <SubmitButton form={form} onClick={onSubmit} />
                </Form.Item>
            </Form>
        </div>
    );
}

export default LoginForm;