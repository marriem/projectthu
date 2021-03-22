//into context + style 
// vision and mission 
import React, { Component } from "react";
// By: Mohamed Nasr
export class About extends Component {
  render() {
    return (
      <div id="container">
        <div className="brief-conatiner "></div>
      <div className="brief-conatiner ">
        <h2>About <span className="ted-color">TED</span><div class="underline"></div></h2>
        <p>
            TED is a non profit organization devoted to Ideas worth Spreading. It started out (in 1984) as a conference bringing together people from three worlds: Technology, 
            Entertainment and Design. Since then its scope has become ever broader. Along with two annual conferences 
            - the TED Conference in Long Beach and Palm Springs each spring, and the TEDGlobal conference in Edinburgh UK each summer - 
            TED includes the award-winning TEDTalks video site, the Open Translation Project and TED Conversations, 
            the inspiring TED Fellows and TEDx programs, and the annual TED Prize.
        </p>
      </div>
      <div className="brief-conatiner">

          <h2><span>- </span>About <span className="ted-color">TEDx</span><span> -</span></h2>
          <p>
              In the spirit of ideas worth spreading, TED has created a program called TEDx. TEDx is a program of local, self-organized events that bring people together
              to share a TED-like experience. Our event is call TEDxHelwanUniversity, where x=independently organized TED event. At our TEDxHelwanUniversity event, TEDTalks
              video and live speakers will combine to spark deep discussion and connection in a small group.The TED Conference provides general guidance for the TEDx program, but
              individual TEDx events, including ours, are self-organized.
          </p>
      </div>

      <div className="brief-conatiner">
          <h2 className="helwan-head"><i className="arrow right"></i> About <span className="ted-color">Tedx</span>HelwanUniversity</h2>
          <p>An independently organized TED event in Helwan
              Proceeding from our belief in the power of ideas, we determined to create a community of ideas aiming to enrich our community minds.
              Also inspiring and motivating them to cope with and contribute to the age of renaissance that our country lives in recently,
              hoping to get out and reach the global edge of success starting from Helwan University.
          </p>
      </div>
      <div className="brief-conatiner">
          <h2 className="team-head">Give A Hand To Our <span className="ted-color">Team</span></h2>
          <p className="quote">
              “Individually, we are one drop. Together, we are an ocean.” - Ryunosuke Satoro
          </p>
      </div>
      </div>
    );
}
}

export default About;