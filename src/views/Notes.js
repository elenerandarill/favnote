import Card from "../components/molecules/Card/Card";
import React from "react";
import GridTemplate from "../templates/GridTemplate";


const notes = [
    {
        id: 1,
        title: 'Wake me up when Vue ends',
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
        created: '1 day',
    },
    {
        id: 2,
        title: 'Como es An Gular?',
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
        created: '1 day',
    },
    {
        id: 3,
        title: 'Du bist Reactish',
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
        created: '5 days',
    },
    {
        id: 4,
        title: 'Reactuj się kto moze!',
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
        created: '10 days',
    },
];

const Notes = () => {
    return (
        <GridTemplate pageType="notes">
            <>
                {notes.map(item => <Card
                    key={item.id}
                    cardType="notes"
                    id={item.id}
                    title={item.title}
                    content={item.content}
                    articleUrl={item.articleUrl}
                    created={item.created}
                />)}
            </>
        </GridTemplate>
    );
};

export default Notes;