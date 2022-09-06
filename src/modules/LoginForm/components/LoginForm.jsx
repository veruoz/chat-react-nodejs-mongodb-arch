import React from 'react';
import {Form, Input} from "antd";
import {LockOutlined, MailOutlined} from "@ant-design/icons";
import {Block, Button} from "../../../components";
import {Link} from "react-router-dom";
import {validateField} from "../../../helpers";



const LoginForm = props => {

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
                <h2>Sign in</h2>
                <p>Please login to your account</p>
            </div>
            <Block>
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

                    <Form.Item>
                        {dirty && !isValid && <span>Error!</span>}
                        <Button
                            type="primary"
                            size="large"
                            htmlType="submit"
                            className="login-form-button"
                            onClick={handleSubmit}
                        >Log in</Button>
                    </Form.Item>
                    <Link className="auth__register-link" to="/register">Registration</Link>
                </Form>
            </Block>
        </div>
    );
}

export default LoginForm;
