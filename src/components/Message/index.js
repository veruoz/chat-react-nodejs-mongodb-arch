import React from 'react';
import PropTypes from "prop-types";
import classNames from "classnames";

import './Message.scss'
import {Time, IconRead} from "../../components";

const Message = ({ avatar, user, text, date, isMe, isRead, attachments, isTyping }) => (
    <div className={classNames('message', {
        'message--isme':      isMe,
        "message--is-typing": isTyping,
        "message--image":     attachments && attachments.length === 1,
    })}>
        <div className="message__content">
            <IconRead isMe={isMe} isRead={isRead} />
            <div className="message__avatar">
                <img src={avatar} alt={`Avatar ${user.name}`}/>
            </div>
            <div className="message__info">
                {(text || isTyping) && (<div className="message__bubble">
                    {text && <p className="message__text">{text}</p>}
                    {isTyping && (<div className="message__typing">
                        <span/>
                        <span/>
                        <span/>
                    </div>)}
                </div>)}
                <div className="message__attachments">
                    {
                        attachments && attachments.map(attachment => (
                            <div key={attachment.filename} className="message__attachments-item">
                                <img src={attachment.url} alt={attachment.filename}/>
                            </div>
                        ))
                    }
                </div>
                {date && (<span className="message__date"><Time date={date}/></span>)}
            </div>
        </div>
    </div>
);

Message.defaultProps = {
    user: {},
}

Message.propTypes = {
    avatar:     PropTypes.string,
    text:       PropTypes.string,
    date:       PropTypes.string,
    user:       PropTypes.object,
    attachment: PropTypes.array,
    isTyping:   PropTypes.bool,
    isMe:       PropTypes.bool,
    isRead:       PropTypes.bool,
}

export default Message;
