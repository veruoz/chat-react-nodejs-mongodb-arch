import React from 'react';
import PropTypes from "prop-types";
import readSvg from "../../assets/img/readed.svg";
import noReadSvg from "../../assets/img/noreaded.svg";

const IconRead = ({ isMe, isRead }) =>
    isMe && (isRead ?
             (<img className="message__icon-read" src={readSvg} alt="Read icon"/>)
                    : (<img className="message__icon-read" src={noReadSvg} alt="No Read icon"/>)
    )

IconRead.propTypes = {
    isMe:   PropTypes.bool,
    isRead: PropTypes.bool,
}

export default IconRead;
