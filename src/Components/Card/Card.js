import './Card.css';
import { Link } from 'react-router-dom';

const Card = ({
  setModalIsOpen,
  title,
  description,
  urlToImage,
  publishedAt,
  content,
  setTitle,
  setImg,
  setDescription,
  setPublishedAt,
  setContent,
  url,
  setUrl,
}) => {
  const handleClick = () => {
    setTitle(title);
    setDescription(description);
    setPublishedAt(publishedAt);
    setContent(content);
    setImg(urlToImage);
    setUrl(url);
    setModalIsOpen(true);
  };

  return (
    <article className='article'>
      <h2 className='article-title'>
        <Link className='article-link' onClick={handleClick}>
          {title.split('via')[0]}
        </Link>
      </h2>
      <Link className='article-link' onClick={handleClick}>
        <img src={urlToImage || require('../../Images/placeholder.jpg')} alt={title} className='article-image' />
      </Link>
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
