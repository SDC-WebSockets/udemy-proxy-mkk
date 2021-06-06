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
