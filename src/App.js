import React from 'react';
import './style.css';
import { Link, Route } from 'react-router-dom';
import {HomePage } from './components/pages/HomePage';
import { ChoresPage } from './components/pages/ChoresPage';

export class App extends React.Component {
    getInitialState() {
        return {choresList: this.props.chores};
    }

    handleNewRowSubmit(newChore) {
        this.setState({choresList: this.state.choresList.concat([newChore])});
    }

    handleChoreRemove(chore) {
        
    }
    render() {
        return (
            <div>
                <nav className="navbar navbar-fixed-top">
                    <a className="navbar-brand" href="">Roommates</a>
                    <ul className="nav navbar-nav">
                        <li><Link to="/profile">Profile</Link></li>
                        <li><Link to="/chores">Manages Chores</Link></li>
                    </ul>
                </nav>
                <div className="container">
                    {<Route path="/profile" component={HomePage}></Route>}
                    <Route path="/chores" component={ChoresPage}></Route>
                </div>
            </div>
        );
    }
}

export default App;
