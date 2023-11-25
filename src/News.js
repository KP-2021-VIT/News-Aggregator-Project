import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles.css';
const News = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const apiKey = 'bfc79aa9546d455583cb98d54150eec2';
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=in&apiKey=bfc79aa9546d455583cb98d54150eec2`
        );

        setArticles(response.data.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="news-container">
      <h1 className="news-title">News Aggregator</h1>
      <ul className="news-list">
        {articles.map((article) => (
          <li key={article.title} className="news-item">
            <h2 className="news-item-title">{article.title}</h2>
            {article.urlToImage && (
              <img
                src={article.urlToImage}
                alt={article.title}
                className="news-item-image"
              />
            )}
            <p className="news-item-description">{article.description}</p>
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="news-item-link"
            >
              Read More
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default News;
