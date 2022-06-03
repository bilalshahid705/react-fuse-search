import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUsersData } from "../../redux/usersSlice";
import "./usersData.scss";

const UsersTableComponent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsersData());
  }, [dispatch]);
  return <div className="users-Data-style"></div>;
};

export default UsersTableComponent;
