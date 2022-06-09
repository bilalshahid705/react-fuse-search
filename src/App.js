import React from "react";
import SearchPage from "./page/search-page/search-page";
import SearchForm from "./page/search-form/search-form";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <SearchPage />
      <SearchForm />
    </div>
  );
};

export default App;
