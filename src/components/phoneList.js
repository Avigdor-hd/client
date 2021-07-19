import React from "react";
import { Link } from "react-router-dom";
import PhoneCard from "./phoneCard";

const PhoneList = (props) => {
  console.log(props);

  const deletePhoneHandler = (id) => {
    props.getPhoneId(id);
  };

  const renderPhoneList = props.phones.map((phone) => {
    return (
      <PhoneCard
        phone={phone}
        clickHander={deletePhoneHandler}
        key={phone.id}
      />
    );
  });
  return (
    <div className="main">
      <h2>
        Phone List
        <Link to="/add">
          <button className="ui button blue right">Add Phone</button>
        </Link>
      </h2>
      <div className="ui celled list">{renderPhoneList}</div>
    </div>
  );
};

export default PhoneList;
