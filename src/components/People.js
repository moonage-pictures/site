import React, { Component, Fragment } from "react";
import Navbar from './common/Navbar'
import Footer from './common/Footer'

export default class People extends Component {
  render() {
    return (
      <Fragment>
      <Navbar />
      <div className="container">
      <section className="section">
        <div className="columns is-centered is-multiline">
          <div className="column is-two-thirds-desktop ">
          <h2 className="title is-2">Frith Tiplady</h2>
          <h3 className="subtitle is-3">Founder and Executive Producer</h3>
            <p className="body-font">
              Prior to forming Moonage Pictures with Matthew and Will, Frith was the co-MD of Tiger Aspect Drama having joined the company as Head of Production in 2006. Her list of credits has included BAFTA winning <em>Peaky Blinders</em> (BBC Two), <em>Fortitude</em> (SKY Atlantic) and <em>Ripper Street</em> (BBC One). Other programmes include <em>The A Word</em> (BBC/Sundance), <em>My Mad Fat Diary</em> (E4), <em>Robin Hood</em> (BBC One/BBC America), <em>Secret Diary of a Call Girl</em> (ITV2/Showtime), <em>The Deep</em> (BBC One), <em>Blood & Oil</em> (BBC Two), <em>The Boys are Back</em> (feature film) and the BAFTA winning single films; <em>Marvellous</em> (BBC Two) and <em>White Girl</em> (BBC Two). Previously, Frith worked as a freelance line producer on such shows as <em>Clocking Off</em> (BBC One), <em>Sparkhouse</em> (BBC One), <em>Burn it</em> (BBC Three), <em>Flesh & Blood</em> (BBC Two) and <em>Brookside</em> (Channel 4).
            </p>
          </div>
          <div className="column is-two-thirds-desktop ">
          <h2 className="title is-2">Will Gould</h2>
          <h3 className="subtitle is-3">Founder and Executive Producer</h3>
            <p className="body-font">
            Prior to forming Moonage Pictures with Matthew and Will, Frith was the co-MD of Tiger Aspect Drama having joined the company as Head of Production in 2006. Her list of credits has included BAFTA winning <em>Peaky Blinders</em> (BBC Two), <em>Fortitude</em> (SKY Atlantic) and <em>Ripper Street</em> (BBC One). Other programmes include <em>The A Word</em> (BBC/Sundance), <em>My Mad Fat Diary</em> (E4), <em>Robin Hood</em> (BBC One/BBC America), <em>Secret Diary of a Call Girl</em> (ITV2/Showtime), <em>The Deep</em> (BBC One), <em>Blood & Oil</em> (BBC Two), <em>The Boys are Back</em> (feature film) and the BAFTA winning single films; <em>Marvellous</em> (BBC Two) and <em>White Girl</em> (BBC Two). Previously, Frith worked as a freelance line producer on such shows as <em>Clocking Off</em> (BBC One), <em>Sparkhouse</em> (BBC One), <em>Burn it</em> (BBC Three), <em>Flesh & Blood</em> (BBC Two) and <em>Brookside</em> (Channel 4).
            </p>
          </div>
        </div>
        </section>
      </div>
      <Footer />
      </Fragment>
    );
  }
}
