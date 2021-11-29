import React from 'react';
import Sidebar from "../components/organisms/Sidebar";
import UserPageTemplate from "../templates/UserPageTemplate";

const Notes = () => {
    return (
        <UserPageTemplate pageType="note">
            <Sidebar/>
            <h1>notes</h1>
        </UserPageTemplate>
    );
};

export default Notes;