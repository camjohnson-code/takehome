import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import ArticlesList from '../ArticlesList/ArticlesList';
import NotFoundPage from '../NotFoundPage/NotFoundPage';

const App = () => {
  const [title, setTitle] = useState('');
  const [img, setImg] = useState('');
  const [description, setDescription] = useState('');
  const [publishedAt, setPublishedAt] = useState('');
  const [content, setContent] = useState('');
  const [url, setUrl] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <section className='news-feed'>
      <Header />
      <Router>
        <Routes>
          <Route
            path='/'
            element={
              <ArticlesList
                title={title}
                img={img}
                description={description}
                publishedAt={publishedAt}
                content={content}
                modalIsOpen={modalIsOpen}
                setModalIsOpen={setModalIsOpen}
                setTitle={setTitle}
                setImg={setImg}
                setDescription={setDescription}
                setPublishedAt={setPublishedAt}
                setContent={setContent}
                setUrl={setUrl}
                url={url}
              />
            }
          />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Router>
    </section>
  );
};

export default App;
