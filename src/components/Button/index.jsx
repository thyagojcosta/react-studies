import P from 'prop-types';
import './styles.css';

export const Button = ({ onClick, disabled }) => (
  <button disabled={disabled} className="button" onClick={onClick}>
    Load more posts
  </button>
);

Button.defaultProps = {
  disabled: false,
};

Button.propTypes = {
  onClick: P.func.isRequired,
  disabled: P.bool,
};
