import React, { Component } from 'react';

class Exercise1 extends Component {

    constructor() {
        super()
        this.state = {
            name: "",
            age: ""
        }
    }
    alertText = () => {
        alert(`Come in ${this.state.name}, you're ${this.state.age} - that's good enough`)
    }
    handleInputChange = event => {
        const value = event.target.value,
        name = event.target.name
        this.setState({
            [name]: value
        })

    }
    render() {
        return (
            <div>
                <input id="name-input" onChange={this.handleInputChange} value={this.state.name} name='name' />
                <input id="age-input" onChange={this.handleInputChange} value={this.state.age} name='age' />
                <button onClick={this.alertText} >Go to Bar</button>
            </div>
        );
    }
}

export default Exercise1;