// days - hours - minutes- seconds == countdown of tangram event
import React, { Component } from "react";
import {Header , Footer} from '../component/index';

export class Countdown extends Component {
  render() {
    return (
<div class="countdown-container">
    <script src="cdc.js"></script>
<Header/>
            <div class="desc">
            

                <script src='../component/index'></script>
                <h1 class="title">Tangram Event </h1>
            </div>
            <div class="countdown">
                <span id="days">00</span> : <span id="hours">00 </span> : <span id="minutes">00</span > : <span id="seconds">00</span>
            </div>
            <div class="countdownTitle">
                <span class="countTitle">Days</span>  <span  class="countTitle">Hours</span > 
                    <span  class="countTitle">Minutes</span>  <span  >Seconds</span>
            </div>
            <h2>Left</h2>
        
<Footer/>
        </div>
    );
}
}

export default Countdown; 