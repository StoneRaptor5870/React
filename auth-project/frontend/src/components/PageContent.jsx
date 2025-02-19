import PropTypes from 'prop-types';
import classes from './PageContent.module.css';

function PageContent({ title, children }) {
  return (
    <div className={classes.content}>
      <h1>{title}</h1>
      {children}
    </div>
  );
}

export default PageContent;

PageContent.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired
};
