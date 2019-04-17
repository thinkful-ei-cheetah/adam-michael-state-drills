import React from 'react';
import './Accordion.css'
import Section from '../Section/Section';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      sections: this.props.sections,
      clickedView: null
    }
  }

  showSection = (value) => {
    this.setState({
      clickedView: value
    })
  }

  render() {
    const accordion = this.state.sections.map((section, index) => {
      return (
        < Section 
          title={section.title}
          content={section.content}
          key={index}
          id={index}
          showSection={this.showSection} 
          clickedView={this.state.clickedView}
        />
      )
    })

    return (
      <ul>
        {accordion.length ? accordion : <li></li>}
      </ul>
    );
  }
}