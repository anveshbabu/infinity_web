import React from "react";
import './auth.scss'
import logo from '../../assets/images/logo.png'
export class AuthLayout extends React.Component {
  render() {
    return (
      <>
        <div className="row">
          <div className="col-md-6 auth-layout d-flex align-items-center text-center">
          <img src={logo} alt="Logo"  />
          </div>
          {/* <div className="col-md-6 d-flex align-items-center"> */}
          <div className="col-md-6 align-self-center">
            {/* <div className="auth-panel"> */}
          {this.props.children}
          {/* </div> */}
          </div>
        </div>
      </>
    );
  }
}
