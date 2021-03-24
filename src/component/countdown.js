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
                <h1 class="title">Tangram Event </h1>
            </div>
            <div class="countdown">
                <div class="sections">
                    <span id="days">0</span>
                    <span  class="unit">Days</span>
                </div> 
                <text id='f'>:</text>
                <div class="sections" id="hs">
                    <span id="hours">0</span>
                    <span  class="unit">Hours</span>
                </div> 
                <text id="s">:</text>
                <div id="mid">
                <div class="sections">
                    <span id="minutes">0</span> 
                    <span   class="unit" >Minutes</span>
                </div>
                <text id="t">:</text>
                <div class="sections">
                    <span id="seconds">0</span>
                    <span class="unit">Seconds</span>
                </div>
            </div>
                
            </div>
            <div class="countdownTitle">
                  
                     
            </div>
            <h2>Left</h2>
        
<Footer/>
        </div>
    );
}
}

export default Countdown; 