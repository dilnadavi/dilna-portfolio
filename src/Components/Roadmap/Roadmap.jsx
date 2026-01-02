import "./Roadmap.css";
import lines from '../../assets/lines.svg';

import blueDiamond from '../../assets/blue_diamond.png';
import blueCircle from '../../assets/blue_circle.png';
import biologyLogo from '../../assets/biology_logo.png';

import redDiamond from '../../assets/red_diamond.png';
import redCircle from '../../assets/red_circle.png';
import ubcLogo from '../../assets/ubc_logo.png';

import purpleDiamond from '../../assets/purple_diamond.png';
import purpleCircle from '../../assets/purple_circle.png';
import csLogo from '../../assets/cs_logo.png';

import pinkDiamond from '../../assets/pink_diamond.png';
import pinkCircle from '../../assets/pink_circle.png';
import gscLogo from '../../assets/gsc_logo.png';
import ubcSmallLogo from '../../assets/ubc_small_logo.png';
import gdscLogo from '../../assets/gdsc_logo.png';

import React, { useState } from 'react';

const Roadmap = () => {
  const [activeTab, setActiveTab] = useState("blue");

  let activeContent;

if (activeTab === "red") {
  activeContent = (
    <div>
        <p>Started my journey as a bsc student at</p>
    <div className="ubc-card">
      <img src={ubcLogo} className="ubc-card-logo" />
    </div>
    </div>
  );
}

  if (activeTab === "blue") {
    activeContent = (
        <div>
            <p>While taking a mandatory coding elective as a</p>
            <div className="biology-logo">
            </div>
            <p>major, I discovered my love for Computer Science.</p>
      </div>
    );
  }

  if (activeTab === "purple") {
    activeContent = (
      <div>
        <p>Certain of my passion, I transferred into</p>
        <img src={csLogo} className="cs-logo" />
        <p>and still love it to this day!</p>
      </div>
    );
  }

if (activeTab === "pink") {
  activeContent = (
    <div className="pink-gallery">

      <div className="pink-card">
        <img src={gscLogo} className="pink-logo gsc-big" />
        <div className="pink-text-block"> 
            <span>SWE Intern</span> 
            <span>Sept. 2025 to</span> 
            <span>Apr. 2026</span> 
            </div>
      </div>

      <div className="pink-card">
        <img src={ubcSmallLogo} className="pink-logo" />
        <div className="pink-text-block"> 
            <span className="pink-text">CBTF Proctor</span>
            <span>Sept. 2025 to</span> 
            <span>Apr. 2026</span> 
        </div>
      </div>

      <div className="pink-card">
        <img src={gdscLogo} className="pink-logo" />
        <div className="pink-text-block"> 
            <span className="pink-text">Marketing &</span>
            <span className="pink-text">Design Lead</span>
            <span>Sept. 2025 to</span> 
            <span>Apr. 2026</span> 
        </div>
      </div>

    </div>
  );
}

  return (
    <div className="timeline">
      <div className="tab-row">
        <div className="tab red-tab">
          <img
            className="tab-icon"
            data-color="red"
            src={activeTab === "red" ? redDiamond : redCircle}
            onClick={() => setActiveTab("red")}
          />
        </div>

        <div className="tab blue-tab">
          <img
            className="tab-icon"
            data-color="blue"
            src={activeTab === "blue" ? blueDiamond : blueCircle}
            onClick={() => setActiveTab("blue")}
          />
        </div>

        <div className="tab purple-tab">
          <img
            className="tab-icon"
            data-color="purple"
            src={activeTab === "purple" ? purpleDiamond : purpleCircle}
            onClick={() => setActiveTab("purple")}
          />
        </div>

        <div className="tab pink-tab">
          <img
            className="tab-icon"
            data-color="pink"
            src={activeTab === "pink" ? pinkDiamond : pinkCircle}
            onClick={() => setActiveTab("pink")}
          />
        </div>

      </div>

      <div className="roadmap-content">
        <img className="roadmap-lines" src={lines} />
      </div>

      <div key={activeTab} className="tab-content fade-in">
        {activeContent}
      </div>
    </div>
  );
};

export default Roadmap;
