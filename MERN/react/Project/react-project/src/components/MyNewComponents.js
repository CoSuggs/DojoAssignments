import React, { Component } from 'react';

class PersonComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            count: this.props.start || this.props.age
        };
    }

    // this method goes inside of the LightSwitch Component
    flipSwitch = () => {
        console.log(this)
        this.setState({
            count: this.state.count += 1
        })
    }
    
    

    render(){
        return(
            <div className='card'>
                <h1>
                {this.props.lastName}, {this.props.firstName}
                </h1>
                <p>Age: {this.state.count}</p>
                <p>Hair Color: {this.props.hairColor}</p>
                <button onClick={ this.flipSwitch }>Birthday button for {this.props.firstName} {this.props.lastName} </button>
            </div>
        );
    }
}

export default PersonComponent;