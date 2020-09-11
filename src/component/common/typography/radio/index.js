import React, { Component } from "react";
import  "./radio.scss";
export class NormalRadio extends Component {
  render() {
    let {
      className = "",
      label = "",
      name = "",
      onChange,
      checked = false,
      disabled = false,
      value=''
    } = this.props;

    return (
      <div className={`custom-control custom-radio custom-control-inline ${className}`}>
        <input type="radio"
          onChange={({ target: { name, checked: Checked, type: radio,value } }) => {

            onChange &&
              onChange({ target: { name, checked: Checked, type: radio,value } });
          }}
          checked={checked}
          name={name}
          disabled={disabled}
          value={value}
          id={label.trim()+name} className="custom-control-input" />
        <label className="custom-control-label" htmlFor={label.trim()+name}>{label}</label>
      </div>
    );
  }
}
