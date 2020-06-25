import React from 'react';
import './NewsTab.css'
import NewsItem from './NewsItem';



const NewsTab = (props) => {
  const articles = props.articles.map((article) => {
    return <NewsItem key={article.id} article={article} />
  });
  return (
    <div className="news-tab">
      {articles}
    </div>
  );
}

export default NewsTab;