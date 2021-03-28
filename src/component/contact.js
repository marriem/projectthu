//contact form (name + email + phone + comments)
import React, { Component } from "react";

export class contact extends Component {

  
  render() {
    alert("this form not available now")
    
    return (
      <div class="col-md-6">
      <form class="form " action="#">
       
           <div class="formdiv">
              <h2> Contact Us </h2>
           </div>
           <div class="formdiv">
               <label class="name"> Name  </label>
             {/* <i class=" fas fa-user "></i> */}
              <input type="text" name="name" placeholder="Your name" />
           </div>
           
           <div class="formdiv">
           <label class="name"> E-mail  </label> 
           {/* <i  class="far fa-envelope" ></i>  */}
           <input type="email" name="email" placeholder=" email@server.com" />
           </div>
          
           <div class="formdiv">
           {/* <i  class="fas fa-align-left" ></i> */}
           <label class="name ">Subject  </label> 
           <input type="text" name="subject" placeholder="Message Subject" />
           </div>
           
           <div class="formdiv">
           <label class="name">Message Content   </label>
           <input type="text" name="message" placeholder=" Type your Message here " />
           </div>
           
           <div class=" botton ">
              <button class=" ">SEND!</button>
           </div>
        
     </form>
     <br></br>
     <br></br>
  </div>

    );
}
}

export default contact;