import React from 'react';

export class ChoresPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            task:"",
            description: "",
            frequency: "",
            chores: []
        }
    }

    render() {
        return (
            <div className="container">
                <div className="chore-form col-lg-4 col-md-4 col-sm-4">
                    <form>
                        <div className="form-group">
                            <h4 className="title">Add New Chore</h4>
                            <label for="choreName">Give a title for the chore</label>
                            <input className="form-control" type="text" placeholder="e.g. Dishes"/>
                            <label for="choreName">Describe the task</label>
                            <textarea className="form-control" type="text"
                                      placeholder="e.g. load the dishwasher, hand-wash pans"/>
                            <label for="choreName">How often does it need to be done?</label>
                            <select className="form-control">
                                <option>Weekly</option>
                                <option>Fortnightly</option>
                                <option>Monthly</option>
                                <option>Annually</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
                <div className="chore-list col-lg-8">
                    <table className="table table-hover">
                        <thead>
                        <th>Task</th>
                        <th>Description</th>
                        <th>Frequency</th>
                        <th></th>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Vacuum</td>
                            <td>vacuum all the carpeted areas in the apartment and empty out the apartment</td>
                            <td>Weekly</td> </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
