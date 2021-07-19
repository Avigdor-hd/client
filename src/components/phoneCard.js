import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user.png";

const PhoneCard = (props) => {
  const { id, type, serial } = props.phone;
  return (
    <div className="item">
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
        <Link
          to={{ pathname: `/phone/${id}`, state: { phone: props.phone } }}
        >
          <div className="header">{type}</div>
          <div>{serial}</div>
        </Link>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px", marginLeft: "10px" }}
        onClick={() => props.clickHander(id)}
      ></i>
      <Link to={{ pathname: `/edit`, state: { phone: props.phone } }}>
        <i
          className="edit alternate outline icon"
          style={{ color: "blue", marginTop: "7px" }}
        ></i>
      </Link>
    </div>
  );
};

export default PhoneCard;
