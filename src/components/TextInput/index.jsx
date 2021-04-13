import "./styles.css";

export const TextInput = ({ value, onChange }) => (
  <input
    className="text-input"
    value={value}
    onChange={onChange}
    type="search"
    placeholder="Type your search"
  />
);
