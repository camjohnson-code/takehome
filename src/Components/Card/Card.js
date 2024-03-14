import './Card.css';
import { useState } from 'react';

const Card = ({ title, description, url, urlToImage, publishedAt }) => {
  const placeholderImage = require('../../Images/placeholder.png');
  const [imageLoaded, setImageLoaded] = useState(true);

  return (
    <article className='article'>
      <h2 className='article-title'>
        <a className='article-link' href={`${url}`}>
          {title.split('via')[0]}
        </a>
      </h2>
      <a className='article-link' href={`${url}`}>
        <img
          src={require('../../Images/placeholder.png')}
          alt={title}
          className='article-image'
        />
      </a>
      <p className='article-date'>
        {new Date(publishedAt).toLocaleDateString(undefined, {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
        })}
      </p>
      <p className='article-description'>{description}</p>
    </article>
  );
};

export default Card;
