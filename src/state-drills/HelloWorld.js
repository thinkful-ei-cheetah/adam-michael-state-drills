import React from 'react';

export default class HelloWorld extends React.Component {
    state ={
        who: 'world'
    }
     handleClick = (e) => {
         this.setState({
             who: e.target.innerText
         })
     }

    render(){
        return(
            <div>
                <p>Hello {this.state.who}</p>
                <button onClick={(e) => this.handleClick(e)}>World</button>
                <button onClick={(e) => this.handleClick(e)}>Friend</button>
                <button onClick={(e) => this.handleClick(e)}>React</button>
            </div>
        )
    }
}