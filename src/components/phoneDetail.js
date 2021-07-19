import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user.png";

const PhoneDetail = (props) => {
  const { type, serial, color } = props.location.state.phone;
  return (
    <div className="main">
      <div className="ui card centered">
        <div className="image">
          <img src={user} alt="user" />
        </div>
        <div className="content">
          <div className="header">{type}</div>
          <div className="description">{serial}</div>
          <div className="description">{color}</div>
        </div>
      </div>
      <div className="center-div">
        <Link to="/">
          <button className="ui button blue center">
            Back to Phone List
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PhoneDetail;
