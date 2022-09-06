import React from 'react';
import {DialogItem, Message} from "../../components";

import './Home.scss'

const Home = () => {
    return (
        <section className="home">
            <div className="dialogs">
                <DialogItem user={{
                    fullname: '',
                    isOnline: true,
                }} unRead={99} />
                <DialogItem user={{
                    fullname: '',
                }} unRead={0} />
            </div>
            {/*<Dialogs*/}
            {/*    items = {[*/}
            {/*        {*/}
            {/*            user: {*/}
            {/*                fullname: 'Федор Достоевский',*/}
            {/*                avatar: null*/}
            {/*            },*/}
            {/*            message: {*/}
            {/*                text: 'Хоть убей, следа не видно, Сбились мы, что делать нам? В поле бес нас водит, видно, Да кружит по сторонам.',*/}
            {/*                isReaded: false,*/}
            {/*                created_at: new Date()*/}
            {/*            }*/}
            {/*        }*/}
            {/*    ]}*/}
            {/*/>*/}
            {/*<Message*/}
            {/*    avatar="https://alluserpics.com/data/media/17/03178.jpg"*/}
            {/*    text="Всем хаю хай, с вами Иван Гай"*/}
            {/*    date={new Date(2021, 7, 1)}*/}
            {/*    attachments={[*/}
            {/*        {*/}
            {/*            filename: 'image1.jpg',*/}
            {/*            url: 'https://source.unsplash.com/random/100x100/?random=1'*/}
            {/*        },*/}
            {/*        {*/}
            {/*            filename: 'image2.jpg',*/}
            {/*            url: 'https://source.unsplash.com/random/100x100/?random=2'*/}
            {/*        },*/}
            {/*        {*/}
            {/*            filename: 'image3.jpg',*/}
            {/*            url: 'https://source.unsplash.com/random/100x100/?random=3'*/}
            {/*        },*/}
            {/*    ]}*/}
            {/*/>*/}
            {/*<Message*/}
            {/*    avatar="https://alluserpics.com/data/media/17/03172.jpg"*/}
            {/*    text="Мне казалось, что квест это что-то веселое, а тут вообще не весело 😐"*/}
            {/*    date={new Date(2021, 6, 15)}*/}
            {/*    isMe={true}*/}
            {/*    isRead={true}*/}

            {/*/>*/}
            {/*<Message*/}
            {/*    avatar="https://alluserpics.com/data/media/17/03178.jpg"*/}
            {/*    attachments={[*/}
            {/*        {*/}
            {/*            filename: 'image1.jpg',*/}
            {/*            url: 'https://source.unsplash.com/random/100x100/?random=1'*/}
            {/*        },*/}
            {/*    ]}*/}
            {/*/>*/}
            {/*<Message*/}
            {/*    avatar="https://alluserpics.com/data/media/17/03178.jpg"*/}
            {/*    isTyping={true}*/}
            {/*/>*/}
        </section>
    );
};

export default Home;
