import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user.png";

const UserCard = (props) => {
  const { id, name, email } = props.user;
  return (
    <div className="item">
      <div className="content">
        <Link
          to={{ pathname: `/user/${id}`, state: { user: props.user } }}
        >
          <div className="header">{name}</div>
          <div>{email}</div>
        </Link>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px", marginLeft: "10px" }}
        onClick={() => props.clickHander(id)}
      ></i>
      <Link to={{ pathname: `/edit`, state: { user: props.user } }}>
        <i
          className="edit alternate outline icon"
          style={{ color: "blue", marginTop: "7px" }}
        ></i>
      </Link>
    </div>
  );
};

export default UserCard;
