import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import articles from '../../mockData';
import Header from '../Header/Header';
import Card from '../Card/Card';
import Form from '../Form/Form';
import ArticlesList from '../ArticlesList/ArticlesList';
import NotFoundPage from '../NotFoundPage/NotFoundPage';

const App = () => {
  const [articleElements, setArticleElements] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const sortedArticles = articles.articles.toSorted(
      (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
    );

    const newArticleElements = sortedArticles
      .slice(0, 9)
      .map((article) => (
        <Card
          key={article.title}
          title={article.title}
          description={article.description}
          url={article.url}
          urlToImage={article.urlToImage}
          publishedAt={article.publishedAt}
        />
      ));

    setArticleElements(newArticleElements);
  }, []);

  return (
    <section className='news-feed'>
      <Header setHasSearched={setHasSearched} setError={setError} />
      <Router>
        <Routes>
          <Route
            path='/'
            element={<ArticlesList articleElements={articleElements} />}
          />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Router>
    </section>
  );
};

export default App;
