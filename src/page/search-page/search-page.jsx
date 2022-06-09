import React, { useEffect, useState } from "react";
import Fuse from "fuse.js";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsersData } from "../../redux/usersSlice";
import InputField from "../../components/input-field/InputField";
import SearchList from "../../components/search-list/search-list";
import { setSelectedUser } from "../../redux/usersSlice";
import "./search-page.scss";

const SearchPage = () => {
  const dispatch = useDispatch();
  const { usersList, loading } = useSelector((state) => state.users);
  const [suggestions, setSuggestions] = useState([]);
  const [cursor, setCursor] = useState(0);
  const [hovered, setHovered] = useState(undefined);
  const [inputValue, setInputValue] = useState("");

  console.log("usersList", usersList);

  useEffect(() => {
    dispatch(fetchUsersData());
  }, [dispatch]);

  const emailFieldChangeHandler = (value) => {
    setInputValue(value);
    const fuse = new Fuse(usersList, {
      keys: ["email", "name"],
      includeScore: true,
    });

    const results = fuse.search(value);
    const suggestedResults = results.map((result) => result.item);
    setSuggestions(suggestedResults);
  };

  const suggestionHandler = async (value) => {
    setSuggestions([]);
    dispatch(setSelectedUser(value));
    setInputValue(value.name);
  };

  useEffect(() => {
    if (suggestions.length && hovered) {
      setCursor(suggestions.indexOf(hovered));
    }
  }, [hovered, suggestions]);

  return (
    <div className="search-bar-style">
      {!loading ? (
        <>
          <InputField
            onChange={(e) => emailFieldChangeHandler(e.target.value)}
            setSuggestions={setSuggestions}
            inputValue={inputValue}
          />
          <div className="suggestions-drop-down-style">
            {suggestions.slice(0, 3).map((item, i) => (
              <SearchList
                key={i}
                active={i === cursor}
                item={item}
                index={i + 1}
                setSelected={suggestionHandler}
                setHovered={setHovered}
              />
            ))}
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SearchPage;
