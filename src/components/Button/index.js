import React from 'react';
import {Button as BaseButton, Radio} from 'antd';
import PropTypes from "prop-types";

import './Button.scss'
import classNames from "classnames";

const Button = (props) => (
    <BaseButton {...props} className={classNames('button', props.className, {
        "button--large" : props.size === "large"
    })}/>
);

Button.propTypes = {
    className: PropTypes.string
}

export default Button;
