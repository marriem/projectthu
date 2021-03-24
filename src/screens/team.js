import React, { Component } from "react";
import {Header , About, Footer} from '../component/index';

export class Team extends Component {
  render() {
    return (
        <div className="container" >
<Header/>
<About/>
<Footer/>
        </div>
    );
}
}

export default Team;