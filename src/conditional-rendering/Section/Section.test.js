import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Section from './Section';

const section = {title: 'Foo', content: 'Hey, this is the content for Foo'}

describe('Section Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Section 
        title={section.title}
        content={section.content}
        key={0}
        id={0}
        showSection={() => {}} 
        clickedView={null}
      />,
      div
    )
    ReactDOM.unmountComponentAtNode(div);
  })
})