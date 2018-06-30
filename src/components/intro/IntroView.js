import React, { Component } from 'react';
import Quote from './Quote.js';
import { Link } from 'react-router-dom';
import './IntroView.css';

//assets
import grafitti from '../../assets/intro_desktop_assets/grafitti.png';
import mosaic from '../../assets/intro_desktop_assets/mosaic.png';
import name from '../../assets/intro_desktop_assets/name.png';

class IntroView extends Component {
  render() {
    return (
      <div className = 'introView_parent'>
          <img src = {mosaic} className='intro_mosaic' alt = 'artwork background'/>

          <div className = 'nameContainer'>
            <img src = {name} className = 'intro_name' alt = 'Full Stack Developer Nahlee Riddell'/>
          </div>
          <Quote/>
          <div className = 'text_container'>
              <Link to = "/main" style={{ textDecoration: 'none' }}>
                <div className = 'text'>Continue</div>
              </Link>
          </div>
          <img src = {grafitti} className = 'intro_grafitti' alt = 'brick wall with grafitti'/>
      </div>
    )
  }
}
export default IntroView;