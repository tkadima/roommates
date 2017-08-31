import React from 'react';

export class Chore extends React.Component{
    handleRemoveChore() {
        this.props.onChoreDelete(this.props.chore);
        return false;
    }

    render() {
        return (
        <tr>
            <td>{this.props.chore.name}</td>
            <td>{this.props.chore.frequency}</td>
            <td>
                <button className="btn btn-danger" onClick={this.handleRemoveChore}>
                    <span className="glyphicon glyphicon-remove"></span>
                </button>
            </td>
        </tr>);
    }
}