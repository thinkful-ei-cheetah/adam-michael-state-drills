import React from 'react';

class Bomb extends React.Component {
  state = {
    count: 0,
    counter: ''
  }

  componentDidMount() {
    const id = setInterval(() => {
      this.setState({
        count: this.state.count + 1
      })      
    }, 1000)

    this.setState({
      counter: id
    })
  }

  componentWillMount() {
    clearInterval(this.state.counter)
  }

  displayText() {
    if (this.state.count >= 8) {
      clearInterval(this.state.counter)
      return 'BOOM!!!'
    } else if (this.state.count % 2 === 0) {
      return 'tick'
    } else {
      return 'tock'
    }
  }

  render() {
    return (
      <div>
        <p>
          Count: {this.state.count}
        </p>
        <p>{this.displayText()}</p>
      </div>
    )
  }
}

export default Bomb;