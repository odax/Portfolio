import React, { Component } from 'react'
import './MainView.css';
// import coffee from '../../assets/desktop_assets/coffee.png';
import GitHub_Logo from '../../assets/desktop_assets/GitHub_Logo.png';
import grafitti from '../../assets/desktop_assets/grafitti.png';
import linkedin from '../../assets/desktop_assets/linked-in-logo-key.png';
// import logsnow from '../../assets/desktop_assets/logsnow.png';
import name from '../../assets/desktop_assets/namesingle.png';
// import namebar from '../../assets/desktop_assets/namebar.png';
// import submit from '../../assets/desktop_assets/submit.png';
// import tech from '../../assets/desktop_assets/tech.png';
// import vivahands from '../../assets/desktop_assets/Vivahands.png';
import abstract from '../../assets/desktop_assets/abstract.png';

export default class MainView extends Component {
  render() {
    return (
      <div className = 'main_container'>
        <div className = 'center_container'>
          <div className = 'header'>
            <div className = 'header_name'>
              Nalee Riddell
            </div>
            <div className = 'header_nav'>
              <span>Apps</span>
              <span>Skills</span>
              <span>Contact</span>
            </div>
            <div className = 'header_links'>
              <img src = {GitHub_Logo} className='github' alt = 'github'/>
              <img src = {linkedin} className='linkedin' alt = 'linked in'/>
            </div>
          </div>
          <div className = 'title'>
            <img src = {abstract} className='abstract' alt = 'abstract art'/>
            <img src = {name} className= 'name' alt = 'Nalee Riddell'/>
            <img src = {grafitti} className = 'grafitti' alt = 'grafitti art'/>
          </div>
        </div>
      </div>
    )
  }
}
