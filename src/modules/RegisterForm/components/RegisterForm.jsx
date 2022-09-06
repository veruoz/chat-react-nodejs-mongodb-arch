import React from 'react';
import {Form, Input} from "antd";
import {LockOutlined, UserOutlined, MailOutlined, ExclamationCircleTwoTone} from "@ant-design/icons";
import {Block, Button} from "../../../components";
import {Link} from "react-router-dom";
import {validateField} from "../../../helpers";

const success = false
const RegisterForm = (props) => {
    const {
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isValid,
        dirty
    } = props
    // console.log(props)
    return (
        <div>
            <div className="auth__top">
                <h2>Register</h2>
                <p>To enter the chat, you need to register</p>
            </div>
            <Block>
                {!success ? (
                    <Form
                        // name="normal_login"
                        className="login-form"
                        initialValues={{ remember: true }}
                        onSubmit={handleSubmit}
                        // onFinish={onFinish}
                    >
                        <Form.Item
                            // name="email"
                            hasFeedback
                            validateStatus={validateField("email", touched, errors)}
                            help={!touched.email ? '' : errors.email}
                            // rules={[{ required: true, message: errors.email }]}
                            rules={[{ required: true, message: errors.email }]}
                        >
                            <Input
                                id="email"
                                size="large"
                                prefix={<MailOutlined className="site-form-item-icon"/>}
                                placeholder="E-mail"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </Form.Item>
                        <Form.Item
                            // name="username"
                            validateStatus={validateField("name", touched, errors)}
                            help={!touched.name ? '' : errors.name}
                            hasFeedback
                            // rules={[{ required: true, message: 'Please input your Name!' }]}
                        >
                            <Input
                                id="name"
                                size="large"
                                prefix={<UserOutlined className="site-form-item-icon"/>}
                                type="user"
                                placeholder="Your name"
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </Form.Item>
                        <Form.Item
                            // name="password"
                            validateStatus={validateField("password", touched, errors)}
                            help={!touched.password ? '' : errors.password}
                            hasFeedback
                            // rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input
                                id="password"
                                size="large"
                                prefix={<LockOutlined className="site-form-item-icon"/>}
                                type="password"
                                placeholder="Password"
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </Form.Item>
                        <Form.Item
                            // name="password"
                            validateStatus={validateField("repeat_password", touched, errors)}
                            help={!touched.repeat_password ? '' : errors.repeat_password}
                            hasFeedback
                            rules={[{ required: true, message: errors.repeat_password }]}
                        >
                            <Input
                                id="repeat_password"
                                size="large"
                                prefix={<LockOutlined className="site-form-item-icon"/>}
                                type="password"
                                placeholder="Repeat password"
                                value={values.repeat_password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </Form.Item>


                        <Form.Item>
                            {dirty && !isValid && <span>Error!</span>}
                            <Button
                                type="primary"
                                size="large"
                                htmlType="submit"
                                className="login-form-button"
                                onClick={handleSubmit}
                            >Register</Button>
                        </Form.Item>
                        <Link className="auth__register-link" to="/login">Log in</Link>
                    </Form>) : (
                     <div className="auth__success-block">
                         <ExclamationCircleTwoTone style={{ fontSize: '50px' }}/>
                         <h2>Verify your account</h2>
                         <p>An email has been sent to your email address with a link to verify your account.</p>
                     </div>
                 )}
            </Block>
        </div>
    );
}

export default RegisterForm;
