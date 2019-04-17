import React from 'react';
import ReactDOM from 'react-dom';
// import HelloWorld from './state-drills/HelloWorld';
//import Bomb from './state-drills/Bomb';
import RoulettGun from './state-drills/RoulettGun'
import './index.css';

ReactDOM.render(<RoulettGun bulletInChamber={4}/>, document.getElementById('root'));
