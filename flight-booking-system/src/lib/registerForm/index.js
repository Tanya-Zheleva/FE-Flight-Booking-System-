import React from "react";
import './styles.css';
import { Form, Input } from 'antd'

const formConfig = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
    style: { width: 600 }
};

const RegisterForm = (props) => {
    return (
        <div className="register-form-container">
            <Form {...formConfig}>
                <Form.Item label="Email" required>
                    <Input />
                </Form.Item>
                <Form.Item label="First name" required>
                    <Input />
                </Form.Item>
                <Form.Item label="Last name" required>
                    <Input />
                </Form.Item>
                <Form.Item label="Password" required>
                    <Input />
                </Form.Item>
                <Form.Item label="Confirm password" required>
                    <Input />
                </Form.Item>
            </Form>
        </div>
    );
};

export default RegisterForm;