import React from "react";
import './styles.css';
import { Form, Input } from 'antd';
import {
    commonFormConfig,
    confirmPasswordValidationRules,
    emailFieldValidationRules,
    nameValidationRules,
    passwordValidationRules
} from "../../configurations";
import axios from "axios";
import SubmitButton from "../submitButton";
import { useNavigate } from "react-router-dom";

const RegisterForm = (props) => {
    const navigate = useNavigate();
    const [form] = Form.useForm();
    
    const onSubmit = () => {
        const fieldsValues = form.getFieldsValue();

        axios.post('/register', fieldsValues)
            .then((response) => {
                console.log(response);

                navigate('/');
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <div className="register-form-container">
            <Form {...commonFormConfig} form={form}>
                <Form.Item name="username" label="Email" rules={emailFieldValidationRules}>
                    <Input />
                </Form.Item>
                <Form.Item name="firstName" label="First name" rules={nameValidationRules}>
                    <Input />
                </Form.Item>
                <Form.Item name="lastName" label="Last name" rules={nameValidationRules}>
                    <Input />
                </Form.Item>
                <Form.Item name="password" label="Password" rules={passwordValidationRules}>
                    <Input />
                </Form.Item>
                <Form.Item dependencies={["password"]} name="confirmPassword" label="Confirm password" rules={confirmPasswordValidationRules}>
                    <Input />
                </Form.Item>
                <Form.Item>
                    <SubmitButton form={form} onClick={onSubmit} />
                </Form.Item>
            </Form>
        </div>
    );
};

export default RegisterForm;