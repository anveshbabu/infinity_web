import React from "react";
import './auth.scss'
import logo from '../../assets/images/logo.png'
export class AuthLayout extends React.Component {
  render() {
    return (
      <>
        {/* <div className="row">
          <div className="col-md-6 auth-layout d-flex align-items-center text-center">
            <img src={logo} alt="Logo" />
          </div>
          <div className="col-md-6 align-self-center">
            {this.props.children}

          </div>
        </div> */}
        <div className="login-container container-fluid"> 
        <div className="login-body position-relative"> 
        <div class="page-content">
        <div class="min-vh-100 py-5 d-flex align-items-center">
          <div class="w-100">
            <div class="row justify-content-center">
              <div class="col-sm-8 col-lg-4">
              {this.props.children}
              </div>
            </div>
          </div>
        </div>
      </div>
</div>
        </div>
      </>
    );
  }
}
