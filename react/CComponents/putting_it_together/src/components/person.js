import React, { Component } from 'react';

class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = { age: this.props.age};
    }
    ageUp = () => {
        this.setState({ age: this.state.age + 1});
    }
    render() {
        const { lastName, firstName, hairColor } = this.props;
        return (
            <div>
                <h1>{lastName}, {firstName}</h1>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {hairColor}</p>
                <button onClick={this.ageUp}>Birthday Button for {firstName}</button>
            </div>
        );
    }
}

export default PersonCard;
