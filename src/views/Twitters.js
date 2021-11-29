import React from 'react';
import UserPageTemplate from "../templates/UserPageTemplate";
import Card from "../components/molecules/Card/Card";


const twitters = [
    {
        id: 1,
        title: 'Hello Roman',
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
        created: '1 day',
        twitterName: 'hello_roman',
    },
    {
        id: 2,
        title: 'Redux guy',
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
        created: '1 day',
        twitterName: 'dan_abramov',
    },
    {
        id: 3,
        title: 'React router stuff',
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
        created: '5 days',
        twitterName: 'mjackson',
    },
    {
        id: 4,
        title: 'Super animacje!',
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
        created: '10 days',
        twitterName: 'sarah_edo',
    },
];

const Twitters = () => {
    return (
        <UserPageTemplate pageType="twitter">
            {twitters.map(item => <Card
                key={item.id}
                cardType="twitter"
                title={item.title}
                content={item.content}
                created={item.created}
                twitterName={`https://unavatar.now.sh/twitter/${item.twitterName}`}
            />)}
        </UserPageTemplate>
    );
};

export default Twitters;