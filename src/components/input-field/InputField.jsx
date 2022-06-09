import { FiSearch } from "react-icons/fi";
import "./InputField.scss";

const InputField = ({ onChange, setSuggestions, inputValue }) => {
  return (
    <form className="input">
      <span className="input_icon">
        <FiSearch />
      </span>
      <input
        type={"text"}
        placeholder="Search..."
        className="input_value"
        onChange={onChange}
        value={inputValue}
        onBlur={() => {
          setTimeout(() => {
            setSuggestions([]);
          }, 200);
        }}
      />
    </form>
  );
};

export default InputField;
