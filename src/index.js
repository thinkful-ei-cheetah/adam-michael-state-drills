import React from 'react';
import ReactDOM from 'react-dom';
// import HelloWorld from './state-drills/HelloWorld';
//import Bomb from './state-drills/Bomb';
// import RoulettGun from './state-drills/RoulettGun'
import Accordion from './conditional-rendering/Accordion/Accordion';
import './index.css';

const sections = [
  {title: 'Foo', content: 'Hey, this is the content for Foo'},
  {title: 'Bar', content: 'And, this is the better content for Bar'},
  {title: 'Baz', content: 'Andddd, this is the best content for Baz'}
]

ReactDOM.render(<Accordion sections={sections}/>, document.getElementById('root'));
