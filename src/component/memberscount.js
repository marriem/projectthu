// numbers of members, speakers, courators etc...

import React, { Component } from "react";

export class Memberscount extends Component {
  render() {
    return (
      <div className="grid-holder">
          <div className="grid-box">
          
            Attendees <br></br>
            1100
         
          </div>
          <div className="grid-box">
            
              Members <br></br>
              +400
            
          </div>
          <div className="grid-box">
          
            Speakers <br></br>
            43
          
          </div>
          <div className="grid-box">
              sponsors <br></br>
              notyet
            
          </div>
  
          <tbody>
  
          </tbody>
      </div>
    );
}
}

export default Memberscount;