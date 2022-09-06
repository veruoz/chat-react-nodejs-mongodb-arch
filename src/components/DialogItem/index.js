import React from 'react';
import classNames from "classnames";
import './DialogItem.scss'
import {IconRead, Time} from "../../components";

const getAvatar = avatar => {
    if (avatar) {
        return (
            <img src="https://alluserpics.com/data/media/17/03178.jpg" alt={`avatar`}/>
        )
    } else {
    }
}

const DialogItem = ({ user, message, unRead }) => (
    <div className={classNames("dialogs__item", { "dialogs__item--online": user.isOnline })}>
        <div className="dialogs__item-avatar">
            {/*<img src={user.fullname} alt={`${user.fullname} avatar`}/>*/}
            {getAvatar('https://alluserpics.com/data/media/17/03178.jpg')}

        </div>
        <div className="dialogs__item-info">
            <div className="dialogs__item-info-top">
                <b>Федор Достоевский</b>
                <span>
                    {/*<Time date={new Date()}/>*/}
                    13:05
                </span>
            </div>
            <div className="dialogs__item-info-bottom">
                <p>Хоть убей, следа не видно, Сбились мы, что делать нам? В поле бес нас водит, видно, Да кружит по
                    сторонам.</p>
                <IconRead isMe={true} isRead={false}/>
                {unRead > 0 && <div className="dialogs__item-info-bottom-count">{unRead > 99 ? '+99' : unRead}</div>}
            </div>
        </div>
    </div>
);

export default DialogItem;
