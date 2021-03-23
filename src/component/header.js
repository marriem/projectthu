
import React, { Component } from "react";
// import {Home, Attend, Team , Watch, Contactus} from "../screens/index";
import logob from '../logob.png';
import home from "../screens/home";

export class Header extends Component {

  render() {
    
    return (
      <nav id="menu" className="navbar-default navbar-fixed-top navbar-dark " role="navigation">
        <div className="container">

          <div className="navbar-header naaz">
          <button
          type="button"
          className="navbar-toggle collapsed"
          data-toggle="collapse"
          data-target=".navbar-collapse"
        >
          {" "}
          <span className="sr-only">Toggle navigation</span>{" "}
          <span className="icon-bar"></span>{" "}
          <span className="icon-bar"></span>{" "}
          <span className="icon-bar"></span>{" "}
        </button>
           
            <img alt="logo" prop="logo" src={logob} style={{width:250,hieght:250,alignSelf:"center",marginTop:10}}/>
          {" "}
          </div>
          <div className="navbar-collapse collapse" id="navbar-collapse">


            <ul className="nav navbar-nav navbar-left">
              <li >
                <a href="#" className="page-scroll">
                  Home
                  </a>
              </li>
              <li>
                <a href="index.html" className="page-scroll">
                  Attend
                  </a>
              </li>
              <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown"><b class="caret"></b> Watch</a>
                <ul class="dropdown-menu">
                  <li class="dropdown-header"></li>
                <li><a href="#">Event 1 </a></li>
                <li><a href="#">Event 2 </a></li>
                <li><a href="#">Event 3 </a></li>
                </ul>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="index.html" className="page-scroll">
                  About
                  </a>
              </li>
              <li>
                <a href="index.html" className="page-scroll">
                  Sponsors
                  </a>
              </li>
              <li>
                <a href="index.html" className="page-scroll">
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

export default Header;