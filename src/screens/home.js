import React, { Component } from "react";
import {Header, Slider, Footer, Countdown} from '../component/index';

export class home extends Component {
  render() {
    return (
        <div >
          <Header/>
          <Slider/>
          <Countdown/>
          <Footer/>
          
            </div>
    );
}
}

export default home;

