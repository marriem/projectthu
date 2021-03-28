import React, { Component } from "react";
import logob from "../logob.png";
import {Link } from "react-router-dom";

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
            {/* <Link to="/Home"> */}
                <a href="./screens/home.js" className="page-scroll">
                      Home
                </a>
                {/* </Link> */}
              </li>
              <li>
              {/* <Link to="/attend"> */}
                <a href="./screens/attend.js" className="page-scroll">
                      Attend
                </a>
                {/* </Link> */}
              </li>
              <li class="dropdown">
              <a href="./screens/watch.js" class="dropdown-toggle" data-toggle="dropdown"><b class="caret"></b> Watch</a>
              <ul class="dropdown-menu">
                <li class="dropdown-header"></li>
              <li>
                {/* <Link to="/event1"> */}
                  <a href="./screens/event1.js">Event 1 </a>
                  {/* </Link> */}
                  </li>
              <li>
                {/* <Link to="/event2"> */}
                  <a href="./screens/event2.js">Event 2 </a>
                  {/* </Link> */}
                  </li>
              <li>
                {/* <Link to="/event3"> */}
                  <a href="./screens/event3.js">Event 3 </a>
                  {/* </Link> */}
                  </li>
              </ul>
            </li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
              <li>
              {/* <Link to="/team"> */}
                <a href="./screens/team.js" className="page-scroll">
                  team
                </a>
                {/* </Link> */}
              </li>
              <li>
              {/* <Link to="/sponsers"> */}
                <a href="./screens/sponsers.js" className="page-scroll">
                Sponsors
                </a>
                {/* </Link> */}
              </li>
              <li>
              {/* <Link to="/contactus"> */}
                <a href="./screens/contactus.js" className="page-scroll">
                Contact us 
                </a>
                {/* </Link> */}
              </li>
            </ul>

          </div>
      
        </div>
      </nav>
    );
  }
}

export default Navigation;
