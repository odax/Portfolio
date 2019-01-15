import React, { Component } from "react";
import "./MainView.css";
import ContactForm from "./ContactForm";
import coffee from "../../assets/desktop_assets/coffee.png";
import GitHub_Logo from "../../assets/desktop_assets/GitHub_Logo.png";
import grafitti from "../../assets/desktop_assets/grafitti.png";
import linkedin from "../../assets/desktop_assets/linked-in-logo-key.png";
import logsnow from "../../assets/desktop_assets/logsnow.png";
import name from "../../assets/desktop_assets/namesingle.png";
import tech from "../../assets/desktop_assets/tech.png";
import vivahands from "../../assets/desktop_assets/Vivahands.png";
import abstract from "../../assets/desktop_assets/abstract.png";
import Fade from 'react-reveal/Fade';

export default class MainView extends Component {
  render() {
    return (
      <div className="main_container">
        <div className="center_container">
          <div className="header">
            <div className="header_nav">
              <a href="#appsid" className="header_nav_button">
                Apps
              </a>
              <a href="#skillsid" className="header_nav_button">
                Skills
              </a>
              <a href="#contactid" className="header_nav_button">
                Contact
              </a>
            </div>
            <div className="header_links">
              <a target="_blank" href="https://github.com/odax">
                <img src={GitHub_Logo} className="github" alt="github" />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/nalee-riddell/"
              >
                <img src={linkedin} className="linkedin" alt="linked in" />
              </a>
            </div>
          </div>
          <div className="title">
            <img src={abstract} className="abstract" alt="abstract art" />
            <img src={name} className="name" alt="Nalee Riddell" />
            <img src={grafitti} className="grafitti" alt="grafitti art" />
          </div>
          <div id='appsid'></div>
          <a className="apps">
            <div className="apps_top">
              <span className="apps_title">Web Apps</span>
              <span className="apps_playstore"></span>
            </div>
            <div className="apps_main">
              <div className="apps_main_one">
                <div>
                  <img
                    src={vivahands}
                    className="vivahands_img"
                    alt="vivahands app"
                  />
                </div>
                <div className="vivahands_title_site">
                  <span className="vivahands_title">MapScratcher</span>
                  <span className="vivahands_site">scratch-n-map.herokuapp.com</span>
                </div>
                <div className="vivahands_info">
                  MapScratcher is an application for those interested in traveling. Keep track of where you've been and where you want to go! Just scratch the map! Connect with facebook friends and see their travels too! Written in MERN and deployed on Heroku.
                </div>
              </div>
              <div className="apps_main_two">
                <div>
                  <img
                    src={logsnow}
                    className="logsnow_img"
                    alt="logsnow app"
                  />
                </div>
                <div className="logsnow_title_site">
                  <span className="logsnow_title">Notee X</span>
                  <span className="logsnow_site">https://noteapp-97e6a.firebaseapp.com/</span>
                </div>
                <div className="logsnow_info">
                  Notee X is a private and public note-taking app. Write down notes for yourself or for others to read! Written with react, redux, and firebase. Deployed on firebase.
                </div>
              </div>
            </div>
          </a>
          <img src={tech} className="tech_img" alt="tech background" />
          <div id='skillsid'></div>
          <div className="skills">
            <div className="skills_right">
              <div className="skills_header_1">
                <span className="skills_title">Skills</span>
                <span className="skills_language">
                  markup/language/framework
                </span>
              </div>
              <div className="skills_language_items">
                <ul>
                  <Fade right>
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
                  </Fade>
                </ul>
              </div>
              <div className="skills_header_2">
                <span>style/approach</span>
              </div>
              <div className="skills_approach_items">
                <ul>
                  <Fade right>
                  <li>CRUD</li>
                  <li>REST</li>
                  <li>Trello</li>
                  <li>Figma</li>
                  </Fade>
                </ul>
              </div>
              <div className="skills_header_3">
                <span>version control</span>
              </div>
              <div className="skills_version_items">
                <ul>
                  <Fade right>
                  <li>GIT</li>
                  <li>Bash</li>
                  <li>Command Line</li>
                  </Fade>
                </ul>
              </div>
            </div>
          </div>
          <img src={coffee} className="coffee_img" alt="coffee shop" />
          <div id='contactid'></div>
          <ContactForm />
          <div className="fineprint">
            Designed and created by Nalee Riddell using Figma and VSCode. To see
            more work please visit  Github.com/odax.
          </div>
        </div>
      </div>
    );
  }
}
