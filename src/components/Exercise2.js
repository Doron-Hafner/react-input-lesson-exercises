import React, { Component } from 'react';

class Exercise2 extends Component {

constructor() {
    super()
    this.state = {
        name: "",
        fruit: ""
    }
}
handleInputChange = (e) => {
    const name = e.target.name,
    value = e.target.value
    this.setState({ [name]: value }, () => {
        console.log(`${this.state.name} select ${this.state.fruit}`);
    })
}

render() {
    return (
        <div>
            <input id="name-input" name='name' onChange={this.handleInputChange} />
            <select id="select-input" name="fruit" onChange={this.handleInputChange} >
                <option value='apple'>apple</option>
                <option value='orange'>orange</option>
                <option value='banana'>banana</option>
                <option value='dragon-fruit'>dragon-fruit</option>
            </select>
        </div>
    );
}
}

export default Exercise2;