import './ArticlesList.css';
import Header from '../Header/Header';

const ArticlesList = ({ articleElements }) => {
  return <section className='articles-container'>{articleElements}</section>;
};

export default ArticlesList;
