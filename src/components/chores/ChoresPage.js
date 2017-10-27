import React from 'react';
import {Chore} from './Chore';

export class ChoresPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            input: 'Submit',
            name: '',
            description: '',
            frequency: '',
            chores: []
        };

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        if (this.submitInput.value == 'Submit') {
            const obj = {
                name: this.state.name,
                description: this.state.description,
                frequency: this.state.frequency
            };
            this.setState({
                chores: [...this.state.chores, obj],
                name: '',
                description: '',
                frequency: ''
            });
        } else if (this.submitInput.value == 'Edit') {
            const pos = Number(this.rowRef.value);
            this.state.chores[pos].name = this.inputName.value;
            this.state.chores[pos].description = this.inputDescription.value;
            this.state.chores[pos].frequency = this.inputFrequency.value;
            this.submitInput.value = 'Submit';
            this.clearInputs();

            this.forceUpdate();
        }
    }

    clearInputs() {
        this.inputName.value = '';
        this.inputDescription.value = '';
        this.inputFrequency.value = '';
        this.state.name = '';
        this.state.description = '';
        this.state.frequency = '';
    }

    deleteRow(row) {
        var pos = this.state.chores.indexOf(row);
        this.setState({chores: this.state.chores.slice(0, pos)});
        this.clearInputs();
    }

    editRow(row) {
        var pos = this.state.chores.indexOf(row);
        this.inputName.value = this.state.chores[row].name;
        this.state.name = this.state.chores[row].name;
        this.inputDescription.value = this.state.chores[row].description;
        this.state.description = this.state.chores[row].description;
        this.inputFrequency.value = this.state.chores[row].frequency;
        this.state.frequency = this.state.chores[row].frequency;
        this.rowRef.value = row;
        this.state.input = 'Edit';
        this.forceUpdate();
    }

    render() {

        return (
            <div className="container">
                <form className="form-horizontal" role="form" onSubmit={this.onSubmit.bind(this)}>
                    <label>Add a new chore</label>
                    <div className="input-group">
                        <span className="input-group-addon">Name Your Chore</span>
                        <input required type="text"
                               ref={(ref) => this.inputName = ref}
                               onChange={event => this.setState({name: event.target.value})}
                               value={this.state.name}
                               className="form-control" placeholder="e.g. Dishes" />
                    </div>
                    <div className="input-group">
                        <span className="input-group-addon">Describe it</span>
                        <textarea type="text"
                                  required ref={(ref) => this.inputDescription = ref}
                                  onChange={event => this.setState({description: event.target.value})}
                                  value={this.state.description}
                                  className="form-control"
                                  placeholder="briefly describes the tasks involved with the task" />
                    </div>
                    <div className="input-group">
                        <span className="input-group-addon">Frequency</span>
                        <input type="frequency"
                               required ref={(ref) => this.inputFrequency = ref}
                               onChange={event => this.setState({frequency: event.target.value})}
                               value={this.state.frequency}
                               className="form-control"
                               placeholder="e.g. Daily, Weekly, Biweekly, Monthly, Annually" />
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <input type="submit" ref={(ref) => this.submitInput = ref} value={this.state.input}
                                   className="btn btn-default"/>
                        </div>
                    </div>

                    <input type="hidden" className="row-ref" value="" ref={(ref) => this.rowRef = ref}/>
                </form>
                <div className="container">
                    <table className="table table-hover">
                        <thead>
                        <tr>
                            <th>Name of Chore</th>
                            <th>Description</th>
                            <th>Frequency</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>

                        {this.state.chores.map((data, index) => {

                            return <Chore editRow={this.editRow.bind(this)} chores={this.state.chores} data={data}
                                          key={index} row={index} deleteRow={this.deleteRow.bind(this)}/>
                        })}

                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}


export default ChoresPage;