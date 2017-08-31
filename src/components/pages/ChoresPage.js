import React from 'react';
//import Main from "../elements/Main";
import FrequencySelect from "../elements/FrequencySelect";


export class ChoresPage extends React.Component {
    render () {
        return (
            <div className="body-content">
                    <table className="table">
                        <tbody>

                        </tbody>
                    </table>
                <div className="table-footer btn-group">
                    <button className="btn btn-info">
                        <span className="glyphicon glyphicon-floppy-disk" />
                        Save
                    </button>
                    <button className="btn btn-success">
                        <span className="glyphicon glyphicon-plus" />
                        Add Chore
                    </button>
                </div>
                </div>
        )
    }
}

export default ChoresPage;