import React from "react";
import Weather from "./Weather";
import Calendar from "./Calendar";
import "./News.css";

function News() {
  return (
    <div className="news">
      <header className="news-header">Header</header>
      <div className="news-content">
        <div className="navbar">
          <div className="user">User</div>
          <nav className="categories">Categories</nav>
        </div>
        <div className="news-section">
          <div className="headline">headline</div>
          <div className="news-grid">news-grid</div>
        </div>
        <div className="my-blogs"></div>
        <div className="weather-calendar">
          <Weather />
          <Calendar />
        </div>
      </div>
      <footer className="news-footer">Footer</footer>
    </div>
  );
}

export default News;
