        import React, { Component } from "react";
     

        export class Footer extends Component {
          render() {
            return (
            
            <div id="footer" className=" navbar-fixed-bottom">
                 
          <div>
          <ul >
             <li  className="social-fot">
             <p>
            &copy;2021 TEDxHelwanUniversity. This independent TEDx event is operated under license from TED.{" "}
          </p>
             </li>
            <li className="ico">
              <a target="_blank" rel="noreferrer" href={'https://www.linkedin.com/company/tedxhuni/'}
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li className="ico">
              <a target="_blank" rel="noreferrer" href={'https://www.instagram.com/TEDxHUni/'}>
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li className="ico">
              <a target="_blank" rel="noreferrer" href={' https://www.facebook.com/TEDxHUni/'}>
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
          </ul>
        </div>
        </div>
    
    
    );
}
}

export default Footer;

