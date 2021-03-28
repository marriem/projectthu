// location mini map div 

import React, { Component } from "react";

export class Location extends Component {
  render() {
    return (
      <div>
      {/* <p class="location">I have a date on <time datetime="2021-03-22">Valentines day</time>.</p> */}

     <div class="col-md-3">
     
     
          <div>
          <ul>
            <li> <a href="#" >
          <button  class="location" > Location <i class="fas fa-map-marker-alt"></i></button>
          </a></li>
            <li><i class="FA fas fa-calendar-alt"></i></li>
            <li><i class=" FA far fa-clock" ></i></li>
</ul>
           
            
     </div>
          </div>

    </div>
    );
}
}

export default Location;