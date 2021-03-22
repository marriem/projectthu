
import React, { Component } from "react";
// import {Home, Attend, Team , Watch, Contactus} from "../screens/index";
import logob from '../logob.png';
import { Home } from "../screens";

export class Header extends Component {

  render() {
    
    return (
      <nav id="menu" className="navbar navbar-default navbar-fixed-top navbar-dark " >
        <div className="container">

          <div className="navbar-header naaz">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"/>
           
            <a className=" page-scroll" href={Home}>
            <img alt="logo" prop="logo" src={logob} style={{width:300,hieght:300,alignSelf:"center",marginTop:10}}/>
            </a>{" "}
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">


            <ul className="nav navbar-nav navbar-left">
              <li>
                <a href="./" className="page-scroll">
                  Home
                  </a>
              </li>
              <li>
                <a href="./about" className="page-scroll">
                  Attend
                  </a>
              </li>
              <li>
                <a href="#services" className="page-scroll">
                  Watch
                  </a>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="#about" className="page-scroll">
                  About
                  </a>
              </li>
              <li>
                <a href="#team" className="page-scroll">
                  Sponsors
                  </a>
              </li>
              <li>
                <a href="#contact" className="page-scroll">
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