import Card from "../components/molecules/Card/Card";
import React from "react";
import GridTemplate from "../templates/GridTemplate";
import {connect} from "react-redux";


const Notes = ({ notes }) => {
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

const mapStateToProps = ({ notes }) => {
    return { notes }
}

export default connect(mapStateToProps)(Notes);