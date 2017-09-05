import React from 'react';

export class Chore extends React.Component{
    handleRemoveChore() {
        this.props.onDeleteEvent(this.props.chore);
        return false;
    }

    render() {
        return (
        <tr>
            <td key={this.props.chore.name}>{this.props.chore.name}</td>
            <td key={this.props.chore.frequency}>{this.props.chore.frequency}</td>
            <td key={0}>
                <button className="btn btn-danger" onClick={this.handleRemoveChore}>
                    <span className="glyphicon glyphicon-remove"></span>
                </button>
            </td>
        </tr>);
    }
}
export default Chore;