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
        setTimeout(()=> {
            this.setState({
                chamber: Math.ceil(Math.random() * 8),
                spinningTheChamber: false
            })
        }, 2000)
        console.log(this.props.bulletInChamber);
    }
    result = () =>{
        return (this.props.bulletInChamber === this.state.chamber) ?'BANG!!!' : "You're safe!";
    }

    render(){
        return(
            <div>
                <button onClick={this.handleClick}>Pull the trigger!</button>
                <p>{this.state.spinningTheChamber && 'spinning the chamber and pulling the trigger!'}</p>
                <p>{(this.state.chamber && this.result())}</p>
            
            </div>
        )
    }
}
