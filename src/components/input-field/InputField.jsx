import { FiSearch } from "react-icons/fi";
import "./InputField.scss";

const InputField = ({ onChange, setSuggestions }) => {
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
