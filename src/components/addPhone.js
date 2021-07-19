import React from "react";

class AddPhone extends React.Component {
  state = {
    type: "",
    serial: "",
    color: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.type === "" || this.state.serial === "" || this.state.color === "") {
      alert("All fields are mandatory!");
      return;
    }
    this.props.addPhoneHandler(this.state);
    this.setState({ type: "", serial: "", color: "" });
    this.props.history.push("/");
  };
  
  render() {
    return (
      <div className="ui main">
        <h2>Add Phone</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Type</label>
            <input
              type="text"
              value={this.state.type}
              onChange={(e) => this.setState({ type: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Serial</label>
            <input
              type="text"
              value={this.state.serial}
              onChange={(e) => this.setState({ serial: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Color</label>
            <input
              type="text"
              value={this.state.color}
              onChange={(e) => this.setState({ color: e.target.value })}
            />
          </div>
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}

export default AddPhone;
