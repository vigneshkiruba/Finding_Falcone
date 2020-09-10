import React, { Component } from "react";

class RadioButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const flag = this.props.flag;
    return (
      <div className="radio">
        {this.props.RadioButtons.map((i) => (
          <div>
            <input
              className={`
              RadioButton__flag
                ${flag === 0 ? "hide" : ""} 
              `}
              disabled={
                i.total_no === 0 || i.max_distance < this.props.distance
                  ? true
                  : ""
              }
              onClick={(e) => this.props.handleClick(e)}
              type="radio"
              id={i.name + this.props.val}
              name={this.props.val}
              value={i.name}
              checked={i.name === this.props.temp ? i.name : false}
            />
            <label
              className={`
              RadioButton__flag
                ${flag === 0 ? "hide" : ""} 
              `}
              disabled={i.total_no === 0 ? true : ""}
              htmlFor={i.name + this.props.val}
            >
              {i.name} ({i.total_no})
            </label>
            <br />
          </div>
        ))}
        <br />
      </div>
    );
  }
}

export default RadioButton;
