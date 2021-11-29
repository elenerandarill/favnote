import React from 'react';
import UserPageTemplate from "../templates/UserPageTemplate";
import Card from "../components/molecules/Card/Card";


const articles = [
    {
        id: 1,
        title: 'React on my mind',
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
        articleUrl: 'https://youtube.com/helloroman',
        created: '1 day',
    },
    {
        id: 2,
        title: 'Wish you React',
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
        articleUrl: 'https://youtube.com/helloroman',
        created: '1 day',
    },
    {
        id: 3,
        title: 'You gave React a bad name',
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
        articleUrl: 'https://youtube.com/helloroman',
        created: '5 days',
    },
    {
        id: 4,
        title: 'Is it React you looking for?',
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
        articleUrl: 'https://youtube.com/helloroman',
        created: '10 days',
    },
];

const Articles = () => {
    return (
        <UserPageTemplate pageType="article">
            {articles.map(item => <Card
                key={item.id}
                cardType="article"
                title={item.title}
                content={item.content}
                articleUrl={item.articleUrl}
                created={item.created}
            />)}
        </UserPageTemplate>
    );
};

export default Articles;