import React from 'react';


export class FrequencySelect extends React.Component {
    render() {
        return (<select className="form-control">
            <option>Daily</option>
            <option>Weekly</option>
            <option>Fortnightly</option>
            <option>Monthly</option>
            <option>Annually</option>
        </select>);
    }
}

export default FrequencySelect;