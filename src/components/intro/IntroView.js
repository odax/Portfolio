import React, { Component } from 'react';
import Quote from './Quote.js';
import './IntroView.css';

//assets
import grafitti from '../../assets/intro_desktop_assets/grafitti.png';
import mosaic from '../../assets/intro_desktop_assets/mosaic.png';
import name from '../../assets/intro_desktop_assets/name.png';

class IntroView extends Component {
  render() {
    return (
      <div className = 'introView_ parent'>
        <div className = 'introView_children'>
          <img src = {grafitti} className = 'intro_grafitti' alt = 'stylish one'/>
          <img src = {name} className = 'intro_name' alt = 'Full Stack Developer Nahlee Riddell'/>
          <Quote/>
          <img src = {mosaic} className='intro_mosaic' alt = 'stylish two'/>
        </div>
      </div>
    )
  }
}
export default IntroView;