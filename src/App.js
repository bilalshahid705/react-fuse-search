import React from "react";
import firebase from "./firebase/firebaseConfig";
import UsersTableComponent from "./components/usersData/usersData";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  console.log("firebase", firebase);

  return (
    <div className="App">
      <UsersTableComponent />
    </div>
  );
};

export default App;
