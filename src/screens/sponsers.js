import React, { Component } from "react";

export class sponsers extends Component {
  render() {
    return (
      <div id="sponsers">
        <div className="container">
          <div className="section-title text-center">
            <h2>What our clients say</h2>
          </div>
          <div className="row">
            {this.props.data
              ? this.props.data.map((d, i) => (
                  <div key={`${d.name}-${i}`} className="col-md-4">
                    <div className="sponsers">
                      <div className="sponsers-image">
                        {" "}
                        <img src={d.img} alt="" />{" "}
                      </div>
                      <div className="sponsers-content">
                        <p>"{d.text}"</p>
                        <div className="sponsers-meta"> - {d.name} </div>
                      </div>
                    </div>
                  </div>
                ))
              : "loading"}
          </div>
        </div>
      </div>
    );
  }
}

export default sponsers;
