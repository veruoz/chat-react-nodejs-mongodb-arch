import React, {Component} from 'react';
import {Form, Input} from "antd";
import {LockOutlined, UserOutlined, MailOutlined, ExclamationCircleTwoTone} from "@ant-design/icons";
import {Block, Button} from "../../../components";
import {Link} from "react-router-dom";

class RegisterForm extends Component {

    render() {
        const success = false
        return (
          <div>
              <div className="auth__top">
                  <h2>Register</h2>
                  <p>To enter the chat, you need to register</p>
              </div>
              <Block>
                  {success ? (
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
                          rules={[{ required: true, message: 'Please input your e-mail!' }]}
                      >
                          <Input size="large" prefix={<MailOutlined className="site-form-item-icon" />} placeholder="E-mail" />
                      </Form.Item>
                      <Form.Item
                          name="mail"
                          rules={[{ required: true, message: 'Please input your Name!' }]}
                      >
                          <Input
                              size="large"
                              prefix={<UserOutlined className="site-form-item-icon" />}
                              type="user"
                              placeholder="Your name"
                          />
                      </Form.Item>
                      <Form.Item
                          name="password"
                          rules={[{ required: true, message: 'Please input your password!' }]}
                      >
                          <Input
                              size="large"
                              prefix={<LockOutlined className="site-form-item-icon" />}
                              type="password"
                              placeholder="password"
                          />
                      </Form.Item>
                      <Form.Item
                          name="password"
                          rules={[{ required: true, message: 'Please input your password!' }]}
                      >
                          <Input
                              size="large"
                              prefix={<LockOutlined className="site-form-item-icon" />}
                              type="password"
                              placeholder="Repeat password"
                          />
                      </Form.Item>


                      <Form.Item>
                          <Button type="primary" size="large" htmlType="submit" className="login-form-button">
                              Register
                          </Button>
                      </Form.Item>
                      <Link className="auth__register-link" to="/login">Log in</Link>
                  </Form>) : (
                      <div className="auth__success-block">
                          <ExclamationCircleTwoTone style={{ fontSize: '50px'}} />
                          <h3>Verify your account</h3>
                          <p>An email has been sent to your email address with a link to verify your account.</p>
                      </div>
                  )}
              </Block>
          </div>
        );
    }
}

export default RegisterForm;
