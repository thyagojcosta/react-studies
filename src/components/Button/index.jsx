import "./styles.css";

export const Button = ({ onClick, disabled }) => (
  <button disabled={disabled} className="button" onClick={onClick}>
    Load more posts
  </button>
);
