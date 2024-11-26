import React, { useEffect, useId, useState } from "react";
import Weather from "./Weather";
import Calendar from "./Calendar";
import "./News.css";
import userImg from "../assets/images/user.jpg";
import noImg from "../assets/images/no-img.png";
import axios from "axios";

const categories = [
  "general",
  "world",
  "technology",
  "entertainment",
  "sports",
  "science",
  "health",
  "nation",
];

function News() {
  const [headline, setHeadline] = useState(null);
  const [news, setNews] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("general");

  useEffect(() => {
    const fetchNews = async () => {
      const url = `https://gnews.io/api/v4/top-headlines?category=${selectedCategory}&lang=en&country=us&apikey=c96e21980227011451cbab71f2ae279a`;

      const response = await axios.get(url);
      const fetchedNews = await response.data.articles;

      fetchedNews.forEach((article) => {
        if (!article.image) {
          article.image = noImg;
        }
      });
      setHeadline(fetchedNews[0]);
      setNews(fetchedNews.slice(1, 7));
    };
    fetchNews();
  }, [selectedCategory]);

  const handelCategoryClick = (event, category) => {
    event.preventDefault();
    setSelectedCategory(category);
  };

  return (
    <div className="news">
      <header className="news-header">
        <h1 className="logo">News & Blogs</h1>
        <div className="search-bar">
          <form>
            <input type="text" placeholder="Search News..." />
            <button type="submit">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
        </div>
      </header>
      <div className="news-content">
        <div className="navbar">
          <div className="user">
            <img src={userImg} alt="" />
            <p>Mery's Blog</p>
          </div>
          <nav className="categories">
            <h1 className="nav-heading">categories</h1>
            <div className="nav-links">
              {categories.map((category) => (
                <a
                  key={category}
                  href="#"
                  className="nav-link"
                  onClick={(event) => handelCategoryClick(event, category)}
                >
                  {category}
                </a>
              ))}

              <a href="" className="nav-link">
                Bookmarks <i className="fa-regular fa-bookmark"></i>
              </a>
            </div>
          </nav>
        </div>
        <div className="news-section">
          {headline && (
            <div className="headline">
              <img src={headline.image || noImg} alt="" />
              <h2 className="headline-title">
                {headline.title}
                <i className="fa-regular fa-bookmark bookmark"></i>
              </h2>
            </div>
          )}

          <div className="news-grid">
            {news.map((article, index) => (
              <div key={index + 1} className="news-grid-item">
                <img src={article.image || noImg} alt={article.title} />
                <h3>
                  {article.title}
                  <i className="fa-regular fa-bookmark bookmark"></i>
                </h3>
              </div>
            ))}
          </div>
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
