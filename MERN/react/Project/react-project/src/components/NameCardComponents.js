import React, { Component } from 'react';

class PersonComponent extends Component{
    render(){
        return(
            <div className='card'>
                <h1>
                {this.props.lastName}, {this.props.firstName}
                </h1>
                <p>Age: {this.props.age}</p>
                <p>Hair Color: {this.props.hairColor}</p>
            </div>
        );
    }
}

export default PersonComponent;