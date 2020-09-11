import React, { Component } from "react";

export class NormalInput extends Component {



  

  handleBlur = (e) => {
    let body = {};
    body = {
      target: {
        name: e.target.name,
        type: this.props.type,
        value: e.target.value
      }
    }
    if (this.props.onBlur){
      this.props.onBlur(body);
    }
  }

render() {
  let {
    className = "",
    placeholder = "",
    onChange = null,
      value = "",
    name,
    disabled = false,
    type = "text",
    readOnly=false,
    min="",
    max=""

  } = this.props;

  return (
    <>

      <input
        className={`form-control  ${className}`}
        name={name}
        type={type}
        readOnly={readOnly}
        disabled={disabled}
        value={value}
        min={min}
        max={max}
        placeholder={placeholder}
        onBlur={this.handleBlur}
        onChange={e => {
          let body = {};

          body = {
            target: {
              name: e.target.name,
              type: type,
              value: e.target.value
            }
          };

          onChange(body);
        }}
      />
    </>
  );
}
}

