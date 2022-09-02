import React, {Component} from 'react';
import {Form, Input} from "antd";
import {LockOutlined, UserOutlined} from "@ant-design/icons";
import {Block, Button} from "../../../components";
import {Link} from "react-router-dom";

class LoginForm extends Component {

    render() {
        // const onFinish = (values) => {
        //     console.log('Received values of form: ', values);
        // };
        return (
            <div>
                <div className="auth__top">
                    <h2>Sign in</h2>
                    <p>Please login to your account</p>
                </div>
                <Block>
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{ remember: true }}
                        // onFinish={onFinish}
                    >
                        <Form.Item
                            name="username"
                            hasFeedback
                            validateStatus="success"
                            rules={[{ required: true, message: 'Please input your Username!' }]}
                        >
                            <Input size="large" prefix={
                                <UserOutlined className="site-form-item-icon"/>} placeholder="Username"/>
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Please input your Password!' }]}
                        >
                            <Input
                                size="large"
                                prefix={<LockOutlined className="site-form-item-icon"/>}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>


                        <Form.Item>
                            <Button type="primary" size="large" htmlType="submit" className="login-form-button">
                                Log in
                            </Button>
                        </Form.Item>
                        <Link className="auth__register-link" to="/register">Register</Link>
                    </Form>
                </Block>
            </div>
        );
    }
}

export default LoginForm;
