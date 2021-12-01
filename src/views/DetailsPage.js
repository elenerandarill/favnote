import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import DetailsTemplate from "../templates/DetailsTemplate";
import {routes} from "../routes";

const DetailsPage = ({match}) => {
    const [pageType, setPageType] = useState("notes")

    useEffect(() => {getPageType()}, )

    const getPageType = () => {
        switch(match.path) {
            case routes.twitter:
                setPageType("twitters")
                break
            case routes.article:
                setPageType("articles")
                break
            default:
                setPageType("notes")
        }
    }

    const dummyArticle = {
        id: 1,
        title: 'Wake me up when Vue ends',
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
        twitterName: 'hello_roman',
        articleUrl: 'https://youtube.com/helloroman',
        created: '1 day',
    };

    return (
        <>
            <DetailsTemplate
                pageType={pageType}
                title={dummyArticle.title}
                created={dummyArticle.created}
                content={dummyArticle.content}
                articleUrl={dummyArticle.articleUrl}
                twitterName={dummyArticle.twitterName}
            />
        </>
    )
}

DetailsPage.propTypes = {
    match: PropTypes.object.isRequired,
};

export default DetailsPage;