import React, { Component } from "react";
import logob from "../logob.png";
import ReactDOM from "react-dom";
import {BrowserRouter,Route,Switch} from "react-router-dom";
import {Attend, Contact, Sponsers, Team, Watch, event1, event2, event3} from "../screens/index" ;


export class Navigation extends Component {
  render() {
    return (
      <nav id="menu" className="navbar-default navbar-fixed-top navbar-dark " role="navigation">
        <div className="container">
        <div className="navbar-header naaz">
        <button
        type="button"
        className="navbar-toggle collapsed"
        data-toggle="collapse"
        data-target="#bs-example-navbar-collapse-1"
      >
        {" "}
        <span className="sr-only">Toggle navigation</span>{" "}
        <span className="icon-bar"></span>{" "}
        <span className="icon-bar"></span>{" "}
        <span className="icon-bar"></span>{" "}
      </button>
        <a className="navbar-brand page-scroll" href="#page-top">

        <img className="Logo" src={logob}  alt="Logo"/>
        
        </a>{" "}
      </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
           
            

            <ul className="nav navbar-nav navbar-left">
            <li>
                <a href="./screens/home.js" className="page-scroll">
                      Home
                </a>
              </li>
              <li>
                <a href="./screens/attend.js" className="page-scroll">
                      Attend
                </a>
              </li>
              <li class="dropdown">
              <a href="./screens/watch.js" class="dropdown-toggle" data-toggle="dropdown"><b class="caret"></b> Watch</a>
              <ul class="dropdown-menu">
                <li class="dropdown-header"></li>
              <li><a href="./screens/event1.js">Event 1 </a></li>
              <li><a href="./screens/event2.js">Event 2 </a></li>
              <li><a href="./screens/event3.js">Event 3 </a></li>
              </ul>
            </li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="./screens/team.js" className="page-scroll">
                  team
                </a>
              </li>
              <li>
                <a href="./screens/sponsers.js" className="page-scroll">
                Sponsors
                </a>
              </li>
              <li>
                <a href="./screens/contactus.js" className="page-scroll">
                Contact us 
                </a>
              </li>
            </ul>

          </div>
      
        </div>
      </nav>
    );
  }
}

export default Navigation;
