import React, { useEffect, useState } from "react";
import Fuse from "fuse.js";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsersData } from "../redux/usersSlice";

import "./search-bar.style.scss";

const SearchBarComponent = () => {
  const dispatch = useDispatch();
  const { usersList } = useSelector((state) => state.users);
  const [suggestions, setSuggestions] = useState([]);
  const [email, setEmail] = useState("");

  console.log("usersList", usersList);

  useEffect(() => {
    dispatch(fetchUsersData());
  }, [dispatch]);

  const emailFieldChangeHandler = (value) => {
    const fuse = new Fuse(usersList, {
      keys: ["email", "name"],
      includeScore: true,
    });

    const results = fuse.search(value);
    const suggestedResults = results.map((result) => result.item);
    setSuggestions(suggestedResults);
    console.log("suggestions", suggestions);
    console.log("email", email);
    setEmail(value);
  };

  return (
    <div className="search-bar-style">
      <input
        placeholder="Enter Post Title"
        onChange={emailFieldChangeHandler}
      />
    </div>
  );
};

export default SearchBarComponent;
