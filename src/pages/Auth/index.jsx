import React from 'react';
import {LoginForm, RegisterForm} from "../../modules";

import './Auth.scss'
import {Route, Routes} from "react-router-dom";
import {Home} from "../index";

const Auth = () => {
    return (
        <section className="auth">
            <div className="auth__content">
                <Routes>
                    <Route path="/login" element={<LoginForm/>}/>
                    <Route path="/" element={<LoginForm/>}/>
                    <Route path="/register" element={<RegisterForm/>}/>
                    <Route path="/im" element={<Home/>}/>
                </Routes>
            </div>
        </section>
    );
};

export default Auth;
