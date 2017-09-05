import React from 'react';
import Chore from '../elements/Chore';


export class ChoresPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.state.choresList = [
                {id: 0, name: "Vacuum", frequency: "Weekly"},
                {id: 1, name: "Sweep", frequency: "Daily"},
                {id: 2, name: "Wash dishes", frequency: "Daily"}
            ]
        }

    // find the index of the chore in the list and delete it
    handleChoreDelete(chore) {
        var index = this.state.choresList.indexOf(chore);
        this.state.choresList.splice(index, 1);

        // reset the state
        this.setState(this.state.choresList);
    }

    handleChoreAdd() {
        // needs a unique key
        var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
        // this creates a new row
        var chore = {
            id: id,
            name: "",
            frequency: ""
        };
        this.state.choresList.push(chore);
        // update state
        this.setState(this.state.choresList);
    }

    render() {
        var self = this;
        var chore = this.state.choresList.map(function (chore) {
            return (<Chore chore={chore} onDeleteEvent={self.state.handleChoreDelete.bind(self)} key={chore.id}/> )
        });

        return (
            <div className="body-content">
                <table className="table">
                    <tbody>
                    {chore}
                    </tbody>
                </table>
                <div className="table-footer btn-group">
                    <button className="btn btn-info">
                        <span className="glyphicon glyphicon-floppy-disk"/>
                        Save
                    </button>
                    <button className="btn btn-success pull-right" onClick={this.state.handleChoreAdd}>
                        <span className="glyphicon glyphicon-plus"/>
                        Add New
                    </button>
                </div>
            </div>
        )
    }
}

export default ChoresPage;