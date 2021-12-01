import React from 'react';
import Card from "../components/molecules/Card/Card";
import GridTemplate from "../templates/GridTemplate";
import {connect} from "react-redux";


const Articles = ({articles}) => {
    return (
        <GridTemplate pageType="articles">
            <>
                {articles.map(item => <Card
                    key={item.id}
                    cardType="articles"
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

const mapStateToProps = ({ articles }) => {
    return { articles }
}

export default connect(mapStateToProps)(Articles);