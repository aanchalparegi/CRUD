import React from "react";
import { Link } from "react-router-dom";
import UserCard from "./UserCard";

const UserList = (props) => {
  console.log(props);

  const deleteConactHandler = (id) => {
    props.getUserId(id);
  };

  const renderUserList = props.users.map((user) => {
    return (
      <UserCard
        user={user}
        clickHander={deleteConactHandler}
        key={user.id}
      />
    );
  });
  return (
    <div className="main">
      <h2>
        User List
        <Link to="/add">
          <button className="ui button red right">Add User</button>
        </Link>
      </h2>
      <div className="ui celled list">{renderUserList}</div>
    </div>
  );
};

export default UserList;
