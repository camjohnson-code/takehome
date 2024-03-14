import './ArticlesList.css';
import { useEffect, useState } from 'react';
import articles from '../../mockData';
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
}) => {
  const [articleElements, setArticleElements] = useState([]);

  useEffect(() => {
    const getNewsArticles = async () => {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_API_KEY}`
      );
      const news = await response.json();
      console.log('news', news);

      const articles = news.articles;
      const sortedArticles = articles.sort(
        (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
      );
      const recentArticles = sortedArticles
        .slice(0, 9)
        .map((article) => (
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

    getNewsArticles();
  }, []);

  return (
    <>
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
      <section className='articles-container'>{articleElements}</section>
    </>
  );
};

export default ArticlesList;
