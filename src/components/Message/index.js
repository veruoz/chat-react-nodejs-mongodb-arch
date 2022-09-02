import React from 'react';
import PropTypes from "prop-types";
import {formatDistanceToNow} from "date-fns/esm";
import eoLocale from 'date-fns/locale/ru'
import classNames from "classnames";

import readSvg from '../../assets/img/readed.svg'
import noReadSvg from '../../assets/img/noreaded.svg'
import './Message.scss'

const Message = ({ avatar, user, text, date, isMe, isRead }) => (
    <div className={classNames('message', {'message--isme': isMe})}>
        <div className="message__content">
        {isMe && isRead ?
            (<img className="message__icon-read" src={readSvg} alt="Read icon"/>)
         : (<img className="message__icon-read" src={noReadSvg} alt="No Read icon"/>)
        }
        <div className="message__avatar">
            <img src={avatar} alt={`Avatar ${user.fullname}`}/>
        </div>
            <div className="message__info">
            <div className="message__bubble">
                <p className="message__text">{text}</p>
            </div>
            <span className="message__date">{formatDistanceToNow(date, {addSuffix: true, locale: eoLocale})}</span>
            </div>
        </div>
    </div>
);

Message.defaultProps = {
    user: {},
}

Message.protoTypes = {
    avatar: PropTypes.string,
    text: PropTypes.string,
    date: PropTypes.string,
    user: PropTypes.object,
}

export default Message;
