import React from "react";
import { useSelector } from "react-redux";
import "./search-form.scss";

const SearchForm = () => {
  const { selectedUser } = useSelector((state) => state.users);
  return (
    <div className="search-form-style">
      {selectedUser && (
        <>
          <h3>Details:</h3>
          <form>
            <label>Name:</label>
            <input type="text" disabled={true} value={selectedUser.name} />
            <label>Email:</label>
            <input type="text" disabled={true} value={selectedUser.email} />
            <label>Gender:</label>
            <input type="text" disabled={true} value={selectedUser.gender} />
          </form>
        </>
      )}
    </div>
  );
};

export default SearchForm;
