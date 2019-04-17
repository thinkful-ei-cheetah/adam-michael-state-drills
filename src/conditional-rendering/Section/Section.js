import React from 'react';

export default class Section extends React.Component {
  renderDisplay = () => {
    if (this.props.clickedView === this.props.id) {
      return (
        <p>{this.props.content}</p>
      )
    }
  }

  render() {
    return (
      <li className='accordion-section'>
        <button onClick={() => this.props.showSection(this.props.id)}>{this.props.title}</button>
        {this.renderDisplay()}
      </li>
    )
  }
}