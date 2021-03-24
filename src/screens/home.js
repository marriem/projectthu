import React, { Component } from "react";
import {Header, Slider, Footer} from '../component/index';
import {Link } from "react-router-dom";

export class home extends Component {
  render() {
    return (
        <div >
          <Header/>
          <Slider/>
          <Footer/>
          
            </div>
    );
}
}

export default home;

