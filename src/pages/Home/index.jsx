import React from 'react';
import {Message} from "../../components";

import './Home.scss'

const Home = () => {
    return (
        <section className="home">
            <Message
                avatar="https://yt3.ggpht.com/a/AGF-l7-xYUBIWqK4Q3hGZq6FYC067coxhgbsS5ltzQ=s900-c-k-c0xffffffff-no-rj-mo"
                text="Всем хаю хай, с вами Иван Гай"
                date={new Date(2021, 7, 1)}
            />
            <Message
                avatar="https://yt3.ggpht.com/ytc/AKedOLTijAt50xs4q-EroOSXSNXel4ykJaoezqYwhL1M4w=s900-c-k-c0x00ffffff-no-rj"
                text="Hello, World"
                date={new Date(2021, 6, 15)}
                isMe={true}
                isRead={true}
            />
        </section>
    );
};

export default Home;
