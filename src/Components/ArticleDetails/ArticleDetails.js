import './ArticleDetails.css';
import { Link } from 'react-router-dom';

const ArticleDetails = ({
  setModalIsOpen,
  title,
  img,
  description,
  publishedAt,
  content,
  url,
}) => {
  const handleClick = () => {
    setModalIsOpen(false);
  };

  return (
    <section className='popup'>
      <section className='article-details'>
        <h1 className='detailed-article-title'>{title.split('via')[0]}</h1>
        <p className='close-button' onClick={handleClick}>
          X
        </p>
        <img
          src={img || require('../../Images/placeholder.jpg')}
          alt={title}
          className='article-image'
        />
        <p className='detailed-article-description'>{description}</p>
        <p className='detailed-article-date'>
          {new Date(publishedAt).toLocaleDateString(undefined, {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
          })}
        </p>
        {content ? (
          <p className='detailed-article-content'>{`${content
            .split('…')[0]
            .split('<ul>')
            .join('')
            .split('</ul>')
            .join('')
            .split('<li>')
            .join('')
            .split('</li>')
            .join('')}…`}</p>
        ) : (
          <p className='detailed-article-content'>{content}</p>
        )}
        <p className='detailed-article-link'>
          <Link target='#' to={url} className='detailed-article-link'>
            Click to view full article
          </Link>
        </p>
      </section>
    </section>
  );
};

export default ArticleDetails;
