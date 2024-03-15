import './ArticlesList.css';
import { useEffect, useState } from 'react';
import Card from '../Card/Card';
import ArticleDetails from '../ArticleDetails/ArticleDetails';

const ArticlesList = ({
  title,
  img,
  description,
  publishedAt,
  url,
  content,
  modalIsOpen,
  setModalIsOpen,
  setTitle,
  setImg,
  setDescription,
  setPublishedAt,
  setContent,
  setUrl,
  searchQuery,
  hasSearched,
}) => {
  const [articleElements, setArticleElements] = useState([]);

  const fetchArticles = async (url) => {
    const response = await fetch(url);
    const news = await response.json();

    const articles = news.articles;
    const sortedArticles = articles.sort(
      (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
    );

    const articlesToShow = hasSearched ? sortedArticles : sortedArticles.slice(0, 9);

    const recentArticles = articlesToShow.map((article) => (
      <Card
        setModalIsOpen={setModalIsOpen}
        key={article.title}
        title={article.title}
        description={article.description}
        url={article.url}
        urlToImage={article.urlToImage}
        publishedAt={article.publishedAt}
        content={article.content}
        setTitle={setTitle}
        setImg={setImg}
        setDescription={setDescription}
        setPublishedAt={setPublishedAt}
        setContent={setContent}
        setUrl={setUrl}
      />
    ));

    setArticleElements(recentArticles);
  };

  useEffect(() => {
    const url = hasSearched ? `https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=${process.env.REACT_APP_API_KEY}` : `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_API_KEY}`;
    fetchArticles(url);
  }, [searchQuery, hasSearched]);

  useEffect(() => {
    const url = hasSearched ? `https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=${process.env.REACT_APP_API_KEY}` : `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_API_KEY}`;
    fetchArticles(url);
  }, [searchQuery, hasSearched]);

  return (
    <section className='articles'>
      {modalIsOpen && (
        <ArticleDetails
          setModalIsOpen={setModalIsOpen}
          title={title}
          img={img}
          description={description}
          publishedAt={publishedAt}
          content={content}
          url={url}
        />
      )}
      <h1 className='articles-section-title'>{hasSearched ? `Search results for "${searchQuery}"` : 'Today\'s Top Headlines'}</h1>
      {hasSearched && (
        <p className='return-home-message'>Click <a href='/'>here</a> to go home</p>
      )}
      <section className='articles-container'>{articleElements}</section>
    </section>
  );
};

export default ArticlesList;
