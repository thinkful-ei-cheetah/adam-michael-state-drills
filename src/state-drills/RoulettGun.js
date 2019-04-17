import React from 'react';

export default class RoulettGun extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            chamber: null,
            spinningTheChamber: false
        }
    }
    
    
    handleClick = e => {
        this.setState({
            spinningTheChamber: true
        })
    }


    render(){
        return(
            <div>
                <button onClick={this.handleClick}>Pull the trigger!</button>
                <p>{this.state.spinningTheChamber && 'spinning the chamber and pulling the trigger!'}</p>
            
            </div>
        )
    }
}
