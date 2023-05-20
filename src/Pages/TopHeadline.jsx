import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = `https://newsapi.org/v2/top-headlines?country=us&pageSize=18&apiKey=${API_KEY}`;

const TopHeadline = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL);
        setNewsData(response.data.articles);
      } catch (error) {
        console.error('Error fetching news data:', error);
      }
    };

    fetchData();
  }, []);
  
  console.log(newsData)
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Top Headlines</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {newsData.map((article) => (
          <div key={article.url} className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
            <p className="mb-4">{article.description}</p>
            <img src={article.urlToImage} alt="Article" className="w-full mb-2" />
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              Read more
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopHeadline;
