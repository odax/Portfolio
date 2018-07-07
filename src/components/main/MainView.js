import React, { Component } from 'react'
import './MainView.css';
import coffee from '../../assets/desktop_assets/coffee.png';
import GitHub_Logo from '../../assets/desktop_assets/GitHub_Logo.png';
import grafitti from '../../assets/desktop_assets/grafitti.png';
import linkedin from '../../assets/desktop_assets/linked-in-logo-key.png';
import logsnow from '../../assets/desktop_assets/logsnow.png';
import name from '../../assets/desktop_assets/namesingle.png';
// import namebar from '../../assets/desktop_assets/namebar.png';
// import submit from '../../assets/desktop_assets/submit.png';
import tech from '../../assets/desktop_assets/tech.png';
import vivahands from '../../assets/desktop_assets/Vivahands.png';
import abstract from '../../assets/desktop_assets/abstract.png';
import line from '../../assets/desktop_assets/Line.png';

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
              <span className='header_nav_button'>Apps</span>
              <span className='header_nav_button'>Skills</span>
              <span className='header_nav_button'>Contact</span>
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
          <div className = 'apps'>
            <div className ='apps_top'>
              <span className = 'apps_title'>Apps</span>
              <span className = 'apps_playstore'>availible on the playstore</span>
            </div>
            <div className ='apps_line'>
              <img src = {line} className='line_img' alt = 'line'/>
            </div>
            <div className = 'apps_main'>
              <div className = 'apps_main_one'>
                <div>
                  <img src = {vivahands} className='vivahands_img' alt = 'vivahands app'/>
                </div>
                <div className = 'vivahands_title_site'>
                  <span className = 'vivahands_title'>Viva Hands</span>
                  <span className = 'vivahands_site'>vivahands.com</span>
                </div>
                <div className = 'vivahands_info'>
                  Vivahands is a live hand-holding application. Hold hands with your loved ones no
                  matter the distance between.
                </div>
              </div>
              <div className = 'apps_main_two'>
                <div>
                  <img src = {logsnow} className='logsnow_img' alt = 'logsnow app'/>
                </div>
                <div className = 'logsnow_title_site'>
                  <span className = 'logsnow_title'>Logs Now</span>
                  <span className = 'logsnow_site'>logsnow.com</span>
                </div>
                <div className = 'logsnow_info'>
                  Logs Now is a utility designed to connect campers to local firewood suppliers
                  and vice-versa.
                </div>
              </div>
            </div>
          </div>
          <img src = {tech} className='tech_img' alt = 'tech background'/>
          <div className = 'skills'>
            <div className = 'skills_right'>
              <div className = 'skills_header_1'>
                <span className = 'skills_title'>Skills</span>
                <span className = 'skills_language'>markup/language/framework</span>
              </div>
              <div className = 'skills_line'>
                <img src = {line} className='line_img' alt = 'line'/>
              </div>
                <div className = 'skills_language_items'>
                  <ul>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>LESS</li>
                    <li>SASS</li>
                    <li>Javascript</li>
                    <li>React</li>
                    <li>Redux</li>
                    <li>Node</li>
                    <li>Express</li>
                    <li>MongoDB</li>
                    <li>Passport</li>
                    <li>WebTokens</li>
                    <li>Jest</li>
                    <li>C</li>
                  </ul>
                </div>
                <div className = 'skills_header_2'>
                  <span>style/approach</span>
                </div>
                <div className = 'skills_line'>
                  <img src = {line} className='line_img' alt = 'line'/>
                </div>
                <div className = 'skills_approach_items'>
                  <ul>
                    <li>CRUD</li>
                    <li>REST</li>
                    <li>Trello</li>
                    <li>Figma</li>
                  </ul>
                </div>
                <div className = 'skills_header_3'>
                  <span>version control</span>
                </div>
                <div className = 'skills_line'>
                  <img src = {line} className='line_img' alt = 'line'/>
                </div>
                <div className = 'skills_version_items'>
                  <ul>
                    <li>GIT</li>
                    <li>Bash</li>
                    <li>Command Line</li>
                  </ul>
                </div>
            </div>
          </div>
          <img src = {coffee} className='coffee_img' alt = 'coffee shop'/>
          <div className = 'contact_form'>
            <div className = 'contact_form_header'>
              <div className = 'contact_form_header_title'>
                Contact
              </div>
              <div className = 'contact_form_header_via'>
                via below or email
              </div>
              <div className = 'contact_form_header_email'>
                nr10@albion.edu
              </div>
            </div>
            <div className = 'contact_line'>
            line
            </div>
              <form className = 'form'>

              </form>
          </div>
        </div>
      </div>
    )
  }
}

