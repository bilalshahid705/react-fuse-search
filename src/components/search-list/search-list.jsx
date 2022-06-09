import React from "react";
import "./search-list.scss";

const SearchList = ({ item, active, setSelected, setHovered, index }) => (
  <div
    className={`item ${active ? "active" : ""}`}
    onClick={() => setSelected(item)}
    onMouseEnter={() => setHovered(item)}
    onMouseLeave={() => setHovered(undefined)}
  >
    <div className="item-style">
      <div className="item-name-style ">{item.name}</div>
      <div className="item-email-style">{item.email}</div>
    </div>
  </div>
);

export default SearchList;
