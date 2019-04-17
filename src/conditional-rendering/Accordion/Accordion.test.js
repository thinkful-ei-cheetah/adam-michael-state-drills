import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Accordion from './Accordion';

const sections = [
  {title: 'Foo', content: 'Hey, this is the content for Foo'},
  {title: 'Bar', content: 'And, this is the better content for Bar'},
  {title: 'Baz', content: 'Andddd, this is the best content for Baz'}
]

describe('Accordion Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Accordion sections={sections} />, div)
    ReactDOM.unmountComponentAtNode(div);
  })

  it('renders the correct amount of Section components initially', () => {
    const wrapper = shallow(<Accordion sections={sections} />)
    expect(toJson(wrapper).node.rendered.length).toBe(sections.length)
  })

  describe('when an accordion button is clicked', () => {
    it('sets clickView state to section id', () => {
      const wrapper = shallow(<Accordion sections={sections} />)
      wrapper.find('Section').at(0).dive().find('button').simulate('click');
      expect(toJson(wrapper)).toMatchSnapshot();
    })
  })

  describe('when an accordion button is clicked', () => {
    it('shows the correct content', () => {
      const wrapper = shallow(<Accordion sections={sections} />)
      wrapper.find('Section').at(0).dive().find('button').simulate('click');
      const section = wrapper.find('Section').at(0).dive()
      expect(toJson(section)).toMatchSnapshot();
    })
  })

  describe('when an empty array is given', () => {
    it('renders a single empty li', () => {
      const wrapper = shallow(<Accordion sections={[]}/>)
      expect(toJson(wrapper)).toMatchSnapshot();
    })
  })
})

