import React from 'react';

export class Chore extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <tr>
                <td>{this.props.data.name}</td>

                <td>{this.props.data.description}</td>

                <td>{this.props.data.frequency}</td>
                <td className="glyphicon glyphicon-trash" onClick={() => {
                    this.props.deleteRow(this.props.row)
                }}></td>
                <td className="glyphicon glyphicon-edit" onClick={() => {
                    this.props.editRow(this.props.row)
                }}></td>
            </tr>

        );
    }
}
