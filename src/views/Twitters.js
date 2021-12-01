import React from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Card from "../components/molecules/Card/Card";
import GridTemplate from "../templates/GridTemplate";

// props comes from connect()() !!!
const Twitters = ({ twitters }) => {
    return (
        <GridTemplate pageType="twitters">
            <>
                {twitters.map(item => <Card
                    key={item.id}
                    cardType="twitters"
                    id={item.id}
                    title={item.title}
                    content={item.content}
                    created={item.created}
                    twitterName={`https://unavatar.now.sh/twitter/${item.twitterName}`}
                />)}
            </>
        </GridTemplate>
    );
};

const mapStateToProps = (state) => {
    const { twitters } = state
    // return { twitters: twitters } same as:
    return { twitters }
}

Twitters.propTypes = {
    twitters: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        // cardType: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        twitterName: PropTypes.string.isRequired,
        created: PropTypes.string.isRequired
    }))
}

Twitters.defaultProps = {
    twitters: [],
}

// connect wraps component Twitters into function map...
export default connect(mapStateToProps)(Twitters);