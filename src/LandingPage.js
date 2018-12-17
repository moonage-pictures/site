import React, {Component} from 'react'
import './index.css'

export default class LandingPage extends Component {
  render() {
    return (
<React.Fragment>
      <a href="company"><div className="content circle red company">
        <h1 className="inner-circle">Company</h1>
      </div></a><div id="spacer"></div>
      <a href="#news"><div className="content circle blue news">
        <h1 className="inner-circle">News</h1>
      </div></a>

      <div className="circle yellow blank-one" />
      <div className="circle green blank-two" />
      <div className="circle white blank-three" />
      <div className="circle pink blank-four" />
      <div className="circle yellow blank-five" />
      <div className="circle blue blank-six" />
      <div className="circle green blank-seven" />

      <a href="#news"><div className="content circle pink shows">
        <h1 className="inner-circle">Shows</h1>
      </div></a>

      <a href="#news"><div className="content circle white contact">
        <h1 className="inner-circle">Contact</h1>
      </div></a>

      <a href="#news"><div className="content circle pumpkin people">
        <h1 className="inner-circle">People</h1>
      </div></a>

      <a href="#news"><div className="content circle red daydream">
        <h1 className="inner-circle">Daydream</h1>
      </div></a>
      
      </React.Fragment>

    )
  }
}
