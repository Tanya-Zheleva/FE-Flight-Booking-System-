import React from "react";
import './styles.css';
import { Form, Button, Input } from 'antd'

const formConfig = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
    style: { width: 600 }
};

const buttonConfig = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

const LoginForm = (props) => {
    const onSubmit = (args) => {
        console.log(args);
    };

    return (
        <div className="login-form-container">
            <Form {...formConfig}>
                <Form.Item label="Email" required>
                    <Input />
                </Form.Item>
                <Form.Item label="Password" required>
                    <Input />
                </Form.Item>
                <Form.Item {...buttonConfig}>
                    <Button>Submit</Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default LoginForm;