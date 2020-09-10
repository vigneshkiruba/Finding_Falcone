import React, { Component } from "react";

import "./Dropdown.css";
class DropDown extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="select">
        <select
          onChange={(e) => {
            this.props.handleChange(e);
          }}
          name={this.props.val}
          value={this.props.val}
        >
          <option value="Select">Select</option>
          {this.props.AllPlanets.map((i) => (
            <option value={i.name}>{i.name}</option>
          ))}
        </select>
      </div>
    );
  }
}

export default DropDown;
