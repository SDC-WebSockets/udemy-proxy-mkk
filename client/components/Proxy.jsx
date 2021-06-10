import React, { useState, useEffect } from 'react';

export const Proxy = () => {

  return (
    <div className="main-content-wrapper">
      <div className="header">
        <div className="pride-gradient"></div>
        <div className="top-banner">
        </div>
        <div className="navbar">
          <img className="cursor-pointer" src="https://charlotte-badger-sidebar.s3-us-west-1.amazonaws.com/udemy-pride-logo.svg" alt="Udemy Clone Proxy" width="110px" height="32px"></img>
          <p className="cursor-pointer tight-letters">Categories</p>
          <form className="search-input-container">
            {/* Draw the magnifying glass icon */}
            <svg xmlns="http://www.w3.org/2000/svg" height="21" viewBox="0 0 20 20" width="23">
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
            </svg>
          </form>
          <p className="cursor-pointer tight-letters">Udemy for Business</p>
          <p className="cursor-pointer tight-letters">Teach on Udemy</p>
          <svg className ="shopping-cart-icon" xmlns="http://www.w3.org/2000/svg" height="38" viewBox="0 0 24 24" width="38">
            <path d="M 15.55 13 c 0.75 0 1.41 -0.41 1.75 -1.03 l 3.58 -6.49 A 0.996 0.996 0 0 0 20.01 4 H 5.21 l -0.94 -2 H 1 v 2 h 2 l 3.6 7.59 l -1.35 2.44 C 4.52 15.37 5.48 17 7 17 h 12 v -2 H 7 l 1.1 -2 h 7.45 Z M 6.16 6 h 12.15 l -2.76 5 H 8.53 L 6.16 6 Z M 7 18 c -1.1 0 -1.99 0.9 -1.99 2 S 5.9 22 7 22 s 2 -0.9 2 -2 s -0.9 -2 -2 -2 Z m 10 0 c -1.1 0 -1.99 0.9 -1.99 2 s 0.89 2 1.99 2 s 2 -0.9 2 -2 s -0.9 -2 -2 -2 Z"></path>
          </svg>
          <button>Log in</button>
          <button>Sign up</button>
          <button>
            <svg className ="world-icon" xmlns="http://www.w3.org/2000/svg" height="38" viewBox="0 0 24 24" width="38">
              <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95a15.65 15.65 0 00-1.38-3.56A8.03 8.03 0 0118.92 8zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56A7.987 7.987 0 015.08 16zm2.95-8H5.08a7.987 7.987 0 014.33-3.56A15.65 15.65 0 008.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 01-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="main-content">
        <div className="main-content-top-background">
          <div id="sidebar"></div>
          <div className="main-content-top-container">
            <div id="overview"></div>
          </div>
        </div>
        <div className="main-content-bottom-container">
          <div id="content"></div>
          <div id="featured"></div>
          <div id="reviews"></div>
        </div>
      </div>
      <div className="footer">
        <div className="footer-banner"></div>
        <div className="footer-nav"></div>
        <div className="footer-logo-bar"></div>
      </div>
    </div>

  )
}
