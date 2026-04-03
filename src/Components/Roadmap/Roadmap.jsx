import "./Roadmap.css";

import blueDiamond from '../../assets/webp/blue_diamond.webp';
import blueCircle from '../../assets/webp/blue_circle.webp';

import redDiamond from '../../assets/webp/red_diamond.webp';
import redCircle from '../../assets/webp/red_circle.webp';
import ubcLogo from '../../assets/webp/ubc_logo.webp';

import purpleDiamond from '../../assets/webp/purple_diamond.webp';
import purpleCircle from '../../assets/webp/purple_circle.webp';
import csLogo from '../../assets/webp/cs_logo.webp';

import pinkDiamond from '../../assets/webp/pink_diamond.webp';
import pinkCircle from '../../assets/webp/pink_circle.webp';
import gscLogo from '../../assets/webp/gsc_logo.webp';
import ubcSmallLogo from '../../assets/webp/ubc_small_logo.webp';
import gdscLogo from '../../assets/webp/gdsc_logo.webp';

import React, { useState, useEffect, useRef } from 'react';

const tabOrder = ['pink', 'red', 'blue', 'purple']

const Roadmap = () => {
  const [activeTab, setActiveTab] = useState("pink");
  const intervalRef = useRef(null)
  const pauseTimerRef = useRef(null)
  const containerRef = useRef(null)
  const isVisibleRef = useRef(false)

  const startInterval = () => {
    clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setActiveTab(prev => {
        const currentIdx = tabOrder.indexOf(prev)
        return tabOrder[(currentIdx + 1) % tabOrder.length]
      })
    }, 3000)
  }

  const stopInterval = () => {
    clearInterval(intervalRef.current)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting
        if (entry.isIntersecting) {
          startInterval()
        } else {
          stopInterval()
          clearTimeout(pauseTimerRef.current)
        }
      },
      { threshold: 0.3 }
    )

    if (containerRef.current) observer.observe(containerRef.current)

    return () => {
      observer.disconnect()
      clearInterval(intervalRef.current)
      clearTimeout(pauseTimerRef.current)
    }
  }, [])

  const handleTabClick = (tab) => {
    setActiveTab(tab)
    stopInterval()
    clearTimeout(pauseTimerRef.current)
    pauseTimerRef.current = setTimeout(() => {
      if (isVisibleRef.current) startInterval()
    }, 5000)
  }

  let activeContent;

  if (activeTab === "red") {
    activeContent = (
      <div>
        <p className="above2022subtext">STARTED MY JOURNEY AS A BSC STUDENT AT</p>
        <div className="ubc-card">
          <img src={ubcLogo} className="ubc-card-logo" loading="lazy"/>
        </div>
      </div>
    );
  }

  if (activeTab === "blue") {
    activeContent = (
      <div className="section2023">
        <p className="above2023subtext">WHILE TAKING A MANDATORY CODING ELECTIVE AS A</p>
        <div className="biology-logo">
        </div>
        <p className="below2023subtext">MAJOR, I DISCOVERED MY LOVE FOR COMPUTER SCIENCE.</p>
      </div>
    );
  }

  if (activeTab === "purple") {
    activeContent = (
      <div>
        <p className="above2024subtext">CERTAIN OF MY PASSION, I TRANSFERRED INTO</p>
        <img src={csLogo} className="cs-logo" loading="lazy"/>
        <p className="below2024subtext">AND NEVER LOOKED BACK!</p>
      </div>
    );
  }

  if (activeTab === "pink") {
    activeContent = (
      <div className="pink-gallery">
        <div className="pink-card">
          <img src={gscLogo} className="pink-logo gsc-big" />
          <div className="pink-text-block">
            <span className="pink-text-block-position">SWE INTERN</span>
            <span className="pink-text-block-date">SEPT. 2025 TO</span>
            <span className="pink-text-block-date">APR. 2026</span>
          </div>
        </div>

        <div className="pink-card">
          <img src={ubcSmallLogo} className="pink-logo" />
          <div className="pink-text-block">
            <span className="pink-text-block-position">CBTF PROCTOR</span>
            <span className="pink-text-block-date">SEPT. 2025 TO</span>
            <span className="pink-text-block-date">APR. 2026</span>
          </div>
        </div>

        <div className="pink-card">
          <img src={gdscLogo} className="pink-logo" />
          <div className="pink-text-block">
            <span className="pink-text-block-position">MARKETING &</span>
            <span className="pink-text-block-position">DESIGN LEAD</span>
            <span className="pink-text-block-date">SEPT. 2025 TO</span>
            <span className="pink-text-block-date">APR. 2026</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="timeline-card" ref={containerRef}>
      <div className="timeline">
        <div className="tab-row">
          <div className="tab red-tab">
            <img
              className="tab-icon"
              data-color="red"
              src={activeTab === "red" ? redDiamond : redCircle}
              onClick={() => handleTabClick("red")}
            />
          </div>

          <div className="tab blue-tab">
            <img
              className="tab-icon"
              data-color="blue"
              src={activeTab === "blue" ? blueDiamond : blueCircle}
              onClick={() => handleTabClick("blue")}
            />
          </div>

          <div className="tab purple-tab">
            <img
              className="tab-icon"
              data-color="purple"
              src={activeTab === "purple" ? purpleDiamond : purpleCircle}
              onClick={() => handleTabClick("purple")}
            />
          </div>

          <div className="tab pink-tab">
            <img
              className="tab-icon"
              data-color="pink"
              src={activeTab === "pink" ? pinkDiamond : pinkCircle}
              onClick={() => handleTabClick("pink")}
            />
          </div>

          <div className="line line-1"></div>
          <div className="line line-2"></div>
          <div className="line line-3"></div>
        </div>

        <div className="roadmap-content">
        </div>

        <div key={activeTab} className="tab-content fade-in">
          {activeContent}
        </div>
      </div>
    </div>
  );
};

export default Roadmap;