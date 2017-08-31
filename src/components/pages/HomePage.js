import React from 'react';
import {ProfilePage} from "../elements/ProfilePanel";

export class HomePage extends React.Component {

    render() {
        return (<div className="body-content">
            <ProfilePage/>
        </div>);
    }
}

export default HomePage;