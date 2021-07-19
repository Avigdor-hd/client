import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import api from "../api/phones";
import "./App.css";
import Header from "./header";
import AddPhone from "./addPhone";
import PhoneList from "./phoneList";
import PhoneDetail from "./phoneDetail";
import EditPhone from "./editPhone";
import stringToHash from "../api/hashing";

function App() {
  const [phones, setPhones] = useState([]);

  const retrivePhones = async () => {
    const response = await api.get("/phones");
    return response.data;
  };

  const addPhoneHandler = async (phone) => {
    let str = phone.type.concat(phone.serial, phone.color);

    const request = {
      id: stringToHash(str),
      ...phone,
    };

    const response = await api.post("/contacts", request);
    setPhones([...phones, response.data]);
  };

  const updatePhoneHandler = async (phone) => {
    const response = await api.put(`/contacts/${phone.id}`, phone);
    const { id } = response.data;

    setPhones(
      phones.map((phone) => {
        return phone.id === id ? { ...response.data } : phone;
      })
    );
  };

  const removePhoneHandler = async (id) => {
    await api.delete(`/contacts/${id}`);
    const newPhoneList = phones.filter((phone) => {
      return phone.id !== id;
    });

    setPhones(newPhoneList);
  };

  useEffect(() => {
    const getAllPhones = async () => {
      const allPhones = await retrivePhones();

      if (allPhones) setPhones(allPhones);
    };

    getAllPhones();
  }, []);

  return (
    <div className="ui container">
      <Router>
        <Header />
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <PhoneList
                {...props}
                phones={phones}
                getPhoneId={removePhoneHandler}
              />
            )}
          />
          <Route
            path="/add"
            render={(props) => (
              <AddPhone {...props} addPhoneHandler={addPhoneHandler} />
            )}
          />
          <Route
            path="/edit"
            render={(props) => (
              <EditPhone
                {...props}
                updatePhoneHandler={updatePhoneHandler}
              />
            )}
          />
          <Route path="/phone/:id" component={PhoneDetail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
