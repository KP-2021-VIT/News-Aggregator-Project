import React, { useState, useEffect } from 'react';
import axios from 'axios';

const News = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const fetchNewsAPI1 = async () => {
      try {
        const apiKey1 = 'bfc79aa9546d455583cb98d54150eec2';
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=in&apiKey=bfc79aa9546d455583cb98d54150eec2`
        );

        setArticles((prevArticles) => [...prevArticles, ...response.data.articles]);
      } catch (error) {
        console.error('Error fetching news from API 1:', error);
      }
    };

    const fetchNewsAPI2 = async () => {
      try {
        const apiKey2 = 'pub_334972c0d4353ff94d5ccb232912c833ded53'; 
        const response = await axios.get(
          `https://newsdata.io/api/1/news?apikey=pub_334972c0d4353ff94d5ccb232912c833ded53`
        );

        setArticles((prevArticles) => [...prevArticles, ...response.data.articles]);
      } catch (error) {
        console.error('Error fetching news from API 2:', error);
      }
    };

    fetchNewsAPI1();
    fetchNewsAPI2();
  }, []); 

  return (
    <div>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>News Aggregator</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {articles.map((article) => (
          <li
            key={article.title}
            style={{ marginBottom: '30px', borderBottom: '1px solid #ccc', paddingBottom: '20px' }}
          >
            <h2 style={{ marginBottom: '15px', fontSize: '1.5rem' }}>{article.title}</h2>
            {article.urlToImage && (
              <img
                src={article.urlToImage}
                alt={article.title}
                style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
              />
            )}
            <p style={{ marginTop: '15px', fontSize: '1rem', lineHeight: '1.6' }}>{article.description}</p>
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#007bff',
                textDecoration: 'none',
                display: 'block',
                marginTop: '15px',
                fontWeight: 'bold',
              }}
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
